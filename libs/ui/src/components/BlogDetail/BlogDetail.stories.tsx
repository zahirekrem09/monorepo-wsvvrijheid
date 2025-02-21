import { useEffect, useState } from 'react'

import { Story, Meta } from '@storybook/react'
import { SITE_URL } from '@wsvvrijheid/config'
import { BLOG_MOCKS } from '@wsvvrijheid/mocks'
import { serialize } from 'next-mdx-remote/serialize'
import { useRouter } from 'next/router'

import { Container } from '../Container'
import { BlogDetail, BlogDetailProps } from './BlogDetail'

export default {
  component: BlogDetail,
  title: 'Shared/BlogDetail',
  args: {
    post: BLOG_MOCKS.tr.data[1],
    authorBlogs: BLOG_MOCKS.tr.data,
  },
  argTypes: {
    locale: { control: { type: 'radio', options: ['en', 'nl', 'tr'] } },
  },
  decorators: [
    Story => (
      <Container maxW="container.sm">
        <Story />
      </Container>
    ),
  ],
} as Meta<BlogDetailProps>

const Template: Story<BlogDetailProps> = args => {
  const { locale } = useRouter()
  const [isLiked, setIsLiked] = useState(false)
  const [source, setSource] = useState(null)
  const [blogData, setBlogData] = useState(args.post)

  const getSource = async content => {
    const s = await serialize(content || '')
    setSource(s)
  }

  useEffect(() => {
    getSource(args.post.content)
  }, [])

  const toggleLike = () => {
    setTimeout(() => {
      setIsLiked(!isLiked)
      setBlogData({
        ...blogData,
        likes: isLiked ? (blogData.likes || 0) - 1 : (blogData.likes || 0) + 1,
      })
    }, 1000)
  }

  const link = `${SITE_URL}/${locale}/blog/${args.post.slug}`

  return (
    <BlogDetail
      {...args}
      post={blogData}
      toggleLike={toggleLike}
      isLiked={isLiked}
      source={source}
      link={link}
    />
  )
}

export const Default = Template.bind({})
