import Image from 'next/image'
import { FC } from 'react'

export const CardImage: FC<Props> = ({ src, alt, hasBlur }) => {
  return (
    <Image
      layout="responsive"
      src={`/img/${src}`}
      alt={alt}
      width={300}
      height={166.25}
      className={`rounded ${hasBlur && 'blur'}`}
      priority
    />
  )
}

type Props = {
  src: string
  alt: string
  hasBlur?: boolean
}
