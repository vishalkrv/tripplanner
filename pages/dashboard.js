import {
  Text,
  Heading,
  Flex,
  Button,
  Box,
  Wrap,
  WrapItem,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Emoji from "../components/emoji";
import Layout from "../components/layout";

export default function Dashboard() {
  const router = useRouter();
  return (
    <Layout isLogin={true} title="Dashboard">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        w="100%"
      >
        <Button
          colorScheme="pink"
          variant="solid"
          size="lg"
          onClick={() => router.push("/trips/create")}
        >
          Create a Trip
        </Button>
        <Flex w="100%" justifyContent="center" mt={20} gridGap={20}>
          <Box boxShadow="md" p="6" rounded="md" bg="white" h={400} w={350}>
            <Heading mb={4} size="lg" fontFamily="Oxygen">
              Recent
            </Heading>
            <Wrap direction="column">
              <WrapItem>
                <Link color="pink.400" href="#">
                  Himalaya trip completed <Emoji symbol="😎"></Emoji>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link color="pink.400" href="#">
                  <Emoji symbol="🚴🏼‍♂️"></Emoji> Bike Trip to Michigan
                </Link>
              </WrapItem>
              <WrapItem>
                <Link color="pink.400" href="#">
                  Street pics done<Emoji symbol="💪🏼"></Emoji>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link color="pink.400" href="#">
                  Dalas trip completed
                </Link>
              </WrapItem>
            </Wrap>
          </Box>
          <Box boxShadow="md" p="6" rounded="md" bg="white" h={400} w={350}>
            <Heading mb={4} size="lg" fontFamily="Oxygen">
              Trip Board
            </Heading>
            <Wrap direction="column">
              <WrapItem>
                <Link color="pink.400" href="#">
                  Himalaya trip completed <Emoji symbol="😎"></Emoji>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link color="pink.400" href="#">
                  <Emoji symbol="🚴🏼‍♂️"></Emoji> Bike Trip to Michigan
                </Link>
              </WrapItem>
              <WrapItem>
                <Link color="pink.400" href="#">
                  Street pics done<Emoji symbol="💪🏼"></Emoji>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link color="pink.400" href="#">
                  Dalas trip completed
                </Link>
              </WrapItem>
            </Wrap>
          </Box>
          <Box boxShadow="md" p="6" rounded="md" bg="white" h={400} w={350}>
            <Heading mb={4} size="lg" fontFamily="Oxygen">
              News
            </Heading>
            <Wrap direction="column">
              <WrapItem>
                <Link color="pink.400" href="#">
                  Himalaya trip completed <Emoji symbol="😎"></Emoji>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link color="pink.400" href="#">
                  <Emoji symbol="🚴🏼‍♂️"></Emoji> Bike Trip to Michigan
                </Link>
              </WrapItem>
              <WrapItem>
                <Link color="pink.400" href="#">
                  Street pics done<Emoji symbol="💪🏼"></Emoji>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link color="pink.400" href="#">
                  Dalas trip completed
                </Link>
              </WrapItem>
            </Wrap>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
}
