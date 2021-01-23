import { action, thunk } from "easy-peasy";

const tripsModel = {
  tripList: [],
  tripPlan: [],
  selectedTripIndex: null,
  setSelectedTripIndex: action((state, payload) => {
    state.selectedTripIndex = payload;
  }),
  setTripList: action((state, payload) => {
    state.tripList = payload;
  }),
  setTripPlan: action((state, payload) => {
    state.tripPlan = payload;
  }),
  getTripList: thunk(async (actions, payload, { injections }) => {
    const tripsService = injections.tripsService;
    const response = tripsService.tripList();
    actions.setTripList(response.result);
  }),
  getTripPlan: thunk(async (actions, payload, { injections }) => {
    const tripsService = injections.tripsService;
    const response = tripsService.tripPlan();
    actions.setTripPlan(response.result);
  }),
};

export default tripsModel;
