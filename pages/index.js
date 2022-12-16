import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Stack,
  Center,
  Tooltip
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/layouts/section'
import Paragraph from '../components/layouts/paragraph'
import Link from 'next/link'
import Card from '../components/card'
import { data } from '../projectData'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('#6ef4b5', 'gray.950')}
        p={3}
        mb={5}
        align="center"
        border="2px"
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
            borderColor={useColorModeValue('#4c347c', 'whiteAlpha.800')}
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
        <Box
          borderRadius="lg"
          bg={useColorModeValue('#6ef4b5', 'gray.950')}
          p={3}
          mb={5}
          align="center"
          border="2px"
          mt={'4px'}
        >
          <Paragraph>
            Hey! I am a software developer based in India. I like building stuff
            and learning new technologies. In my free time I work on cool
            projects. Passionate about web development and ML.
          </Paragraph>
        </Box>

        <Box align="center" my={4}>
          <Link href="https://drive.google.com/file/d/1EQ7CnuJUJ2DfFgYex05NipTNbV0KxxUA/view?usp=sharing">
            <Button
              colorScheme="white"
              bg={useColorModeValue('#f4ed19', 'gray.950')}
              rightIcon={<ChevronRightIcon />}
              rounded="full"
              borderColor={useColorModeValue('black', 'white')}
              variant="outline"
              border="2px"
            >
              My Resume
            </Button>
          </Link>
        </Box>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title" mt={20}>
          Skill Set
        </Heading>
        <Stack direction="row" mt={4} spacing={{ base: 'auto', md: '24px' }}>
          <Tooltip
            label="TypeScript"
            border="2px"
            textColor={useColorModeValue('gray.900', 'white')}
            bg={useColorModeValue('#6ef4b5', 'gray.900')}
            borderColor={useColorModeValue('gray.900', 'white')}
            rounded="md"
          >
            <Box
              boxSize="fit-content"
              textAlign={'center'}
              alignContent={'center'}
              alignItems={'center'}
              bg={useColorModeValue('#4c347c', 'gray.900')}
              w="10"
              h="10"
              rounded={'md'}
              border="2px"
              _hover={{ bg: useColorModeValue('gray.900', 'white') }}
            >
              <Center padding={1.5}>
                <Image
                  align="center"
                  alignContent={'center'}
                  alignItems={'center'}
                  alt="TypeScript"
                  width="26px"
                  src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
                />
              </Center>
            </Box>
          </Tooltip>
          <Tooltip
            label="Node.Js"
            border="2px"
            textColor={useColorModeValue('gray.900', 'white')}
            bg={useColorModeValue('#6ef4b5', 'gray.900')}
            borderColor={useColorModeValue('gray.900', 'white')}
            rounded="md"
          >
            <Box
              boxSize="fit-content"
              textAlign={'center'}
              alignContent={'center'}
              alignItems={'center'}
              bg={useColorModeValue('#4c347c', 'gray.900')}
              w="10"
              h="10"
              rounded={'md'}
              border="2px"
              _hover={{ bg: useColorModeValue('gray.900', 'white') }}
            >
              <Center padding={1.5}>
                <Image
                  align="left"
                  alt="Node.js"
                  width="26px"
                  src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                />
              </Center>
            </Box>
          </Tooltip>
          <Tooltip
            label="React"
            border="2px"
            textColor={useColorModeValue('gray.900', 'white')}
            bg={useColorModeValue('#6ef4b5', 'gray.900')}
            borderColor={useColorModeValue('gray.900', 'white')}
            rounded="md"
          >
            <Box
              boxSize="fit-content"
              textAlign={'center'}
              alignContent={'center'}
              alignItems={'center'}
              bg={useColorModeValue('#4c347c', 'gray.900')}
              w="10"
              h="10"
              rounded={'md'}
              border="2px"
              _hover={{ bg: useColorModeValue('gray.900', 'white') }}
            >
              <Center padding={1.5}>
                <Image
                  align="left"
                  alt="React"
                  width="26px"
                  src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                />
              </Center>
            </Box>
          </Tooltip>
          <Tooltip
            label="PostgreSQL"
            border="2px"
            textColor={useColorModeValue('gray.900', 'white')}
            bg={useColorModeValue('#6ef4b5', 'gray.900')}
            borderColor={useColorModeValue('gray.900', 'white')}
            rounded="md"
          >
            <Box
              boxSize="fit-content"
              textAlign={'center'}
              alignContent={'center'}
              alignItems={'center'}
              bg={useColorModeValue('#4c347c', 'gray.900')}
              w="10"
              h="10"
              rounded={'md'}
              border="2px"
              _hover={{ bg: useColorModeValue('gray.900', 'white') }}
            >
              <Center padding={1.5}>
                <Image
                  align="left"
                  alt="Postgresql"
                  width="26px"
                  src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
                />
              </Center>
            </Box>
          </Tooltip>
          <Tooltip
            label="MongoDB"
            border="2px"
            textColor={useColorModeValue('gray.900', 'white')}
            bg={useColorModeValue('#6ef4b5', 'gray.900')}
            borderColor={useColorModeValue('gray.900', 'white')}
            rounded="md"
          >
            <Box
              boxSize="fit-content"
              textAlign={'center'}
              alignContent={'center'}
              alignItems={'center'}
              bg={useColorModeValue('#4c347c', 'gray.900')}
              w="10"
              h="10"
              rounded={'md'}
              border="2px"
              _hover={{ bg: useColorModeValue('gray.900', 'white') }}
            >
              <Center padding={1.5}>
                <Image
                  align="left"
                  alt="MongoDB"
                  width="26px"
                  src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                />
              </Center>
            </Box>
          </Tooltip>
          <Tooltip
            label="GraphQL"
            border="2px"
            textColor={useColorModeValue('gray.900', 'white')}
            bg={useColorModeValue('#6ef4b5', 'gray.900')}
            borderColor={useColorModeValue('gray.900', 'white')}
            rounded="md"
          >
            <Box
              boxSize="fit-content"
              textAlign={'center'}
              alignContent={'center'}
              alignItems={'center'}
              bg={useColorModeValue('#4c347c', 'gray.900')}
              w="10"
              h="10"
              rounded={'md'}
              border="2px"
              _hover={{ bg: useColorModeValue('gray.900', 'white') }}
            >
              <Center padding={1.5}>
                <Image
                  align="left"
                  alt="GraphQL"
                  width="26px"
                  src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
                />
              </Center>
            </Box>
          </Tooltip>
          <Tooltip
            label="Docker"
            border="2px"
            textColor={useColorModeValue('gray.900', 'white')}
            bg={useColorModeValue('#6ef4b5', 'gray.900')}
            borderColor={useColorModeValue('gray.900', 'white')}
            rounded="md"
          >
            <Box
              boxSize="fit-content"
              textAlign={'center'}
              alignContent={'center'}
              alignItems={'center'}
              bg={useColorModeValue('#4c347c', 'gray.900')}
              w="10"
              h="10"
              rounded={'md'}
              border="2px"
              _hover={{ bg: useColorModeValue('gray.900', 'white') }}
            >
              <Center padding={1.5}>
                <Image
                  align="left"
                  alt="Docker"
                  width="26px"
                  src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg"
                />
              </Center>
            </Box>
          </Tooltip>
        </Stack>
      </Section>
      <Section delay={0.6}>
        <Heading as="h3" variant="section-title" mt={20}>
          Projects
        </Heading>
        <Stack flex={1} flexDirection="column" align="center" pt={2}>
          {
            data.map((project, idx) => (
              <Stack key={idx} flex={1} flexDirection="column" align="center" pt={2}>
                <Card id={project.id} title={project.title} description={project.description} repoLink={project.gitHub_link}/>
              </Stack>
            ))
          }
        </Stack>
      </Section>
    </Container>
  )
}

export default Page
