import { useQuery } from '@tanstack/react-query'
import { StrapiLocale, User } from '@wsvvrijheid/types'
import { useRouter } from 'next/router'

import { Request } from '../../lib'

export const getArtistByUsername = async (
  locale: StrapiLocale,
  username: string,
): Promise<User | null> => {
  const response = await Request.collection<User[]>({
    url: 'api/users',
    filters: {
      username: { $eq: username },
      arts: {
        locale,
        id: {
          $gt: 0,
        },
      },
    },
    populate: [
      'arts.images',
      'arts.artist',
      'arts.artist.avatar',
      'arts.categories',
      'arts.localizations',
      'arts.comments.user.avatar',
      'arts.likers',
    ],
  })

  return response?.data?.[0] || null
}

export const useArtistByUsername = () => {
  const { locale, query } = useRouter()

  const username = query['username'] as string

  return useQuery({
    queryKey: ['artist', locale, username],
    queryFn: () =>
      getArtistByUsername(locale as StrapiLocale, username as string),
  })
}
