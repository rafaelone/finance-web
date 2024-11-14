import { getCookie, type CookiesFn } from 'cookies-next';

export async function api(path: string, init: RequestInit) {
  let cookieStore: CookiesFn | undefined;
  let Authorization = '';

  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? `${process.env.NEXTAUTH_URL}`
      : 'http://localhost:3333';

  const apiPrefix = '/';

  const url = new URL(apiPrefix.concat(path), baseUrl);

  if (typeof window === 'undefined') {
    const { cookies: serverCookies } = await import('next/headers');
    cookieStore = serverCookies;
  }

  const token = await getCookie('finances', { cookies: cookieStore });

  if (token) {
    Authorization = `Bearer ${token}`;
  }

  return fetch(url, {
    ...init,
    headers: {
      ...init.headers,
      Authorization,
    },
  });
}
