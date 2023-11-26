import { combineReducers, configureStore } from "@reduxjs/toolkit";

import loginReducer from "./login/slice";
import registerReducer from "./register/slice";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
});

export default configureStore({
  reducer: rootReducer,
});
