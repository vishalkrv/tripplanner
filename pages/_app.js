import { ChakraProvider } from "@chakra-ui/react";
import { StoreProvider } from "easy-peasy";
import store from "../state/store";
import theme from "../styles/theme";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <StoreProvider store={store}>
        <Component {...pageProps}></Component>
      </StoreProvider>
    </ChakraProvider>
  );
}

export default MyApp;
