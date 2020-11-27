import { theme } from "@chakra-ui/react";

const customTheme = {
  ...theme,
 styles: {
    global: (props) => ({
      body: {        
        fontFamily: "Lato, sans-serif"
      },
    }),
  }
};

export default customTheme;
