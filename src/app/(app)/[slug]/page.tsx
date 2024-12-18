import { notFound } from 'next/navigation'
import RenderBlocks from '../shared/helper/render-blocks'
import type { Page } from '@/../src/payload-types'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const payload = await getPayload({ config })
  const page = await payload.find({
    collection: 'pages',
  })

  const matchingPage = page.docs?.find((doc) => doc.slug === slug)
  if (!matchingPage || matchingPage.slug === 'index') {
    notFound()
  }

  return (
    <div>
      <h1>{matchingPage?.name}</h1>
      {matchingPage?.layout && <RenderBlocks layout={matchingPage.layout} />}
    </div>
  )
}
