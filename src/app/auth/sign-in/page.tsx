import { Button } from '@/components/button'
import { Input } from '@/components/input'

import Link from 'next/link'

export default async function SignIn() {
  return (
    <div className="mx-auto w-full max-w-[288px]">
      <h1 className="mb-10 w-full text-center font-firacode text-5xl font-bold tracking-[0.5rem] text-white">
        Finances
      </h1>
      <form className="flex w-full flex-col items-center">
        <div className="flex w-full flex-col space-y-6">
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Your e-mail"
          />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
          />
        </div>
        <Link
          prefetch
          href="/"
          className="text-shadow mb-10 mt-2 w-full text-right font-firacode tracking-[0.2rem] text-dark-100"
        >
          Forgot Password?
        </Link>
        <Button text={'Sign-in'} disabled />
      </form>
      <Link
        prefetch
        href="/auth/sign-up"
        className="text-shadow mt-10 block w-full text-center font-firacode tracking-[0.2rem] text-dark-100"
      >
        Create a new account
      </Link>
    </div>
  )
}
