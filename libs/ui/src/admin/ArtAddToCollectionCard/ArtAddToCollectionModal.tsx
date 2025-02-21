import { FC, useEffect, useState } from 'react'

import {
  Box,
  Center,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
} from '@chakra-ui/react'
import { StrapiLocale } from '@wsvvrijheid/types'
import { useArts } from '@wsvvrijheid/utils'

import { Pagination } from '../../components'
import { PageHeader } from '../PageHeader'
import { ArtAddToCollectionGrid } from './ArtAddToCollectionGrid'
import { ArtAddToCollectionModalProps } from './types'

export const ArtAddToCollectionModal: FC<ArtAddToCollectionModalProps> = ({
  isOpen,
  onClose,
  collection,
}) => {
  const [search, setSearch] = useState<string | null>('')
  const [locale, setLocale] = useState<StrapiLocale>('tr')
  const [page, setPage] = useState(1)

  const { data, isLoading, refetch } = useArts([], {
    searchTerm: search || undefined,
    locale,
  })

  useEffect(() => {
    refetch()
  }, [search, locale])

  return (
    <Box>
      <Modal onClose={onClose} isOpen={isOpen} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent maxW="95vw" h="full" p={{ base: 2, lg: 4 }}>
          <ModalHeader>
            <HStack pos="sticky" top={0} zIndex="modal">
              <Box flex={1}>
                <PageHeader
                  defaultLocale="tr"
                  onLanguageSwitch={setLocale}
                  onSearch={setSearch}
                >
                  <ModalCloseButton pos="static" />
                </PageHeader>
              </Box>
            </HStack>
          </ModalHeader>
          <ModalBody>
            <Stack spacing={8}>
              {isLoading && (
                <Center>
                  <Spinner />
                </Center>
              )}
              {!isLoading && data?.data && (
                <>
                  <ArtAddToCollectionGrid
                    arts={data?.data || []}
                    collection={collection}
                  />
                  <Pagination
                    alignSelf="center"
                    currentPage={page}
                    onPageChange={setPage}
                    totalCount={data?.meta.pagination?.pageCount as number}
                  />
                </>
              )}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
