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
  const [submit, setSubmit] = useState(false);
  const [images, setImages] = useState(null);
  const [name, setName] = useState(null);
  const [dob, setDob] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [appointment, setAppointment] = useState(null);
  const maxNumber = 1;
  const onChange = (imageList) => {
    // data for submit
    setImages(imageList[0].data_url);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    const photo = images;
    if (name && dob && phone && email && photo && appointment)
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
                      src={
                        images
                          ? images
                          : require("../../../assets/images/add_files.svg")
                      }
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
            error={!name && submit}
            onChange={(e) => setName(e.target.value)}
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
            error={!dob && submit}
            onChange={(e) => setDob(e.target.value)}
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
            error={!phone && submit}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            required
            name="phone"
            label="Phone Number"
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item xs={10} sm={9} md={8} lg={7}>
          <TextField
            error={!email && submit}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            name="email"
            label="Email"
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item xs={10} sm={9} md={8} lg={7}>
          <TextField
            error={!address && submit}
            onChange={(e) => setAddress(e.target.value)}
            required
            fullWidth
            name="address"
            label="Address"
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item xs={10} sm={9} md={8} lg={7}>
          <TextField
            error={!appointment && submit}
            onChange={(e) => setAppointment(e.target.value)}
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

      <Grid item>
        <Button color="primary" variant="contained" onClick={handleSubmit}>
          <Typography variant="button">SIGN UP</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Signup;
