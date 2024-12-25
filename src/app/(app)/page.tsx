import type { Page } from '@/../src/payload-types'
import RenderBlocks from './shared/helper/render-blocks'
import { getPayload } from 'payload'
import config from '@payload-config'
import '@/app/(app)/shared/styles/global.css'

async function Page() {
  const payload = await getPayload({ config })
  const page = await payload.find({
    collection: 'pages',
  })

  const matchingPage = page.docs?.find((doc) => doc.slug === 'index')

  return <>{matchingPage?.layout && <RenderBlocks layout={matchingPage.layout} />}</>
}

export default Page
