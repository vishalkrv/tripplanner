import Link from "next/link";
import { Flex, Button, Text } from "@chakra-ui/react";
import styles from "./header.module.css";
import LoginBtn from '../login/login';

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
          <LoginBtn></LoginBtn>
        </Flex>
      </Flex>
    </header>
  );
}
