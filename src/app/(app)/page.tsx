import type { Page } from '@/../src/payload-types'
import RenderBlocks from './shared/helper/render-blocks'

type PageDataType = {
  docs: Page[]
}

async function Page() {
  const websiteUrl = process.env.WEBSITE_URL
  const data = await fetch(`${websiteUrl}/api/pages?limit=100`)
  const page: PageDataType = await data.json()

  const matchingPage = page.docs?.find((doc) => doc.slug === 'index')

  return (
    <div>
      <h1>{matchingPage?.name}</h1>
      {matchingPage?.layout && <RenderBlocks layout={matchingPage.layout} />}
    </div>
  )
}

export default Page
