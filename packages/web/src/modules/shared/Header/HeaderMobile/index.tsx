import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import AppBarMobile from "./AppBarMobile";
// import MobileDrawer from "./MobileDrawer";
// import Button from "@material-ui/core/Button";

const styles = (theme: any) =>
  createStyles({
    root: {
      flexGrow: 1
    }
  });

interface Props extends WithStyles<typeof styles> {}
class HeaderMobile extends React.Component<Props> {
  state = {
    open: false
  };

  handleToggle = (event: any) => {
    this.setState({
      open: event.currentTarget
    });
  };

  render() {
    //  const { classes } = this.props;

    return (
      <div>
        <AppBarMobile />
        {/* <MobileDrawer /> */}
      </div>
    );
  }
}
export default withStyles(styles)(HeaderMobile);
