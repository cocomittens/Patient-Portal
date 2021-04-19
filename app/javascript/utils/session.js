export const getPatient = (patientId) => {
  return $.ajax({
    url: `/api/patients/${patientId}`,
    method: "GET",
  });
};

export const getPatients = () => {
  return $.ajax({
    url: `/api/patients`,
    method: "GET",
  });
};

export const createPatient = (patient) => {
  console.log(patient);
  return $.ajax({
    url: "/api/patients",
    method: "POST",
    data: patient,
  });
};

export const updatePatient = (patient) => {
  return $.ajax({
    url: `/api/patients/${patient.id}`,
    method: "PATCH",
    data: patient,
  });
};

export const deletePatient = (patientId) => {
  return $.ajax({
    url: `/api/patients/${patientId}`,
    method: "DELETE",
  });
};

export const createUser = (user) => {
  return $.ajax({
    url: "/api/users",
    method: "POST",
    data: { user },
  });
};

export const postSession = (user) => {
  return $.ajax({
    url: "/api/session",
    method: "POST",
    data: { user },
  });
};

export const deleteSession = () => {
  return $.ajax({
    url: "/api/session",
    method: "DELETE",
  });
};
