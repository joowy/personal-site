import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  IconButton,
  Link,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import Layout from '../components/layouts/article'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I am a fourth-year student studying data science at Pennsylvania
        State University.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Joseph Stout
          </Heading>
          <p>Software Engineer (Back-end / Cloud / DevOps)</p>

          <Stack mt={4} spacing={4} direction="row" align="center">
            <Link
              href="https://1drv.ms/b/s!ApaXZwwzewSWkKUASWKUlNdYAPRXYw"
              target="_blank"
            >
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
                size="md"
                variant="solid"
              >
                Resume / CV
              </Button>
            </Link>
            <Link href="https://github.com/joowy" target="_blank">
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="github"
                fontSize="20px"
                icon={<BsGithub />}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/joseph-stout/"
              target="_blank"
            >
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="linkedin"
                fontSize="20px"
                icon={<BsLinkedin />}
              />
            </Link>
          </Stack>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/me.jpg"
              alt="Profile image"
              borderRadius="full"
              width="110%"
              height="150%"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
