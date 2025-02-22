import { FC, useState } from 'react'

import {
  Stack,
  Textarea,
  ButtonGroup,
  Button,
  useDisclosure,
  Box,
  Grid,
  Center,
  useBoolean,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { UploadFile } from '@wsvvrijheid/types'
import {
  useDeleteCollection,
  useUnpublishModel,
  useUpdateCollection,
  usePublishModel,
} from '@wsvvrijheid/utils'
import { useTranslation } from 'next-i18next'
import { useForm } from 'react-hook-form'
import { TFunction } from 'react-i18next'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { IoMdClose, IoMdCloudUpload } from 'react-icons/io'
import {
  MdOutlineUnpublished,
  MdClose,
  MdOutlineCheck,
  MdOutlinePublishedWithChanges,
} from 'react-icons/md'
import * as yup from 'yup'

import { FilePicker, FormItem } from '../../components'
import { WImage } from '../../components'
import { WConfirm, WConfirmProps } from '../../components/WConfirm'
import { CollectionEditFormProps, CollectionEditFormFieldValues } from './types'

const schema = (t: TFunction) =>
  yup.object({
    title: yup.string().required(t`art.create.form.title-required`),
    description: yup.string().required(t`art.create.form.description-required`),
  })

export const CollectionEditForm: FC<CollectionEditFormProps> = ({
  collection,
  isEdit,
  setEdit,
}) => {
  const id = collection.id
  const isPublish = collection.publishedAt
  const { t } = useTranslation()

  const queryKey = ['collection', id]

  const [images, setImages] = useState<Blob[]>([])
  const [changeImage, setChangeImage] = useBoolean(false)
  const updateCollectionMutation = useUpdateCollection(queryKey)
  const unpublishCollectionMutation = useUnpublishModel(
    'api/collections',
    queryKey,
  )
  const publishCollectionMutation = usePublishModel('api/collections', queryKey)
  const deleteCollectionMutation = useDeleteCollection()

  const confirmDisclosure = useDisclosure()
  const [confirmState, setConfirmState] =
    useState<Omit<WConfirmProps, 'onClose' | 'isOpen' | 'onOpen'>>()

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset: resetForm,
  } = useForm<CollectionEditFormFieldValues>({
    resolver: yupResolver(schema(t)),
    mode: 'all',
    defaultValues: {
      title: collection.title,
      description: collection.description,
    },
  })

  const onSaveCollection = async (data: CollectionEditFormFieldValues) => {
    updateCollectionMutation.mutate(
      {
        id,
        ...data,
        // FIXME: https://github.com/strapi/strapi/issues/13041#issuecomment-1095496718
        image: images[0],
      },
      {
        onSuccess: () => {
          setEdit(false)
          setChangeImage.off()
        },
      },
    )
  }

  const onCancel = () => {
    resetForm()
    setEdit(false)
    setImages([])
  }

  const onEdit = () => setEdit(true)

  const onUnPublish = () => {
    confirmDisclosure.onOpen()
    setConfirmState({
      title: 'Un Publish Collection',
      description: `Are you sure you want to unpublish this collection ?`,
      buttonText: 'Unpublish',
      onConfirm: async () => {
        await unpublishCollectionMutation.mutateAsync({ id })

        setConfirmState(undefined)
        confirmDisclosure.onClose()
      },
    })
  }

  const onPublish = () => {
    confirmDisclosure.onOpen()
    setConfirmState({
      title: 'Publish Collection',
      description: `Are you sure you want to publish this collection ?`,
      buttonText: 'Publish',
      onConfirm: async () => {
        await publishCollectionMutation.mutateAsync({ id })

        setConfirmState(undefined)
        confirmDisclosure.onClose()
      },
    })
  }

  const onDelete = () => {
    confirmDisclosure.onOpen()
    setConfirmState({
      isWarning: true,
      title: 'Delete Collection',
      description: 'Are you sure you want to delete this collection?',
      buttonText: 'Delete',
      onConfirm: async () => {
        await deleteCollectionMutation.mutateAsync({ id })
        setConfirmState(undefined)
        confirmDisclosure.onClose()
      },
    })
  }

  return (
    <>
      {confirmState && (
        <WConfirm
          isOpen={confirmDisclosure.isOpen}
          onClose={confirmDisclosure.onClose}
          {...confirmState}
        />
      )}

      <Grid
        gap={{ base: 4, lg: 8 }}
        alignItems="stretch"
        gridTemplateColumns={{ base: '1fr', lg: '300px 1fr' }}
      >
        <Box maxH={{ base: 300, lg: 'full' }} rounded={'md'} overflow="hidden">
          {changeImage ? (
            <Stack>
              <FilePicker setFiles={setImages} />
              <Button
                leftIcon={<IoMdClose />}
                size="sm"
                onClick={setChangeImage.toggle}
              >
                Cancel
              </Button>
            </Stack>
          ) : (
            <Box pos="relative" role="group" h="full">
              <WImage
                src={collection.image as UploadFile}
                alt={collection.title}
                hasZoom={true}
              />
              {isEdit && (
                <Center
                  pos="absolute"
                  top={0}
                  left={0}
                  boxSize="full"
                  bg="blackAlpha.500"
                >
                  <Button
                    leftIcon={<IoMdCloudUpload />}
                    size="sm"
                    onClick={setChangeImage.toggle}
                  >
                    Change Image
                  </Button>
                </Center>
              )}
            </Box>
          )}
        </Box>

        <Stack
          as="form"
          onSubmit={handleSubmit(onSaveCollection)}
          w="full"
          spacing={4}
        >
          <FormItem
            name="title"
            label={t('title')}
            isRequired
            errors={errors}
            register={register}
            isDisabled={!isEdit}
            _disabled={{
              bg: '#EDF2F7',
              color: '#A0AEC0',
            }}
          />
          <FormItem
            name="description"
            label={t('description')}
            as={Textarea}
            flex={1}
            isRequired
            errors={errors}
            register={register}
            isDisabled={!isEdit}
            h="180px"
            _disabled={{
              bg: '#EDF2F7',
              color: '#A0AEC0',
            }}
          />
          {/* <FormItem
          name="content"
          label={t('content')}
          as={Textarea}
          isRequired
          errors={errors}
          register={register}
        /> */}
          <ButtonGroup alignSelf="end">
            <Button
              onClick={onDelete}
              mr={3}
              leftIcon={<BsTrash />}
              variant={'ghost'}
              colorScheme={'gray'}
              fontSize="sm"
            >
              Delete
            </Button>
            <Button
              onClick={isPublish ? onUnPublish : onPublish}
              mr={3}
              leftIcon={
                isPublish ? (
                  <MdOutlineUnpublished />
                ) : (
                  <MdOutlinePublishedWithChanges />
                )
              }
              variant={'ghost'}
              colorScheme={'gray'}
              fontSize="sm"
            >
              {isPublish ? 'Unpublish' : 'Publish'}
            </Button>

            {!isEdit ? (
              <Button
                onClick={onEdit}
                mr={3}
                leftIcon={<AiOutlineEdit />}
                variant={'ghost'}
                colorScheme={'gray'}
                fontSize="sm"
              >
                Edit
              </Button>
            ) : (
              <>
                <Button
                  onClick={onCancel}
                  mr={3}
                  leftIcon={<MdClose />}
                  colorScheme={'gray'}
                  fontSize="sm"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  mr={3}
                  leftIcon={<MdOutlineCheck />}
                  colorScheme={'primary'}
                  fontSize="sm"
                  isDisabled={!isValid || (changeImage && !images.length)}
                >
                  Save
                </Button>
              </>
            )}
          </ButtonGroup>
        </Stack>
      </Grid>
    </>
  )
}
