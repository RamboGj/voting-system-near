import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const voterSeal = tv({
  base: 'flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black',
})

type VoterSealProps = ComponentProps<'div'>

export function VoterSeal({ className, ...rest }: VoterSealProps) {
  return (
    <div className={voterSeal({ className })} {...rest}>
      <User size={16} color="#00C2FF" />
    </div>
  )
}
