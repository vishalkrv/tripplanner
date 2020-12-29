import Link from "next/link";
import {
  Flex,
  Spacer,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuGroup,
  MenuList,
  Box,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { APP_TITLE } from "../lib/constants";

export default function HeaderSolid() {
  const router = useRouter();
  return (
    <Box
      pos="fixed"
      h="70px"
      w="100%"
      bg="gray.50"
      textAlign="center"
      padding="0px 30px"
      top="0"
      boxShadow="md"
      zIndex="1"
    >
      <Flex alignItems="center" h="100%">
        <Link href="/">
          <a style={{ height: "100%" }}>
            <Text
              fontFamily="Kaushan Script"
              color="pink.500"
              fontSize="50px"
              textShadow="1px 2px #00000073"
            >
              {APP_TITLE}
            </Text>
          </a>
        </Link>
        <Spacer></Spacer>
        <Flex>
          <Menu>
            <MenuButton
              as={Avatar}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            ></MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>My Account</MenuItem>
                <MenuItem onClick={() => router.push("/")}>Logout </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
