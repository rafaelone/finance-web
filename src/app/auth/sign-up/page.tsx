import Link from 'next/link';
import { SignUpForm } from './sign-up-form';

export default async function SignUp() {
  return (
    <div className="mx-auto w-full max-w-[288px]">
      <h1 className="mb-10 w-full text-center font-firacode text-5xl font-bold tracking-[0.5rem] text-white">
        Finances
      </h1>
      <SignUpForm />
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
