import { Box, Text } from "@chakra-ui/react";

export default function Sticker({ children }) {
  return (
    <Box w="50px" h="50px" zIndex="1" mt="-38px" ml="-40px" pos="absolute">
      <Box
        w="100%"
        h="100%"
        background="url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/13034/sticker.png) top center no-repeat"
        bgSize="contain"
      ></Box>
      <Text
        pos="absolute"
        w="100%"
        top="5px"
        left="20px"
        fontSize="33px"
        as="i"
        fontWeight="400"
        textShadow="1px 1px #ff0000"
      >
        {children}
      </Text>
    </Box>
  );
}
