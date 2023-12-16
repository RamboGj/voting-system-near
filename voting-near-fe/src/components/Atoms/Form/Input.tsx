import { ComponentProps } from 'react'
import { Label } from './Label'
import { tv } from 'tailwind-variants'

const input = tv({
  slots: {
    container: 'mt-5 flex flex-col gap-1',
    inputContainer:
      'rounded-xl border border-gray300 px-4 py-3 text-base text-black placeholder:text-gray500 focus:border-blue500 focus:outline-none',
  },
})

interface InputProps extends ComponentProps<'input'> {
  label: string
}

export function Input({ label, className, id, ...rest }: InputProps) {
  const { container, inputContainer } = input({ className })

  return (
    <div className={container()}>
      <Label htmlFor={id}>{label}</Label>
      <input {...rest} className={inputContainer()} />
    </div>
  )
}
