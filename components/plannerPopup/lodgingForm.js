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
import { FaCalendarAlt, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import useOnclickOutside from "react-cool-onclickoutside";
import GoogleMapReact from "google-map-react";
import "react-calendar/dist/Calendar.css";

import PlacesAutocomplete from "../placesAutocomplete";

const LodgingForm = () => {
  const [searchLocation, setSearchLocation] = useState();
  const [personCount, setPersonCount] = useState(2);
  const [lodgeOpts, setLodgeOpts] = useState({});
  const [googleApi, setGoogleApi] = useState();
  const [lodges, setLodges] = useState([]);
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
      </Stack>
      <Flex pt={20} alignItems="start">
        <Box overflowY="auto" height={500} maxW="45%" pl={1}>
          {lodges &&
            lodges.map((lodge) => (
              <Box
                p={5}
                shadow="md"
                key={lodge.place_id}
                cursor="pointer"
                _hover={{
                  background: "gray.100",
                  color: "black",
                }}
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
        <Box h="500px" w={lodges && lodges.length > 1 && "65%" || "100%"}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyA5PGb7_SW_pBdr9h-BanSAk9-W-KM1qn8",
            }}
            onGoogleApiLoaded={onGoogleMapLoad}
            yesIWantToUseGoogleMapApiInternals={true}
            defaultCenter={{
              lat: 17.38,
              lng: 78.48,
            }}
            center={lodgeOpts.location && lodgeOpts.location.coordinates}
            defaultZoom={12}
            onChange={onMapChange}
          >
            {lodges && lodges.length > 1 && (
              <>
                <div
                  lat={lodges[0].geometry.location.lat}
                  lng={lodges[0].geometry.location.lng}
                >
                  Here
                </div>
                <div
                  lat={lodges[1].geometry.location.lat}
                  lng={lodges[2].geometry.location.lng}
                >
                  Here
                </div>
              </>
            )}
          </GoogleMapReact>
        </Box>
      </Flex>
    </Box>
  );
};

export default LodgingForm;
