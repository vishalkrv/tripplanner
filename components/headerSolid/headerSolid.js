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
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import styles from "./headerSolid.module.css";

export default function HeaderSolid() {
  return (
    <header className={styles.header}>
      <Flex alignItems="center" className={styles.navbar}>
        <Link href="/">
          <a style={{ height: "100%" }}>
            <Flex className={styles.appLogo}></Flex>
          </a>
        </Link>
        <Spacer></Spacer>
        <Flex>
          <Menu>
            <MenuButton as={Button} colorScheme="pink" leftIcon={<FaUser></FaUser>}>
              vishal
            </MenuButton>
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
    </header>
  );
}
