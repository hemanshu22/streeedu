import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Carousel from "nuka-carousel";
import image1 from "../../../../utils/img/city.jpg";
import image2 from "../../../../utils/img/bg2.jpg";
import image3 from "../../../../utils/img/bg3.jpg";
import image4 from "../../../../utils/img/bg.jpg";

const styles = () =>
  createStyles({
    root: {
      maxWidth: 400,
      flexGrow: 1
    },
    "slider-control-centerleft button": {
      backgroundColor: "red"
    }
  });

interface Props extends WithStyles<typeof styles> {
  // theme: any;
}
class Slider extends React.Component<Props> {
  state = {
    slideIndex: 0
  };

  render() {
    //  const { classes } = this.props;

    return (
      <Carousel
        autoplay={true}
        autoplayInterval={1000}
        slideIndex={this.state.slideIndex}
        dragging={true}
        swiping={true}
      >
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />
        <img src={image1} />
        <img src={image2} />
      </Carousel>
    );
  }
}
export default withStyles(styles)(Slider);
