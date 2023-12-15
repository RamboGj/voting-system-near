import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const candidateSeal = tv({
  base: 'flex items-center justify-center rounded-full',
  variants: {
    type: {
      large: 'h-[108px] w-[108px] bg-gradient-to-b from-blue600 to-blue500',
      default: ' h-[42px] w-[42px] bg-gray500',
      defaultSelected:
        ' h-[42px] w-[42px] bg-gradient-to-b from-blue600 to-blue500',
    },
  },
})

interface CandidateSealProps
  extends ComponentProps<'div'>,
    VariantProps<typeof candidateSeal> {}

export function CandidateSeal({
  className,
  type = 'default',
  ...rest
}: CandidateSealProps) {
  const iconSize = type === 'large' ? 60 : 24

  return (
    <div className={candidateSeal({ className, type })} {...rest}>
      <User size={iconSize} color="#FFFFFF" />
    </div>
  )
}
