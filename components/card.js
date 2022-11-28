import {
  Heading,
  Box,
  Center,
  Stack,
  Button,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from './layouts/paragraph'

export default function Card(data) {
  return (
    <Center py={4} alignItems={'center'} alignContent={'center'}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.950')}
        border="2px"
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
        alignItems={'center'}
      >
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {data.title}
        </Heading>
        <Paragraph>{data.description}</Paragraph>
        <Stack
          width={'100%'}
          mt={'2rem'}
          direction={'row'}
          padding={2}
          alignItems={'center'}
          alignContent={'center'}
        >
          <Link href={data.repoLink}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200'
              }}
            >
              View Repository
            </Button>
          </Link>
          {/* <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500'
            }}
            _focus={{
              bg: 'blue.500'
            }}
          >
            Follow
          </Button> */}
        </Stack>
      </Box>
    </Center>
  )
}
