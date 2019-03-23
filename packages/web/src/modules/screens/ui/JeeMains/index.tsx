import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Screen from "../../../../utils/components/Screen";

const styles = (theme: any) =>
  createStyles({
    button: {
      margin: theme.spacing.unit,
      color: "#0052CC"
    },
    grid_cen: {
      justifyContent: "center"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class JeeMains extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Screen title="jee Mains">
        <div>
          <br />
          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true}>
              <Typography variant="display1" gutterBottom={true} align="center">
                JEE MAINS
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={10}>
              <Typography variant="body1" gutterBottom={true}>
                <b>Course Concept - </b> A Course specially designed for those
                students who wish to take an early advantage by enrolling
                immediately after Class-X Board examination. It helps in best
                utilization of the crucial summer vacations and early building
                of poised attitude. It also enhances their analytical thinking,
                conceptual knowledge and confidence level to face the brunt of
                competition. Initially, the course begins with fundamental study
                as the students are not exposed to the syllabus and pattern of
                JEE (Main).
              </Typography>
              <br />
              <Typography variant="title" gutterBottom={true} />

              <Typography variant="body1" gutterBottom={true}>
                <b> Course Structure - </b> The entire course is divided into
                two academic sessions
                <br />
                <b>First Year (During class 11th) - </b> During the first
                academic session, the JEE (Main) which is common to school
                syllabus of Class-11th, will be taught to the students. This
                syllabus is scheduled to be finished by mid of February. During
                month of March, the students will be given a break of around
                30-40 days from the institute. During this period, the students
                take their annual examinations of Class-11th in their respective
                schools.
                <br />
                <b>Second Year (During class 12th) - </b> Based on performance
                of the students in periodic test, they are promoted to second
                year in ANOOP course.
              </Typography>
              <br />
              <Typography variant="body1" gutterBottom={true}>
                <b>Course Content - </b>
                <br />
                Regular Classroom Coaching.
                <br />
                90 minutes lecture which is further divided into DPP discussion
                of 15 min, Sheet Discussion of next 30 minutes & theoretical and
                conceptual learning of last 45 minutes.
                <br />
                3 to 4 lectures per subject per week.
                <br />
                Periodic Test is conducted once in a month in the form of Part
                Test & Cumulative Test.
                <br />
                Regular conduction of Doubt Classes.
                <br />
                <br />
                <b>Distinctive Features - </b>
                Longest time availability as compared to other Courses.
                <br />
                Lays solid foundation of basic concepts of all the subjects.
                <br />
                The focus of the Course is more on concept building & gradual
                improvement in the performance of the students.
                <br />
                Develops quick analytical thinking & systematic problem solving
                skills.
                <br />
                Good practice of JEE (Main) problems which ensure the clarity of
                every small doubt.
                <br />
                On the basis of performance in Periodic Tests, students are
                reshuffled so as to enhance the competitive spirit amongst them.
                <br />
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Screen>
    );
  }
}
export default withStyles(styles)(JeeMains);
