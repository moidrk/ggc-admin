// services/adminStripe.ts
import { apiClient } from '@/lib/api-client';

export async function getCurrentDiscount() {
  return apiClient("/admin/stripe/discount/current", { method: "GET" });
}

export async function getAllDiscounts() {
  return apiClient("/admin/stripe/discount/all", { method: "GET" });
}

export async function createOrUpdateDiscount(payload: {
  percentage: number;
  name: string;
  isActive: boolean;
}) {
  return apiClient("/admin/stripe/discount", {
    method: "POST",
    body: payload,
  });
}

export async function removeDiscount() {
  return apiClient("/admin/stripe/discount/remove", {
    method: "DELETE",
  });
}
