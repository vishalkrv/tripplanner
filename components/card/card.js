import { Box, Image, Badge, Icon } from "@chakra-ui/core";

export default function Card(props) {
  //   const property = {
  //     imageUrl: "/assets/bali_1.jpg",
  //     imageAlt: "Rear view of modern home with pool",
  //     beds: 3,
  //     baths: 2,
  //     title: "Modern home in city center in the heart of historic Los Angeles",
  //     formattedPrice: "$1,900.00",
  //     reviewCount: 34,
  //     rating: 4,
  //   };
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
                name="star"
                key={i}
                color={i < rating ? "yellow.300" : "gray.300"}
              />
            ))}
        </Box>
      </Box>
      <Image rounded="lg" src={`/assets/${image}`} height="350px"/>
    </Box>
  );
}
