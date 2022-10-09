/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react'

import { Box, Stack } from '@chakra-ui/react'
import { API_URL, TOKEN } from '@wsvvrijheid/config'
import { Blog } from '@wsvvrijheid/types'
import { request } from '@wsvvrijheid/utils'
import axios from 'axios'
import { useQuery, QueryKey } from '@tanstack/react-query'

const BLOG_URL = `${API_URL}/api/blogs` // https://api.samenvvv.nl/api/blogs
const API_TOKEN = TOKEN

export type RequestUseQueryProps = {
  initialName: string
}


export const RequestUseQuery: FC<RequestUseQueryProps> = ({ initialName }) => {

  const instance = axios.create({
    headers: {'Authorization': 'Bearer ' + TOKEN}
  });
  
   const getBlogs = async () => {
    return await instance.get(BLOG_URL)
  }

  const { data, status } = useQuery(["title"], getBlogs);
  // TODO Add Input to change nameFilter
  return (
    <div className="App">
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <div>
          {data.data.data.map((user: any) => (
            <p key={user.id}>{user['title']} </p>
          ))}
        </div>
      )}
    </div>
  )
}
