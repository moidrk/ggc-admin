// src/hooks/use-analytics.ts
'use client';
import { useEffect, useState } from 'react';
import { getAnalytics, AnalyticsResponse } from '../services/analytics';

export function useAnalytics() {
  const [data, setData] = useState<AnalyticsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAnalytics()
      .then((res) => setData(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
