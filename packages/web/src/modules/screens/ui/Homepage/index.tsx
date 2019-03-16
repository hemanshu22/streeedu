import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Slider from "../Slider";
import SectionOne from "./SectionOne";
// import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import Hidden from "@material-ui/core/Hidden";

const styles = (theme: any) =>
  createStyles({
    // carousel: {
    //   position: "relative",
    //   height: "100%"
    // },
    // video: {
    //   transition: " 1s opacity",
    //   minWidth: "100%",
    //   minHeight: "100%",
    //   width: "auto",
    //   height: "auto"
    // },
    // paper: {
    //   borderRadius: "0px",
    //   //   backgroundColor: "#F7F9FA",
    //   boxShadow: "none",
    //   width: "100%",
    //   height: "auto"
    //   //   backgroundImage: `url(${backgroundImage})`
    // },
    // image: {
    //   maxWidth: "100%",
    //   Height: "auto"
    // }
  });

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
          <Hidden only={["lg"]}>
            <Slider />
            <SectionOne />
            <SectionThree />
          </Hidden>
        </div>
        <div style={{ paddingTop: "6px" }}>
          <Hidden only={["xs", "sm", "md"]}>
            <br /> <Slider />
            <SectionOne />
            <SectionThree />
          </Hidden>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Homepage);
