import type { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'> & {
  text: string
}

export function Button({ text, ...props }: ButtonProps) {
  return (
    <button
      className="disabled:text-shadow mx-auto flex h-10 w-full max-w-[150px] cursor-pointer rounded-xl bg-gradient-to-tr from-orange to-purple p-[1px] shadow-lg disabled:bg-gradient-to-tr disabled:from-grey disabled:to-grey disabled:text-dark-100"
      {...props}
    >
      <span
        aria-disabled={props.disabled}
        className="aria-[disabled=true]:text-shadow flex h-full flex-1 items-center justify-center rounded-xl bg-dark-100 font-firacode text-sm font-bold tracking-[0.1rem] text-white aria-[disabled=true]:text-dark-100 aria-[disabled=true]:disabled:bg-dark-100"
      >
        {text}
      </span>
    </button>
  )
}
