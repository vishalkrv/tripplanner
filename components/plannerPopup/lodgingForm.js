import { useState } from "react";
import {
  Box,
  Stack,
  Select,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Text,
  Icon,
  AspectRatio,
} from "@chakra-ui/react";
import moment from "moment";
import Calendar from "react-calendar";
import { useStoreActions, useStoreState } from "easy-peasy";
import {
  FaCalendarAlt,
  FaStar,
  FaMapMarkerAlt,
  FaMapPin,
} from "react-icons/fa";
import useOnclickOutside from "react-cool-onclickoutside";
import GoogleMapReact from "google-map-react";
import "react-calendar/dist/Calendar.css";

import PlacesAutocomplete from "../placesAutocomplete";

const mapStyles = [
  {
    elementType: "geometry",
    stylers: [
      {
        hue: "#ff4400",
      },
      {
        saturation: -68,
      },
      {
        lightness: -4,
      },
      {
        gamma: 0.72,
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry",
    stylers: [
      {
        hue: "#0077ff",
      },
      {
        gamma: 3.1,
      },
    ],
  },
  {
    featureType: "water",
    stylers: [
      {
        hue: "#00ccff",
      },
      {
        gamma: 0.44,
      },
      {
        saturation: -33,
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    stylers: [
      { visibility: "on" },
      {
        hue: "#44ff00",
      },
      {
        saturation: -23,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        hue: "#007fff",
      },
      {
        gamma: 0.77,
      },
      {
        saturation: 65,
      },
      {
        lightness: 99,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        gamma: 0.11,
      },
      {
        weight: 5.6,
      },
      {
        saturation: 99,
      },
      {
        hue: "#0091ff",
      },
      {
        lightness: -86,
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      { visibility: "on" },
      {
        lightness: -48,
      },
      {
        hue: "#ff5e00",
      },
      {
        gamma: 1.2,
      },
      {
        saturation: -23,
      },
    ],
  },
  {
    featureType: "administrative",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.stroke",
    stylers: [
      { visibility: "on" },
      {
        saturation: -64,
      },
      {
        hue: "#ff9100",
      },
      {
        lightness: 16,
      },
      {
        gamma: 0.47,
      },
      {
        weight: 2.7,
      },
    ],
  },
];

const LodgingForm = () => {
  const [searchLocation, setSearchLocation] = useState();
  const [personCount, setPersonCount] = useState(2);
  const [lodgeOpts, setLodgeOpts] = useState({});
  const [googleApi, setGoogleApi] = useState();
  const [selectLodge, setSelectLodge] = useState();
  const [lodges, setLodges] = useState([]);
  const tripAction = useStoreActions((actions) => actions.trips);
  const tripState = useStoreState((state) => state.trips);
  const [highlightIndex, setHighlight] = useState(-1);
  const [calendarOpts, setCalendarOpts] = useState({
    date: new Date(),
    formattedDate: "",
    show: false,
  });

  const updateDate = (date) => {
    if (date && date.length > 1) {
      const temp = date
        .map((item) => moment(item).format("MMM Do"))
        .join(" - ");
      let opts = { ...calendarOpts };
      opts.date = date;
      opts.formattedDate = temp;
      opts.show = !opts.show;
      setCalendarOpts(opts);
    }
  };

  const toggleCalendarDisplay = () => {
    let opts = { ...calendarOpts };
    opts.show = !opts.show;
    setCalendarOpts(opts);
  };

  const dateRef = useOnclickOutside(() => {
    if (calendarOpts.show) {
      let opts = { ...calendarOpts };
      opts.show = false;
      setCalendarOpts(opts);
    }
  });

  const findLodge = () => {
    setLodgeOpts({
      date: calendarOpts.date,
      personCount,
      location: searchLocation,
    });
  };

  const onMapChange = () => {
    if (googleApi) {
      const places = new googleApi.maps.places.PlacesService(googleApi.map);
      const search = {
        bounds: googleApi.map.getBounds(),
        types: ["lodging"],
      };
      places.nearbySearch(search, (results, status, pagination) => {
        if (status === googleApi.maps.places.PlacesServiceStatus.OK) {
          setLodges(results);
        }
      });
    }
  };

  const onGoogleMapLoad = ({ map, maps }) => {
    setGoogleApi({
      map,
      maps,
    });
  };

  const saveLodging = () => {
    const index = tripState.selectedTripIndex;
    const plans = tripState.tripPlan;

    const start = moment(lodgeOpts.date[0]);
    const end = moment(lodgeOpts.date[1]);
    const diff = end.diff(start, "days");

    const lengthFromCurrent = plans.length - (index + 1);
    // if (lengthFromCurrent >= diff){
    //   // for(let i = lengthFromCurrent; i<diff; i++){

    //   // }

    // }
    // console.log(lengthFromCurrent)

    // if(lengthFromCurrent  === 0){
    //   for(let i = )
    // }
    // for(let i = index; i <= plans.length; i++){
    //   plans[i].items.push({
    //     title:`Stay at ${selectLodge.name}`,type:'lodging'
    //   })
    // }
    // tripAction.setTripPlan()
    console.log(tripState.tripPlan, index);
    // [
    //   ...tripState.tripPlan,
    //   {
    //     id: tripState.tripPlan.length,
    //     title: "Day 1",
    //     type: "day",
    //     order: tripState.tripPlan.length + 1,
    //     items: [],
    //   },
    // ]
  };

  return (
    <Box>
      <Stack direction="row" spacing="24px" position="absolute" zIndex="5">
        <Box minW={450}>
          <PlacesAutocomplete onSelect={setSearchLocation}></PlacesAutocomplete>
        </Box>
        <Box minW={300}>
          <InputGroup onClick={toggleCalendarDisplay}>
            <InputLeftElement
              pointerEvents="none"
              children={<FaCalendarAlt color="gray.300" />}
            />
            <Input
              type="text"
              placeholder="Travel Dates"
              onChange={(event) => event.preventDefault()}
              value={calendarOpts.formattedDate}
            />
          </InputGroup>
          {calendarOpts.show && (
            <Calendar
              onChange={updateDate}
              value={calendarOpts.date}
              inputRef={dateRef}
              selectRange={true}
            ></Calendar>
          )}
        </Box>
        <Box>
          <Select
            value={personCount}
            onChange={(event) => setPersonCount(event.target.value)}
          >
            <option value="1">1 person</option>
            <option value="2">2 person</option>
            <option value="3">3 person</option>
            <option value="4">4 person</option>
          </Select>
        </Box>
        <Button colorScheme="pink" onClick={findLodge}>
          Find
        </Button>
        {selectLodge && (
          <Button colorScheme="pink" onClick={saveLodging}>
            Next
          </Button>
        )}
      </Stack>
      <Flex pt={20} alignItems="start">
        <Box overflowY="auto" height={500} maxW="35%" pl={1} pb={1}>
          {lodges &&
            lodges.map((lodge, index) => (
              <Box
                p={5}
                shadow="md"
                key={lodge.place_id}
                cursor="pointer"
                background={
                  highlightIndex === index
                    ? "gray.100"
                    : selectLodge.place_id === lodge.place_id
                    ? "gray.300"
                    : ""
                }
                color={
                  highlightIndex === index
                    ? "black"
                    : selectLodge.place_id === lodge.place_id
                    ? "black"
                    : ""
                }
                onMouseOver={(event) => setHighlight(index)}
                onMouseLeave={(event) => setHighlight(-1)}
                onClick={() => setSelectLodge(lodge)}
              >
                <Text fontSize="md" fontWeight="semibold" lineHeight="short">
                  {lodge.name}
                </Text>
                <Flex mt={2} align="center">
                  <Box as={Flex} minW="50px" align="center">
                    <Box as={FaStar} color="orange.400" />
                    <Text ml={1} fontSize="sm">
                      <b>{lodge.rating}</b>
                    </Text>
                  </Box>
                  <Flex ml={2}>
                    <Icon as={FaMapMarkerAlt}></Icon>
                    <Text ml={1} fontSize="xs">
                      {lodge.vicinity}
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            ))}
        </Box>
        <Box h="500px" w={(lodges && lodges.length > 1 && "65%") || "100%"}>
          {/* <Box h="500px" w="65%"> */}
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyA5PGb7_SW_pBdr9h-BanSAk9-W-KM1qn8",
            }}
            onGoogleApiLoaded={onGoogleMapLoad}
            yesIWantToUseGoogleMapApiInternals={true}
            defaultCenter={{
              lat: 6.92,
              lng: 79.84,
            }}
            options={{
              styles: mapStyles,
              scrollwheel: true,
            }}
            resetBoundsOnResize={true}
            center={lodgeOpts.location && lodgeOpts.location.coordinates}
            defaultZoom={14}
            onChange={onMapChange}
          >
            {lodges &&
              lodges.length > 1 &&
              lodges.map((location, index) => (
                <Box
                  key={location.place_id}
                  lat={location.geometry.location.lat()}
                  lng={location.geometry.location.lng()}
                  onMouseOver={(event) => setHighlight(index)}
                  onMouseLeave={(event) => setHighlight(-1)}
                  cursor="pointer"
                >
                  <Icon
                    as={FaMapPin}
                    transform={highlightIndex === index ? "scale(1.5)" : ""}
                    w={4}
                    h={4}
                    color="red.400"
                  ></Icon>
                </Box>
              ))}
          </GoogleMapReact>
        </Box>
      </Flex>
    </Box>
  );
};

export default LodgingForm;
