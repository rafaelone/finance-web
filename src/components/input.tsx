import type { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & {
  hasError?: boolean;
};

export function Input({ hasError, ...rest }: InputProps) {
  return (
    <label
      htmlFor={rest.name}
      data-error={hasError}
      className="group flex h-11 w-full items-center gap-3 rounded-xl border border-grey bg-black px-4 transition-all focus-within:border-white data-[error=true]:border-red-100"
    >
      <input
        data-error={hasError}
        className="placeholder:text-shadow w-full bg-transparent font-firacode text-white caret-white outline-none placeholder:font-bold placeholder:tracking-[4px] placeholder:text-dark-100"
        {...rest}
      />
    </label>
  );
}
