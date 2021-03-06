import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardOne from "./CardOne";
import CardFour from "./CardFour";
import CardFive from "./CardFive";
import CardSix from "./CardSix";
import CardTestimonials from "./CardTestimonials";
import CardAchievement from "./CardAchievement";
import resultimage from "../../../../../../utils/img/result.jpg";

const data1 = [
  {
    label: "Course/Lecture Planning"
  },
  {
    label: "Lecture Notes Preparation"
  },
  {
    label: "Faculty Workload/Productivity Management"
  },
  {
    label: "Study Material Development & Question Bank Management"
  },
  {
    label: "Academic Quality Control & Auditing."
  },
  {
    label: "Academic Research & Development"
  },
  {
    label: "Orientation/ introductory &Motivation Classes"
  },
  {
    label: "Special Classes for Performance Improvement"
  },
  {
    label: "Faculty Discipline & Performance Management"
  }
];

const data2 = [
  {
    label: "Pre-defined Yearly Planner"
  },
  {
    label: "Enhanced Classroom Teaching with Learning Aids"
  },
  {
    label: "Scientifically Designed Chapter Modules"
  },
  {
    label: "Daily Practice Problems (DPPs)"
  },
  {
    label: "Regular Classroom Discussion of Homework Questions"
  },

  {
    label: "Student Analysis and Performance Evaluation Report (SAPER)"
  },
  {
    label: "National Talent Benchmark Tests (NTBT)"
  },
  {
    label: "School Examination Preparatory (SEP) Sheets"
  }
];

