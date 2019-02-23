import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Home from "./Home";
import AboutUs from "./AboutUs";
import Courses from "./Courses";
import Academics from "./Academics";
// import Gallery from "./Gallery";
// import Faq from "./Faq";
import Enquiry from "./Enquiry";
import Logo from "../../Logo";
import Grid from "@material-ui/core/Grid";

const styles = (theme: any) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    grow: {
      flexGrow: 1
    },
    appbarcolor: {
      backgroundColor: "#fff",
      top: 0,
      bottom: "auto"
    },
    grid: {
      paddingTop: "10px"
    },
    enquiry: {
      paddingTop: "7px"
    },

    logo: {
      paddingLeft: "40px"
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
          <Toolbar>
            <Grid container={true} direction="row">
              <Grid item={true} sm={4} md={4} lg={4} className={classes.logo}>
                <Logo />
              </Grid>
              <Grid item={true} sm={1} md={1} lg={1} className={classes.grid}>
                <AboutUs />
              </Grid>
              <Grid item={true} sm={1} md={1} lg={1} className={classes.grid}>
                <Courses />
              </Grid>
              <Grid item={true} sm={1} md={2} lg={2} className={classes.grid}>
                <Academics />
              </Grid>
              {/*<Grid item={true} md={1} lg={1}>
                <AboutUs />
              </Grid> */}

              {/* <Gallery />
            <Faq /> */}
              <Grid
                item={true}
                sm={4}
                md={4}
                lg={4}
                className={classes.enquiry}
              >
                <Enquiry />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <br />
        <br />
        <br />
        {/* <br /> */}
      </div>
    );
  }
}
export default withStyles(styles)(AppBarDesktop);
