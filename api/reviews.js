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

    // Return only Google reviews
    res.status(200).json({ success: true, reviews: googleReviews });
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