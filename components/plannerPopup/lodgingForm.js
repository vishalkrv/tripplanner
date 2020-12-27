import {
  Button,
  Input,
  Select,
  Box,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import DatePicker from "../datePicker";
import moment from "moment";
import dynamic from "next/dynamic";

const destinations = [
  {
    name: "Bali",
  },
  {
    name: "Macau",
  },
  {
    name: "Machu Picchu",
  },
  {
    name: "New York",
  },
];

export default function LodgingForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [des, setDes] = useState();

  const Map = dynamic(
    () => import("../map.js"), // replace '@components/map' with your component's location
    { loading: () => "<p>A map is loading</p>", ssr: false } // This line is important. It's what prevents server-side render
  );

  const onDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    console.log(start, end);
  };

  const inputValue =
    moment(`${startDate}`).format("MM/DD/YYYY") +
    " - " +
    moment(`${endDate}`).format("MM/DD/YYYY");

  const destinationChange = (event) => {
    const found = destinations.filter(
      (item) => item.name === event.target.value
    );
    setDes(found[0]);
  };

  return (
    <Box>
      <Stack direction="row">
        <Select
          placeholder="Select a destination"
          onChange={destinationChange}
          value={des && des.name}
        >
          {destinations &&
            destinations.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
        </Select>
        <DatePicker
          selectedDate={null}
          onChange={onDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          openToDate={new Date()}
          placeholderText="Select a date range"
          value={!endDate ? new Date() : inputValue}
        />
        <NumberInput defaultValue={2} min={1} max={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button colorScheme="pink">Find</Button>
      </Stack>
      <Stack direction="row" mt="10px">
        <Map></Map>
      </Stack>
    </Box>
  );
}
