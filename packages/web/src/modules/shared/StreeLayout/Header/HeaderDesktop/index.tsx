import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import AppBarDesktop from "./AppBarDesktop";
import Logo from "../Logo";
import Divider from "@material-ui/core/Divider";
// import TextField from "@material-ui/core/TextField";
// import Grid from "@material-ui/core/Grid";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Hidden from "@material-ui/core/Hidden";
// import Search from "@material-ui/icons/Search";
// import AppBar from "../../../../../utils/components/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";

const styles = (theme: any) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    appbar: {
      backgroundColor: "#fff",
      maxHeight: "124px"
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
      <AppBar position="sticky" className={classes.appbar}>
        <Logo />
        <Divider />
        <AppBarDesktop />
      </AppBar>
    );
  }
}
export default withStyles(styles)(HeaderDesktop);
