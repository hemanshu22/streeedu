import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Slider from "../Slider";
import SectionOne from "./SectionOne";
// import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import Hidden from "@material-ui/core/Hidden";

const styles = (theme: any) => createStyles({});

interface Props extends WithStyles<typeof styles> {}
class Homepage extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    // const { classes } = this.props;

    return (
      <div>
        <div>
          <Hidden only={["md", "lg"]}>
            <Slider />
            <SectionOne />
            <SectionThree />
          </Hidden>
        </div>
        <div style={{ paddingTop: "7px" }}>
          <Hidden only={["xs", "lg"]}>
            <Slider />
            <SectionOne />
            <SectionThree />
          </Hidden>
        </div>
        <div style={{ paddingTop: "12px" }}>
          <Hidden only={["xs", "sm", "md"]}>
            <br />
            <br />
            <Slider />
            <SectionOne />
            <SectionThree />
          </Hidden>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Homepage);
