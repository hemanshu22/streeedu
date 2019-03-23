import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import Hidden from "@material-ui/core/Hidden";

const styles = (theme: any) =>
  createStyles({
    root: { flexGrow: 1 }
  });

interface Props extends WithStyles<typeof styles> {}
class Header extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    return (
      <div>
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
