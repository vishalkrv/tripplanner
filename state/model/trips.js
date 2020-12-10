import { action, thunk } from "easy-peasy";

const tripsModel = {
  tripList: [],
  setTripList: action((state, payload) => {
    state.tripList = payload;
  }),
  getTripList: thunk(async (actions, payload, { injections }) => {
    const tripsService = injections.tripsService;
    const response = tripsService.tripList();
    actions.setTripList(response.result);
  }),
};

export default tripsModel;
