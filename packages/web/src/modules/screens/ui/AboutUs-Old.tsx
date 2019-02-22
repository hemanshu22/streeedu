import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Achivements from "./Achivements";
import Hidden from "@material-ui/core/Hidden";
import Screen from "../../../utils/components/Screen";

const styles = (theme: any) =>
  createStyles({
    button: {
      margin: theme.spacing.unit,
      color: "#0052CC"
    },

    circle_style: {
      width: "80px",
      height: "80px",
      textAlign: "center",
      borderRadius: "100px",
      background: "rgb(49, 53, 72)",
      marginLeft: "173px"
    },

    circle_style_mob: {
      width: "80px",
      height: "80px",
      textAlign: "center",
      borderRadius: "100px",
      background: "rgb(49, 53, 72)"
    },

    img_style: {
      width: "35px",
      height: "35px",
      paddingTop: "20px"
    },

    img_style_mob: {
      width: "35px",
      height: "35px",
      paddingTop: "20px"
    },

    abt_img: {
      width: "500px",
      height: "300px"
    },

    abt_img_mob: {
      width: "100%",
      height: "300px"
    },

    h1style: {
      textAlign: "center"
    },

    grid_cen: {
      textAlign: "center"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class AboutUs extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Screen title="AboutUs">
        <div>
          <br />
          <Typography
            variant="headline"
            gutterBottom={true}
            className={classes.grid_cen}
          >
            ABOUTUS
          </Typography>
          <br />
          <Grid container={true}>
            <Grid item={true} sm={7}>
              <Typography variant="body1">
                Resonance launched Pre-foundation Career Care Programs (PCCPs)
                Division in 2006 with the philosophy of an early start. As the
                name suggests, the division aims at giving the edge to the
                students for Career Examinations like JEE (Main + Advanced),
                NEET/ AIIMS, CA/CS/CLAT etc. before entering into senior
                secondary classes.
                <br />
                <br />
                In last 11 years, PCCP division has evolved significantly and
                works in two segments of classes, namely, Sub-Junior classes (V
                – VIII) and Junior classes (IX – X).The two segments have
                different teaching methodologies and so are their targets.
                <br />
                <br />
                In Junior classes, the targeted competitive examinations are
                National Standard Examination in Junior Science (NSEJS, 1st
                stage of International Junior Science Olympiad (IJSO)), National
                Talent Search Examinations (NTSE), Pre Regional Mathematics
                Olympiad (PreRMO, 1st stage of International Mathematics
                Olympiad). In addition to these competitive examinations, we
                also prepare students for class X board examination, according
                to the latest changes made in it, by exposing them to mock
                situations like that of the real one.
              </Typography>
            </Grid>
            <Grid className={classes.grid_cen} item={true} sm={5}>
              <Hidden mdDown={true}>
                <img className={classes.abt_img} src="/Victory.png" />
              </Hidden>

              <Hidden lgUp={true}>
                <img className={classes.abt_img_mob} src="/Victory.png" />
              </Hidden>
            </Grid>
          </Grid>
          <br />
          <br />
          <Hidden smDown={true}>
            <div style={{ background: "#f1f4f7", height: "339px" }}>
              <div style={{ paddingTop: "30px" }}>
                <Grid container={true} className={classes.grid_cen}>
                  <Grid item={true} sm={4} xs={12}>
                    <div className={classes.circle_style}>
                      <img
                        className={classes.img_style}
                        src={"/chart-bar-stacked.png"}
                      />
                    </div>
                    <br />
                    <Typography gutterBottom={true}>
                      Scientific Temperament
                    </Typography>
                  </Grid>

                  <Grid item={true} sm={4} xs={12}>
                    <div className={classes.circle_style}>
                      <img
                        className={classes.img_style}
                        src="https://wac-cdn.atlassian.com/dam/jcr:8eb2641d-d891-4496-844b-d73236a88e12/object-mental%20heart.svg?cdnVersion=kz"
                      />
                    </div>
                    <br />
                    <Typography gutterBottom={true}>
                      Logical Thinking and Reasoning
                    </Typography>
                  </Grid>

                  <Grid item={true} sm={4} xs={12}>
                    <div className={classes.circle_style}>
                      <img
                        className={classes.img_style}
                        src={"/chart-bar-stacked.png"}
                      />
                    </div>
                    <br />
                    <Typography gutterBottom={true}>
                      Problem Solving Attitude
                    </Typography>
                  </Grid>
                </Grid>
                <br />
                <br />

                <Grid container={true} style={{ textAlign: "center" }}>
                  <Grid item={true} sm={4} xs={12}>
                    <div className={classes.circle_style}>
                      <img
                        className={classes.img_style}
                        src={"/chart-bar-stacked.png"}
                      />
                    </div>
                    <br />
                    <Typography gutterBottom={true}>
                      Competitive Psychology
                    </Typography>
                  </Grid>

                  <Grid item={true} sm={4} xs={12}>
                    <div className={classes.circle_style}>
                      <img
                        className={classes.img_style}
                        src={"/chart-bar-stacked.png"}
                      />
                    </div>
                    <br />
                    <Typography gutterBottom={true}>
                      Mathematical Aptitude
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </div>
            <br />
          </Hidden>
          <Hidden mdUp={true}>
            <div style={{ background: "#f1f4f7" }}>
              <Grid container={true} justify="center">
                <Grid item={true} sm={12}>
                  <div className={classes.circle_style_mob}>
                    <img
                      className={classes.img_style_mob}
                      src={"/chart-bar-stacked.png"}
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid container={true} justify="center">
                <Grid item={true} sm={12}>
                  <br />
                  <Typography gutterBottom={true}>
                    Scientific Temperament
                  </Typography>
                </Grid>
              </Grid>
              <br /> <br />
              <Grid container={true} justify="center">
                <Grid item={true} sm={12}>
                  <div className={classes.circle_style_mob}>
                    <img
                      className={classes.img_style_mob}
                      src={"/chart-bar-stacked.png"}
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid container={true} justify="center">
                <Grid item={true} sm={12}>
                  <br />
                  <Typography gutterBottom={true}>
                    Mathematical Aptitude
                  </Typography>
                </Grid>
              </Grid>
              <br /> <br />
              <Grid container={true} justify="center">
                <Grid item={true} sm={12}>
                  <div className={classes.circle_style_mob}>
                    <img
                      className={classes.img_style_mob}
                      src={"/chart-bar-stacked.png"}
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid container={true} justify="center">
                <Grid item={true} sm={12}>
                  <br />

                  <Typography gutterBottom={true}>
                    Problem Solving Attitude
                  </Typography>
                </Grid>
              </Grid>
              <br /> <br />
              <Grid container={true} justify="center">
                <Grid item={true} sm={12}>
                  <div className={classes.circle_style_mob}>
                    <img
                      className={classes.img_style_mob}
                      src={"/chart-bar-stacked.png"}
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid container={true} justify="center">
                <Grid item={true} sm={12}>
                  <br />
                  <Typography gutterBottom={true}>
                    Competitive Psychology
                  </Typography>
                </Grid>
              </Grid>
              <br /> <br />
              <Grid container={true} justify="center">
                <Grid item={true} sm={12}>
                  <div className={classes.circle_style_mob}>
                    <img
                      className={classes.img_style_mob}
                      src={"/chart-bar-stacked.png"}
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid container={true} justify="center">
                <Grid item={true} sm={12}>
                  <br />
                  <Typography gutterBottom={true}>
                    Logical Thinking and Reasoning
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Hidden>
          <br />
          <br />
          <Grid container={true} style={{ textAlign: "center" }}>
            <Grid item={true} sm={12}>
              <Typography
                gutterBottom={true}
                align="center"
                style={{ fontSize: "17px" }}
              >
                When combined, the above five qualities develop Competitive
                Quotient (C.Q) amongst the budding students.
                <br />
                This Competitive Quotient is essential to crack competitive
                examination via
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br /> <br />
          <Hidden smDown={true}>
            <Grid container={true} style={{ textAlign: "center" }}>
              <Grid item={true} sm={4}>
                <div>
                  <div className={classes.circle_style}>
                    <img
                      className={classes.img_style}
                      src={"/chart-bar-stacked.png"}
                    />
                  </div>
                  <br />
                  <Typography gutterBottom={true}>
                    NTSE - National Talent Search Exam
                  </Typography>
                </div>
              </Grid>

              <Grid item={true} sm={4}>
                <div className={classes.circle_style}>
                  <img
                    className={classes.img_style}
                    src={"/chart-bar-stacked.png"}
                  />
                </div>
                <br />
                <Typography gutterBottom={true}>
                  IJSO - International Junior Science Olympiad
                </Typography>
              </Grid>

              <Grid item={true} sm={4}>
                <div className={classes.circle_style}>
                  <img
                    className={classes.img_style}
                    src={"/chart-bar-stacked.png"}
                  />
                </div>
                <br />
                <Typography gutterBottom={true}>
                  IESO - International Earth Science Olympiad and <br />
                  other scholarship linked exams
                </Typography>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden mdUp={true}>
            <Grid container={true} justify="center">
              <Grid item={true} sm={12}>
                <div className={classes.circle_style_mob}>
                  <img
                    className={classes.img_style_mob}
                    src={"/chart-bar-stacked.png"}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid container={true} justify="center">
              <Grid item={true} sm={12}>
                <br />
                <Typography gutterBottom={true}>
                  NTSE - National Talent Search Exam
                </Typography>
              </Grid>
            </Grid>
            <br /> <br />
            <Grid container={true} justify="center">
              <Grid item={true} sm={12}>
                <div className={classes.circle_style_mob}>
                  <img
                    className={classes.img_style_mob}
                    src={"/chart-bar-stacked.png"}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid container={true} justify="center">
              <Grid item={true} sm={12}>
                <br />
                <Typography gutterBottom={true}>
                  IJSO - International Junior Science Olympiad
                </Typography>
              </Grid>
            </Grid>
            <br /> <br />
            <Grid container={true} justify="center">
              <Grid item={true} sm={12}>
                <div className={classes.circle_style_mob}>
                  <img
                    className={classes.img_style_mob}
                    src={"/chart-bar-stacked.png"}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid container={true} justify="center">
              <Grid item={true} sm={12}>
                <br />
                <Typography gutterBottom={true}>
                  IESO - International Earth Science Olympiad and other
                  scholarship linked exams
                </Typography>
              </Grid>
            </Grid>
          </Hidden>
          <br />
          <br />
          <Achivements />
        </div>
      </Screen>
    );
  }
}
export default withStyles(styles)(AboutUs);
