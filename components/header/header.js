import Link from "next/link";
import { Flex, Text, Box } from "@chakra-ui/react";
import LoginToggle from "../loginToggle/loginToggle";

export default function Header() {
  return (
    <Box
      as="header"
      position="fixed"
      w="100%"
      color="white"
      h="70px"
      zIndex="9"
      padding="0px 30px"
    >
      <Flex alignItems="center" justifyContent="space-between" h="100%">
        <Link href="/">
          <Box as="a" h="100%">
            <Flex
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              w="200px"
              h="100%"
              backgroundImage={`url("/assets/logo5.png")`}
            ></Flex>
          </Box>
        </Link>
        <Flex alignItems="center" justifyContent="space-between" w="350px">
          <Link href="/">
            <a>
              <Text fontSize="lg">Home</Text>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Text fontSize="lg">Plans</Text>
            </a>
          </Link>
          <LoginToggle type="Login"></LoginToggle>
        </Flex>
      </Flex>
    </Box>
  );
}
