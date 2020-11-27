import { theme } from "@chakra-ui/react";

const customTheme = {
  ...theme,
 styles: {
    global: (props) => ({
      body: {        
        fontFamily: "Oxygen, sans-serif"
      },
    }),
  }
};

export default customTheme;
