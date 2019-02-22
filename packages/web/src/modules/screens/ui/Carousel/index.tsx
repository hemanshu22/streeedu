import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import image from "../../../../utils/img/city.jpg";
// import SwipeableViews from "react-swipeable-views";

// import autoPlay from "react-swipeable-views-utils";
// import Paper from "@material-ui/core/Paper";
// import backgroundImage from "./bg3.jpg";
// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
// const background1 =
//   "https://demos.creative-tim.com/material-kit/assets/img/profile_city.jpg";
// const vid = "https://mdbootstrap.com/img/video/city.mp4";

const styles = (theme: any) =>
  createStyles({
    carousel: {
      position: "relative",
      height: "100%"
    },
    slide: {
      padding: 15,
      minHeight: 100,
      color: "#fff"
    },
    slide1: {
      minHeight: "100vh",
      maxHeight: "1200px",
      backgroundImage: "url(" + image + ")",
      backgroundPosition: "top center",
      backgroundSize: "cover"
    },
    slide2: {
      background: "#B3DC4A"
    },
    slide3: {
      background: "#6AC0FF"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class Carousel extends React.Component<Props> {
  state = {
    activeStep: 0
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.slide1}>
        {/* <video autoPlay={true}>
          <source
            src="https://mdbootstrap.com/img/video/city.mp4"
            type="video/mp4"
          />
        </video> */}
      </div>
    );
  }
}
export default withStyles(styles)(Carousel);
