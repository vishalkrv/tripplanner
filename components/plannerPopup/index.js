import {
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  ModalOverlay,
  ModalContent,
  Modal,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import LodgingForm from "./lodgingForm";
import EventForm from "./eventForm";
import TransportForm from "./TransportForm";

export default function PlannerPopup(props) {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <Modal size={"6xl"} isOpen={props.open} onClose={props.close} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Plan Up !</ModalHeader>
        <ModalCloseButton></ModalCloseButton>
        <ModalBody pb={6}>
          <Tabs
            orientation="vertical"
            isLazy
            variant="soft-rounded"
            defaultIndex={0}
            onChange={(index) => setTabIndex(index)}
            size="lg"
          >
            <TabList>
              <Tab
                _focus={{
                  boxShadow: "none",
                  borderRightWidth: "2px",
                  borderRightColor: "gray.300",
                }}
              >
                Lodging
              </Tab>
              <Tab
                _focus={{
                  boxShadow: "none",
                  borderRightWidth: "2px",
                  borderRightColor: "gray.300",
                }}
              >
                Event
              </Tab>
              <Tab
                _focus={{
                  boxShadow: "none",
                  borderRightWidth: "2px",
                  borderRightColor: "gray.300",
                }}
              >
                Transport
              </Tab>
            </TabList>

            <TabPanels minH="500px">
              <TabPanel>
                <LodgingForm></LodgingForm>
              </TabPanel>
              <TabPanel>
                <EventForm></EventForm>
              </TabPanel>
              <TabPanel>
                <TransportForm></TransportForm>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
