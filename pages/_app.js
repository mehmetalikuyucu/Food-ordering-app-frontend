import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../layout/global";

function MyApp({ Component, pageProps }) {
  
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>)
}

export default MyApp
