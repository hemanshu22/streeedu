import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Footer from "./Footer";

const styles = (theme: any) => createStyles({});

interface Props extends WithStyles<typeof styles> {}
class StreeLayout extends React.Component<Props> {
  render() {
    console.log(this.props.children);
    return (
      <React.Fragment>
        <Header />
        <br />
        <br /> <br />
        <br /> <br />
        <br />
        <div>{this.props.children}</div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(StreeLayout);
