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
  AvatarBadge,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { APP_TITLE } from "../lib/constants";

export default function HeaderSolid() {
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
                <MenuItem>Logout </MenuItem>
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
