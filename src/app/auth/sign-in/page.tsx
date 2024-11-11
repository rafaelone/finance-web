import Link from 'next/link';
import { SignInForm } from './sign-in-form';

export default function SignIn() {
  return (
    <div className="mx-auto w-full max-w-[288px]">
      <h1 className="mb-10 w-full text-center font-firacode text-5xl font-bold tracking-[0.5rem] text-white">
        Finances
      </h1>
      <SignInForm />
      <Link
        prefetch
        href="/auth/sign-up"
        className="text-shadow mt-10 block w-full text-center font-firacode tracking-[0.2rem] text-dark-100"
      >
        Create a new account
      </Link>
    </div>
  );
}
