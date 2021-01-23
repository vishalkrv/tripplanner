import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";
import LodgingForm from "./lodgingForm";
import EventForm from "./eventForm";
import TransportForm from "./transportForm";

export default function PlannerPopup(props) {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <Tabs
      orientation="vertical"
      isLazy
      variant="solid-rounded"
      defaultIndex={0}
      mt={5}
      onChange={(index) => setTabIndex(index)}
      size="sm"
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

      <TabPanels minH="500px" >
        <TabPanel pt={0}>
          <LodgingForm></LodgingForm>
        </TabPanel>
        <TabPanel pt={0}>
          {/* <EventForm></EventForm> */}
        </TabPanel>
        <TabPanel pt={0}>
          <TransportForm></TransportForm>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
