'use client';

import type { User } from '@/types/user';

export interface SignInWithPasswordParams {
  email: string;
  password: string;
}

class AuthClient {
  async signInWithPassword(params: SignInWithPasswordParams): Promise<{ error?: string }> {
    try {
      const res = await fetch('https://api.gridirongc.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      });

      if (!res.ok) {
        const errorData = await res.json();
        return { error: errorData.message || 'Login failed' };
      }

      const data = await res.json();

      // Save token + user in localStorage
      localStorage.setItem('auth-token', data.accessToken);

      console.log('User data:', data.accessToken);
      console.log(':)))',localStorage.getItem('auth-token'));
      localStorage.setItem('auth-user', JSON.stringify(data.result));

      return {};
    } catch (err) {
      return { error: 'Network error' };
    }
  }

  async getUser(): Promise<{ data?: User | null; error?: string }> {
    const token = localStorage.getItem('auth-token');
    const user = localStorage.getItem('auth-user');

    if (!token || !user) {
      return { data: null };
    }

    return { data: JSON.parse(user) as User };
  }

  async signOut(): Promise<{ error?: string }> {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('auth-user');
    return {};
  }
}

export const authClient = new AuthClient();
