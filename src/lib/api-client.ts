// lib/apiClient.ts

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.gridirongc.com";

interface RequestOptions extends RequestInit {
  body?: any; // allow JSON bodies
  headers?: HeadersInit;
}

export async function apiClient<T = any>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const token = typeof window !== "undefined" ? localStorage.getItem('auth-token') : null;

const config: RequestInit = {
  method: options.method || "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...(options.headers || {}),
  },
  ...(options.body ? { body: JSON.stringify(options.body) } : {}),
};

  const res = await fetch(`${API_BASE_URL}${endpoint}`, config);

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API Error ${res.status}: ${errorText}`);
  }

  try {
    return await res.json();
  } catch {
    return {} as T; 
  }
}
