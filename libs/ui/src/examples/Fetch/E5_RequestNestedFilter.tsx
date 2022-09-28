/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react'

import { Box, Stack } from '@chakra-ui/react'
import { API_URL, TOKEN } from '@wsvvrijheid/config'
import { Blog } from '@wsvvrijheid/types'
import { request } from '@wsvvrijheid/utils'

export type RequestNestedFilterProps = {
  initialName: string
}

export const RequestNestedFilter: FC<RequestNestedFilterProps> = ({
  initialName,
}) => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [nameFilter, setNameFilter] = useState(initialName)

  useEffect(() => {
    // TODO: Fetch blogs by author name (blog.author.name) with nameFilter by using our custom request function
    // Changing nameFilter should trigger a new fetch.
    // How could you achieve it by using useEffect?
    const getBlogs = async () => {
      try {
        // const { data } = await fetcher(API_TOKEN)(BLOG_URL)
        // const { data } = await request({ url: 'api/blogs' })
        const { data } = await request<Blog[]>({
          url: 'api/blogs',
          filters: {
            author: {
              username: {
                $containsi: nameFilter,
              },
            },
          },
          locale: 'tr',
        })
        console.log(data)
        setBlogs(data)
      } catch (error) {
        console.log(error)
      }
    }
    getBlogs()
  }, [nameFilter])

  // TODO Add Input to change nameFilter
  return (
    <Box>
      {/* TODO: Show only title of the blogs */}
      <input type="text" onChange={e => setNameFilter(e.target.value)} />
      {blogs.map(x => (
        <Box>{x['author']['username']}</Box>
      ))}
    </Box>
  )
}
