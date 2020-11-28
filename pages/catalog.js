import { Flex } from "@chakra-ui/react";
import Layout from "../components/layout";

export default function Catalog() {
  return (
    <Layout isLogin={true} title="Catalog">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        w="100%"
      >
        Catalog
      </Flex>
    </Layout>
  );
}
