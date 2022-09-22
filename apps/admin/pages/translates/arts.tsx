import { Box, Button, useDisclosure } from '@chakra-ui/react'
import { ART_MOCKS } from '@wsvvrijheid/mocks'
import { useAuth, AdminLayout, TranslateModal } from '@wsvvrijheid/ui'
import { sample } from 'lodash'

const ArtsTranslatePage = () => {
  const { user, isLoading } = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <AdminLayout
      title="ArtsTranslatePage"
      user={user}
      isLoading={!user || isLoading}
    >
      <Box>ArtsTranslatePage</Box>
      <Button onClick={onOpen}>Open</Button>
      <TranslateModal
        onClose={onClose}
        isOpen={isOpen}
        model={sample(ART_MOCKS.en.data)}
        onApprove={() => null}
        onSave={() => null}
      />
    </AdminLayout>
  )
}

export default ArtsTranslatePage
