import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MobileDrawer from "../MobileDrawer";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Logo from "../../Logo";
import Divider from "@material-ui/core/Divider";

const styles = (theme: any) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    appbarcolor: {
      backgroundColor: "white"
      // boxShadow: "none"
    },
    appbarcolortop: {
      background: "white"
    },
    menuicon: {
      color: "#000"
    },
    button: {
      backgroundColor: "#86576b",
      color: "#fff",
      fontWeight: "bold",
      fontFamily:
        "Charlie Text,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class AppBarMobile extends React.Component<Props> {
  state = {
    open: false
  };

  handleClose = (event: any) => () => {
    return this.setState({ open: false });
  };
  buttonClicked = () => {
    this.setState({
      open: true
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appbarcolor}>
          <Logo />
          <Divider />
          <Toolbar>
            <Grid container={true}>
              <Grid item={true}>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                >
                  <MenuIcon
                    onClick={this.buttonClicked}
                    className={classes.menuicon}
                  />
                </IconButton>
                <MobileDrawer open={this.state.open} />
              </Grid>
            </Grid>
            <Grid
              container={true}
              item={true}
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Link href="/enquiry" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  size="small"
                  className={classes.button}
                >
                  ENQUIRY
                </Button>
              </Link>
              &nbsp;
              {/* <Link href="/workshop" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  size="small"
                  className={classes.button}
                >
                  WORKSHOP
                </Button>
              </Link> */}
            </Grid>
          </Toolbar>
        </AppBar>
        <br />
        <br />
        <br /> <br />
        <br />
        {/* <br /> */}
      </div>
    );
  }
}
export default withStyles(styles)(AppBarMobile);
