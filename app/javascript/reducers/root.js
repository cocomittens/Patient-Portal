import { combineReducers } from "redux";

import sessionReducer from "./session";
import userReducer from "./user";
import patientReducer from "./patient";

export default combineReducers({
  session: sessionReducer,
  user: userReducer,
  patient: patientReducer,
});
