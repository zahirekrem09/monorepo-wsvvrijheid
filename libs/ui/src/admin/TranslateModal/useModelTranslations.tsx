import { useMemo, useState } from 'react'

import {
  StrapiLocale,
  StrapiTranslatableModel,
  TranslationStatus,
} from '@wsvvrijheid/types'
import { isEmpty } from 'lodash'

import { DefaultTranslatableModel, LocalizedModel } from './types'

const mapModelLocalization = <T extends StrapiTranslatableModel>({
  localizations,
  ...model
}: DefaultTranslatableModel<T>) => {
  const defaultLocalizedModel = {
    [model.locale]: {
      ...model,
      translationStatus: model.translationStatus || 'pending',
    },
  } as LocalizedModel<T>

  const localizedModels = localizations?.reduce((acc, localization) => {
    return {
      ...acc,
      [localization.locale]: {
        ...localization,
        translationStatus: localization.translationStatus || 'pending',
      },
    }
  }, {} as LocalizedModel<T>)

  if (!isEmpty(localizedModels)) {
    return {
      ...defaultLocalizedModel,
      ...localizedModels,
    }
  }

  return defaultLocalizedModel
}

export const useModelTranslations = <T extends StrapiTranslatableModel>(
  model: DefaultTranslatableModel<T>,
) => {
  const [originalModel, setOriginalModel] =
    useState<DefaultTranslatableModel<T>>()

  const { modelsWithMissingTranslations, localizedModels } = useMemo(() => {
    const locales = ['tr', 'en', 'nl'] as StrapiLocale[]

    // From model to object with its localizations { tr: data, en: data, nl: data }
    const localizedModels = mapModelLocalization<T>(model)

    const modelsWithMissingTranslations = Object.values(localizedModels).map(
      model => {
        if (model.translationStatus === 'original') {
          setOriginalModel(model)
        }
        // Find missing translations for the current model
        // Approved localizations are not included in the missing translations
        const missingTranslations = locales.filter(locale => {
          return (
            locale !== model.locale &&
            !['approved', 'original'].includes(
              localizedModels[locale]?.translationStatus as TranslationStatus,
            )
          )
        }) as StrapiLocale[]

        return {
          ...model,
          missingTranslations,
        }
      },
    )

    return { modelsWithMissingTranslations, localizedModels }
  }, [model])

  return {
    modelsWithMissingTranslations,
    localizedModels,
    originalModel: originalModel || localizedModels['tr'],
  }
}
