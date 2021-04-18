import WebFont from "webfontloader";
import { createMuiTheme } from "@material-ui/core/styles";

WebFont.load({
  google: {
    families: ["Raleway", "Roboto:400,500"],
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#bae8e8",
    },
    secondary: { main: "#272343" },
  },
  overrides: {
    MuiGrid: {
      item: {
        "& a": {
          textDecoration: "none",
        },
      },
    },
    MuiTypography: {
      root: {
        fontFamily: "roboto",
      },
      h1: {
        fontFamily: "raleway",
        fontWeight: 600,
      },
      h3: {
        fontWeight: 400,
      },
      button: {
        fontSize: "0.9375rem",
        fontWeight: 500,
      },
    },
  },
});

theme.typography.h1 = {
  [theme.breakpoints.down("xl")]: {
    fontSize: "5vw",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "6vw",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "7vw",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "8vw",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "12vw",
  },
};

theme.typography.h3 = {
  [theme.breakpoints.down("xl")]: {
    fontSize: "2vw",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "3vw",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "4vw",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "6vw",
  },
};

theme.typography.button = {
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.1rem",
  },
};

export default theme;
