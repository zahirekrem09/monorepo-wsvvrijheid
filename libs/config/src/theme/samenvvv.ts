import { extendTheme } from '@chakra-ui/react'
import { merge } from 'lodash'

import { colors } from './colors'
import { fonts } from './fonts'
import { defaultTheme } from './theme'

export const samenvvv = extendTheme(
  merge(defaultTheme, {
    fonts: {
      body: fonts.body,
      heading: fonts.body,
    },
    colors: {
      primary: colors.samen,
    },
  }),
)
