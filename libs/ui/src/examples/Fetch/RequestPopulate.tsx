/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'

import {
  Button,
  Code,
  HStack,
  IconButton,
  Input,
  Select,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { StrapiLocale, StrapiModel, StrapiUrl } from '@wsvvrijheid/types'
import { request } from '@wsvvrijheid/utils'
import { FaDownload, FaPlus } from 'react-icons/fa'

import { LanguageSwitcher } from '../../admin'

export const URL_OPTIONS: StrapiUrl[] = [
  'api/activities',
  'api/announcements',
  'api/applicants',
  'api/arts',
  'api/blogs',
  'api/categories',
  'api/collections',
  'api/comments',
  'api/competitions',
  'api/competitions',
  'api/feedbacks',
  'api/hashtags',
  'api/jobs',
  'api/lang-roles',
  'api/mentions',
  'api/news',
  'api/platforms',
  'api/posts',
  'api/privacy',
  'api/recommended-topics',
  'api/recommended-tweets',
  'api/saved-tweets',
  'api/tags',
  'api/term',
  'api/timelines',
  'api/trend',
  'api/tweet-users',
  'api/tweets',
  'api/users',
  'api/volunteers',
]

export const RequestPopulate = () => {
  const [url, setUrl] = useState<StrapiUrl>('api/blogs')
  const [locale, setLocale] = useState<StrapiLocale>('en')
  const [populateValue, setPopulateValue] = useState<string>('')
  const [fieldValue, setFieldValue] = useState<string>('')
  const [populateFields, setPopulateFields] = useState<string[]>([''])
  const [fields, setFields] = useState<string[]>([])

  const requestArgs = {
    url,
    populate: populateFields,
    fields,
    locale,
  }

  const fetchData = async () => {
    const data = await request<StrapiModel[]>(requestArgs)
    return data.data || null
  }

  const requestQuery = useQuery({
    queryKey: ['request', url, populateFields],
    queryFn: fetchData,
    enabled: false,
  })

  console.log('requestQuery', requestQuery)

  return (
    <Stack>
      <Stack p={4} pos="sticky" top={4} bg="white">
        <HStack>
          <LanguageSwitcher defaultLocale="en" onLanguageSwitch={setLocale} />
          <Select
            value={url}
            onChange={e => setUrl(e.target.value as StrapiUrl)}
          >
            {URL_OPTIONS.map(opt => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </Select>
          <Input
            placeholder="Add field"
            value={fieldValue}
            onChange={e => setFieldValue(e.target.value)}
          />
          <IconButton
            aria-label="Add field"
            colorScheme="blue"
            icon={<FaPlus />}
            flexShrink={0}
            isDisabled={!fieldValue}
            onClick={() => {
              setFields(prev => [...prev, fieldValue])
              setFieldValue('')
            }}
          />
          <Input
            placeholder="Add populate field"
            value={populateValue}
            onChange={e => setPopulateValue(e.target.value)}
          />
          <IconButton
            aria-label="Add populate field"
            colorScheme="green"
            icon={<FaPlus />}
            flexShrink={0}
            isDisabled={!populateValue}
            onClick={() => {
              setPopulateFields(prev => [...prev, populateValue])
              setPopulateValue('')
            }}
          />

          <Button
            isLoading={requestQuery.isFetching}
            leftIcon={<FaDownload />}
            colorScheme="purple"
            flexShrink={0}
            onClick={() => requestQuery.refetch()}
          >
            Fetch
          </Button>
        </HStack>
        <HStack>
          <Text>Fields:</Text>
          <HStack>
            {populateFields
              ?.filter(p => p)
              .map((p, i) => (
                <Tag
                  size="sm"
                  key={i}
                  borderRadius="full"
                  variant="solid"
                  colorScheme="green"
                >
                  <TagLabel>{p}</TagLabel>
                  <TagCloseButton
                    onClick={() =>
                      setPopulateFields(prev => prev?.slice(i + 1, i + 2))
                    }
                  />
                </Tag>
              ))}
          </HStack>
        </HStack>
        <HStack>
          <Text>Populate:</Text>
          <HStack>
            {fields
              ?.filter(f => f)
              .map((f, i) => (
                <Tag
                  size="sm"
                  key={i}
                  borderRadius="full"
                  variant="solid"
                  colorScheme="blue"
                >
                  <TagLabel>{f}</TagLabel>
                  <TagCloseButton
                    onClick={() => setFields(prev => prev?.slice(i + 1, i + 2))}
                  />
                </Tag>
              ))}
          </HStack>
        </HStack>
      </Stack>
      <HStack align="start">
        <Code
          pos="sticky"
          zIndex={-1}
          top={40}
          p={2}
          bg="orange.50"
          flexShrink={0}
          overflowX="auto"
        >
          <pre>{JSON.stringify(requestArgs, null, 2)}</pre>
        </Code>
        <Code p={2} overflowX="auto">
          <pre>{JSON.stringify(requestQuery.data, null, 2)}</pre>
        </Code>
      </HStack>
    </Stack>
  )
}
