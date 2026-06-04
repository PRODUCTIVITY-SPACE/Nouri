// Auth API — admin JWT login/logout

const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000/api';

export async function adminLogin(email: string, password: string): Promise<{ access: string; refresh: string }> {
  // Phase 2: POST /api/auth/login/
  throw new Error('Not implemented — connect Django JWT auth in Phase 2');
}

export async function refreshToken(refresh: string): Promise<{ access: string }> {
  // Phase 2: POST /api/auth/refresh/
  throw new Error('Not implemented');
}
