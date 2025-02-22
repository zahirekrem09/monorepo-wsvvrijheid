import { Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { ABOUT_US } from '@wsvvrijheid/config'
import { AnimatedBox, Container, Hero } from '@wsvvrijheid/ui'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Layout } from '../components'
import i18nConfig from '../next-i18next.config'

const AboutUsBlock = props => {
  const { image, title, text } = props
  return (
    <Stack align="center" textAlign="center" maxW="lg" overflow="hidden">
      <Image src={image} alt={title} w={200} />

      <Stack p={4}>
        <Heading as="h3" size="lg">
          {title}
        </Heading>
        <Text>{text}</Text>
      </Stack>
    </Stack>
  )
}

export default function AboutUs({ title, content, seo }) {
  return (
    <Layout seo={seo} isDark>
      <Hero title={title} />
      <Container>
        <SimpleGrid py={16} gap={8} columns={{ base: 1, lg: 3 }}>
          {content.map(({ title, description, image }, i) => (
            <AnimatedBox directing="to-down" delay={i * 3} key={i}>
              <AboutUsBlock title={title} text={description} image={image} />
            </AnimatedBox>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async context => {
  const { locale } = context

  const pageData = ABOUT_US[locale]
  const seo = {
    title: pageData.title,
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], i18nConfig)),
      title: pageData.title,
      content: pageData.content,
      seo,
    },
  }
}
