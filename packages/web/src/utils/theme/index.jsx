import { createMuiTheme } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import red from "@material-ui/core/colors/red";
import purple from "@material-ui/core/colors/purple";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[700]
    },
    error: {
      main: red[500]
    },
    admin: {
      main: purple[500]
    },
    circularprogress: {
      color: red[500]
    }
  }
});