const data3 = [
  {
    label: "Unique Teaching Methodology"
  },
  {
    label: "Comprehensive & best study material"
  },
  {
    label: "Workshops & Mock Tests for best preparation"
  },
  {
    label: "Doubt clearing sessions and regular academic feedback"
  },
  {
    label: "Periodic batch reshuffling to generate the spirit of competition"
  },
  {
    label: "Parents,Teachers & Students Meeting"
  },
  { label: "Motivation & Counselling Sessions" },
  { label: "Subjective and school Examination preparatory tests" }
];
const data4 = [
  {
    msg:
      "Every student upon completing their board exams look forward to professional entrance coaching. Parents in UAE realize that their children would get the best coaching at the best institute in UAE and Dubai. But how will anyone decide which institute is best? "
  }
];
const data5 = [
  {
    msg:
      "Good training through an established brand – Resonance, one of the leading institutions with experienced faculty along with updated course contents. We ensure appreciable student-lecturer relationship which is considered the best in coaching process."
  }
];
const data6 = [
  {
    msg:
      "Good training through an established brand – Resonance, one of the leading institutions with experienced faculty along with updated course contents. We ensure appreciable student-lecturer relationship which is considered the best in coaching process."
  }
];
const styles = (theme: any) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    curve: {
      marginBottom: "0px"
    },
    gridacademics: {
      backgroundColor: "#f7f7f7",
      marginTop: "-4px",
      padding: "10px"
    },
    academicsdiv: {
      display: "flex",
      alignItems: "stretch"
    },
    secondgrid: {
      padding: "20px"
    },
    courses: {
      display: "flex",
      alignItems: "stretch"
    },
    coursecontent: {
      padding: "10px"
    },
    gridfour: {
      backgroundColor: "#f7f7f7",
      padding: "10px"
    },
    gridthree: {},
    excellence: {
      padding: "10px"
    },
    gridfive: {
      backgroundColor: "#f7f7f7"
    },
    corefeatures: {
      padding: "30px",
      "& div": {
        color: "white"
      },
      background: "no repeat center center",
      backgroundColor: "#000000",
      backgroundSize: "cover"
    },
    overlay: {
      width: "100%"
    },
    coretext: {
      color: "white",
      fontWeight: 700,
      textTransform: "uppercase"
    },
    cardresult: {
      backgroundImage: "url(" + resultimage + ")",
      background: "no repeat center center"
    },
    achievements: {
      minHeight: "400px",
      maxHeight: "1800px",
      backgroundImage: "url(" + resultimage + ")",
      background: "no repeat center center"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class SectionThree extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <br />
        <br />
        <Grid container={true} className={classes.root}>
          <Grid item={true} xs={12} md={2} />
          <Grid item={true} xs={12} md={8}>
            <Typography
              gutterBottom={true}
              variant="h4"
              component="h3"
              align="center"
            >
              Courses Offered
            </Typography>
            <br />
          </Grid>
          <Grid item={true} md={2} />
        </Grid>
        <Grid
          container={true}
          className={classes.secondgrid}
          direction="row"
          justify="center"
          alignItems="center"
          spacing={16}
        >
          <Grid item={true} xs={12} md={3} sm={12}>
            <CardOne
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/IJSO.jpg/189px-IJSO.jpg"
              title="PCCP"
              subheading="Pre-Foundation Career Care Programme"
              link="pccp"
              backgroundcolor="#880e4f"
              // data="is a competitive examination open to students of all countries in the world, primarily studying in secondary schools. All basic subjects of Science (Physics, Chemistry, Biology and Mathematics) are given roughly equal representation in the IJSO examination."
            />
          </Grid>
          <Grid item={true} xs={12} md={3} sm={12}>
            <CardOne
              src="https://lh3.googleusercontent.com/G95O1stwK-5w-2Z9g34WpalYtlzGY8XiZQGHGhcyLxDGdPYD3IrQRePmOIppzv7uhT3OjjgFVD1jg21H6i8UrEZHEGHY7ttQluDRUg"
              title="SAT"
              subheading="Scholastic Aptitude Test"
              link="sat"
              backgroundcolor="#f44336"
              // data="is a competitive examination open to students of all countries in the world, primarily studying in secondary schools. All basic subjects of Science (Physics, Chemistry, Biology and Mathematics) are given roughly equal representation in the IJSO examination."
            />
          </Grid>
          <Grid item={true} xs={12} md={3} sm={12}>
            <CardOne
              src="http://www.ieso-info.org/wp-content/uploads/2018/10/2019-Logo.jpg"
              title="XI/XII"
              subheading="XI/XII"
              link="xii"
              backgroundcolor="#3f51b5"
              // data="is a competitive examination open to students of all countries in the world, primarily studying in secondary schools. All basic subjects of Science (Physics, Chemistry, Biology and Mathematics) are given roughly equal representation in the IJSO examination."
            />
          </Grid>
          <Grid item={true} xs={12} md={3} sm={12}>
            <CardOne
              src="https://schools.aglasem.com/wp-content/uploads/2014/03/IMO.jpg?w=640"
              title="JEE MAIN"
              subheading="Engineering"
              link="jeemain"
              backgroundcolor="#009688"
              // data="is a competitive examination open to students of all countries in the world, primarily studying in secondary schools. All basic subjects of Science (Physics, Chemistry, Biology and Mathematics) are given roughly equal representation in the IJSO examination."
            />
          </Grid>
        </Grid>
        <Grid
          container={true}
          className={classes.secondgrid}
          direction="row"
          justify="center"
          alignItems="center"
          spacing={16}
        >
          <Grid item={true} xs={12} md={3} sm={12}>
            <CardOne
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/IJSO.jpg/189px-IJSO.jpg"
              title="NEET"
              subheading="Pre Medical"
              link="neet"
              backgroundcolor="#e65100"
              //  data="is a competitive examination open to students of all countries in the world, primarily studying in secondary schools. All basic subjects of Science (Physics, Chemistry, Biology and Mathematics) are given roughly equal representation in the IJSO examination."
            />
          </Grid>
          <Grid item={true} xs={12} md={3} sm={12}>
            <CardOne
              src="https://lh3.googleusercontent.com/G95O1stwK-5w-2Z9g34WpalYtlzGY8XiZQGHGhcyLxDGdPYD3IrQRePmOIppzv7uhT3OjjgFVD1jg21H6i8UrEZHEGHY7ttQluDRUg"
              title="OLYMPIADS"
              subheading="International Olympiads"
              link="olympiads"
              backgroundcolor="#00c853"
              // data="is a competitive examination open to students of all countries in the world, primarily studying in secondary schools. All basic subjects of Science (Physics, Chemistry, Biology and Mathematics) are given roughly equal representation in the IJSO examination."
            />
          </Grid>
          <Grid item={true} xs={12} md={3} sm={12}>
            <CardOne
              src="http://www.ieso-info.org/wp-content/uploads/2018/10/2019-Logo.jpg"
              title="BOARDS"
              subheading="National/International Boards"
              link="boards"
              backgroundcolor="#795548"
              // data="is a competitive examination open to students of all countries in the world, primarily studying in secondary schools. All basic subjects of Science (Physics, Chemistry, Biology and Mathematics) are given roughly equal representation in the IJSO examination."
            />
          </Grid>
        </Grid>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes.curve}
          viewBox="0 0 1440 68"
          enable-background="new 0 0 1440 68"
        >
          <path
            d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8"
            fill="#F7F7F7"
            transform="translate(0-1977)"
          />
        </svg>
        <Grid
          container={true}
          className={classes.gridfour}
          direction="row"
          spacing={8}
        >
          <Grid
            item={true}
            xs={12}
            md={4}
            sm={12}
            lg={4}
            className={classes.courses}
          >
            <CardFour
              image="https://wac-cdn.atlassian.com/dam/jcr:6b78f16b-3f24-4546-852f-22e829f24b9a/Grad@2x.png?cdnVersion=kx"
              heading="Why Students Need STREE Education"
              data={data4}
            />
          </Grid>
          <Grid
            item={true}
            xs={12}
            md={4}
            sm={12}
            lg={4}
            className={classes.courses}
          >
            <CardFour
              image="https://wac-cdn.atlassian.com/dam/jcr:6b78f16b-3f24-4546-852f-22e829f24b9a/Grad@2x.png?cdnVersion=kx"
              heading="STREE Education Provides"
              data={data5}
            />
          </Grid>
          <Grid
            item={true}
            xs={12}
            md={4}
            sm={12}
            lg={4}
            className={classes.courses}
          >
            <CardFour
              image="https://wac-cdn.atlassian.com/dam/jcr:6b78f16b-3f24-4546-852f-22e829f24b9a/Grad@2x.png?cdnVersion=kx"
              heading="Benefits of Joining STREE Education"
              data={data6}
            />
          </Grid>
        </Grid>
        <Grid container={true} direction="row" className={classes.gridfive}>
          <Grid item={true} xs={12} md={1} />
          <Grid item={true} xs={12} md={10}>
            <br />
            <br />
            <br />
            <CardFive /> <br />
            <br />
            <br />
          </Grid>
          <Grid item={true} xs={12} md={1} />
        </Grid>
        <Grid
          container={true}
          direction="row"
          spacing={16}
          className={classes.gridacademics}
        >
          <Grid
            item={true}
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className={classes.academicsdiv}
          >
            <CardSix heading="Key Processes: Academics" data={data1} />
          </Grid>
          <Grid
            item={true}
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className={classes.academicsdiv}
          >
            <CardSix heading="Academic Excellence" data={data2} />
          </Grid>
          <Grid
            item={true}
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className={classes.academicsdiv}
          >
            <CardSix heading="Core Features" data={data3} />
          </Grid>
        </Grid>
        <Grid container={true} className={classes.cardresult}>
          <Grid item={true} xs={12} md={4} />
          <Grid item={true} xs={12} md={4}>
            <Typography
              gutterBottom={true}
              variant="h4"
              component="h3"
              align="center"
            >
              <br />
              Our Achievements
              <br />
              <br />
            </Typography>
          </Grid>
          <Grid item={true} xs={12} md={4} />
        </Grid>
        <div className={classes.achievements}>
          <CardAchievement />
        </div>
        <div>
          <CardTestimonials />
        </div>
        <br/><br/>
      </div>
    );
  }
}
export default withStyles(styles)(SectionThree);
