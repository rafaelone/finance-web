import { api } from '.';

type GetProfile = {
  user?: {
    id: string;
    name: string;
  };
  error?: string;
};

export async function getProfile(): Promise<GetProfile> {
  const response = await api('me', {
    method: 'GET',
  });

  if (response.ok) {
    const data = await response.json();

    return {
      user: {
        id: data.user.id,
        name: data.user.name,
      },
    };
  }

  throw new Error('User not found');
}
