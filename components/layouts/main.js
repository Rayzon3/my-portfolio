import Head from 'next/head'
import { Box, Container } from '@chakra-ui/layout'
import Navbar from '../layouts/navBar'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/catIcon.png" />
        <title>Rahul Bhardwaj - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
