import React from 'react'

export const LoadingMessage = ({
  introText,
  mainText,
  closingText,
  sloganText,
}: {
  introText: string
  mainText: string
  closingText: string
  sloganText: string
}) => {
  return (
    <section>
      <p>{introText}</p>
      <p>{mainText}</p>
      <p>{closingText}</p>
      <p>{sloganText}</p>
    </section>
  )
}

// https://tribehouse.space/
