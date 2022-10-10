import { FC } from 'react'

import AsyncSelect from 'react-select/async'

import { WAsyncSelectProps } from './types'

const filterColors = (inputValue: string) => {
  return colourOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase()),
  )
}

const promiseOptions = (inputValue: string) =>
  new Promise<ColourOption[]>(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue))
    }, 1000)
  })

export const WAsyncSelect: FC<WAsyncSelectProps> = () => {
  return (
    <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} />
  )
}
