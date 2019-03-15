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
    appbar: {
      backgroundColor: "#fff"
    },
    enquiry: {
      float: "right"
    },
    headercontainer: {
      display: "-webkit-box",
      listStyleType: "none"
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
      <AppBar position="fixed" className={classes.appbar}>
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
          <li className={classes.enquiry}>
            <Enquiry />
          </li>
        </ul>
      </AppBar>
    );
  }
}
export default withStyles(styles)(AppBarDesktop);
