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
import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import AddPatientModal from "./AddPatientModal";
import AddIcon from "@material-ui/icons/Add";
import DeletePatientModal from "./DeletePatientModal";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { useSelector } from "react-redux";

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
  const classes = useStyles();
  const AddCompany = "ADD";
  const EditCompany = "EDIT";

  const companies = useSelector((state) => state.companies);
  const [addOpen, setAddOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [type, setType] = useState(AddCompany);
  const [currentName, setCurrentName] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleAddOpen = () => {
    setAddOpen(true);
    setType("ADD");
  };

  const handleAddClose = () => {
    setAddOpen(false);
    setCurrentName(null);
    setCurrentIndex(null);
  };

  const handleEditOpen = (name, index) => {
    setAddOpen(true);
    setType(EditCompany);
    setCurrentName(name);
    setCurrentIndex(index);
  };

  const handleDeleteOpen = (index) => {
    setDeleteOpen(true);
    setCurrentIndex(index);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };
  return (
    <TableContainer component={Paper}>
      <Typography variant="h2" align="center">
        Admin Panel
      </Typography>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies.map((company, index) => (
            <StyledRow key={index}>
              <TableCell>
                <Grid container justify="space-between">
                  <Grid item>
                    <Typography variant="subtitle1">{company.name}</Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      onClick={() => handleEditOpen(company.name, index)}
                      className={classes.edit}
                      color="primary"
                      startIcon={<EditIcon />}
                    >
                      <Typography variant="button">Edit</Typography>
                    </Button>

                    <Button
                      variant="outlined"
                      onClick={() => handleDeleteOpen(index)}
                      color="secondary"
                      startIcon={<DeleteOutlineIcon />}
                    >
                      <Typography variant="button">Delete</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </TableCell>
            </StyledRow>
          ))}
        </TableBody>
      </Table>
      <Grid container justify="center">
        <Grid item>
          <Button
            variant="contained"
            onClick={handleAddOpen}
            className={classes.add}
            color="primary"
            startIcon={<AddIcon />}
          >
            <Typography variant="button">Add Company</Typography>
          </Button>
        </Grid>
      </Grid>
      <AddPatientModal
        open={addOpen}
        handleClose={handleAddClose}
        type={type}
        name={currentName}
        index={currentIndex}
      />
      <DeletePatientModal
        open={deleteOpen}
        handleClose={handleDeleteClose}
        index={currentIndex}
      />
    </TableContainer>
  );
};

export default PatientList;
