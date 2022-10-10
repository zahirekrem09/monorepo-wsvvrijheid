import { RefAttributes } from 'react'

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/react'
import {
  Props as SelectProps,
  GroupBase,
  SelectInstance,
  AsyncSelect,
  chakraComponents,
} from 'chakra-react-select'
import { Control, FieldValues, useController } from 'react-hook-form'

import { FormItemProps } from '../FormItem'

type SelectOption = {
  label: string
  value: string
}

export type WSelectProps<SelectFormFieldValues extends FieldValues> = {
  control: Control
  isAsync?: boolean
  url?: string
  token?: string
  asyncFunction?: (inputValue: string, callback: () => any) => Promise<any>
} & Omit<FormItemProps<SelectFormFieldValues>, 'register' | 'leftElement'> &
  SelectProps<SelectOption, boolean, GroupBase<SelectOption>> &
  RefAttributes<SelectInstance<SelectOption, boolean, GroupBase<SelectOption>>>

export type WSelectComponent = <SelectFormFieldValues extends FieldValues>(
  props: WSelectProps<SelectFormFieldValues>,
) => JSX.Element

export const WSelect: WSelectComponent = ({
  control,
  name,
  label,
  hideLabel,
  errors,
  isRequired,
  helperText,
  placeholder,
  options,
  isAsync,
  url,
  token,
  asyncFunction,
  ...rest
}) => {
  const { field } = useController({
    name,
    control,
  })

  const errorMessage = errors?.[name]?.['message'] as unknown as string

  const asyncComponents = {
    LoadingIndicator: (props: any) => (
      <chakraComponents.LoadingIndicator
        color="currentColor"
        emptyColor="transparent"
        spinnerSize="md"
        speed="0.45s"
        thickness="2px"
        {...props}
      />
    ),
  }

  return (
    <FormControl
      isInvalid={Boolean(errors?.[name])}
      isRequired={isRequired}
      w="full"
    >
      {label && !hideLabel && (
        <FormLabel mb={1} htmlFor={name} fontSize="sm" fontWeight="semibold">
          {label}
        </FormLabel>
      )}

      <AsyncSelect<SelectOption, boolean, GroupBase<SelectOption>>
        defaultOptions={options}
        components={asyncComponents}
        loadOptions={isAsync ? asyncFunction : null}
        {...field}
        {...rest}
      />

      <FormErrorMessage>{errorMessage}</FormErrorMessage>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}
