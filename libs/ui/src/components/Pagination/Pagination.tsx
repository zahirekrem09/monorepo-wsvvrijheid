import { FC } from 'react'

import { Button, ButtonGroup, IconButton } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'

import { PaginationProps } from './types'
import { usePagination, DOTS } from './usePagination'

// https://stackblitz.com/edit/react-1zaeqk
export const Pagination: FC<PaginationProps> = ({
  onPageChange,
  totalCount,
  siblingCount = 0,
  currentPage,
  ...rest
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
  })

  if (!paginationRange || paginationRange.length === 0) return null

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <ButtonGroup variant="outline" colorScheme="primary" isAttached {...rest}>
      <IconButton
        aria-label="Previous page"
        icon={<TbChevronLeft />}
        disabled={currentPage === 1}
        onClick={onPrevious}
      />
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return (
            <IconButton
              key={pageNumber}
              aria-label="dots"
              icon={<BsThreeDots />}
            />
          )
        }

        const isCurrentPage = pageNumber === currentPage

        return (
          <Button
            key={pageNumber}
            {...(isCurrentPage && { variant: 'solid' })}
            onClick={() => onPageChange(pageNumber as number)}
          >
            {pageNumber}
          </Button>
        )
      })}
      <IconButton
        aria-label="Next page"
        icon={<TbChevronRight />}
        disabled={lastPage === currentPage}
        onClick={onNext}
      />
    </ButtonGroup>
  )
}
