import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Footer from "./Footer";

const styles = (theme: any) =>
  createStyles({
    div: {
      position: "relative",
      zIndex: 10
    }
  });

interface Props extends WithStyles<typeof styles> {}
class StreeLayout extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Header />
        <div className={classes.div}>{this.props.children}</div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(StreeLayout);
