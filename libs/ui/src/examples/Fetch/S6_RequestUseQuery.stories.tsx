import { Container } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'

import { RequestUseQuery, RequestUseQueryProps } from './E6_RequestUseQuery'

export default {
  component: RequestUseQuery,
  title: 'Example/E6_RequestUseQuery',
  args: {
    initialValue: '',
  },
  decorators: [Story => <Container maxW="container.xl">{Story()}</Container>],
} as Meta<typeof Notification>

const Template: Story<RequestUseQueryProps> = args => (
  <RequestUseQuery {...args} />
)

export const Default = Template.bind({})
