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
import Link from 'next/link'

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
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Hey! I am a software developer based in India. I like building stuff
          and learning new technologies. In my free time I work on cool
          projects. Passionate about web development and ML.
        </Paragraph>
        <Box align="center" my={4}>
          <Link href="https://drive.google.com/file/d/1_S9IkLY7pmDrSsyfcQyil0w2kk5xqOZn/view?usp=sharing">
          <Button colorScheme="teal" rightIcon={<ChevronRightIcon />}>
            My Resume
          </Button>
          </Link>
        </Box>
      </Section>
      <Section delay={0.4}>
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
      </Section>
      <Section delay={0.6}>
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
                Sentiment Analysis Web App
              </Heading>
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
              >
                This is a web application that predicts the sentiment of a
                sentence or paragraph using the LSTM and CNN deep learning
                models. I trained the model the sentiment-140 dataset which
                consists of 1.6 million tweets.
              </Text>
              <Stack
                width={'100%'}
                mt={'2rem'}
                direction={'row'}
                padding={2}
                alignItems={'center'}
              >
                <Link href="https://github.com/Rayzon3/Natural-Language-Processing">
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
              </Stack>
            </Stack>
          </Stack>
        </Center>
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
                <Link href="https://github.com/Rayzon3/hygge">
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
              </Stack>
            </Stack>
          </Stack>
        </Center>
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
                Kaarva
              </Heading>
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
              >
                This a cross platform moblie application made in Flutter. 
                The users can use this app to carpool with their co-workers at their work
                place easily.
              </Text>
              <Stack
                width={'100%'}
                mt={'2rem'}
                direction={'row'}
                padding={2}
                alignItems={'center'}
              >
                <Link href="https://github.com/Rayzon3/kaarva">
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
              </Stack>
            </Stack>
          </Stack>
        </Center>
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
                PathFinder
              </Heading>
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
              >
                This web app shows the visualization of the very popular
                a-star(A*) algorithm at every step. The application was made
                with Next.js in TypeScript.
              </Text>
              <Stack
                width={'100%'}
                mt={'2rem'}
                direction={'row'}
                padding={2}
                alignItems={'center'}
              >
                <Link href="https://github.com/Rayzon3/pathfinder">
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
                <Link href="https://pathfinder-six.vercel.app/">
                  <Button
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    _focus={{
                      bg: 'gray.200'
                    }}
                  >
                    Live Demo
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Center>
      </Section>
    </Container>
  )
}

export default Page
