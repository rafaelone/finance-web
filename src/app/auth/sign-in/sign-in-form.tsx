'use client';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { useFormState } from '@/hooks/use-form-state';
import Link from 'next/link';
import { signInWithEmailAndPassword } from './actions';
import { useRouter } from 'next/navigation';

import { Alert } from '@/components/alert';

export function SignInForm() {
  const router = useRouter();

  const [{ success, message, errors }, handleSubmit, isPending] = useFormState(
    signInWithEmailAndPassword,
    () => {
      router.push('/');
    }
  );

  return (
    <>
      {success === false && message && (
        <Alert title="Sign in failed!" message={message} />
      )}
      <form
        className="flex w-full flex-col items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full flex-col space-y-6">
          <div className="space-y-1">
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="Your e-mail"
              hasError={!!errors?.email}
            />
            {errors?.email && (
              <p className="text-xm font-firacode text-xs font-medium text-red-200">
                {errors.email[0]}
              </p>
            )}
          </div>
          <div className="space-y-1">
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              hasError={!!errors?.password}
            />
            {errors?.password && (
              <p className="text-xm font-firacode text-xs font-medium text-red-200">
                {errors.password[0]}
              </p>
            )}
          </div>
        </div>
        <Link
          prefetch
          href="/"
          className="text-shadow mb-10 mt-2 w-full text-right font-firacode tracking-[0.2rem] text-dark-100"
        >
          Forgot Password?
        </Link>
        <Button text={'Sign-in'} type="submit" disabled={isPending} />
      </form>
    </>
  );
}
