import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";
import { getPatientList } from "../../actions/patientList";

const useStyles = makeStyles({
  add: { margin: "16px" },
  edit: { margin: "0 8px" },
  odd: { backgroundColor: "#DED6D6" },
});

const StyledRow = withStyles(() => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#F6F4F4",
    },
  },
}))(TableRow);

const PatientList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => dispatch(getPatientList()), []);
  const patients = useSelector((state) => state.patientList);
  console.log(patients);
  return (
    <TableContainer component={Paper}>
      <Typography variant="h2" align="center">
        Patient List
      </Typography>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Photo</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Appointment Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient, index) => (
            <StyledRow key={index}>
              <TableCell>
                <Grid container justify="space-between">
                  <Grid item>
                    <Typography variant="subtitle1">
                      {patient.photo ? <img src={patient.photo} /> : null}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container justify="space-between">
                  <Grid item>
                    <Typography variant="subtitle1">{patient.name}</Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container justify="space-between">
                  <Grid item>
                    <Typography variant="subtitle1">{patient.dob}</Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container justify="space-between">
                  <Grid item>
                    <Typography variant="subtitle1">{patient.phone}</Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container justify="space-between">
                  <Grid item>
                    <Typography variant="subtitle1">{patient.email}</Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container justify="space-between">
                  <Grid item>
                    <Typography variant="subtitle1">
                      {patient.address}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container justify="space-between">
                  <Grid item>
                    <Typography variant="subtitle1">
                      {patient.appointment}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
            </StyledRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PatientList;
