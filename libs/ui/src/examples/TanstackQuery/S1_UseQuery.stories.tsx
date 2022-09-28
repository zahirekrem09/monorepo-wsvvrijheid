import { Container } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'

import { UseQuery } from './E1_UseQuery'

export default {
  component: UseQuery,
  title: 'Example/E1_UseQuery',
  decorators: [Story => <Container maxW="container.xl">{Story()}</Container>],
} as Meta<typeof UseQuery>

const Template: Story = () => <UseQuery />

export const Default = Template.bind({})
