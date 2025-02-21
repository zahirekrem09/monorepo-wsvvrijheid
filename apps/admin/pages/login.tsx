import { useEffect } from 'react'

import { Box } from '@chakra-ui/react'
import { AdminLoginForm } from '@wsvvrijheid/ui'
import { checkAuth, useAppDispatch } from '@wsvvrijheid/utils'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

import i18nConfig from '../next-i18next.config'

const LoginPage = () => {
  const dispatch = useAppDispatch()

  const router = useRouter()

  useEffect(() => {
    dispatch(checkAuth())
      .unwrap()
      .then(auth => {
        if (auth.isLoggedIn) {
          router.push('/')
        }
      })
  }, [router, dispatch])

  return (
    <Box minH="inherit" h="full">
      <AdminLoginForm />
    </Box>
  )
}

export default LoginPage

export const getStaticProps = async context => {
  const { locale } = context

  const title = {
    en: 'Login',
    tr: 'Giriş',
    nl: 'Login',
  }

  const description = {
    en: '',
    tr: '',
    nl: '',
  }
  const seo = {
    title: title[locale],
    description: description[locale],
  }

  return {
    props: {
      seo,
      ...(await serverSideTranslations(locale, ['common'], i18nConfig)),
    },
  }
}
