import { combineReducers } from "redux";

import sessionReducer from "./session";
import patientReducer from "./patient";
import patientListReducer from "./patientList";

export default combineReducers({
  session: sessionReducer,
  patient: patientReducer,
  patientList: patientListReducer,
});
