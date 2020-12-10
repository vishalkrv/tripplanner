import { createStore } from "easy-peasy";
import * as tripsService from "../../services/trips";
import storeModel from "../model";

const store = createStore(storeModel, {
  injections: {
    tripsService
  },
});

export default store;
