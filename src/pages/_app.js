import '@/styles/globals.css'
import { ChakraProvider,CSSReset } from '@chakra-ui/react';
import { Global,css } from '@emotion/react';




export default function App({ Component, pageProps }) {
  return (
          <ChakraProvider>
              <Component {...pageProps} />
          </ChakraProvider>
        )
}
