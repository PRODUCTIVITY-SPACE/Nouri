'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Metadata } from 'next';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: POST to /api/auth/login/ (Django JWT) in Phase 2
    await new Promise((r) => setTimeout(r, 800));
    router.push('/admin');
  };

  return (
    <div className="min-h-screen bg-nouri-black flex items-center justify-center px-4">
      <div className="bg-white rounded-5xl p-12 w-full max-w-md shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="font-display font-bold text-4xl text-nouri-black tracking-tight">nouri</h1>
          <p className="text-gray-400 text-sm mt-2 font-medium">Admin Panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 text-sm
                         focus:outline-none focus:ring-2 focus:ring-nouri-black transition-shadow"
              placeholder="admin@restaurant.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 text-sm
                         focus:outline-none focus:ring-2 focus:ring-nouri-black transition-shadow"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-nouri-black text-white py-4 rounded-2xl font-bold text-sm
                       hover:bg-nouri-red transition-colors duration-200 disabled:opacity-60"
          >
            {isLoading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-8">
          Django JWT auth — integrated in Phase 2
        </p>
      </div>
    </div>
  );
}
