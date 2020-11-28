import { useEffect } from "react";
import { useCountUp } from "react-countup";
import { Text, Box } from "@chakra-ui/react";

export default function ProgressRing({ trigger, count, content }) {
  const { countUp, start } = useCountUp({
    end: count,
    delay: 1000,
    duration: 5,
  });
  useEffect(() => {
    if (trigger) {
      start();
    }
  }, [trigger]);
  return (
    <Box
      w="350px"
      h="350px"
      borderRadius="50%"
      fontSize="50px"
      color="black"
      textAlign="center"
      background="transparent"
      borderColor="white"
      borderWidth="10px"
      pt="65px"
      borderStyle="solid"
    >
      <Box fontSize="100px">{countUp}</Box>
      <Text fontSize="4xl">{content}</Text>
    </Box>
  );
}
