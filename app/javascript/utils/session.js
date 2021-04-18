export const getPatient = (patient) => {
  return $.ajax({
    url: "/api/patients",
    method: "GET",
    data: { patient },
  });
};

export const getPatients = (user) => {
  return $.ajax({
    url: `/api/users/${user}/patients`,
    method: "GET",
    data: { user },
  });
};

export const createPatient = (patient) => {
  return $.ajax({
    url: "/api/patient",
    method: "POST",
    data: { patient },
  });
};

export const updatePatient = (patient) => {
  return $.ajax({
    url: `/api/patient/${patient.id}`,
    method: "PATCH",
    data: { patient },
  });
};

export const deletePatient = (patientId) => {
  return $.ajax({
    url: `/api/patient/${patientId}`,
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
