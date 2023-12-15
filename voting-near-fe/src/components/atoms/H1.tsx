import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const h1 = tv({
  base: 'font-clash text-[3rem] font-semibold text-white',
})

type H1Props = ComponentProps<'h1'>

export function H1({ className, ...rest }: H1Props) {
  return <h1 className={h1({ className })} {...rest} />
}
