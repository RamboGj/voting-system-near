import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const label = tv({
  base: 'text-lg font-medium text-black',
})

type LabelProps = ComponentProps<'label'>

export function Label({ className, ...rest }: LabelProps) {
  return <label className={label({ className })} {...rest} />
}
