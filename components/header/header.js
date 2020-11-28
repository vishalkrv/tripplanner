import Link from "next/link";
import { Flex, Text, Box } from "@chakra-ui/react";
import LoginToggle from "../loginToggle/loginToggle";

export default function Header() {
  return (
    <Box
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
            <Text
              fontFamily="Kaushan Script"
              color="pink.500"
              fontSize="50px"
              textShadow="1px 2px #00000073"
            >
              Trip Planner
            </Text>
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
