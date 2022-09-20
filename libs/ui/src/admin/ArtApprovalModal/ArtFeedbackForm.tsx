import { FC, useState } from 'react'

import {
  Avatar,
  Button,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Textarea,
  IconButton,
} from '@chakra-ui/react'
import {
  HiDotsVertical,
  HiOutlineCheck,
  HiOutlineX,
  HiPencil,
} from 'react-icons/hi'
import { MdOutlinePublish } from 'react-icons/md'

import { ArtFeedbackFormTypes } from './types'

export const ArtFeedbackForm: FC<ArtFeedbackFormTypes> = ({
  onReject,
  onApprove,
  onDelete,
  artId,
  editorId,
  editorAvatar,
  editorName,
  updateField,
  onPublish,
}) => {
  const [feedback, setFeedback] = useState('')

  const handleReject = () => {
    onReject(artId, editorId, feedback)
  }

  const handleApprove = () => {
    onApprove(artId, editorId, feedback)
  }
  const handleDelete = () => {
    onDelete(artId)
  }
  const handlePublish = () => {
    onPublish(artId)
  }
  return (
    <Stack w={'full'} spacing={{ base: 2, lg: 4 }}>
      <Text color={'black'} fontWeight={'bold'}>
        Give Feedback
      </Text>

      {/*feedback ================================= */}
      <HStack align="start" spacing={{ base: 2, lg: 4 }}>
        {/* avatar*/}

        <Avatar size="sm" src={editorAvatar} name={editorName} />

        <Stack flex={1} spacing={{ base: 2, lg: 4 }}>
          {/* text area, button group*/}
          <Stack>
            {/* text area*/}
            <Textarea
              isRequired
              onChange={e => setFeedback(e.target.value)}
              placeholder={'Type your comment here'}
            />
          </Stack>
          {/*button group*/}
          <Stack direction={'row'} spacing={{ base: 2, lg: 4 }}>
            <Button
              onClick={handleReject}
              colorScheme="red"
              w="full"
              leftIcon={<HiOutlineX />}
            >
              Reject
            </Button>
            <Button
              onClick={handleApprove}
              colorScheme="green"
              w="full"
              leftIcon={<HiOutlineCheck />}
            >
              Approve
            </Button>
            <Menu>
              <MenuButton
                aria-label="Open art menu"
                as={IconButton}
                icon={<HiDotsVertical />}
                colorScheme="primary"
              />
              <MenuList minWidth={32} minH={20}>
                <MenuItem
                  as={Button}
                  onClick={() => updateField('description')}
                  variant="ghost"
                  colorScheme="primary"
                  icon={<HiPencil />}
                >
                  Edit Description
                </MenuItem>
                <MenuItem
                  as={Button}
                  onClick={() => updateField('content')}
                  variant="ghost"
                  colorScheme="primary"
                  icon={<HiPencil />}
                >
                  Edit Content
                </MenuItem>
                <MenuItem
                  as={Button}
                  onClick={handlePublish}
                  variant="ghost"
                  colorScheme="primary"
                  icon={<MdOutlinePublish />}
                >
                  Publish
                </MenuItem>
                <MenuItem
                  as={Button}
                  onClick={handleDelete}
                  variant="ghost"
                  colorScheme="red"
                  icon={<HiOutlineX />}
                >
                  Delete
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Stack>
      </HStack>
    </Stack>
  )
}
