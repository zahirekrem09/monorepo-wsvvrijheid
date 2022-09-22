import { Divider, Stack } from '@chakra-ui/react'
import { StrapiTranslatableModel } from '@wsvvrijheid/types'

import { TranslateFormItem } from './TranslateFormItem'
import { TranslateFormProps } from './types'

export const TranslateForm = <T extends StrapiTranslatableModel>({
  localizedModels,
  translationKey,
}: TranslateFormProps<T>) => {
  const currentModel = localizedModels[translationKey[0]]

  return (
    <Stack justify="stretch">
      {currentModel.title && (
        <TranslateFormItem
          localizedModels={localizedModels}
          translationKey={translationKey}
          field="title"
        />
      )}

      {currentModel.description && (
        <>
          <Divider orientation="horizontal" />

          <TranslateFormItem
            localizedModels={localizedModels}
            translationKey={translationKey}
            field="description"
          />
        </>
      )}

      {currentModel.content && (
        <>
          <Divider orientation="horizontal" />
          <TranslateFormItem
            localizedModels={localizedModels}
            translationKey={translationKey}
            field="content"
          />
        </>
      )}
    </Stack>
  )
}
