import { Block } from 'payload'

export const LoadingMessage: Block = {
  slug: 'loadingMessage',
  labels: {
    singular: 'Loading Message Block',
    plural: 'Loading Message Blocks',
  },
  fields: [
    {
      name: 'introText',
      label: 'Introduction Text',
      type: 'textarea',
      admin: {
        placeholder: 'Imagine a world where functionality drives experience.',
      },
      required: true,
    },
    {
      name: 'mainText',
      label: 'Main Text',
      type: 'textarea',
      admin: {
        placeholder:
          'I build dynamic, interactive websites using JavaScript, TypeScript, React, Next.js, Payload CMS, GSAP, and Playwright.',
      },
      required: true,
    },
    {
      name: 'closingText',
      label: 'Closing Text',
      type: 'textarea',
      admin: {
        placeholder: 'Every line of code builds something extraordinary.',
      },
      required: true,
    },
    {
      name: 'sloganText',
      label: 'Slogan',
      type: 'textarea',
      admin: {
        placeholder: 'Focused. Passionate. Efficient.',
      },
      required: true,
    },
  ],
}
