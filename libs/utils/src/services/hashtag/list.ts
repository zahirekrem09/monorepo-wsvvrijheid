import { useQuery } from '@tanstack/react-query'
import { Hashtag, StrapiLocale } from '@wsvvrijheid/types'
import { useRouter } from 'next/router'

import { Request } from '../../lib'

export const getHashtags = async (
  locale: StrapiLocale,
  populate?: string | string[],
  pageSize?: number,
) => {
  const response = await Request.collection<Hashtag[]>({
    url: 'api/hashtags',
    locale,
    populate,
    sort: ['date:desc'],
    pageSize,
  })

  return response?.data
}

export const useHashtags = () => {
  const { locale } = useRouter()

  return useQuery({
    queryKey: ['hashtags', locale],
    queryFn: () => getHashtags(locale as StrapiLocale),
  })
}
