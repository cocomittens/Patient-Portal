import { RECEIVE_PATIENT } from "../actions/patients";

export default (state = { patient: null }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PATIENT:
      return Object.assign({}, { patient: action.patient });
    default:
      return state;
  }
};
