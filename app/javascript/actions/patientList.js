import { getPatients } from "../utils/session";

export const RECEIVE_PATIENTS = "RECEIVE_PATIENTS";

export const receivePatients = (patients) => ({
  type: RECEIVE_PATIENTS,
  patients,
});

export const getPatientList = () => (dispatch) =>
  getPatients().then((patients) => dispatch(receivePatients(patients)));
