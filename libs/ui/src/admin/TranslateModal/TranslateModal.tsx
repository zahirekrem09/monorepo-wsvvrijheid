import { useState } from 'react'

import {
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  Box,
  Button,
  ModalFooter,
  Accordion,
  IconButton,
} from '@chakra-ui/react'
import { StrapiTranslatableModel } from '@wsvvrijheid/types'
import { AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'

import { TranslateAccordionItem } from './TranslateAccordionItem'
import { TranslateForm } from './TranslateForm'
import { TranslateModalProps, TranslationKey } from './types'
import { useModelTranslations } from './useModelTranslations'

export const TranslateModal = <T extends StrapiTranslatableModel>({
  isOpen,
  model,
  onApprove,
  onClose,
  onSave,
}: TranslateModalProps<T>) => {
  const [translationKey, setTranslationKey] = useState<TranslationKey>()
  const [step, setStep] = useState(0)

  const { modelsWithMissingTranslations, localizedModels } =
    useModelTranslations(model)

  const handleTranslate = (key: TranslationKey) => {
    setStep(prev => prev + 1)
    setTranslationKey(key)
  }

  const handleReturn = () => {
    if (step === 0) onClose()
    else setStep(prev => prev - 1)
  }

  const handleSaveDraft = () => alert('Draft')

  const handleSendTranslation = () => alert('Sent')

  return (
    <Box>
      <Modal onClose={onClose} isOpen={isOpen} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent maxW="95vw" h="95vh">
          <ModalHeader
            fontSize="xl"
            fontWeight="semibold"
            borderBottomWidth={step > 0 ? 1 : 0}
          >
            {step > 0 && (
              <IconButton
                aria-label="return"
                icon={<AiOutlineArrowLeft />}
                onClick={handleReturn}
                variant="ghost"
                mr={2}
                size="sm"
              />
            )}
            Translate
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {step === 0 && (
              <Accordion size={'lg'} allowToggle allowMultiple defaultIndex={0}>
                {modelsWithMissingTranslations.map(model => (
                  <TranslateAccordionItem
                    {...model}
                    handleTranslate={handleTranslate}
                  />
                ))}
              </Accordion>
            )}
            {step === 1 && translationKey && (
              <TranslateForm
                localizedModels={localizedModels}
                translationKey={translationKey}
              />
            )}
          </ModalBody>
          {step === 1 && (
            <ModalFooter borderTopWidth={1}>
              <HStack spacing={3}>
                <Button
                  display={{ base: 'none', lg: 'flex' }}
                  onClick={handleReturn}
                  leftIcon={<AiOutlineArrowLeft />}
                >
                  Go Back
                </Button>
                <Button
                  onClick={handleSaveDraft}
                  colorScheme={'purple'}
                  leftIcon={<AiOutlineCheck />}
                >
                  Save Draft
                </Button>
                <Button
                  onClick={handleSendTranslation}
                  colorScheme={'blue'}
                  leftIcon={<AiOutlineCheck />}
                >
                  Send Translation
                </Button>
              </HStack>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </Box>
  )
}
