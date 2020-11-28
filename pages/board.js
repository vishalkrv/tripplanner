import { Flex } from "@chakra-ui/react";
import Layout from "../components/layout";

export default function Board() {
  return (
    <Layout isLogin={true} title="Board">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        w="100%"
      >
        Board
      </Flex>
    </Layout>
  );
}
