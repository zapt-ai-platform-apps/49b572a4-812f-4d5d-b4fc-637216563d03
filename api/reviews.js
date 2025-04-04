import * as Sentry from '@sentry/node';

// Initialize Sentry for backend error tracking
Sentry.init({
  dsn: process.env.VITE_PUBLIC_SENTRY_DSN,
  environment: process.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'backend',
      projectId: process.env.VITE_PUBLIC_APP_ID
    }
  }
});

export default async function handler(req, res) {
  console.log('Fetching reviews');
  try {
    // Fetch Google reviews
    const googleReviews = await fetchGoogleReviews();
    console.log(`Successfully fetched ${googleReviews.length} Google reviews`);

    // Fetch Trustpilot reviews
    const trustpilotReviews = await fetchTrustpilotReviews();
    console.log(`Successfully fetched ${trustpilotReviews.length} Trustpilot reviews`);

    // Combine and return all reviews
    const allReviews = [...googleReviews, ...trustpilotReviews];
    
    res.status(200).json({ success: true, reviews: allReviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    Sentry.captureException(error);
    res.status(500).json({ success: false, error: 'Failed to fetch reviews' });
  }
}

async function fetchGoogleReviews() {
  try {
    if (!process.env.GOOGLE_PLACES_API_KEY) {
      throw new Error('Google Places API key is missing');
    }
    
    if (!process.env.GOOGLE_PLACE_ID) {
      throw new Error('Google Place ID is missing');
    }
    
    // Fetch reviews from Google Places API
    const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.GOOGLE_PLACE_ID}&fields=reviews&key=${process.env.GOOGLE_PLACES_API_KEY}`;
    
    const response = await fetch(placeDetailsUrl);
    
    if (!response.ok) {
      throw new Error(`Google Places API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status} - ${data.error_message || 'Unknown error'}`);
    }
    
    if (!data.result?.reviews?.length) {
      console.log('No Google reviews found');
      return [];
    }
    
    // Format Google reviews to match our application's structure
    return data.result.reviews.map(review => ({
      platform: 'google',
      author: review.author_name,
      rating: review.rating,
      date: review.relative_time_description,
      text: review.text,
      avatar: review.profile_photo_url || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(review.author_name),
      avatarRequest: `headshot of person named ${review.author_name}`,
      time: review.time,
    }));
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    Sentry.captureException(error);
    // Return empty array to avoid breaking the app
    return [];
  }
}

async function fetchTrustpilotReviews() {
  try {
    if (!process.env.TRUSTPILOT_API_KEY) {
      throw new Error('Trustpilot API key is missing');
    }
    
    if (!process.env.TRUSTPILOT_BUSINESS_ID) {
      throw new Error('Trustpilot Business ID is missing');
    }
    
    // Fetch reviews from Trustpilot API
    const trustpilotUrl = `https://api.trustpilot.com/v1/business-units/${process.env.TRUSTPILOT_BUSINESS_ID}/reviews?perPage=10`;
    
    const response = await fetch(trustpilotUrl, {
      headers: {
        'Authorization': `ApiKey ${process.env.TRUSTPILOT_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Trustpilot API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.reviews?.length) {
      console.log('No Trustpilot reviews found');
      return [];
    }
    
    // Format Trustpilot reviews to match our application's structure
    return data.reviews.map(review => ({
      platform: 'trustpilot',
      author: review.consumer.displayName,
      rating: review.stars,
      date: formatDate(review.createdAt),
      text: review.text,
      avatar: review.consumer.profileUrl || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(review.consumer.displayName),
      avatarRequest: `headshot of person named ${review.consumer.displayName}`,
      time: new Date(review.createdAt).getTime() / 1000,
    }));
  } catch (error) {
    console.error('Error fetching Trustpilot reviews:', error);
    Sentry.captureException(error);
    // Return empty array to avoid breaking the app
    return [];
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  }
}