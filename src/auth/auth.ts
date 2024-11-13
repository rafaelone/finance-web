import { cookies } from 'next/headers';

export async function isAuthenticated() {
  console.log((await cookies()).get('finances')?.value);
  return (await cookies()).get('finances')?.value ?? null;
}
