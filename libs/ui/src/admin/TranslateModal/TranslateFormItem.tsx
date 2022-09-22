import { useState } from 'react'

import {
  Box,
  Button,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { StrapiTranslatableModel } from '@wsvvrijheid/types'
import { getTranslation } from '@wsvvrijheid/utils'

import { Flags } from '../../components'
import { TranslateFormProps } from './types'

export const TranslateFormItem = <T extends StrapiTranslatableModel>({
  localizedModels,
  translationKey,
  field,
}: TranslateFormProps<T> & { field: 'title' | 'description' | 'content' }) => {
  const Tag = field === 'title' ? Input : Textarea

  const [currentLocale, targetLocale] = translationKey

  const currentModel = localizedModels[currentLocale]
  const targetModel = localizedModels[targetLocale]

  const [translatedValue, setTranslatedValue] = useState<string | null>()

  const handleTranslate = async () => {
    const response = await getTranslation(
      currentModel[field] as string,
      targetLocale,
    )

    setTranslatedValue(response.text)
  }

  return (
    <Stack w="full">
      <FormLabel htmlFor={`${currentModel.id} title`}>Title</FormLabel>
      <Stack direction={{ base: 'column', lg: 'row' }}>
        <HStack w={{ base: 'full', lg: 400 }} align="baseline">
          <Box as={Flags[currentModel.locale]} />
          <Text>{currentModel[field]}</Text>
        </HStack>

        <Stack flex={1}>
          <HStack align="baseline">
            <Box as={Flags[targetLocale]} />
            <Box flex={1}>
              <Button mb={2} size="xs" onClick={handleTranslate}>
                Translate
              </Button>
              <Tag
                w="full"
                id={`${currentModel.id} title`}
                placeholder="Title"
                value={translatedValue || targetModel?.[field]}
              />
            </Box>
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  )
}
