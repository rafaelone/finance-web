import { api } from '.';

type authenticateRequest = {
  email: string;
  password: string;
};

type authenticateResponse = {
  token?: string;
  error?: string;
};

export async function authenticate({
  email,
  password,
}: authenticateRequest): Promise<authenticateResponse> {
  const result = await api('authenticate', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await result.json();

  if (result.ok) {
    return { token: data.token };
  }
  throw new Error('Error when try to sign in');
}
