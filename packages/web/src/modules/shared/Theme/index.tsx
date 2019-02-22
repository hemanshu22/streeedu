import { createMuiTheme } from "@material-ui/core/styles";
// import teal from "@material-ui/core/colors/teal";
import red from "@material-ui/core/colors/red";
// import purple from "@material-ui/core/colors/purple";

export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1a237e"
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00"
    },
    error: {
      main: red[500]
    }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
});
