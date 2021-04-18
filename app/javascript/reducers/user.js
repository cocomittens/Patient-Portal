import { RECEIVE_USER_PATIENTS } from "../actions/user";

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_PATIENTS:
      return Object.assign({}, { patients: action.patients });
    default:
      return state;
  }
};
