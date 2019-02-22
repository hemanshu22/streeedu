import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import AppBarDesktop from "./AppBarDesktop";

const styles = (theme: any) => createStyles({});

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
    return <AppBarDesktop />;
  }
}
export default withStyles(styles)(HeaderDesktop);
