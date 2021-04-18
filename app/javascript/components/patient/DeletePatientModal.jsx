import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";

import React from "react";
import { deletePatient } from "../../actions/patients";
import { useDispatch } from "react-redux";

const DeleteConfirmationModal = (props) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(deletePatient(props.index));
    props.handleClose();
  };
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Delete Company</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="body1" align="center">
            Are you sure? This action cannot be undone.
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Grid container justify="center">
          <Grid item>
            <Button onClick={props.handleClose} color="secondary">
              <Typography variant="button">No</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleSubmit} color="primary">
              <Typography variant="button">Yes</Typography>
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
