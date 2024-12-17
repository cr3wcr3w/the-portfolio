import { Media } from '@/payload-types'
import React from 'react'

export const Hero = ({
  heading,
  text,
  image,
}: {
  heading: string
  text: string
  image: number | Media | null | undefined
}) => {
  return (
    <section>
      <h1>{heading}</h1>
      <p>{text}</p>
    </section>
  )
}
