import { FC } from 'react'
import { Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { NextSeoProps } from 'next-seo'
import { useTranslation } from 'react-i18next'
import { useGetBlogs } from '@wsvvrijheid/utils'
import { Container, BlogCard, AnimatedBox, Hero } from '../../components'

export type BlogTemplateProps = {
  seo: NextSeoProps
}

export const BlogTemplate: FC<BlogTemplateProps> = ({ seo }) => {
  const { data: blogs } = useGetBlogs()
  const { t } = useTranslation()

  return (
    <>
      {blogs?.[0] ? (
        <>
          <Hero title={seo.title as string} image="/images/blog-bg.jpeg" />
          <Container maxW="container.lg">
            <SimpleGrid gap={8} py={8} columns={{ base: 1, lg: 2 }}>
              {blogs.map((blog, index) => (
                <AnimatedBox
                  key={index}
                  directing="to-down"
                  delay={index * 0.5}
                  gridColumn={{
                    base: undefined,
                    lg: index === 0 ? 'span 2' : undefined,
                  }}
                  h="full"
                >
                  <BlogCard isFeatured={index === 0} post={blog} />
                </AnimatedBox>
              ))}
            </SimpleGrid>
          </Container>
        </>
      ) : (
        <Stack minH="inherit" justify="center" align="center" spacing={8}>
          <Image h={200} src="/images/no-blog.svg" alt="no blog" />
          <Text textAlign="center" fontSize="lg">
            {t`blog-no-content`}
          </Text>
        </Stack>
      )}
    </>
  )
}
