import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Carousel from "nuka-carousel";
import Hidden from "@material-ui/core/Hidden";
import Testimonials from "./Testimonials";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import Fab from "@material-ui/core/Fab";

const styles = (theme: any) =>
  createStyles({
    root: {
      flexGrow: 1
    }
  });

interface Props extends WithStyles<typeof styles> {}
class CardTestimonials extends React.Component<Props> {
  state = {
    open: false,
    slideIndex: 0
  };
  nextSlide = () => {
    if (this.state.slideIndex === 1) {
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
    const { classes } = this.props;
    return (
      <div>
        <Grid container={true} className={classes.root}>
          <Grid item={true} xs={12} md={4} />
          <Grid item={true} xs={12} md={4}>
            <br />
            <br />
            <Typography
              gutterBottom={true}
              variant="h4"
              component="h3"
              align="center"
            >
              Testimonials
            </Typography>
          </Grid>
          <Grid item={true} md={4} />
        </Grid>
        <Hidden only={["xs"]}>
          <Carousel
            autoplay={true}
            autoplayInterval={9000}
            slideIndex={this.state.slideIndex}
            dragging={true}
            swiping={true}
            renderCenterLeftControls={this.handleCenterLeftControls}
            renderCenterRightControls={this.handleCenterRightControls}
          >
            <Grid container={true} className={classes.root}>
              <Grid item={true} md={1} sm={1} lg={1} />
              <Grid item={true} sm={5} md={5} lg={5}>
                <Testimonials
                  name="UTKARSH GUPTA P"
                  air="AIR-17 (GEN), JEE (Advanced) 2016"
                  studycenter="Study Centre: Kota"
                  data="Hi, I am Utkarsh Gupta and i am from Kota. I have secured a rank of 17 in general category. I am happy on my success, I was sure that I would be selected. I give credit of my success to my mentors (RKV Sir,AGL Sir, SM Sir, CSS Sir) and to my parents who supported throughout the preparation. Daily homework, Consistent hard work leads me to success. Hard work and practice. Resonance provided me a great study environment and dedicated coaching, which helped me crack JEE(Advanced) with flying colors. I am quite surethat without Resonance, the results would have been very different."
                />
              </Grid>
              <Grid item={true} sm={5} md={5} lg={5}>
                <Testimonials
                  name="VIJAY GUPTA"
                  air="AIR-17 (GEN), JEE (Advanced) 2016"
                  studycenter="Study Centre: Kota"
                  data="Hi, I am Utkarsh Gupta and i am from Kota. I have secured a rank of 17 in general category. I am happy on my success, I was sure that I would be selected. I give credit of my success to my mentors (RKV Sir,AGL Sir, SM Sir, CSS Sir) and to my parents who supported throughout the preparation. Daily homework, Consistent hard work leads me to success. Hard work and practice. Resonance provided me a great study environment and dedicated coaching, which helped me crack JEE(Advanced) with flying colors. I am quite surethat without Resonance, the results would have been very different."
                />
              </Grid>
              <Grid item={true} md={1} sm={1} lg={1} />
              <br />
            </Grid>
            <Grid container={true} className={classes.root}>
              <Grid item={true} md={1} sm={1} lg={1} />
              <Grid item={true} sm={5} md={5} lg={5}>
                <Testimonials
                  name="JONY GUPTA"
                  air="AIR-17 (GEN), JEE (Advanced) 2016"
                  studycenter="Study Centre: Kota"
                  data="Hi, I am Utkarsh Gupta and i am from Kota. I have secured a rank of 17 in general category. I am happy on my success, I was sure that I would be selected. I give credit of my success to my mentors (RKV Sir,AGL Sir, SM Sir, CSS Sir) and to my parents who supported throughout the preparation. Daily homework, Consistent hard work leads me to success. Hard work and practice. Resonance provided me a great study environment and dedicated coaching, which helped me crack JEE(Advanced) with flying colors. I am quite surethat without Resonance, the results would have been very different."
                />
              </Grid>
              <Grid item={true} sm={5} md={5} lg={5}>
                <Testimonials
                  name="KAMAL GUPTA"
                  air="AIR-17 (GEN), JEE (Advanced) 2016"
                  studycenter="Study Centre: Kota"
                  data="Hi, I am Utkarsh Gupta and i am from Kota. I have secured a rank of 17 in general category. I am happy on my success, I was sure that I would be selected. I give credit of my success to my mentors (RKV Sir,AGL Sir, SM Sir, CSS Sir) and to my parents who supported throughout the preparation. Daily homework, Consistent hard work leads me to success. Hard work and practice. Resonance provided me a great study environment and dedicated coaching, which helped me crack JEE(Advanced) with flying colors. I am quite surethat without Resonance, the results would have been very different."
                />
              </Grid>
              <Grid item={true} md={1} sm={1} lg={1} />
              <br />
            </Grid>
          </Carousel>
        </Hidden>
        <Hidden only={["lg", "xl", "sm", "md"]}>
          <Carousel
            autoplay={true}
            autoplayInterval={5000}
            slideIndex={this.state.slideIndex}
            dragging={true}
            swiping={true}
            renderCenterLeftControls={this.handleCenterLeftControls}
            renderCenterRightControls={this.handleCenterRightControls}
          >
            <Grid container={true} className={classes.root}>
              <Grid item={true} xs={12}>
                <Testimonials
                  name="UTKARSH GUPTA"
                  air="AIR-17 (GEN), JEE (Advanced) 2016"
                  studycenter="Study Centre: Kota"
                  data="Hi, I am Utkarsh Gupta and i am from Kota. I have secured a rank of 17 in general category. I am happy on my success, I was sure that I would be selected. I give credit of my success to my mentors (RKV Sir,AGL Sir, SM Sir, CSS Sir) and to my parents who supported throughout the preparation. Daily homework, Consistent hard work leads me to success. Hard work and practice. Resonance provided me a great study environment and dedicated coaching, which helped me crack JEE(Advanced) with flying colors. I am quite surethat without Resonance, the results would have been very different."
                />
              </Grid>
            </Grid>
            <Grid container={true} className={classes.root}>
              <Grid item={true} xs={12}>
                <Testimonials
                  name="UTKARSH GUPTA"
                  air="AIR-17 (GEN), JEE (Advanced) 2016"
                  studycenter="Study Centre: Kota"
                  data="Hi, I am Utkarsh Gupta and i am from Kota. I have secured a rank of 17 in general category. I am happy on my success, I was sure that I would be selected. I give credit of my success to my mentors (RKV Sir,AGL Sir, SM Sir, CSS Sir) and to my parents who supported throughout the preparation. Daily homework, Consistent hard work leads me to success. Hard work and practice. Resonance provided me a great study environment and dedicated coaching, which helped me crack JEE(Advanced) with flying colors. I am quite surethat without Resonance, the results would have been very different."
                />
              </Grid>
            </Grid>
            <Grid container={true} className={classes.root}>
              <Grid item={true} xs={12}>
                <Testimonials
                  name="UTKARSH GUPTA"
                  air="AIR-17 (GEN), JEE (Advanced) 2016"
                  studycenter="Study Centre: Kota"
                  data="Hi, I am Utkarsh Gupta and i am from Kota. I have secured a rank of 17 in general category. I am happy on my success, I was sure that I would be selected. I give credit of my success to my mentors (RKV Sir,AGL Sir, SM Sir, CSS Sir) and to my parents who supported throughout the preparation. Daily homework, Consistent hard work leads me to success. Hard work and practice. Resonance provided me a great study environment and dedicated coaching, which helped me crack JEE(Advanced) with flying colors. I am quite surethat without Resonance, the results would have been very different."
                />
              </Grid>
            </Grid>
            <Grid container={true} className={classes.root}>
              <Grid item={true} xs={12}>
                <Testimonials
                  name="UTKARSH GUPTA"
                  air="AIR-17 (GEN), JEE (Advanced) 2016"
                  studycenter="Study Centre: Kota"
                  data="Hi, I am Utkarsh Gupta and i am from Kota. I have secured a rank of 17 in general category. I am happy on my success, I was sure that I would be selected. I give credit of my success to my mentors (RKV Sir,AGL Sir, SM Sir, CSS Sir) and to my parents who supported throughout the preparation. Daily homework, Consistent hard work leads me to success. Hard work and practice. Resonance provided me a great study environment and dedicated coaching, which helped me crack JEE(Advanced) with flying colors. I am quite surethat without Resonance, the results would have been very different."
                />
              </Grid>
            </Grid>
          </Carousel>
        </Hidden>
      </div>
    );
  }
}
export default withStyles(styles)(CardTestimonials);
