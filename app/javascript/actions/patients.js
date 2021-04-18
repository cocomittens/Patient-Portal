export const RECEIVE_PATIENT = "RECEIVE_PATIENT";
export const CREATE_PATIENT = "CREATE_PATIENT";
export const UPDATE_PATIENT = "UPDATE_PATIENT";
export const DELETE_PATIENT = "DELETE_PATIENT";

export const receivePatient = (patient) => ({
  type: RECEIVE_PATIENT,
  patient,
});

export const createPatient = (patient) => ({
  type: CREATE_PATIENT,
  patient,
});

export const updatePatient = (patient) => ({
  type: UPDATE_PATIENT,
  patient,
});

export const deletePatient = (patient) => ({
  type: DELETE_PATIENT,
  patient,
});
