import Link from "next/link";
import { Flex, Button, Text } from "@chakra-ui/react";
import LoginToggle from '../loginToggle/loginToggle';
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        className={styles.navbar}
      >
        <Link href="/">
          <a style={{ height: "100%" }}> 
            <Flex className={styles.appLogo}></Flex>
          </a>
        </Link>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          style={{ width: "350px" }}
        >
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
    </header>
  );
}
