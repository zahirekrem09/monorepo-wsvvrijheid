import { useToast } from '@chakra-ui/react'
import { useMutation, useQueryClient, QueryKey } from '@tanstack/react-query'
import { StrapiModel, StrapiUrl } from '@wsvvrijheid/types'

import { Mutation } from '../lib'

export const publishModel = <T extends StrapiModel>(
  id: number,
  url: StrapiUrl,
) => {
  const body = { publishedAt: new Date() }

  return Mutation.put<T, typeof body>(url, id, body)
}

export const usePublishModel = <T extends StrapiModel>(
  url: StrapiUrl,
  queryKey?: QueryKey,
) => {
  const queryClient = useQueryClient()
  const toast = useToast()

  return useMutation({
    mutationKey: [`publish-${url}`],
    mutationFn: ({ id }: { id: number }) => publishModel<T>(id, url),
    onSettled: () => {
      // It's difficult to invalidate cache for paginated or filtering queries
      // Cache invalidation strategy might differ depending on where the mutation is called
      // If there would be no filters, sort, pages for fetching data,
      // we could just invalidate the cache as `queryClient.invalidateQueries('arts')`
      //
      // We fetch queries on `Club` page, so we can invalidate cache by using the same queryKey
      // That's why we give the current queryKey comes from `Club` page
      queryClient.invalidateQueries(queryKey)
    },
    onSuccess: () => {
      // TODO Add translations
      queryClient.invalidateQueries(queryKey)
      toast({
        title: `Successfully Published`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    },
  })
}
