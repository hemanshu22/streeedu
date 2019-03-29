import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Courses from "./Courses";
import Academics from "./Academics";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import Enquiry from "./Enquiry";
// import Workshop from "./Workshop";

const styles = (theme: any) =>
  createStyles({
    headercontainer: {
      display: "flex",
      listStyleType: "none",
      paddingLeft: "0px",
      position: "relative",
      bottom: "10px"
      // marginBottom: "4px"
      // marginTop: "-11px"
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
      <ul className={classes.headercontainer}>
        <li style={{ marginLeft: "5px", marginTop: "4px" }}>
          <Home />
        </li>
        <li>
          <AboutUs />
        </li>
        <li>
          <Academics />
        </li>
        <li>
          <Courses />
        </li>
        <li>
          <Gallery />
        </li>
        <li style={{ flexGrow: 1 }}>
          <ContactUs />
        </li>
        <li>
          <Enquiry />
        </li>
        {/* <li>
          <Workshop />
        </li> */}
      </ul>
    );
  }
}
export default withStyles(styles)(AppBarDesktop);
