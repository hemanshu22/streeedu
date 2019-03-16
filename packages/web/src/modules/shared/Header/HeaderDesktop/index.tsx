import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import AppBarDesktop from "./AppBarDesktop";
import Logo from "../Logo";
import Divider from "@material-ui/core/Divider";

const styles = (theme: any) =>
  createStyles({
    appbar: {
      backgroundColor: "#fff"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class HeaderDesktop extends React.Component<Props> {
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
      <AppBar position="fixed" className={classes.appbar}>
        <Logo />
        <Divider />
        <br />
        <AppBarDesktop />
      </AppBar>
    );
  }
}
export default withStyles(styles)(HeaderDesktop);
