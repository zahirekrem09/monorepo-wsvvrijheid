import { useQuery } from '@tanstack/react-query'
import { Art, StrapiLocale } from '@wsvvrijheid/types'
import { useRouter } from 'next/router'

import { Request } from '../../lib'

export const getArtsByCategories = async (
  locale: StrapiLocale,
  categories: string[],
  id?: number,
) => {
  const response = await Request.collection<Art[]>({
    url: 'api/arts',
    locale,
    filters: {
      categories: { slug: { $in: categories } },
      id: { $ne: id },
      approvalStatus: { $eq: 'approved' },
    },
    populate: ['artist.avatar', 'categories', 'images', 'likers'],
    sort: 'publishedAt:desc',
    pageSize: 4, // TODO: Change this
  })

  return response?.data
}

export const useArtsByCategories = (categories: string[], id?: number) => {
  const { locale } = useRouter()

  return useQuery({
    queryKey: ['arts', locale, categories, id],
    queryFn: () => getArtsByCategories(locale as StrapiLocale, categories, id),
  })
}
