export const RECEIVE_USER_PATIENTS = "RECEIVE_USER_PATIENTS";

export const receiveUserPatients = (patients) => ({
  type: RECEIVE_USER_PATIENTS,
  patients,
});
