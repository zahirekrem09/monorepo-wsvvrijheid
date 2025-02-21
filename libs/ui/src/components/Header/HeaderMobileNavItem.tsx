import { FC } from 'react'

import { Box } from '@chakra-ui/react'

import { ChildMenuItem } from './HeaderNavItem'
import { HeaderMobileNavItemProps } from './types'

export const HeaderMobileNavItem: FC<HeaderMobileNavItemProps> = ({ item }) => {
  return (
    <>
      <Box py={2}>
        <ChildMenuItem item={item} />
      </Box>
      {item.children?.map((child, index) => (
        <Box key={index} pl={4} py={2}>
          <ChildMenuItem item={child} />
        </Box>
      ))}
    </>
  )
}
