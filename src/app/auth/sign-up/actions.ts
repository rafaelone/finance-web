'use server';

import { newAccount } from '@/https/new-account';

import { z } from 'zod';

const signInSchema = z.object({
  name: z.string().min(3, { message: 'Please, provide your name.' }),
  email: z
    .string()
    .email({ message: 'Please, provide a valid e-mail address.' }),
  password: z.string().min(1, { message: 'Please, provide your password.' }),
});

export async function signUp(data: FormData) {
  const result = signInSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return {
      success: false,
      message: null,
      errors,
    };
  }

  const { name, email, password } = result.data;

  try {
    await newAccount({ name, email, password });
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
