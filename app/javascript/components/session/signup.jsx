import { Button, Grid, TextField, Typography } from "@material-ui/core";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  svg: {
    width: "20vw",
    height: "auto",
  },
  fullWidth: {
    width: "100vw",
    padding: "5vh 0",
  },
});

const Signup = (props) => {
  const classes = useStyles();
  const handleSubmit = (e) => {
    const email = document.forms["signup"]["email"].value;
    const password = document.forms["signup"]["password"].value;
    e.preventDefault();
    props
      .createNewUser({ email, password })
      .then(() => props.history.push("/success"));
  };

  return (
    <Grid
      container
      className="session-form"
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Typography variant="h1">Sign Up</Typography>
      </Grid>
      <Grid item>
        <img
          className={classes.svg}
          src={require("../../../assets/images/signin.svg")}
        />
      </Grid>
      <form name="signup">
        <Grid
          container
          item
          className={classes.fullWidth}
          spacing={4}
          justify="center"
        >
          <Grid item xs={10} sm={9} md={8} lg={7}>
            <TextField
              autoFocus
              required
              fullWidth
              name="email"
              label="Email"
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item xs={10} sm={9} md={8} lg={7}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item xs={10} sm={9} md={8} lg={7}>
            <TextField
              fullWidth
              name="confirm_password"
              label="Confirm Password"
              type="password"
              variant="outlined"
            ></TextField>
          </Grid>
        </Grid>
      </form>
      <Grid item>
        <Button color="primary" variant="contained" onClick={handleSubmit}>
          <Typography variant="button">SIGN UP</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Signup;
