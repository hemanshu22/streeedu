import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import ContactFooter from "./ContactFooter";
import Navigate from "./Navigate";
import SocialMedia from "./SocialMedia";
import OfficeAddress from "./OfficeAddress";
import Copywright from "./Copywright";
import Divider from "@material-ui/core/Divider";

const instagramUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/110px-Instagram_logo_2016.svg.png";
// const youtube =
// "https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg";

const styles = (theme: any) =>
  createStyles({
    root: {
      display: "flex"
    },
    firstfooter: {
      color: "white",
      backgroundColor: "#303c42"
    },
    footer: {
      backgroundColor: "#303c42",
      color: "#fff"
    },
    footerbottom: {
      backgroundColor: "#455a64"
    },

    copywright: {
      color: "white"
    },
    social: {
      width: "24px",
      height: "24px",
      "&:hover": {
        color: "red"
      }
    },
    fabclass: {
      margin: theme.spacing.unit,
      backgroundColor: "white",
      "& span $instagram": {
        background: "url(" + instagramUrl + ")",
        width: 24,
        height: 24
      }
    },
    instagram: {
      backgroundColor: "white"
    },
    svbfb: {
      width: 24,
      height: 24
    },
    lightTooltip: {
      background: "#C82B23"
    },
    griditem: {
      display: "flex",
      alignItems: "stretch",
      color: "white"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class Footer extends React.Component<Props> {
  state = {
    open: false
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid
          container={true}
          direction="row"
          spacing={8}
          className={classes.firstfooter}
        >
          <Grid
            item={true}
            xs={12}
            sm={3}
            md={3}
            lg={3}
            className={classes.griditem}
          >
            <OfficeAddress />
          </Grid>

          <Grid
            item={true}
            xs={12}
            sm={3}
            md={3}
            lg={3}
            className={classes.griditem}
          >
            <ContactFooter />
          </Grid>
          <Grid
            item={true}
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className={classes.griditem}
          >
            <Navigate />
          </Grid>
          <Grid
            item={true}
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className={classes.griditem}
          >
            <SocialMedia />
          </Grid>
        </Grid>
        <Divider className={classes.copywright} />
        <Grid container={true} className={classes.footerbottom}>
          <Grid item={true} xs={12} sm={6} md={1} />
          <Grid item={true} xs={12} sm={6} md={3}>
            <Copywright />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Footer);
