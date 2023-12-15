import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const h3 = tv({
  base: 'text-lg font-medium text-black',
})

type H3Props = ComponentProps<'h3'>

export function H3({ className, ...rest }: H3Props) {
  return <h3 className={h3({ className })} {...rest} />
}
