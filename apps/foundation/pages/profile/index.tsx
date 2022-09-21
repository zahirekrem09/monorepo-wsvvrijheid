import React from 'react'

import { AuthenticatedUserProfile, useAuth } from '@wsvvrijheid/ui'
import { sessionOptions } from '@wsvvrijheid/utils'
import { withIronSessionSsr } from 'iron-session/next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Layout } from '../../components'
import i18nConfig from '../../next-i18next.config'

const Profile = ({ seo }) => {
  const auth = useAuth()

  return (
    <Layout seo={seo} isDark>
      {auth.user && <AuthenticatedUserProfile auth={auth} />}
    </Layout>
  )
}

export default Profile

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  locale,
}) {
  const auth = req.session

  if (!auth.user) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      props: {},
    }
  }

  const seo = {
    title: auth.user.username,
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], i18nConfig)),
      seo,
    },
  }
},
sessionOptions)