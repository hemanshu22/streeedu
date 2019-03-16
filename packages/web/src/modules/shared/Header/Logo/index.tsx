import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Link from "@material-ui/core/Link";
import logo from "../../../../utils/img/logo.png";

const styles = (theme: any) =>
  createStyles({
    logoweb: {
      width: "400px",
      paddingTop: "10px"
    },
    logomobile: {
      width: "350px",
      paddingTop: "6px"
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
                <img src={logo} alt="stree" className={classes.logomobile} />
              </Grid>
            </Link>
          </Grid>
        </Hidden>
        <Hidden only={["xs", "sm", "md"]}>
          <Grid container={true} justify="center">
            <Link href="/" style={{ textDecoration: "none" }}>
              <Grid item={true} justify="center">
                <img src={logo} alt="stree" className={classes.logoweb} />
              </Grid>
            </Link>
          </Grid>
        </Hidden>
      </div>
    );
  }
}
export default withStyles(styles)(Logo);
