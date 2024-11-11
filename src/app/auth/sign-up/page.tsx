import { Button } from '@/components/button';
import { Input } from '@/components/input';

import Link from 'next/link';

export default async function SignUp() {
  return (
    <div className="mx-auto w-full max-w-[288px]">
      <h1 className="mb-10 w-full text-center font-firacode text-5xl font-bold tracking-[0.5rem] text-white">
        Finances
      </h1>
      <form className="flex w-full flex-col items-center gap-6">
        <Input type="text" name="name" id="name" placeholder="Your name" />
        <Input type="text" name="email" id="email" placeholder="Your e-mail" />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
        />
        <Button text={'Sign-up'} disabled />
      </form>
      <Link
        prefetch
        href="/auth/sign-in"
        className="text-shadow mt-10 block w-full text-center font-firacode tracking-[0.2rem] text-dark-100"
      >
        Return to sign in
      </Link>
    </div>
  );
}
