import { Container } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'

import { RequestUseQuery } from './E6_RequestUseQuery'

export default {
  component: RequestUseQuery,
  title: 'Example/E6_RequestUseQuery',
  decorators: [Story => <Container maxW="container.xl">{Story()}</Container>],
} as Meta<typeof RequestUseQuery>

const Template: Story = () => <RequestUseQuery />

export const Default = Template.bind({})
