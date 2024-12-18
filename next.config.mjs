import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  // distDir: 'dist',
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default withPayload(nextConfig)
