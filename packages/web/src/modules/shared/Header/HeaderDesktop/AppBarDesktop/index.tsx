import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import AboutUs from "./AboutUs";
import Courses from "./Courses";
import Academics from "./Academics";
import Enquiry from "./Enquiry";
import Logo from "../../Logo";
// import Grid from "@material-ui/core/Grid";

const styles = (theme: any) =>
  createStyles({
    root: {
      flex: 1,
      justifyContent: "space-evenly"
    },
    grow: {
      flexGrow: 1
    },
    appbarcolor: {
      backgroundColor: "#fff",
      top: 0,
      bottom: "auto"
    },
    enquiry: {
      paddingTop: "7px"
    },
    logo: {
      paddingLeft: "40px"
    },
    headercontainer: {
      display: "-webkit-box",
      flex: 1,
      flexDirection: "row"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class AppBarDesktop extends React.Component<Props> {
  state = {
    open: false
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appbarcolor}>
          <ul className={classes.headercontainer}>
            <li>
              <Logo />
            </li>
            <li>
              <AboutUs />
            </li>
            <li>
              <Courses />
            </li>
            <li>
              <Academics />
            </li>
            <li style={{ alignSelf: "flex-end" }}>
              <Enquiry />
            </li>
          </ul>
        </AppBar>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default withStyles(styles)(AppBarDesktop);
