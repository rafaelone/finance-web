'use client';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { useFormState } from '@/hooks/use-form-state';
import { useRouter } from 'next/navigation';
import { signUp } from './actions';

import { Alert } from '@/components/alert';

export function SignUpForm() {
  const router = useRouter();

  const [{ success, message, errors }, handleSubmit, isPending] = useFormState(
    signUp,
    () => {
      router.push('/auth/sign-in');
    }
  );

  return (
    <>
      {success === false && message && (
        <Alert title="Sign up failed!" message={message} />
      )}
      <form
        className="flex w-full flex-col items-center gap-6"
        onSubmit={handleSubmit}
      >
        <div className="w-full space-y-1">
          <Input type="text" name="name" id="name" placeholder="Your name" />
          {errors?.name && (
            <p className="text-xm font-firacode text-xs font-medium text-red-200">
              {errors.name[0]}
            </p>
          )}
        </div>
        <div className="w-full space-y-1">
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Your e-mail"
          />
          {errors?.email && (
            <p className="text-xm font-firacode text-xs font-medium text-red-200">
              {errors.email[0]}
            </p>
          )}
        </div>
        <div className="w-full space-y-1">
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
          />
          {errors?.password && (
            <p className="text-xm font-firacode text-xs font-medium text-red-200">
              {errors.password[0]}
            </p>
          )}
        </div>

        <Button text={'Sign-up'} type="submit" disabled={isPending} />
      </form>
    </>
  );
}
