/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react'

import { Box, Stack } from '@chakra-ui/react'
import { API_URL, TOKEN } from '@wsvvrijheid/config'
import { Blog } from '@wsvvrijheid/types'
import { request } from '@wsvvrijheid/utils'

export type RequestUseQueryProps = {
  initialName: string
}

export const RequestUseQuery: FC<RequestUseQueryProps> = ({ initialName }) => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [nameFilter, setNameFilter] = useState(initialName)

  //   useEffect(() => {}, [])

  // TODO Add Input to change nameFilter
  return <div>Hi</div>
}
