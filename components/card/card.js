import { Box, Image, Badge, Icon } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

export default function Card(props) {
  const { title, image, rating, width } = props.option;
  return (
    <Box maxW="sm" overflow="hidden" width={width} cursor="pointer">
      <Box padding="0 0 1.5rem 0">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <Icon
                as={AiFillStar}
                boxSize="20px"
                key={i}
                color={i < rating ? "yellow.300" : "gray.300"}
              />
            ))}
        </Box>
      </Box>
      <Image rounded="lg" src={`/assets/${image}`} height="350px" />
    </Box>
  );
}
