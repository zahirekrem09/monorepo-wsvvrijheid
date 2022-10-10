import { yupResolver } from '@hookform/resolvers/yup'
import { Story, Meta } from '@storybook/react'
import { TOKEN } from '@wsvvrijheid/config'
import axios from 'axios'
import qs from 'qs'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { WSelect, WSelectProps } from './WSelect'

const options = [
  { label: 'Category 1', value: '1' },
  { label: 'Category 2', value: '2' },
  { label: 'Category 3', value: '3' },
]

export default {
  title: 'Forms/WSelect',
  component: WSelect,
} as Meta<WSelectProps>

const categorySchema = yup.object().shape({
  label: yup.string(),
  value: yup.string(),
})

// SELECT COMPONENT

const objectSchema = yup.object({
  category: categorySchema.nullable(),
})

type SelectFormFieldValues = {
  category: {
    label: string
    value: string
  }
}

const Template: Story<WSelectProps<SelectFormFieldValues>> = args => {
  const {
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(objectSchema),
    mode: 'all',
  })

  return (
    <WSelect
      {...args}
      name="category"
      errors={errors}
      control={control}
      options={options}
      colorScheme="primary"
      placeholder="Select a category"
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  label: 'Default',
}

export const Check = Template.bind({})
Check.args = {
  label: 'Check',
  selectedOptionStyle: 'check',
}

export const Color = Template.bind({})
Color.args = {
  label: 'Color',
  selectedOptionStyle: 'color',
  selectedOptionColor: 'red',
}

// MULTISELECT COMPONENT

const arraySchema = yup.object({
  categories: yup.array().of(categorySchema),
})

type SelectFormMultiFieldValues = {
  categories: {
    label: string
    value: string
  }[]
}

const MultiTemplate: Story<WSelectProps<SelectFormMultiFieldValues>> = args => {
  const {
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(arraySchema),
    mode: 'all',
  })

  return (
    <WSelect
      {...args}
      name="categories"
      errors={errors}
      control={control}
      options={options}
      isMulti
      colorScheme="primary"
      placeholder="Select categories"
    />
  )
}

export const Multi = MultiTemplate.bind({})
Multi.args = {
  label: 'Multi',
}

export const MultiCheck = MultiTemplate.bind({})
MultiCheck.args = {
  label: 'Multi Check',
  selectedOptionStyle: 'check',
  closeMenuOnSelect: false,
  hideSelectedOptions: false,
}

export const MultiColor = MultiTemplate.bind({})
MultiColor.args = {
  label: 'Multi Color',
  selectedOptionStyle: 'color',
  selectedOptionColor: 'purple',
  closeMenuOnSelect: false,
  hideSelectedOptions: false,
}

const AsyncTemplate: Story<WSelectProps<SelectFormFieldValues>> = args => {
  const {
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(objectSchema),
    mode: 'all',
  })

  const loadOptions = async (inputValue: string, callback: () => any) => {
    const values = options?.filter(i =>
      i.label?.toLowerCase().includes(inputValue.toLowerCase()),
    )

    if (!values?.length === 0) {
      callback(values)
    } else {
      const query = qs.stringify(
        {
          filters: {
            name_en: {
              $containsi: inputValue,
            },
          },
        },
        { encodeValuesOnly: true },
      )

      const response = await axios.get(
        `https://api.samenvvv.nl/api/categories?slug=en&${query}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        },
      )

      const data = response.data.data.map(item => {
        return {
          label: item.name_en,
          value: item.name_en,
        }
      })

      callback(data)
    }
  }

  return (
    <WSelect
      {...args}
      name="category"
      errors={errors}
      control={control}
      options={options}
      colorScheme="primary"
      placeholder="Select a category"
      asyncFunction={loadOptions}
    />
  )
}

export const AsyncSelect = AsyncTemplate.bind({})
AsyncSelect.args = {
  label: 'Async',
  isAsync: true,
  isMulti: true,
}
