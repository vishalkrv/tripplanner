import {
  Box,
  Flex,
  Icon,
  Text,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/hooks";
import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { FaPlus, FaTrash } from "react-icons/fa";
import Emoji from "../../components/emoji";
import Layout from "../../components/layout";
import Sticker from "../../components/sticker";
import PlannerPopup from "../../components/plannerPopup";

export default function CreateTrip() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const tripAction = useStoreActions((actions) => actions.trips);
  const tripState = useStoreState((state) => state.trips);

  useEffect(() => {
    tripAction.getTripPlan();
  }, []);

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
  return (
    <Layout isLogin={true} title="Plan a Trip">
      <SimpleGrid
        spacing="20px"
        minChildWidth="300px"
        w="100%"
        p="10px 20px 0 10px"
      >
        {tripState.tripPlan &&
          tripState.tripPlan.map((day, index) => (
            <Box
              key={day.id + "_" + index}
              w="300px  "
              h={350}
              boxShadow="md"
              p="6"
              rounded="lg"
              bg="white"
              overflowY="auto"
              pos="relative"
            >
              <Sticker>{day.order}</Sticker>
              <List spacing={3}>
                {day.items.map((plan, index) => (
                  <>
                    <ListItem
                      key={plan.type + "_" + index}
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
      </SimpleGrid>
      <PlannerPopup open={isOpen} close={onClose}></PlannerPopup>
    </Layout>
  );
}
