import { Meta, Story } from '@storybook/react'

import { RequestPopulate } from './RequestPopulate'

export default {
  component: RequestPopulate,
  title: 'Example/RequestPopulate',
} as Meta<typeof RequestPopulate>

const Template: Story = () => <RequestPopulate />

export const Default = Template.bind({})
