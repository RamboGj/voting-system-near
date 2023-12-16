import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const spanText = tv({
  base: 'text-base font-normal text-gray500',
})

type SpanTextType = ComponentProps<'span'>

export function SpanText({ className, ...rest }: SpanTextType) {
  return <span className={spanText({ className })} {...rest} />
}
