'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

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
  const wordsRefIntro = useRef<HTMLSpanElement[]>([])
  const wordsRefMain = useRef<HTMLSpanElement[]>([])
  const wordsRefClosing = useRef<HTMLSpanElement[]>([])
  const wordsRefSlogan = useRef<HTMLSpanElement[]>([])

  useGSAP(() => {
    const textAnimation = gsap.timeline()

    if (
      wordsRefIntro.current.length &&
      wordsRefMain.current.length &&
      wordsRefClosing.current.length &&
      wordsRefSlogan.current.length
    ) {
      textAnimation
        .to(wordsRefIntro.current, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.7,
          stagger: 0.1,
          ease: 'power2.out',
        })
        .to(wordsRefMain.current, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.7,
          stagger: 0.1,
          ease: 'power2.out',
        })
        .to(wordsRefClosing.current, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.7,
          stagger: 0.1,
          ease: 'power2.out',
        })
        .to(wordsRefSlogan.current, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.7,
          stagger: 0.1,
          ease: 'power2.out',
        })
    }
  })

  // Function to handle dynamic refs for each span element (word)
  const addWordRef = (el: HTMLSpanElement, refArray: React.RefObject<HTMLSpanElement[]>) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el)
    }
  }

  return (
    <section className="flex h-[100dvh] flex-col items-center justify-center">
      <div className="flex flex-col gap-5 text-xl sm:w-[39rem] sm:gap-10 sm:text-4xl md:w-[50rem]">
        <p className="flex flex-wrap">
          {introText.split(' ').map((word, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) {
                  addWordRef(el, wordsRefIntro)
                }
              }}
              style={{
                whiteSpace: 'pre-wrap',
                display: 'inline-block',
                filter: 'blur(10px)',
              }}
              className="translate-y-7 opacity-0"
            >
              {word}{' '}
            </span>
          ))}
        </p>
        <p className="flex flex-wrap">
          {mainText.split(' ').map((word, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) {
                  addWordRef(el, wordsRefMain)
                }
              }}
              style={{
                whiteSpace: 'pre-wrap',
                display: 'inline-block',
                filter: 'blur(10px)',
              }}
              className="translate-y-7 opacity-0"
            >
              {word}{' '}
            </span>
          ))}
        </p>
        <p className="flex flex-wrap">
          {closingText.split(' ').map((word, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) {
                  addWordRef(el, wordsRefClosing)
                }
              }}
              style={{
                whiteSpace: 'pre-wrap',
                display: 'inline-block',
                filter: 'blur(10px)',
              }}
              className="translate-y-7 opacity-0"
            >
              {word}{' '}
            </span>
          ))}
        </p>
        <p className="flex flex-wrap">
          {sloganText.split(' ').map((word, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) {
                  addWordRef(el, wordsRefSlogan)
                }
              }}
              style={{
                whiteSpace: 'pre-wrap',
                display: 'inline-block',
                filter: 'blur(10px)',
              }}
              className="translate-y-7 opacity-0"
            >
              {word}{' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
