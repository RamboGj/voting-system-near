import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const button = tv({
  base: 'h-[42px] w-full rounded-xl px-8 font-clash text-lg font-semibold text-white transition duration-500 enabled:bg-gradient-to-r enabled:from-blue600 enabled:to-blue500 enabled:hover:shadow-gradient-hover-shadow disabled:bg-gray500',
})

type ButtonProps = ComponentProps<'button'>

export function Button({ className, ...rest }: ButtonProps) {
  return <button className={button({ className })} {...rest} />
}
