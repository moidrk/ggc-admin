import { apiClient } from '@/lib/api-client';

export interface AnalyticsResponse {
  message: string;
  totalUsers: number;
  subscribedUsers: number;
  notSubscribedUsers: number;
  totalSubscriptions: number;
}

export async function getAnalytics(): Promise<AnalyticsResponse> {
  return apiClient<AnalyticsResponse>(
    '/admin/user-management/get-analytics'
  );
}
