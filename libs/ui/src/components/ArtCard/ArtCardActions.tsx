import { FC } from 'react'

import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {
  MdDeleteOutline,
  MdOutlinePublishedWithChanges,
  MdOutlineUnpublished,
} from 'react-icons/md'

import { ArtCardActionsProps } from './types'

export const ArtCardActions: FC<ArtCardActionsProps> = ({
  isPublished,
  onHandleAction,
}) => {
  const { t } = useTranslation()

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Art actions"
        color="white"
        colorScheme="blackAlpha"
        borderColor="whiteAlpha.500"
        borderWidth={1}
        icon={<BsThreeDotsVertical />}
        rounded="full"
      />
      <MenuList fontSize="md">
        {/* Publish */}
        {isPublished && (
          <MenuItem onClick={() => onHandleAction('unpublish')}>
            <Box as={MdOutlineUnpublished} mr={2} />
            {t('profile.art.unpublish.button')}
          </MenuItem>
        )}

        {/* Unpublish */}
        {!isPublished && (
          <MenuItem onClick={() => onHandleAction('publish')}>
            <Box as={MdOutlinePublishedWithChanges} mr={2} />
            {t('profile.art.publish.button')}
          </MenuItem>
        )}

        {/* Delete  */}
        <MenuItem color="red.500" onClick={() => onHandleAction('delete')}>
          <Box as={MdDeleteOutline} mr={2} />
          {t('profile.art.delete.button')}
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
