import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Link from "@material-ui/core/Link";

const styles = (theme: any) =>
  createStyles({
    resonance: {
      width: "180px"
    },
    stree: {
      width: "180px",
      paddingTop: "6px"
      // padding: "5px"
    },
    logo: {
      //  paddingLeft: "30px"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class Logo extends React.Component<Props> {
  state = {
    open: false
  };

  handleToggle = (event: any) => {
    this.setState({
      open: event.currentTarget
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Hidden only={["lg"]}>
          <Grid container={true} justify="center">
            <Link href="/" style={{ textDecoration: "none" }}>
              <Grid item={true} justify="center">
                <img
                  src="http://www.streeedu.com/img/stree/logo.png"
                  alt="stree"
                  className={classes.stree}
                />

                <img
                  src="http://www.streeedu.com/img/stree/Resonance-Logo.jpg"
                  alt="resonance home"
                  className={classes.resonance}
                />
              </Grid>
            </Link>
          </Grid>
        </Hidden>
        <Hidden only={["xs", "sm", "md"]}>
          <Grid container={true} justify="center">
            <Link href="/" style={{ textDecoration: "none" }}>
              <Grid item={true} justify="center">
                <img
                  src="http://www.streeedu.com/img/stree/logo.png"
                  alt="stree"
                  className={classes.stree}
                />

                <img
                  src="http://www.streeedu.com/img/stree/Resonance-Logo.jpg"
                  alt="resonance home"
                  className={classes.resonance}
                />
              </Grid>
            </Link>
          </Grid>
        </Hidden>
      </div>
    );
  }
}
export default withStyles(styles)(Logo);
