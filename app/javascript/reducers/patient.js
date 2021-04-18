import {
  RECEIVE_PATIENT,
  CREATE_PATIENT,
  UPDATE_PATIENT,
  DELETE_PATIENT,
} from "../actions/patients";

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PATIENT:
      return Object.assign({}, { patient: action.patient });
    case CREATE_PATIENT:
      return Object.assign({}, { patient: action.patient });
    case UPDATE_PATIENT:
      return Object.assign({}, { patient: action.patient });
    case DELETE_PATIENT:
      return Object.assign({}, { patientId: action.patient.id });
    default:
      return state;
  }
};
