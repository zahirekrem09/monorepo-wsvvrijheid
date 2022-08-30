import { Button } from '@chakra-ui/react'
import { Container, Navigate, useAuth } from '@wsvvrijheid/ui'
import axios from 'axios'
import { useRouter } from 'next/router'

const Index = () => {
  const { user, isLoggedIn, isLoading } = useAuth()

  const router = useRouter()

  const onLogout = async () => {
    axios.post('/api/auth/logout').then(() => {
      router.push('/login')
    })
  }

  return (
    <Container>
      {isLoggedIn ? (
        <Button isLoading={isLoading} colorScheme="primary" onClick={onLogout}>
          Logout
        </Button>
      ) : (
        <Navigate href="/login">Login</Navigate>
      )}

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Container>
  )
}

export default Index