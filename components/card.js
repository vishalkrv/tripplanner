import { Box, Image, Flex, Text, Badge } from "@chakra-ui/react";

export default function Card(props) {
  const { title, image, rating, width } = props.option;
  return (
    <Box maxW="320px" boxShadow="lg" p="1" rounded="md" bg="white" position="relative" h="100%" mr="10px">
      <Box position="absolute" bottom="3px">
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="pink">Trending</Badge>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short" bg="white">
          {title}
        </Text>
      </Box>
      <Image borderRadius="md" src={`/assets/${image}`} h="310px" w="250px" />
    </Box>
  );
}
