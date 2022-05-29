import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Stack,
  Center,
  Text
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/layouts/section'
import Paragraph from '../components/layouts/paragraph'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={5}
        align="center"
      >
        Hello, I&apos;m a software developer!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rahul Bhardwaj
          </Heading>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAplha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/pfp.jpeg"
            alt="pfp"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Hey, I am a software developer based in India. I like building stuff
          and learning new technologies. In my free time I work on cool
          projects. Passionate about web dev and ML.
        </Paragraph>
        <Box align="center" my={4}>
          <Button colorScheme="teal" rightIcon={<ChevronRightIcon />}>
            My Resume
          </Button>
        </Box>
        <Heading as="h3" variant="section-title" mt={20}>
          Skill Set
        </Heading>
        <Stack direction="row" mt={4} spacing="24px">
          <Image
            align="left"
            alt="TypeScript"
            width="26px"
            src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
          />
          <Image
            align="left"
            alt="Dart"
            width="26px"
            src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg"
          />
          <Image
            align="left"
            alt="React"
            width="26px"
            src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
          />
          <Image
            align="left"
            alt="Node.js"
            width="26px"
            src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
          />
          <Image
            align="left"
            alt="Flutter"
            width="26px"
            src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
          />
          <Image
            align="left"
            alt="Firebase"
            width="26px"
            src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
          />
          <Image
            align="left"
            alt="Postgresql"
            width="26px"
            src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
          />
          <Image
            align="left"
            alt="TensorFlow"
            width="26px"
            src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"
          />
        </Stack>
        <Heading as="h3" variant="section-title" mt={20}>
          Projects
        </Heading>
        <Center py={4}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '360px' }}
            height={{ sm: '200px', md: '18rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', '#202023')}
            boxShadow={'2xl'}
            padding={4}
          >
            <Stack flex={1} flexDirection="column" align="center" pt={2}>
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                Hygge
              </Heading>
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
              >
                Hygge is forum website I made, using Next.js, TypeORM and
                PostreSQL as the database. The frontend is made with tailwind.
                One can create communities and posts in it.
              </Text>
              <Stack
                width={'100%'}
                mt={'2rem'}
                direction={'row'}
                padding={2}
                alignItems={'center'}
              >
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
                
              </Stack>
            </Stack>
          </Stack>
        </Center>
      </Section>
    </Container>
  )
}

export default Page
