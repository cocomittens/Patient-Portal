import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@material-ui/core";
import { createPatient, updatePatient } from "../../actions/patients";

import React from "react";
import { useDispatch } from "react-redux";

const AddCompanyModal = (props) => {
  const type = props.type;
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const name = document.forms["AddEditPatient"]["name"].value;
    props.handleClose();
    type === "ADD"
      ? dispatch(addCompany({ name }))
      : dispatch(editCompany({ name }, props.index));
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{props.type} Company</DialogTitle>
      <DialogContent>
        <form name="AddEditPatient">
          <TextField
            variant="outlined"
            defaultValue={props.name ? props.name : ""}
            autoFocus
            id="name"
            name="name"
            label="Patient name"
            fullWidth
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary">
          <Typography variant="button">Save</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCompanyModal;
