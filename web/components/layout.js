import {
  Button,
  Flex,
  Heading,
  Icon,
  Link,
  useColorMode,
} from '@chakra-ui/core';
import NextLink from 'next/link';

function Layout({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: 'purple.50', dark: 'purple.900' };
  const color = { light: 'purple.700', dark: 'gray.50' };
  return (
    <Flex
      align="center"
      justify="center"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      height="100vh"
    >
      <Flex maxW="540px" marginX="auto" direction="column">
        <Heading as="h1" pb="10">
          <NextLink href="/" as={`/`}>
            <Link>MJ Meyer's digital garden</Link>
          </NextLink>

          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <Icon name="sun" /> : <Icon name="moon" />}
          </Button>
        </Heading>
        {children}
      </Flex>
    </Flex>
  );
}

export default Layout;
