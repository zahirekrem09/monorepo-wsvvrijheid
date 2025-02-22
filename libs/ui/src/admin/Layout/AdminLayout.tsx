import { FC, ReactNode } from 'react'

import {
  Box,
  Center,
  Heading,
  HStack,
  IconButton,
  Spinner,
  Stack,
  useBoolean,
} from '@chakra-ui/react'
import {
  destroyAuth,
  useAppDispatch,
  useAuthSelector,
} from '@wsvvrijheid/utils'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { MdOutlineNotifications } from 'react-icons/md'
import { useLocalStorage } from 'react-use'

import { AdminSidebar } from '../AdminSidebar'
import { PageHeader, PageHeaderProps } from '../PageHeader'

export type AdminLayoutProps = {
  children: ReactNode
  title: string
  isLoading?: boolean
  headerProps?: PageHeaderProps
}

export const AdminLayout: FC<AdminLayoutProps> = ({
  children,
  title,
  isLoading,
  headerProps,
}) => {
  const { user, isAuthLoading } = useAuthSelector()

  const router = useRouter()
  const dispatch = useAppDispatch()

  const [expandedStorage, setExpandedStorage] = useLocalStorage(
    'adminSidebarExpanded',
    true,
  )
  const [expanded, { toggle }] = useBoolean(expandedStorage)

  const toggleSidebarExpanded = () => {
    setExpandedStorage(!expanded)
    toggle()
  }

  const handleLogout = async () => {
    await dispatch(destroyAuth()).unwrap()

    router.push('/login')
  }

  // Loading indicator when we are fetching user data on the client
  if (isAuthLoading) {
    return (
      <>
        <NextSeo title={title} />
        <Center h="100vh">
          <Spinner size="xl" />
        </Center>
      </>
    )
  }

  return (
    <>
      <NextSeo title={title} />
      <Box bg="gray.50">
        {/* Sidebar */}
        <Box
          pos="fixed"
          zIndex="sticky"
          top={0}
          left={0}
          h="100vh"
          w={expanded ? 300 : 16}
        >
          {user && (
            <AdminSidebar
              user={user}
              onLogout={handleLogout}
              expanded={expanded}
              onToggleExpand={toggleSidebarExpanded}
            />
          )}
        </Box>

        <Stack
          as="main"
          ml={expanded ? 300 : 16}
          spacing={4}
          minH="100vh"
          overflow="auto"
          pb={8}
        >
          {isLoading ? (
            <Center h="100vh">
              <Spinner size="xl" />
            </Center>
          ) : (
            <>
              <HStack px={4} mt={10} justify="space-between">
                <Heading textTransform="capitalize" color="blackAlpha.400">
                  {title}
                </Heading>

                {/* TODO Create notification component */}
                <IconButton
                  aria-label="notifications"
                  icon={<MdOutlineNotifications />}
                  variant="outline"
                  rounded="full"
                />
              </HStack>

              {/* Page Content */}
              <Box pos="sticky" top={0} zIndex={1}>
                {headerProps && (
                  <PageHeader defaultLocale="tr" {...headerProps} />
                )}
              </Box>

              <Box px={4}>{children}</Box>
            </>
          )}
        </Stack>
      </Box>
    </>
  )
}
