import Link from "next/link";
import { Flex, Button, Text } from "@chakra-ui/core";
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
              <Text fontSize="lg">Destinations</Text>
            </a>
          </Link>
          <Button variantColor="pink" variant="outline" size="md">
            Login
          </Button>
        </Flex>
      </Flex>
    </header>
  );
}
