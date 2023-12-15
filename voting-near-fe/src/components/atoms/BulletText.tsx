import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const bulletText = tv({
  slots: {
    container: 'flex items-center gap-2',
    bullet: 'h-3 w-3 rounded-full',
    spanText: 'text-base font-medium',
  },
  variants: {
    status: {
      warning: {
        bullet: 'bg-warning500',
        spanText: 'text-warning500',
      },
      danger: {
        bullet: 'bg-danger500',
        spanText: 'text-danger500',
      },
    },
  },
})

interface BulletTextProps
  extends ComponentProps<'div'>,
    VariantProps<typeof bulletText> {
  text: string
}

export function BulletText({
  text,
  status,
  className,
  ...rest
}: BulletTextProps) {
  const { bullet, container, spanText } = bulletText({ status, className })

  return (
    <div className={container()} {...rest}>
      <div className={bullet()} />
      <span className={spanText()}>{text}</span>
    </div>
  )
}
