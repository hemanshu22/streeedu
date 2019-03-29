import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";

const styles = (theme: any) =>
  createStyles({
    paper: {
      border: "12px",
      padding: "10px"
    },
    firstdiv: {
      padding: "45px",
      backgroundColor: "#4832ba"
    },
    webfirstdiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#4832ba"
    },
    aboutstree: {
      color: "white"
    },
    seconddiv: {
      backgroundColor: "#f9fbfc",
      padding: "35px",
      fontSize: "18px"
    },
    heading: {
      color: "white"
    },
    aboutresomobile: {
      padding: "45px",
      backgroundColor: "#57d9a3"
    },
    aboutreso: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#57d9a3"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class AboutUs extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <Hidden only={["xs", "sm", "md"]}>
          <br />
        </Hidden>
        <Typography variant="display1" gutterBottom={true} align="center">
          About Us
        </Typography>
        <br />
        <Grid container={true} direction="row">
          <Grid item={true} md={1} />
          <Hidden only={["lg", "md"]}>
            <Grid item={true} xs={12} sm={12} className={classes.firstdiv}>
              <Typography
                variant="display1"
                component="h3"
                align="center"
                gutterBottom={true}
                className={classes.heading}
              >
                About STREE
              </Typography>
            </Grid>
          </Hidden>
          <Hidden only={["xs", "sm"]}>
            <Grid item={true} md={5} lg={5} className={classes.webfirstdiv}>
              <Typography
                variant="display1"
                component="h3"
                align="center"
                className={classes.heading}
              >
                About STREE
              </Typography>
              <br />
              <br />
            </Grid>
          </Hidden>
          <Grid
            item={true}
            xs={12}
            sm={12}
            md={5}
            lg={5}
            className={classes.seconddiv}
          >
            <Grid container={true} direction="row">
              <Grid item={true} xs={12} sm={12} md={12} lg={12}>
                <Typography variant="subheading" component="h3">
                  STREE is a Dubai-based group of companies launched to
                  capitalize on its founders’ expertise in real estate, as well
                  as leverage their extensive international management
                  experience, to diversify and expand the group’s interests in
                  select high-growth industries that are ripe for
                  transformation. STREE is set out to establish the gold
                  standard within the MENA region in Real Estate Development,
                  Education, Food & Beverage Distribution and Tourism. Our
                  vision is simple: to be our clients’ most trusted partner
                  through our holistic approach to client service and
                  relationship management. We do this through the delivery of
                  best-in-class products and services that drive sustainable
                  growth and influence the quality of life. We embrace
                  innovation and digital disruption, which enable us to
                  continuously create new levels of value for our customers.
                </Typography>
                <br />
              </Grid>
            </Grid>
          </Grid>
          <Grid item={true} md={1} />
        </Grid>
        <br />
        <br />
        <Hidden only={["xs", "sm"]}>
          <Grid container={true} direction="row">
            <Grid item={true} md={1} lg={1} />
            <Grid item={true} md={5} lg={5} className={classes.seconddiv}>
              <Typography variant="subheading" component="h3">
                Resonance launched Pre-foundation Career Care Programs (PCCPs)
                Division in 2006 with the philosophy of an early start. As the
                name suggests, the division aims at giving the edge to the
                students for Career Examinations like JEE (Main + Advanced),
                NEET/ AIIMS, CA/CS/CLAT etc. before entering into senior
                secondary classes. In last 11 years, PCCP division has evolved
                significantly and works in two segments of classes, namely,
                Sub-Junior classes (V – VIII) and Junior classes (IX – X).The
                two segments have different teaching methodologies and so are
                their targets. In Junior classes, the targeted competitive
                examinations are National Standard Examination in Junior Science
                (NSEJS, 1st stage of International Junior Science Olympiad
                (IJSO)), National Talent Search Examinations (NTSE), Pre
                Regional Mathematics Olympiad (PreRMO, 1st stage of
                International Mathematics Olympiad). In addition to these
                competitive examinations, we also prepare students for class X
                board examination, according to the latest changes made in it,
                by exposing them to mock situations like that of the real one.
                In Sub-Junior classes, the targeted competitive examinations are
                National Mathematics Talent Competitions (NMTC), Private
                Mathematics and Science Olympiads and other private Olympiads
                which can be cleared by following CBSE curriculum of the
                particular class. Other than the competitive examinations, we
                build conceptual understanding in all the subjects by following
                NCERT curriculum and conducting various academic workshops to
                make students understand the application of several concepts.
                Other than the academic delivery of concepts in Sub-Junior
                classes, we also aim at inculcating life skills in students as
                per the current guidelines of World Health Organization (WHO).
                The life skills include social skills, thinking skills and
                emotional skills. These skills are enhanced through a variety of
                activities conducted at the campus of each study center of
                Resonance.
              </Typography>
            </Grid>
            <Grid item={true} md={5} lg={5} className={classes.aboutreso}>
              <Grid container={true} direction="row">
                <Grid item={true} xs={12} sm={6} md={12} lg={12}>
                  <Typography
                    variant="display1"
                    component="h3"
                    align="center"
                    className={classes.heading}
                  >
                    About Resonance
                  </Typography>
                  <br />
                </Grid>
              </Grid>
            </Grid>
            <Grid item={true} md={1} />
          </Grid>
        </Hidden>
        <Hidden only={["md", "lg"]}>
          <Grid container={true} direction="row">
            <Grid
              item={true}
              xs={12}
              sm={12}
              className={classes.aboutresomobile}
            >
              <Typography
                variant="display1"
                component="h3"
                align="center"
                className={classes.heading}
              >
                About Resonance
              </Typography>
              <br />
            </Grid>
            <Grid item={true} xs={12} sm={12} className={classes.seconddiv}>
              <Typography variant="subheading" component="h3">
                Resonance launched Pre-foundation Career Care Programs (PCCPs)
                Division in 2006 with the philosophy of an early start. As the
                name suggests, the division aims at giving the edge to the
                students for Career Examinations like JEE (Main + Advanced),
                NEET/ AIIMS, CA/CS/CLAT etc. before entering into senior
                secondary classes. In last 11 years, PCCP division has evolved
                significantly and works in two segments of classes, namely,
                Sub-Junior classes (V – VIII) and Junior classes (IX – X).The
                two segments have different teaching methodologies and so are
                their targets. In Junior classes, the targeted competitive
                examinations are National Standard Examination in Junior Science
                (NSEJS, 1st stage of International Junior Science Olympiad
                (IJSO)), National Talent Search Examinations (NTSE), Pre
                Regional Mathematics Olympiad (PreRMO, 1st stage of
                International Mathematics Olympiad). In addition to these
                competitive examinations, we also prepare students for class X
                board examination, according to the latest changes made in it,
                by exposing them to mock situations like that of the real one.
                In Sub-Junior classes, the targeted competitive examinations are
                National Mathematics Talent Competitions (NMTC), Private
                Mathematics and Science Olympiads and other private Olympiads
                which can be cleared by following CBSE curriculum of the
                particular class. Other than the competitive examinations, we
                build conceptual understanding in all the subjects by following
                NCERT curriculum and conducting various academic workshops to
                make students understand the application of several concepts.
                Other than the academic delivery of concepts in Sub-Junior
                classes, we also aim at inculcating life skills in students as
                per the current guidelines of World Health Organization (WHO).
                The life skills include social skills, thinking skills and
                emotional skills. These skills are enhanced through a variety of
                activities conducted at the campus of each study center of
                Resonance.
              </Typography>
            </Grid>
            {/* <Grid
              item={true}
              xs={12}
              sm={12}
              md={5}
              lg={5}
              className={classes.aboutreso}
            >
              <Grid container={true} direction="row">
                
              </Grid>
            </Grid> */}
            {/* <Grid item={true} xs={10} sm={10} /> */}
          </Grid>
        </Hidden>
        <br />
        <br />
      </div>
    );
  }
}
export default withStyles(styles)(AboutUs);
