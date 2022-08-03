import { FC } from 'react'

import { Image } from '@chakra-ui/react'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import { ArtCardImageProps, CardImageProps } from './types'

const CardImage: FC<CardImageProps> = ({ art, isMasonry, image }) => (
  <Image
    pos="relative"
    zIndex={-1}
    h={isMasonry ? undefined : 300}
    w="full"
    objectFit="cover"
    src={`${process.env['NX_API_URL']}${image?.url}`}
    alt={art.title}
    userSelect="none"
  />
)

export const ArtCardImage: FC<ArtCardImageProps> = ({ art, isMasonry }) => {
  if (art?.images?.length && art?.images?.length < 2)
    return <CardImage art={art} isMasonry={isMasonry} image={art.images[0]} />

  return (
    <Splide>
      {art.images?.map((image, index) => (
        <SplideSlide key={index}>
          <CardImage art={art} isMasonry={isMasonry} image={image} />
        </SplideSlide>
      ))}
    </Splide>
  )
}