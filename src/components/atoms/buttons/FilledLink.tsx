import { TVariants } from 'interfaces/utils.interface'
import Link from 'next/link'
import { FC } from 'react'

export const FilledLink: FC<Props> = ({ variant, text, className }) => {
  switch (variant) {
    case 'primary':
      return (
        <Link href="/">
          <a className={`bg-primary text-white px-10 py-2 rounded ${className}`}>{text}</a>
        </Link>
      )
    case 'secondary':
      return (
        <Link href="/" className="">
          <a className={`bg-cards text-white rounded px-5 py-2 ${className}`}>{text}</a>
        </Link>
      )

    default:
      return (
        <Link href="/">
          <a className={`bg-primary text-white px-10 py-2 rounded ${className}`}>{text}</a>
        </Link>
      )
  }
}

type Props = {
  variant: TVariants
  text: string
  className?: string
}