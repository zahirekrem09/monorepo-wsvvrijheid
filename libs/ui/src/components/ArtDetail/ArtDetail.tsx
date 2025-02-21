import { FC } from 'react'

import { Box, Button, Center, HStack, Text } from '@chakra-ui/react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { SITE_URL } from '@wsvvrijheid/config'
import { Art } from '@wsvvrijheid/types'
import { useRouter } from 'next/router'
import { AiFillHeart } from 'react-icons/ai'
import { FaEye } from 'react-icons/fa'

import { ShareButtons } from '../ShareButtons'
import { WImage } from '../WImage'

interface ArtDetailProps {
  art: Art
  isLiked: boolean
  isLoading: boolean
  toggleLike: (isSinglePage: boolean) => void
}

export const ArtDetail: FC<ArtDetailProps> = ({
  art,
  isLiked,
  isLoading,
  toggleLike,
}) => {
  const { locale } = useRouter()
  const url = `${SITE_URL}/${locale}/club/art/${art.slug}`

  if (!art?.images) return null

  return (
    <Box bg="white" padding={4} boxShadow="base">
      {art.images && art.images.length > 1 ? (
        <Box>
          <Splide>
            {art?.images.map(image => (
              <Center as={SplideSlide} key={image.id}>
                <WImage maxH={500} src={image} alt={art.title} hasZoom />
              </Center>
            ))}
          </Splide>
        </Box>
      ) : (
        <WImage maxH={500} src={art.images?.[0]} alt={art.title} hasZoom />
      )}

      <HStack bg="white" justify="center" mt={4}>
        {art.views && (
          <HStack
            py={0.5}
            px={3}
            rounded="full"
            borderColor="gray.200"
            borderWidth={1}
          >
            <Text>{art.views}</Text>
            <Box as={FaEye} />
          </HStack>
        )}
        <Button
          rounded="full"
          colorScheme={isLiked ? 'red' : 'gray'}
          rightIcon={<AiFillHeart />}
          onClick={() => toggleLike(true)}
          size="sm"
          variant="outline"
          isLoading={isLoading}
        >
          {(art?.likes || 0) + (art.likers?.length || 0)}
        </Button>
        <ShareButtons
          title={art?.title}
          url={url}
          quote={art.description || ''}
        />
      </HStack>
    </Box>
  )
}
