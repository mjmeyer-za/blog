import React from 'react';
import { ColorModeProvider, ChakraProvider } from '@chakra-ui/core';
import { AppProps } from 'next/app';
import customTheme from '../theme';

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}
export default App;
