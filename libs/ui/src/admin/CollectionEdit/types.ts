import { Dispatch, SetStateAction } from 'react'

import { Collection } from '@wsvvrijheid/types'

export type CollectionEditFormProps = {
  collection: Collection
  isEdit: boolean
  setEdit: Dispatch<SetStateAction<boolean>>
}

export type CollectionEditFormFieldValues = {
  title: string
  description: string
}

export type CollectionEditProps = {
  collection: Collection
}

export type CollectionAccordionItemProps = {
  collection: Collection
}
