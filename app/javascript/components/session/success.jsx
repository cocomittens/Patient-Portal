import { Button, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { logout } from "../../actions/session";

export default () => {
  const currentUser = useSelector((state) => state.session.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()).then(() => props.history.push("/"));
  };

  return (
    <Grid
      container
      justify="center"
      wrap="nowrap"
      direction="column"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Typography variant="h2">
          Welcome, {currentUser ? currentUser.email : "name"}
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleLogout}>
          <Typography variant="button">LOG OUT</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};
