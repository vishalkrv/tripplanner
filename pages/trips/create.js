import {
  Box,
  Flex,
  Icon,
  Text,
  List,
  ListItem,
  SimpleGrid,
  IconButton,
  Heading,
  Spacer,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/hooks";
import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { FaPlus, FaTrash, FaTimes } from "react-icons/fa";
import Emoji from "../../components/emoji";
import Layout from "../../components/layout";
import Sticker from "../../components/sticker";
import PlannerPopup from "../../components/plannerPopup";

export default function CreateTrip() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const tripAction = useStoreActions((actions) => actions.trips);
  const tripState = useStoreState((state) => state.trips);

  useEffect(() => {
    tripAction.getTripPlan();
  }, []);

  const addActivity = () => {
    onToggle();
  };

  const addOneDay = () => {
    tripAction.setTripPlan([
      ...tripState.tripPlan,
      {
        id: tripState.tripPlan.length,
        title: "Day 1",
        type: "day",
        order: tripState.tripPlan.length + 1,
        items: [],
      },
    ]);
  };

  const removeThisDay = (index) => {
    let plans = tripState.tripPlan;
    plans.splice(index, 1);
    tripAction.setTripPlan([...plans]);
  };

  return (
    <Layout isLogin={true} title="Plan a Trip">
      <Flex flexWrap="wrap">
        {tripState.tripPlan &&
          tripState.tripPlan.map((day, index) => (
            <Box
              key={`${day.id + "_" + index}`}
              w={300}
              mr="20px"
              mb={15}
              h={350}
              boxShadow="md"
              p="6"
              rounded="lg"
              bg="white"
              overflowY="auto"
              pos="relative"
            >
              <Sticker>{index + 1}</Sticker>
              <Box position="absolute" right="10px" top="5px">
                <IconButton
                  variant="ghost"
                  size="xs"
                  colorScheme="pink"
                  aria-label="Add Activity"
                  onClick={() => addActivity(index)}
                  fontSize="15px"
                  icon={<FaPlus />}
                />
                <IconButton
                  variant="ghost"
                  size="xs"
                  colorScheme="pink"
                  aria-label="Remove Trip"
                  fontSize="15px"
                  onClick={() => removeThisDay(index)}
                  icon={<FaTrash />}
                />
              </Box>
              <List spacing={3}>
                {day.items.map((plan, index) => (
                  <>
                    <ListItem
                      key={`${plan.type + "_" + index}`}
                      cursor="pointer"
                      onClick={onOpen}
                    >
                      <Flex alignItems="center">
                        <Text>
                          <Emoji name={plan.type}></Emoji>
                          {plan.title}
                        </Text>
                      </Flex>
                    </ListItem>
                  </>
                ))}
              </List>
            </Box>
          ))}
        <Box
          as="button"
          h={350}
          w={300}
          borderRadius="10px"
          backgroundImage={`url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' opacity='0.4' height='100%25' fill='none' rx='10' ry='10' stroke='lightslategrey' stroke-width='8' stroke-dasharray='22%2c 21' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e")`}
          onClick={() => addOneDay()}
        >
          <Icon
            w={55}
            h={55}
            as={FaPlus}
            color="lightslategrey"
            opacity="0.4"
          ></Icon>
          <Text color="lightslategrey" opacity="0.5" fontSize={22}>
            One More Day!
          </Text>
        </Box>
      </Flex>
      <PlannerPopup open={isOpen} close={onClose}></PlannerPopup>
      {/* <Box
        position="absolute"
        w="94%"
        h="100%"
        backgroundColor="white"
        borderRadius={2}
        zIndex={100}
        p={5}
      >
        <Flex alignItems="center">
          <Heading fontSize="3xl">Plan up</Heading>
          <Spacer></Spacer>
          <IconButton aria-label="Close" size="md" colorScheme="white" variant="ghost" icon={<FaTimes />} />
        </Flex>
      </Box> */}
    </Layout>
  );
}
