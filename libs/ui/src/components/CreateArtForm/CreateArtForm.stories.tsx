import { useState } from 'react'

import slugify from '@sindresorhus/slugify'
import { Story, Meta } from '@storybook/react'
import { CATEGORY_MOCKS } from '@wsvvrijheid/mocks'
import { Art, ArtCreateInput } from '@wsvvrijheid/types'
import { createMutation } from '@wsvvrijheid/utils'

import { CreateArtForm } from '.'
import { CreateArtFormProps, CreateArtFormFieldValues } from './types'

export default {
  title: 'Forms/CreateArtForm',
  component: CreateArtForm,
} as Meta<CreateArtFormProps>

const Template: Story<CreateArtFormProps> = args => {
  const [isLoading, setIsLoading] = useState(false)
  const handleCreateArt = async (
    data: CreateArtFormFieldValues & { images: Blob[] },
  ) => {
    const slug = slugify(data.title)
    const formBody = {
      ...data,
      slug,
      categories: data.categories.map(c => Number(c.value)),
    }

    const response = await createMutation<Art, ArtCreateInput>(
      'api/arts',
      formBody,
    )

    console.log('response', response)

    setIsLoading(true)
    setTimeout(() => {
      alert(JSON.stringify(data))
      setIsLoading(false)
    }, 2000)
  }

  return (
    <CreateArtForm
      {...args}
      onCreateArt={handleCreateArt}
      isLoading={isLoading}
      categories={CATEGORY_MOCKS.data}
    />
  )
}

export const Default = Template.bind({})
Default.args = {}

export const Auth = Template.bind({})
Auth.args = {
  isLoggedIn: true,
}
