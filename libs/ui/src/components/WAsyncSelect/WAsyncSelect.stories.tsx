// import { yupResolver } from '@hookform/resolvers/yup'
// import { Meta, Story } from '@storybook/react'
// import { useForm } from 'react-hook-form'
// import * as yup from 'yup'

// import { WAsyncSelect, WAsyncSelectProps } from './index'
// export default {
//   title: 'Forms/WAsyncSelect',
//   component: WAsyncSelect,
// } as Meta<WAsyncSelectProps>

// const categorySchema = yup.object().shape({
//   label: yup.string(),
//   value: yup.string(),
// })

// // SELECT COMPONENT

// const objectSchema = yup.object({
//   category: categorySchema,
// })

// type SelectFormFieldValues = {
//   category: {
//     label: string
//     value: string
//   }
// }

// const Template: Story<WAsyncSelectProps<SelectFormFieldValues>> = args => {
//   const {
//     control,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(objectSchema),
//     mode: 'all',
//   })

//   return (
//     <WAsyncSelect
//       {...args}
//       name="category"
//       errors={errors}
//       control={control}
//       //   options={options}
//       colorScheme="primary"
//       placeholder="Select a category"
//     />
//   )
// }

// export const Default = Template.bind({})
// Default.args = {
//   label: 'Default',
// }
