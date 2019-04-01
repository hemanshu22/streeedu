import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import Hidden from "@material-ui/core/Hidden";

const styles = (theme: any) =>
  createStyles({
    root: { flexGrow: 1 },
    div: {
      top: 0,
      left: 0,
      zIndex: 20,
      position: "sticky"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class Header extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.div}>
        <Hidden only={["xs", "sm", "md"]}>
          <HeaderDesktop />
        </Hidden>
        <Hidden only={["lg", "xl"]}>
          <HeaderMobile />
        </Hidden>
      </div>
    );
  }
}
export default withStyles(styles)(Header);
