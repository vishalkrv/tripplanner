import { action, thunk } from "easy-peasy";
// import LocalStorageService from "../../services/localStorage";

// const localStorageService = LocalStorageService.getService();

const userModel = {
  name: "Vishal Kumar Verma",
  //   username: localStorageService.getUserName(),
  removeUser: action((state, payload) => {
    state.username = {};
  }),
  setUserName: action((state, payload) => {
    state.username = payload;
  }),
  setName: action((state, payload) => {
    state.name = payload;
  }),
  authenticate: thunk(async (actions, payload) => {
    const response = {
      data: {
        accessToken: "sfsdfsfsfsdfsdfs",
        user: {
          username: "Vishal Verma",
        },
      },
    };
    if (response) {
      //   LocalStorageService.setToken({
      //     accessToken: response.data.accessToken,
      //     username: response.data.user.username,
      //   });
      actions.setUserName(response.data.user.username);
    }
  }),
};

export default userModel;
