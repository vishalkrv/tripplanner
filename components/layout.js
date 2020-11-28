import Head from "next/head";
import Header from "./header";
import HeaderSolid from "./headerSolid";
import Sidebar from "./sidebar";
import { Box, Flex } from "@chakra-ui/react";

export default function Layout({
  children,
  title = "Trip Planner - Some description",
  isLogin,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Box as="main">
        {isLogin ? (
          <>
            <HeaderSolid></HeaderSolid>
            <Box display="inline-block" mt="70px" w="100vw">
              <Sidebar></Sidebar>
              <Flex
                padding="10px 0px 20px 80px"
                bg="gray.100"
                overflow="auto"
                h="94vh"
              >
                {children}
              </Flex>
            </Box>
          </>
        ) : (
          <>
            <Header></Header>
            <Box display="inline-block">
              <Flex padding="0px 0px 20px 0px" background="transparent">
                {children}
              </Flex>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
