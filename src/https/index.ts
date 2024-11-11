export function api(path: string, init: RequestInit) {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? `${process.env.NEXTAUTH_URL}`
      : 'http://localhost:3333';

  const apiPrefix = '/';

  const url = new URL(apiPrefix.concat(path), baseUrl);

  return fetch(url, init);
}
