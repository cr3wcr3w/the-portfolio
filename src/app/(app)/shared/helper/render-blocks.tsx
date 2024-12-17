import { Page } from '@/../src/payload-types'
import { Hero } from '../styles/blocks/hero'
import { LoadingMessage } from '../styles/blocks/loading-message'

type LayoutProps = {
  layout?: Page['layout']
}

const RenderBlocks = ({ layout }: LayoutProps) => {
  return (
    <div>
      {layout?.map((block, i) => {
        switch (block.blockType) {
          case 'hero': {
            const { heading, text, image } = block
            return <Hero key={i} heading={heading} text={text} image={image} />
          }
          case 'loadingMessage': {
            const { introText, mainText, closingText, sloganText } = block
            return (
              <LoadingMessage
                key={i}
                introText={introText}
                mainText={mainText}
                closingText={closingText}
                sloganText={sloganText}
              />
            )
          }
          default:
            return null
        }
      })}
    </div>
  )
}

export default RenderBlocks
