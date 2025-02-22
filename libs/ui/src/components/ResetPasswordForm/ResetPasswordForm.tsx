import { Button, Container, Heading, Stack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { toastMessage } from '@wsvvrijheid/utils'
import axios from 'axios'
import { TFunction, useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'

import { FormItem } from '../FormItem'
import { ResetPasswordFieldValues } from './types'

const schema = (t: TFunction) =>
  yup.object({
    password: yup
      .string()
      .min(8, t('login.password.warning'))
      .required(t('login.password.required'))
      .matches(RegExp('(.*[a-z].*)'), t('login.password.matches.lowercase'))
      .matches(RegExp('(.*[A-Z].*)'), t('login.password.matches.uppercase'))
      .matches(RegExp('(.*\\d.*)'), t('login.password.matches.number'))
      .matches(
        RegExp('[!@#$%^&*(),.?":{}|<>]'),
        t('login.password.matches.special'),
      ),
    passwordConfirmation: yup
      .string()
      .oneOf(
        [yup.ref('password'), null],
        t('login.password.matches.password-match'),
      ),
  })

export const ResetPasswordForm = () => {
  const { t } = useTranslation()
  const router = useRouter()

  const { code } = router.query

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResetPasswordFieldValues>({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
    resolver: yupResolver(schema(t)),
    mode: 'all',
  })

  const { mutate, isLoading } = useMutation<
    unknown,
    unknown,
    ResetPasswordFieldValues
  >({
    mutationKey: ['reset-password'],
    mutationFn: (data: ResetPasswordFieldValues) =>
      axios.post('/api/auth/reset-password', {
        code,
        password: data.password,
        passwordConfirmation: data.passwordConfirmation,
      }),
    onSuccess: () => {
      toastMessage(null, t`login.reset-pass-header.text`, 'success')
      reset()
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    },
    onError: () => {
      toastMessage(t`error`, null, 'error')
      setTimeout(() => {
        reset()
      }, 2000)
    },
  })

  const onSubmit: SubmitHandler<ResetPasswordFieldValues> = data => {
    mutate(data)
  }

  return (
    <Container
      maxW="lg"
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Stack
        spacing="8"
        shadow="base"
        bg="white"
        p={{ base: 8, lg: 12 }}
        rounded="lg"
      >
        <Stack spacing="6">
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading>{t('login.reset-pass-header.title')}</Heading>
          </Stack>
        </Stack>
        <Stack spacing="6" as="form" onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing="5">
            <FormItem
              id="password"
              type="password"
              label={t('login.password.title')}
              autoComplete="current-password"
              register={register}
              errors={errors}
              name="password"
            />
            <FormItem
              id="passwordConfirmation"
              type="password"
              label={t('login.password.password-confirm')}
              autoComplete="current-password"
              register={register}
              errors={errors}
              name="passwordConfirmation"
            />
          </Stack>
          <Stack spacing="6">
            <Button type="submit" colorScheme="blue" isLoading={isLoading}>
              {t('login.forgot-pass-header.button')}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}
