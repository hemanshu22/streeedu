import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = (theme: any) =>
  createStyles({
    paper: {
      borderRadius: "none",
      backgroundColor: "#ffffff"
    },
    firstdiv: {
      backgroundColor: "#546e7b",
      padding: "25px"
    },
    seconddiv: {
      backgroundColor: "white",
      padding: "35px",
      fontSize: "18px"
    },
    textone: {
      color: "white",
      fontSize: "18px",
      fontWeight: 300,
      lineHeight: "1.6"
    },
    heading: {
      color: "white"
    },
    image: {
      width: "20px",
      height: "20px"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class CardFive extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <Grid container={true} direction="row">
          <Grid item={true} xs={12} md={5} className={classes.firstdiv}>
            <Typography
              variant="display1"
              component="h3"
              className={classes.heading}
            >
              Course Qualities
            </Typography>
            <br />
            <br />
            <Typography
              variant="subheading"
              component="h3"
              className={classes.textone}
            >
              PCCP Courses are meant for students of classes V to X.The Courses
              seeks to develop the following qualities in young students.
            </Typography>
          </Grid>
          <Grid
            item={true}
            xs={12}
            sm={12}
            md={7}
            lg={7}
            className={classes.seconddiv}
          >
            <Grid container={true} direction="row">
              <Grid item={true} xs={12} sm={6} md={6} lg={6}>
                <Typography variant="subheading" component="h3">
                  Scientific Temperament
                </Typography>
              </Grid>
              <br />
              <Grid item={true} xs={12} sm={6} md={6} lg={6}>
                <Typography variant="subheading" component="h3">
                  Mathematical Aptitude
                </Typography>
              </Grid>
            </Grid>
            <Grid item={true} xs={12} sm={6} md={6} lg={6}>
              <br />
            </Grid>
            <Grid container={true} direction="row">
              <Grid item={true} xs={12} sm={6} md={6} lg={6}>
                <Typography variant="subheading" component="h3">
                  Problem Solving Attitude
                </Typography>
              </Grid>

              <Grid item={true} xs={12} sm={6} md={6} lg={6}>
                <Typography variant="subheading" component="h3">
                  Logical Reasoning
                </Typography>
              </Grid>
            </Grid>
            <Grid item={true} xs={12} sm={6} md={6} lg={6}>
              <br />
            </Grid>
            <Grid container={true} direction="row">
              <Grid item={true} xs={12} sm={6} md={6} lg={6}>
                <Typography variant="subheading" component="h3">
                  Competitive Psychology
                </Typography>
              </Grid>

              <Grid item={true} xs={12} sm={6} md={6} lg={6}>
                <Typography variant="subheading" component="h3">
                  Self Confidence
                </Typography>
              </Grid>
            </Grid>
            {/* <br /> */}
            <Grid item={true} xs={12} sm={6} md={6} lg={6}>
              <br />
            </Grid>

            <Grid container={true} direction="row">
              <Grid item={true} xs={12} sm={6} md={6} lg={6}>
                <Typography variant="subheading" component="h3">
                  Exam Temperament
                </Typography>
              </Grid>
              <Grid item={true} xs={12} sm={6} md={6} lg={6}>
                <Typography variant="subheading" component="h3">
                  Time Management
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* </Grid> */}
      </div>
    );
  }
}
export default withStyles(styles)(CardFive);
