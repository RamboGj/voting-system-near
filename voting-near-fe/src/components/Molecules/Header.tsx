import logo from '@/utils/images'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const header = tv({
  base: 'mx-auto py-8',
})

type HeaderProps = ComponentProps<'header'>

export function Header({ className, ...rest }: HeaderProps) {
  return (
    <header className={header({ className })} {...rest}>
      <nav>
        <Link href="/">
          <Image src={logo} alt="Near Voting Dapp Logo" />
        </Link>
      </nav>
    </header>
  )
}
