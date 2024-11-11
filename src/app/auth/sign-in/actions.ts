'use server';

import { authenticate } from '@/https/authenticate';
import { cookies } from 'next/headers';
import { z } from 'zod';

const signInSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please, provide a valid e-mail address.' }),
  password: z.string().min(1, { message: 'Please, provide your password.' }),
});

export async function signInWithEmailAndPassword(data: FormData) {
  const result = signInSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return {
      success: false,
      message: null,
      errors,
    };
  }

  const { email, password } = result.data;

  try {
    const { token } = await authenticate({ email, password });

    if (token) {
      (await cookies()).set('finances', token, {
        maxAge: 60 * 60 * 24 * 7, // 7 dias
        path: '/',
      });
    }
  } catch (err) {
    if (err instanceof Error) {
      return { success: false, message: err.message, errors: null };
    }

    return {
      success: false,
      message: 'Unexpected error, try again in a few minutes.',
      errors: null,
    };
  }
  return { success: true, message: null, errors: null };
}
