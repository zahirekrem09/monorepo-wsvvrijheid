import { useEffect, useState } from 'react'

import {
  Box,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
} from '@chakra-ui/react'
import { Post, StrapiLocale } from '@wsvvrijheid/types'
import { getItemLink, useHashtag } from '@wsvvrijheid/utils'
import { useRouter } from 'next/router'
import { BiExitFullscreen, BiFullscreen } from 'react-icons/bi'

import { AnimatedBox, ShareButtons, WImage } from '../../components'
import { PostSlide } from './PostSlide'

export const PostArchive = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [absoluteUrl, setAbsoluteUrl] = useState('')

  const hashtagQuery = useHashtag()

  const { locale } = useRouter()

  useEffect(() => {
    const _title = hashtagQuery.data?.posts?.[activeIndex].hashtag?.title || ''
    const _content = hashtagQuery.data?.posts?.[activeIndex].text || ''
    const _absoluteUrl =
      getItemLink(
        hashtagQuery.data?.posts?.[activeIndex] as Post,
        locale as StrapiLocale,
        'post',
        true,
      ) || ''

    setTitle(_title)
    setContent(_content)
    setAbsoluteUrl(_absoluteUrl)
  }, [activeIndex, locale, hashtagQuery.data?.posts])

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="6xl"
      >
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent bg="transparent">
          <ModalBody>
            <PostSlide
              posts={hashtagQuery.data?.posts}
              startIndex={activeIndex}
            />
          </ModalBody>

          <ModalFooter justifyContent="space-between">
            <IconButton
              rounded="full"
              colorScheme="primary"
              aria-label="close modal"
              icon={<BiExitFullscreen />}
              onClick={onClose}
              size="lg"
            />

            <ShareButtons
              title={title}
              quote={content}
              url={absoluteUrl as string}
              size="lg"
              spacing={4}
              colorScheme="primary"
              variant="solid"
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {hashtagQuery.data?.posts?.map((post, i) => {
          return (
            <AnimatedBox
              key={i}
              delay={i}
              directing="to-down"
              hasHover
              onClick={() => setActiveIndex(i)}
            >
              <Box bg="white" shadow="base" rounded="lg" overflow="hidden">
                {post.image && (
                  <WImage
                    ratio="twitter"
                    src={post.image?.url as string}
                    alt={`post ${i}`}
                  />
                )}
                {post.text && (
                  <HStack
                    spacing={2}
                    px={6}
                    py={2}
                    justifyContent="space-evenly"
                    w="full"
                  >
                    <ShareButtons
                      title={post.hashtag?.title as string}
                      quote={post.text}
                      url={
                        getItemLink(
                          post as Post,
                          locale as StrapiLocale,
                          'post',
                          true,
                        ) as string
                      }
                      size="lg"
                      justifyContent="space-between"
                      w="full"
                    >
                      <IconButton
                        aria-label="full screen"
                        icon={<BiFullscreen />}
                        onClick={onOpen}
                        variant="outline"
                        rounded="full"
                        size="lg"
                      />
                    </ShareButtons>
                  </HStack>
                )}
              </Box>
            </AnimatedBox>
          )
        })}
      </SimpleGrid>
    </>
  )
}
