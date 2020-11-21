import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Component {...pageProps}></Component>
    </ChakraProvider>
  );
}

export default MyApp;
