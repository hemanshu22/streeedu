import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardResult from "./CardResult";
import resultimage from "../../../../../../../utils/img/result.jpg";
import Carousel from "nuka-carousel";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import Fab from "@material-ui/core/Fab";
import Hidden from "@material-ui/core/Hidden";

const styles = (theme: any) =>
  createStyles({
    root: { flexGrow: 1 },
    achievements: {
      minHeight: "400px",
      maxHeight: "1800px",
      backgroundImage: "url(" + resultimage + ")",
      background: "no repeat center center"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class CardAchievement extends React.Component<Props> {
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
      <div className={classes.achievements}>
        <Hidden only={["xs", "sm"]}>
          <Carousel
            autoplay={true}
            autoplayInterval={9000}
            slideIndex={this.state.slideIndex}
            dragging={true}
            swiping={true}
            renderCenterLeftControls={this.handleCenterLeftControls}
            renderCenterRightControls={this.handleCenterRightControls}
          >
            <Grid
              container={true}
              direction="row"
              spacing={16}
              justify="center"
              style={{ padding: "5px" }}
            >
              <Grid item={true} md={2} lg={2}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu Parashar"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} md={2} lg={2}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu Parashar"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} md={2} lg={2}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu Parashar"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} md={2} lg={2}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu Parashar"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} md={2} lg={2}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu Parashar"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
            </Grid>
            <Grid
              container={true}
              direction="row"
              spacing={16}
              justify="center"
              className={classes.achievements}
              style={{ padding: "5px" }}
            >
              <Grid item={true} md={2} lg={2}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu Parashar"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} md={2} lg={2}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu Parashar"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} md={2} lg={2}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu Parashar"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} md={2} lg={2}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu Parashar"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} md={2} lg={2}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu Parashar"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
            </Grid>
          </Carousel>
        </Hidden>
        {/* only sm device */}
        <Hidden only={["xs", "md", "lg", "xl"]}>
          <Carousel
            autoplay={true}
            autoplayInterval={5000}
            slideIndex={this.state.slideIndex}
            dragging={true}
            swiping={true}
            renderCenterLeftControls={this.handleCenterLeftControls}
            renderCenterRightControls={this.handleCenterRightControls}
          >
            <Grid
              container={true}
              direction="row"
              spacing={16}
              justify="center"
              style={{ padding: "5px" }}
            >
              <Grid item={true} sm={1} />
              <Grid item={true} sm={3}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} sm={3}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} sm={3}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} sm={1} />
            </Grid>
            <Grid
              container={true}
              direction="row"
              spacing={16}
              justify="center"
              style={{ padding: "5px" }}
            >
              <Grid item={true} sm={1} />
              <Grid item={true} sm={3}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu Parashar"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} sm={3}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu Parashar"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} sm={3}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu Parashar"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} sm={1} />
            </Grid>
          </Carousel>
        </Hidden>
        {/* end - only sm device */}

        {/*  only xs device */}
        <Hidden only={["lg", "xl", "md", "sm"]}>
          <Carousel
            autoplay={true}
            autoplayInterval={5000}
            slideIndex={this.state.slideIndex}
            dragging={true}
            swiping={true}
            renderCenterLeftControls={this.handleCenterLeftControls}
            renderCenterRightControls={this.handleCenterRightControls}
          >
            <Grid
              container={true}
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.root}
            >
              <Grid item={true} xs={2} />
              <Grid item={true} xs={8}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu Parashar"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} xs={2} />
            </Grid>
            <Grid
              container={true}
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.root}
            >
              <Grid item={true} xs={2} />
              <Grid item={true} xs={8}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu Parashar"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} xs={2} />
            </Grid>
            <Grid
              container={true}
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.root}
            >
              <Grid item={true} xs={2} />
              <Grid item={true} xs={8}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu Parashar"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} xs={2} />
            </Grid>
            <Grid
              container={true}
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.root}
            >
              <Grid item={true} xs={2} />
              <Grid item={true} xs={8}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu Parashar"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} xs={2} />
            </Grid>
            <Grid
              container={true}
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.root}
            >
              <Grid item={true} xs={2} />
              <Grid item={true} xs={8}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu Parashar"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} xs={2} />
            </Grid>
            <Grid
              container={true}
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.root}
            >
              <Grid item={true} xs={2} />
              <Grid item={true} xs={8}>
                <CardResult
                  title="Mathematics Olympiad Qualifier"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  name="Himanshu Parashar"
                  medal="Gold Medal"
                  grade="Grade 10"
                  school="Indian High School, Dubai"
                />
              </Grid>
              <Grid item={true} xs={2} />
            </Grid>
          </Carousel>
        </Hidden>
        {/* End - only xs device */}
      </div>
    );
  }
}
export default withStyles(styles)(CardAchievement);
