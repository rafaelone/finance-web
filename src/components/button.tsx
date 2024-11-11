import { Loader2 } from 'lucide-react';
import type { ComponentProps } from 'react';
import { tv } from 'tailwind-variants';

type ButtonProps = ComponentProps<'button'> & {
  text: string;
};

const buttonVariants = tv({
  base: 'mx-auto bg-gradient-to-tr items-center justify-center flex h-10 w-full max-w-[150px] cursor-pointer rounded-xl  p-[1px] shadow-lg ',
  variants: {
    variant: {
      default: 'from-orange to-purple',
      isPending: 'from-orange to-purple animate-gradientMove bg-gradientMove',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export function Button({ text, ...props }: ButtonProps) {
  return (
    <button
      className={buttonVariants({
        variant: props.disabled ? 'isPending' : 'default',
      })}
      {...props}
    >
      {props.disabled ? (
        <Loader2 className="size-4 animate-spin text-white" />
      ) : (
        <span
          aria-disabled={props.disabled}
          className="aria-[disabled=true]:text-shadow flex h-full flex-1 items-center justify-center rounded-xl bg-dark-100 font-firacode text-sm font-bold tracking-[0.1rem] text-white aria-[disabled=true]:text-dark-100 aria-[disabled=true]:disabled:bg-dark-100"
        >
          {text}
        </span>
      )}
    </button>
  );
}
