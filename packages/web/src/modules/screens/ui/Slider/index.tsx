import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Carousel from "nuka-carousel";
import image1 from "../../../../utils/img/l1.jpg";
import image2 from "../../../../utils/img/l2.jpg";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import Fab from "@material-ui/core/Fab";

const styles = (theme: any) =>
  createStyles({
    fab: {
      margin: theme.spacing.unit,
      backgroundColor: "white"
    },
    root: {
      flexGrow: 1
    }
  });

interface Props extends WithStyles<typeof styles> {
  // theme: any;
}
class Slider extends React.Component<Props> {
  state = {
    slideIndex: 0
  };

  nextSlide = () => {
    if (this.state.slideIndex === 3) {
      this.setState({ slideIndex: 0 });
    } else {
      this.setState({ slideIndex: this.state.slideIndex + 1 });
    }
  };

  previousSlide = () => {
    if (this.state.slideIndex === 0) {
      this.setState({ slideIndex: 0 });
    } else {
      this.setState({ slideIndex: this.state.slideIndex - 1 });
    }
  };

  handleCenterLeftControls = ({ previousSlide }: any) => {
    return (
      <Fab
        style={{
          backgroundColor: "white",
          width: 46,
          height: 46,
          left: "15px"
        }}
        onClick={this.previousSlide}
      >
        <KeyboardArrowLeftIcon />
      </Fab>
    );
  };
  handleCenterRightControls = ({ nextSlide }: any) => {
    return (
      <Fab
        aria-label="Add"
        style={{
          backgroundColor: "white",
          width: 46,
          height: 46,
          right: "15px"
        }}
        onClick={this.nextSlide}
      >
        <KeyboardArrowRightIcon />
      </Fab>
    );
  };

  render() {
    return (
      <Carousel
        autoplay={true}
        autoplayInterval={4000}
        slideIndex={this.state.slideIndex}
        dragging={true}
        swiping={true}
        renderCenterLeftControls={this.handleCenterLeftControls}
        renderCenterRightControls={this.handleCenterRightControls}
      >
        <img src={image1} />
        <img src={image2} />
        <img src={image1} />
        <img src={image2} />
      </Carousel>
    );
  }
}
export default withStyles(styles)(Slider);
