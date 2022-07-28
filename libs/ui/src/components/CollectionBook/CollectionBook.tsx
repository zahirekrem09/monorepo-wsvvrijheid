import { ComponentProps, FC } from 'react'

import { Heading, VStack } from '@chakra-ui/react'
import TinyColor from '@ctrl/tinycolor'
import { Collection } from '@wsvvrijheid/types'
import dynamic from 'next/dynamic'
import HTMLFlipBook from 'react-pageflip'
import { IFlipSetting } from 'react-pageflip/build/html-flip-book/settings'

import { WImage } from '../WImage'
import { CollectionPages } from './CollectionPages'
import { Page } from './Page'

const FlipBook = dynamic(() => import('./Flipbook'), { ssr: false })

const defaultFlipboxProps: Partial<IFlipSetting> = {
  width: 500,
  height: 600,
  size: 'stretch',
  minWidth: 315,
  maxWidth: 1000,
  minHeight: 600,
  maxHeight: 600,
  maxShadowOpacity: 0.3,
  showCover: true,
}

interface CollectionProps {
  collection: Collection
  title: string
  coverBg?: string
  logo?: string
  bg?: string
  flipboxProps?: ComponentProps<typeof HTMLFlipBook>
}

export const CollectionBook: FC<CollectionProps> = ({
  collection,
  title,
  coverBg = '#F5F3EB',
  logo,
  bg: pageBg = '#F5F3EB',
  flipboxProps,
}) => {
  const shadowColor = TinyColor(pageBg).darken(5).toHexString()
  const coverShadow = TinyColor(coverBg).darken(5).toHexString()
  const pageBgGdarient = `linear(to-r, ${shadowColor} 0%, ${pageBg} 5%, ${pageBg} 95%, ${shadowColor} 100%)`
  const coverBgGdarient = `linear(to-r, ${coverShadow} 0%, ${coverBg} 5%, ${coverBg} 95%, ${coverShadow} 100%)`
  const flipboxOverrideProps = {
    ...defaultFlipboxProps,
    ...flipboxProps,
  } as ComponentProps<typeof FlipBook>

  return (
    <FlipBook {...flipboxOverrideProps}>
      {/* Cover */}
      <Page bgGradient={coverBgGdarient}>
        <VStack h="full" justify="center" p={8} textAlign="center">
          <Heading color="red.500" fontFamily="club">
            {title}
          </Heading>
          {logo && (
            <WImage
              ratio={1}
              source="local"
              maxH={300}
              mx="auto"
              image={logo}
              alt="logo"
            />
          )}
          <Heading color="red.500" fontFamily="club">
            {collection.title}
          </Heading>
        </VStack>
      </Page>

      {/* Pages */}
      <CollectionPages
        collection={collection}
        pageBgGdarient={pageBgGdarient}
      />

      {/* Back */}
      {logo && (
        <Page bgGradient={coverBgGdarient}>
          <WImage
            ratio={1}
            source="local"
            maxH={300}
            mx="auto"
            image={logo}
            alt="logo"
          />
        </Page>
      )}
    </FlipBook>
  )
}