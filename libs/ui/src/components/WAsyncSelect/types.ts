import { RefAttributes } from 'react'

import {
  GroupBase,
  Props as SelectProps,
  SelectInstance,
} from 'chakra-react-select'
import { FieldValues } from 'react-hook-form'

import { FormItemProps } from '../FormItem'

type SelectOption = {
  label: string
  value: string
}

export type WAsyncSelectProps<SelectFormFieldValues extends FieldValues> = {
  title: string
} & Omit<FormItemProps<SelectFormFieldValues>, 'register' | 'leftElement'> &
  SelectProps<SelectOption, boolean, GroupBase<SelectOption>> &
  RefAttributes<SelectInstance<SelectOption, boolean, GroupBase<SelectOption>>>

export interface OptionProps {
  readonly value: string
  readonly label: string
}
