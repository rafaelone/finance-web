import { api } from '.';

type newAccountRequest = {
  name: string;
  email: string;
  password: string;
};

type newAccountResponse = {
  message?: string;
  error?: string;
};

export async function newAccount({
  name,
  email,
  password,
}: newAccountRequest): Promise<newAccountResponse> {
  const result = await api('create-account', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (result.ok) {
    return { message: 'Account created' };
  }
  throw new Error('Error when try to sign up');
}
