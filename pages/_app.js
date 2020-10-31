import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps}></Component>
    </ThemeProvider>
  );
}

export default MyApp;
