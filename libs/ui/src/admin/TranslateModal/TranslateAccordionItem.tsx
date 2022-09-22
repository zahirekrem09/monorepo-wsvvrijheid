import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  ButtonProps,
  HStack,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import {
  StrapiLocale,
  StrapiTranslatableModel,
  TranslationStatus,
} from '@wsvvrijheid/types'
import { BsTranslate } from 'react-icons/bs'

import { Flags } from '../../components'
import { TranslateAccordionItemProps } from './types'

const localeColorSchemes = {
  en: 'purple',
  nl: 'orange',
  tr: 'cyan',
}

export const TranslateAccordionItem = <T extends StrapiTranslatableModel>({
  content,
  description,
  locale,
  missingTranslations,
  publishedAt,
  translationStatus,
  title,
  handleTranslate,
}: TranslateAccordionItemProps<T>) => {
  const colorScheme: Record<TranslationStatus, ButtonProps['colorScheme']> = {
    approved: 'green',
    pending: 'yellow',
    original: 'blue',
    rejected: 'red',
  }
  const backgrounds: Record<StrapiLocale, BoxProps['bg']> = {
    en: 'purple.100',
    nl: 'orange.100',
    tr: 'cyan.100',
  }

  return (
    <AccordionItem>
      <AccordionButton as={HStack} cursor="pointer">
        <HStack flex={'1'}>
          <HStack spacing={2} flex={'1'}>
            <Box as={Flags[locale]} />
            <HStack spacing={1}>
              <Text
                fontWeight="semibold"
                maxW={{ base: 150, lg: 300 }}
                noOfLines={1}
              >
                {title}
              </Text>

              {translationStatus && (
                <>
                  <Badge
                    display={{ base: 'none', lg: 'flex' }}
                    variant="outline"
                    colorScheme={colorScheme[translationStatus]}
                  >
                    {translationStatus}
                  </Badge>
                  <Box
                    display={{ base: 'block', lg: 'none' }}
                    boxSize={3}
                    rounded="full"
                    flexShrink={0}
                    bg={`${colorScheme[translationStatus]}.500`}
                  />
                </>
              )}

              <Badge
                display={{ base: 'none', lg: 'flex' }}
                variant="outline"
                colorScheme={publishedAt ? 'purple' : 'gray'}
              >
                {publishedAt ? 'Published' : 'Draft'}
              </Badge>
              <Box
                display={{ base: 'block', lg: 'none' }}
                boxSize={3}
                rounded="full"
                flexShrink={0}
                bg={publishedAt ? 'purple.500' : 'gray.500'}
              />
            </HStack>
          </HStack>

          {missingTranslations && (
            <ButtonGroup>
              {(translationStatus === 'approved' ||
                translationStatus === 'original') &&
                missingTranslations.map(missingTranslation => (
                  <Tooltip
                    key={missingTranslation}
                    label={`Translate to ${missingTranslation}`}
                    bg={backgrounds[missingTranslation]}
                    hasArrow
                  >
                    <Button
                      size="xs"
                      textTransform={'uppercase'}
                      leftIcon={<BsTranslate />}
                      colorScheme={localeColorSchemes[missingTranslation]}
                      variant="ghost"
                      onClick={e => {
                        e.stopPropagation()
                        handleTranslate([locale, missingTranslation])
                      }}
                    >
                      {missingTranslation}
                    </Button>
                  </Tooltip>
                ))}
            </ButtonGroup>
          )}
        </HStack>

        <AccordionIcon ml={4} />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Stack spacing={2}>
          {description && (
            <Stack>
              <Text size="lg" fontWeight={'semibold'}>
                Description
              </Text>
              <Text>{description}</Text>
            </Stack>
          )}
          {content && (
            <Stack>
              <Text size="lg" fontWeight={'semibold'}>
                Content
              </Text>
              {/* TODO: Display in markdown format */}
              <Box>{content}</Box>
            </Stack>
          )}
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  )
}
