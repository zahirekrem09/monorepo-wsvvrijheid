import { Story, Meta } from '@storybook/react'

import { HEADER_MENU, PROFILE } from '../../mocks'
import { HeaderMobile } from './HeaderMobile'
import { HeaderMobileProps } from './types'

export default {
  component: HeaderMobile,
  title: 'Layout/HeaderMobile',
} as Meta<HeaderMobileProps>

const Template: Story<HeaderMobileProps> = args => <HeaderMobile {...args} />

export const Default = Template.bind({})
Default.args = {
  headerMenu: HEADER_MENU,
  profileMenu: PROFILE,
}

export const IsLoggedIn = Template.bind({})
IsLoggedIn.args = {
  headerMenu: HEADER_MENU,
  profileMenu: { ...PROFILE, isLoggedIn: true },
}
