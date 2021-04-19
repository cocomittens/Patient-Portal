import {
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
} from "../utils/session";

export const RECEIVE_PATIENT = "RECEIVE_PATIENT";
export const CREATE_PATIENT = "CREATE_PATIENT";
export const UPDATE_PATIENT = "UPDATE_PATIENT";
export const DELETE_PATIENT = "DELETE_PATIENT";

const receivePatientAction = (patient) => ({
  type: RECEIVE_PATIENT,
  patient,
});

const addPatientAction = (patient) => ({
  type: CREATE_PATIENT,
  patient,
});

const editPatientAction = (patient) => ({
  type: UPDATE_PATIENT,
  patient,
});

const removePatientAction = (patient) => ({
  type: DELETE_PATIENT,
  patient,
});

export const receivePatient = (patient) => (dispatch) =>
  getPatient(patient).then((patient) =>
    dispatch(receivePatientAction(patient))
  );

export const addPatient = (patient) => (dispatch) =>
  createPatient(patient).then((patient) => dispatch(addPatientAction(patient)));
