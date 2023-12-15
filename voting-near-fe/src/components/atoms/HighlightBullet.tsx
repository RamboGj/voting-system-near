import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const highlightBullet = tv({
  slots: {
    container:
      'flex max-w-[64px] items-center justify-center rounded-lg bg-success500 px-[10px] py-0.5 leading-none',
    text: 'font-clash text-xs font-semibold text-white',
  },
})

interface HighLigthBulletProps extends ComponentProps<'div'> {
  isWinner: boolean
}

export function HighlightBullet({
  isWinner,
  className,
  ...rest
}: HighLigthBulletProps) {
  const { container, text } = highlightBullet({ className })

  return (
    <div className={container()} {...rest}>
      <span className={text()}>{isWinner ? 'winner' : 'leading'}</span>
    </div>
  )
}
