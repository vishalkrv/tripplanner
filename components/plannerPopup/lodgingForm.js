import {
  Button,
  Text,
  Select,
  Box,
  Stack,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { MdStar } from "react-icons/md";
import { useState, useEffect } from "react";
import DatePicker from "../datePicker";
import moment from "moment";
import dynamic from "next/dynamic";

const destinations = [
  {
    name: "Bali",
    location: {
      lat: -8.4560181,
      long: 115.27038551,
    },
    hotels: [
      {
        name: "Grandmas Hotel Legian",
        rating: "5",
        reviewCount: 100,
        location: {
          lat: "",
          long: "",
        },
      },
      {
        name: "Inaya Putri Bali",
        rating: "3.5",
        reviewCount: 200,
        location: {
          lat: "",
          long: "",
        },
      },
      {
        name: "Apurva Kempinski Bali",
        rating: "4",
        reviewCount: 300,
        location: {
          lat: "",
          long: "",
        },
      },
    ],
  },
  {
    name: "Macau",
    location: {
      lat: 22.1757605,
      long: 113.5514142,
    },
    hotels: [
      {
        name: "Sheraton Grand Macao",
        rating: "4.3",
        reviewCount: 2323,
        location: {
          lat: "",
          long: "",
        },
      },
      {
        name: "The Parisian",
        rating: "4.3",
        reviewCount: 234,
        location: {
          lat: "",
          long: "",
        },
      },
      {
        name: "The Venetian",
        rating: "3.5",
        reviewCount: 123,
        location: {
          lat: "",
          long: "",
        },
      },
      {
        name: "Grand Hyatt",
        rating: "4",
        reviewCount: 533,
        location: {
          lat: "",
          long: "",
        },
      },
    ],
  },
  {
    name: "Machu Picchu",
    location: {
      lat: -13.16441865,
      long: -72.54476397,
    },
    hotels: [
      {
        name: "Susanna Inn",
        rating: "4",
        reviewCount: 533,
        location: {
          lat: "",
          long: "",
        },
      },
      {
        name: "Hotel Taypikala",
        rating: "4",
        reviewCount: 533,
        location: {
          lat: "",
          long: "",
        },
      },
    ],
  },
  {
    name: "New York",
    location: {
      lat: 40.7143528,
      long: -74.0059731,
    },
    hotels: [
      {
        name: "Hyatt",
        rating: "4",
        reviewCount: 533,
        location: {
          lat: "",
          long: "",
        },
      },
      {
        name: "Holiday Inn",
        rating: "4",
        reviewCount: 533,
        location: {
          lat: "",
          long: "",
        },
      },
      {
        name: "Riu Plaza",
        rating: "4",
        reviewCount: 533,
        location: {
          lat: "",
          long: "",
        },
      },
    ],
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

  const getLatLong = (destination) => {
    console.log(destination);
    const arr = [];
    arr.push(destination.location.lat);
    arr.push(destination.location.long);
    return arr;
  };

  const onDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
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

  const selectItem = (selectedItem) =>{
    console.log(selectedItem)
  }
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
      {des && des.hotels && (
        <Stack direction="row" mt="10px">
          <Box w={350}>
            {des.hotels.map((item, index) => (
              <Box key={item.name} cursor="pointer" onClick={() => selectItem(item)}>
                <Text
                  mt={2}
                  fontSize="s"
                  fontWeight="semibold"
                  lineHeight="short"
                >
                  {item.name}
                </Text>
                <Flex>
                  <Box as={MdStar} color="orange.400" />
                  <Text ml={1} fontSize="sm">
                    <b>{item.rating}</b> ({item.reviewCount})
                  </Text>
                </Flex>
              </Box>
            ))}
          </Box>
          <Map
            latlong={getLatLong(des)}
            marker={des && des.hotels && des.hotels}
          ></Map>
        </Stack>
      )}
    </Box>
  );
}
