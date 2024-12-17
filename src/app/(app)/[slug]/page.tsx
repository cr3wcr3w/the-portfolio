import { notFound } from 'next/navigation'
import RenderBlocks from '../shared/helper/render-blocks'
import type { Page } from '@/../src/payload-types'

type PageDataType = {
  docs: Page[]
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug

  const websiteUrl = process.env.WEBSITE_URL

  const data = await fetch(`${websiteUrl}/api/pages?limit=100`)
  const page: PageDataType = await data.json()

  const matchingPage = page.docs?.find((doc) => doc.slug === slug)
  if (!matchingPage) {
    notFound()
  }

  return (
    <div>
      <h1>{matchingPage?.name}</h1>
      {matchingPage?.layout && <RenderBlocks layout={matchingPage.layout} />}
    </div>
  )
}
