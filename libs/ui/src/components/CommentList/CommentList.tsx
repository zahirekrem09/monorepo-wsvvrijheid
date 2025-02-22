import { FC } from 'react'

import { Stack, Text } from '@chakra-ui/react'
import { Comment } from '@wsvvrijheid/types'
import { useTranslation } from 'next-i18next'

import { CommentItem } from '../CommentItem'

interface CommentListProps {
  comments: Array<Comment>
}

export const CommentList: FC<CommentListProps> = ({ comments }) => {
  const { t } = useTranslation()

  return (
    <Stack p={4} spacing={4} bg="white" boxShadow="base">
      <Text fontSize="lg" fontWeight="semibold">
        {t('apply-form.comments')}
      </Text>

      <Stack spacing={4}>
        {comments?.map(comment => {
          return <CommentItem key={comment.id} comment={comment} />
        })}
      </Stack>
    </Stack>
  )
}
