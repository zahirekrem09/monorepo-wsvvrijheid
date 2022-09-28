import { Box, Code } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

// TODO: Create custom hook that returns `useQuery` hook
// TODO: Move queryFn to a separate function called `getBlogs`
// TODO: You can move your previous code to this custom hook
const useBlogsQuery = () => {
  return useQuery({})
}

export const CustomUseQueryHook = () => {
  const { data, isLoading, isFetching } = useBlogsQuery()

  if (isLoading) return <Box>Loading...</Box>
  if (isFetching) return <Box>Fetching...</Box>

  return <Code as="pre">{JSON.stringify(data, null, 2)}</Code>
}
