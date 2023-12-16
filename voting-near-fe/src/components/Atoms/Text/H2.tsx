import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const h2 = tv({
  base: 'font-clash text-[2rem] font-semibold leading-none text-black',
})

type H2Props = ComponentProps<'h2'>

export function H2({ className, ...rest }: H2Props) {
  return <h2 className={h2({ className })} {...rest} />
}
