import { StrapiLocale, Collection } from '@wsvvrijheid/types'

import { Request } from '../../lib'

export const getCollectionPaths = async (locales: StrapiLocale[]) =>
  (
    await Promise.all(
      locales.flatMap(async locale => {
        const responses = await Request.collection<Collection[]>({
          url: 'api/collections',
          locale,
        })

        const collections = responses?.data

        return collections?.map(({ slug }) => ({
          params: { slug },
          locale,
        }))
      }),
    )
  ).flat()
