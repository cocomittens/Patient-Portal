import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { createPatient } from "../../utils/session";
import ImageUploading from "react-images-uploading";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  svg: {
    width: "20vw",
    height: "auto",
  },
  fullWidth: {
    width: "100%",
    padding: "5vh 0",
  },
});

const Signup = (props) => {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList);
    setImages(imageList[0].data_url);
  };
  const handleSubmit = (e) => {
    const name = document.forms["signup"]["email"].value;
    const dob = document.forms["signup"]["dob"].value;
    const phone = document.forms["signup"]["phone"].value;
    const email = document.forms["signup"]["email"].value;
    const address = document.forms["signup"]["address"].value;
    const photo = images;
    const appointment = document.forms["signup"]["appointment"].value;
    console.log(photo);
    e.preventDefault();
    createPatient({
      name,
      dob,
      phone,
      email,
      address,
      photo,
      appointment,
    }).then(() => props.history.push("/admin"));
  };

  return (
    <Grid
      container
      className={classes.fullWidth}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h1">Register</Typography>
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
            <ImageUploading
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({ onImageUpload, dragProps }) => (
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignContent="center"
                  spacing={2}
                >
                  <Grid
                    container
                    item
                    className={classes.uploadSquare}
                    onClick={onImageUpload}
                    {...dragProps}
                    justify="center"
                    alignItems="center"
                    xs={10}
                    sm={8}
                    md={7}
                    lg={6}
                    direction="column"
                    spacing={1}
                  >
                    <Grid item>
                      <Typography
                        gutterBottom
                        className={classes.header}
                        variant="h3"
                        align="center"
                      >
                        Upload photo of driver's license
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <img
                        className={classes.svg}
                        src={require("../../../assets/images/add_files.svg")}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1" align="center">
                        Drag & Drop or
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                        Click to upload
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography align="center" variant="body2">
                        Accepted file formats: .png, .jpg, .gif
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </ImageUploading>
          </Grid>
          <Grid item xs={10} sm={9} md={8} lg={7}>
            <TextField
              autoFocus
              required
              fullWidth
              name="name"
              label="Name"
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item xs={10} sm={9} md={8} lg={7}>
            <TextField
              required
              fullWidth
              type="date"
              name="dob"
              label="Date of Birth"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            ></TextField>
          </Grid>
          <Grid item xs={10} sm={9} md={8} lg={7}>
            <TextField
              fullWidth
              required
              name="phone"
              label="Phone Number"
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item xs={10} sm={9} md={8} lg={7}>
            <TextField
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
              name="address"
              label="Address"
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item xs={10} sm={9} md={8} lg={7}>
            <TextField
              required
              fullWidth
              id="datetime-local"
              name="appointment"
              label="Appointment time"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
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
