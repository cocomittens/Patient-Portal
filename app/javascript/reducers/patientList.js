import { RECEIVE_PATIENTS } from "../actions/patientList";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PATIENTS:
      return action.patients;
    default:
      return state;
  }
};
