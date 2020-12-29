import {
  Button,
  Text,
  Select,
  Box,
  Stack,
  Flex
} from "@chakra-ui/react";
import { MdStar } from "react-icons/md";
import { useState, useEffect } from "react";
import DatePicker from "../datePicker";
import moment from "moment";
import dynamic from "next/dynamic";

const destinations = [
  {
    name: "Bangkok",
    location: {
      lat: 13.8245796,
      long: 100.6224463,
    },
    activities: [
      {
        name: "Escape to island",
        rating: "5",
        reviewCount: 100,
        location: {
          lat: "",
          long: "",
        },
      },
      {
        name: "City Walking",
        rating: "3.5",
        reviewCount: 200,
        location: {
          lat: "",
          long: "",
        },
      },
      {
        name: "Kayaking",
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
    activities: [
      {
        name: "Heritage Walk",
        rating: "4.3",
        reviewCount: 2323,
        location: {
          lat: "",
          long: "",
        },
      },
      {
        name: "Local Wine Tasting",
        rating: "4.3",
        reviewCount: 234,
        location: {
          lat: "",
          long: "",
        },
      },
      {
        name: "Street Food Crawl",
        rating: "3.5",
        reviewCount: 123,
        location: {
          lat: "",
          long: "",
        },
      },
      {
        name: "Sunrise Climb",
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
    activities: [
      {
        name: "Explore old ruins",
        rating: "4",
        reviewCount: 533,
        location: {
          lat: "",
          long: "",
        },
      },
      {
        name: "Authentic Food Cooking",
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
    activities: [
      {
        name: "Capturing the street beauty",
        rating: "4",
        reviewCount: 533,
        location: {
          lat: "",
          long: "",
        },
      },
      {
        name: "Sunrise with local expert",
        rating: "4",
        reviewCount: 533,
        location: {
          lat: "",
          long: "",
        },
      },
      {
        name: "Smart Shopping",
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

export default function EventForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [des, setDes] = useState();

  const Map = dynamic(
    () => import("../map.js"), // replace '@components/map' with your component's location
    { loading: () => "<p>A map is loading</p>", ssr: false } // This line is important. It's what prevents server-side render
  );

  const getLatLong = (destination) => {
    const arr = [];
    arr.push(destination.location.lat);
    arr.push(destination.location.long);
    return arr;
  };

  const onDateChange = (dates) => {
    setStartDate(dates);
  };

  const inputValue =
    moment(`${startDate}`).format("MM/DD/YYYY")

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
          placeholder="Select a destination to check the activities"
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
          openToDate={new Date()}
          placeholderText="Select a date"
          value={!startDate ? new Date() : inputValue}
        />        
        <Button colorScheme="pink">Find</Button>
      </Stack>
      {des && des.activities && (
        <Stack direction="row" mt="10px">
          <Box w={350}>
            {des.activities.map((item, index) => (
              <Box key={item.name}>
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
            marker={des && des.activities && des.activities}
          ></Map>
        </Stack>
      )}
    </Box>
  );
}
