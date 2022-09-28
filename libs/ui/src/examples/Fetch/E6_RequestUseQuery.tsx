// TODO: Remove the following eslint line
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react'

import { Box, HStack, Select } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { StrapiLocale, StrapiUrl } from '@wsvvrijheid/types'
import { request } from '@wsvvrijheid/utils'

import { LanguageSwitcher } from '../../admin'
import { URL_OPTIONS } from './RequestPopulate'

export const RequestUseQuery = () => {
  // TODO: Specify the type of all the states
  const [url, setUrl] = useState('api/blogs')
  const [filterValue, setFilterValue] = useState('')
  const [filterProperty, setFilterProperty] = useState('title')
  const [locale, setLocale] = useState('en')

  // Example filter: { [filterProperty]: filterValue }
  // eg { title: 'test' } for blogs
  // eg { name_${locale}: 'test' } for categories

  const fetchData = async () => {
    // TODO: Add request to fetch data
  }

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['fetch', url, filterProperty, filterValue, locale],
    queryFn: fetchData,
    // This is important, otherwise it will fetch each time queryKey changes
    // We only want to fetch when the user clicks the button
    enabled: false,
  })

  return (
    <Box>
      <HStack>
        {/* TODO: LanguageSwitcher */}
        {/* TODO: Select with URL_OPTIONS */}
        {/* TODO: Input for filterProperty */}
        {/* TODO: Input for filterValue */}
        {/* TODO: Fetch button to trigger refetch */}
        {/* TODO: Show data */}
      </HStack>
    </Box>
  )
}
