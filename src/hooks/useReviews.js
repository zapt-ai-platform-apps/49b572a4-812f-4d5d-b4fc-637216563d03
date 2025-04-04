import { useState, useEffect, useCallback } from 'react';
import * as Sentry from '@sentry/browser';

export function useReviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastFetched, setLastFetched] = useState(null);

  const fetchReviews = useCallback(async (force = false) => {
    // If we've already fetched reviews in the last 10 minutes and force=false, don't fetch again
    const TEN_MINUTES = 10 * 60 * 1000;
    if (lastFetched && Date.now() - lastFetched < TEN_MINUTES && !force) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      console.log('Fetching reviews from API');
      const response = await fetch('/api/reviews');
      
      if (!response.ok) {
        throw new Error(`Failed to fetch reviews: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch reviews');
      }
      
      console.log(`Successfully fetched ${data.reviews.length} reviews`);
      
      // Sort reviews by time (newest first)
      const sortedReviews = data.reviews.sort((a, b) => {
        return (b.time || 0) - (a.time || 0);
      });
      
      setReviews(sortedReviews);
      setLastFetched(Date.now());
    } catch (error) {
      console.error('Error fetching reviews:', error);
      Sentry.captureException(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [lastFetched]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return {
    reviews,
    isLoading,
    error,
    refetch: () => fetchReviews(true)
  };
}