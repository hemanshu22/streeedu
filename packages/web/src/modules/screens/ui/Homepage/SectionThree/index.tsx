import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";
import CardFour from "./CardFour";
import CardFive from "./CardFive";
import CardSix from "./CardSix";
import CardTestimonials from "./CardTestimonials";

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
    label: "All India Testing"
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
    label: "UNIQUE TEACHING METHODOLOGY"
  },
  {
    label: "Comprehensive & best study material"
  },
  {
    label: "Worksshops & Mock Tests for best preparation"
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
      padding: "5px"
    },
    academicsdiv: {
      display: "flex",
      alignItems: "stretch"
    },
    courses: {
      display: "flex",
      alignItems: "stretch"
    },
    coursecontent: {
      padding: "10px"
    },
    gridfour: {
      backgroundColor: "#f7f7f7"
      // marginTop: "-4px"
      // padding: "10px"
    },
    gridthree: {
      //  padding: "10px"
    },
    excellence: {
      padding: "10px"
    },
    gridfive: {
      backgroundColor: "#f7f7f7"
    },
    corefeatures: {
      padding: "30px",
      // backgroundImage: `url(
      //   https://dgivdslhqe3qo.cloudfront.net/careers/photos/67197/normal_photo_1526549789.JPG
      // )`,
      "& div": {
        //  opacity: 0.6,
        color: "white"
        // backgroundColor: "#2a333d"
      },
      background: "no repeat center center",
      backgroundColor: "#000000",
      backgroundSize: "cover"
      // backgrundSize: "cover"

      // height: "500px"
    },
    overlay: {
      width: "100%"
      // backgroundColor: "#2a333d",
      // opacity: 0.6
    },
    coretext: {
      color: "white",
      fontWeight: 700,
      textTransform: "uppercase"
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
          direction="row"
          spacing={8}
          style={{ padding: "5px" }}
        >
          <Grid item={true} xs={12} md={3} sm={12} className={classes.courses}>
            <CardOne
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/IJSO.jpg/189px-IJSO.jpg"
              title="IJSO"
              subheading="International Junior Science Olympiad"
              data="is a competitive examination open to students of all countries in the world, primarily studying in secondary schools. All basic subjects of Science (Physics, Chemistry, Biology and Mathematics) are given roughly equal representation in the IJSO examination."
            />
          </Grid>
          <Grid item={true} xs={12} md={3} sm={12} className={classes.courses}>
            <CardOne
              src="https://lh3.googleusercontent.com/G95O1stwK-5w-2Z9g34WpalYtlzGY8XiZQGHGhcyLxDGdPYD3IrQRePmOIppzv7uhT3OjjgFVD1jg21H6i8UrEZHEGHY7ttQluDRUg"
              title="NTSE"
              subheading=" National Talent Search Exam"
              data="is a competitive examination open to students of all countries in the world, primarily studying in secondary schools. All basic subjects of Science (Physics, Chemistry, Biology and Mathematics) are given roughly equal representation in the IJSO examination."
            />
          </Grid>
          <Grid item={true} xs={12} md={3} sm={12} className={classes.courses}>
            <CardOne
              src="http://www.ieso-info.org/wp-content/uploads/2018/10/2019-Logo.jpg"
              title="IESO"
              subheading="International Earth Science Olympiad"
              data="is a competitive examination open to students of all countries in the world, primarily studying in secondary schools. All basic subjects of Science (Physics, Chemistry, Biology and Mathematics) are given roughly equal representation in the IJSO examination."
            />
          </Grid>
          <Grid item={true} xs={12} md={3} sm={12} className={classes.courses}>
            <CardOne
              src="https://schools.aglasem.com/wp-content/uploads/2014/03/IMO.jpg?w=640"
              title="IMO"
              subheading="International Maths Olympiad"
              data="is a competitive examination open to students of all countries in the world, primarily studying in secondary schools. All basic subjects of Science (Physics, Chemistry, Biology and Mathematics) are given roughly equal representation in the IJSO examination."
            />
          </Grid>
          <br />
        </Grid>
        <br />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes.curve}
          viewBox="0 0 1440 68"
          enable-background="new 0 0 1440 68"
        >
          <path
            d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8"
            fill="#F4F5F7"
            transform="translate(0-1977)"
          />
        </svg> */}
        <br />
        <br />
        <Grid container={true} className={classes.root}>
          <Grid item={true} xs={12} md={1} />
          <Grid item={true} xs={12} md={5}>
            <Typography
              gutterBottom={true}
              variant="h4"
              component="h3"
              align="center"
            >
              Admission Counselling
            </Typography>
            <br />
          </Grid>
          <Grid item={true} md={6} />
        </Grid>
        <br />
        <Grid container={true} className={classes.gridthree} direction="row">
          <Grid item={true} md={2} />
          <Grid xs={12} md={3} sm={4} className={classes.courses}>
            <CardThree
              heading="PCCP"
              data="Visitors / students are counselled about the admission eligibility ,process , fees , test patterns , and academic syllabus."
            />
          </Grid>
          <Grid xs={12} md={3} sm={4} className={classes.courses}>
            <CardThree
              heading="Key features of the organization"
              data="Experienced IITian’s faculties and their academic inputs , unique teaching methodology and discipline , students support ."
            />
          </Grid>
          <Grid xs={12} md={3} sm={4} className={classes.courses}>
            <CardThree
              heading="Results and achievements"
              data="Results of pccp and past achievements are highlighted."
            />
          </Grid>
          <Grid item={true} xs={12} md={1} />
          <br />
        </Grid>
        <br />
        <Grid
          container={true}
          className={classes.gridthree}
          direction="row"
          spacing={8}
        >
          <Grid item={true} xs={12} md={2} />
          <Grid xs={12} md={3} sm={4}>
            <CardThree
              heading="Career stream selection "
              data="Students are advised an appropriate stream as per their aptitude , past academic performance and interest."
            />
          </Grid>
          <Grid xs={12} md={3} sm={4}>
            <CardThree
              heading="Performance"
              data="Students are guided appropriately to help fill gap between actual and desired performance and are advised accordingly."
            />
          </Grid>
          <Grid xs={12} md={3} sm={4}>
            <CardThree
              heading="Wide spectrum of competitive exams"
              data="Students are briefed about various competitive exams and how to crack them successfully."
            />
          </Grid>
          <Grid item={true} xs={12} md={1} />
          <br />
        </Grid>
        <br />
        <br />
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
        {/* <br /> */}
        <Grid
          container={true}
          className={classes.gridfour}
          direction="row"
          spacing={8}
        >
          {/* <Grid item={true} xs={12} md={1} /> */}
          <Grid item={true} xs={12} md={4} className={classes.courses}>
            <CardFour
              image="https://wac-cdn.atlassian.com/dam/jcr:6b78f16b-3f24-4546-852f-22e829f24b9a/Grad@2x.png?cdnVersion=kx"
              heading="Why Students Need STREE"
              data="Every student upon completing their board exams look forward to professional entrance coaching. Parents in UAE realize that their children would get the best coaching at the best institute in UAE and Dubai. But how will anyone decide which institute is best? "
            />
          </Grid>

          <Grid item={true} xs={12} md={4} className={classes.courses}>
            <CardFour
              image="https://wac-cdn.atlassian.com/dam/jcr:6b78f16b-3f24-4546-852f-22e829f24b9a/Grad@2x.png?cdnVersion=kx"
              heading="STREE Provides"
              data="Good training through an established brand – Resonance, one of the leading institutions with experienced faculty along with updated course contents. We ensure appreciable student-lecturer relationship which is considered the best in coaching process."
            />
          </Grid>
          <Grid item={true} xs={12} md={4} className={classes.courses}>
            <CardFour
              image="https://wac-cdn.atlassian.com/dam/jcr:6b78f16b-3f24-4546-852f-22e829f24b9a/Grad@2x.png?cdnVersion=kx"
              heading="STREE Provides"
              data="Good training through an established brand – Resonance, one of the leading institutions with experienced faculty along with updated course contents. We ensure appreciable student-lecturer relationship which is considered the best in coaching process."
            />
          </Grid>
          <Grid item={true} xs={12} md={1} />
          <br />
          <br />
          <br />
        </Grid>
        <Grid container={true} direction="row" className={classes.gridfive}>
          <Grid item={true} xs={12} md={1} />
          <Grid item={true} xs={12} md={10}>
            <CardFive />
            <br />
            <br />
            <br />
            {/* <br /> */}
          </Grid>
          <Grid item={true} xs={12} md={1} />
        </Grid>
        <Grid
          container={true}
          direction="row"
          spacing={8}
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
            <CardSix heading="Core Feature" data={data3} />
          </Grid>
        </Grid>
        <div className={classes.corefeatures}>
          <div className={classes.overlay} />
          <Grid container={true}>
            <Grid item={true} xs={12} md={2} />
            <Grid item={true} xs={12} md={8}>
              <br />
              <Typography
                gutterBottom={true}
                variant="h4"
                component="h3"
                align="center"
                className={classes.coretext}
              >
                Core Features
              </Typography>
              <br />
            </Grid>
            <Grid item={true} md={2} />

            <Grid item={true} xs={12} md={4}>
              <CardTwo data="Concept building through theory,illustrations and derivations in the classes using UNIQUE TEACHING METHODOLOGY to clear all the basic doubts and building strong foundation for future" />
            </Grid>
            <Grid item={true} xs={12} md={4}>
              <CardTwo data="Comprehensive & best study material." />
            </Grid>
            <Grid item={true} xs={12} md={4}>
              <CardTwo data="Series of Worksshops & mock tests for best preparation of various competitive exams" />
            </Grid>

            <Grid item={true} xs={12} md={4}>
              <CardTwo data="Doubt clearing sessions and regular academic feedback of home work checking with verification throught parents signature." />
            </Grid>

            <Grid item={true} xs={12} md={4}>
              <CardTwo data="Daily practice problems (DPPs) are discussed in classrooms to challenge students in time bound manner to boost revision of the students." />
            </Grid>
            <Grid item={true} xs={12} md={4}>
              <CardTwo data="Periodic batch reshuffling to generate the spirit of competition." />
            </Grid>
            <Grid item={true} xs={12} md={4}>
              <CardTwo data="School examination preparatory sheets (SEP Sheets)." />
            </Grid>
            <Grid item={true} xs={12} md={4}>
              <CardTwo data="Regular Students Academic performance & Evaluation report (SAPER) Sheet available on website." />
            </Grid>
            <Grid item={true} xs={12} md={4}>
              <CardTwo data="Parents,teachers & students Meeting on regular basis." />
            </Grid>
            <Grid item={true} xs={12} md={4}>
              <CardTwo data="Conduction of motivation classes & counseling session." />
            </Grid>
            <Grid item={true} xs={12} md={4}>
              <CardTwo data="National talent benchmark test (NTBT) to judge performance between thousands across india." />
            </Grid>
            <Grid item={true} xs={12} md={4}>
              <CardTwo data="Subjective and school Examination preparatory tests." />
            </Grid>
            <br />
            <br />
          </Grid>
        </div>
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
            <br />
          </Grid>
          <Grid item={true} md={4} />
        </Grid>
        <Grid container={true} className={classes.root}>
          <Grid item={true} xs={12} md={1} />
          <Grid item={true} xs={12} md={5}>
            <Typography
              gutterBottom={true}
              variant="h4"
              component="h3"
              align="center"
            >
              Parent's Speak
            </Typography>
          </Grid>
          <Grid item={true} xs={12} md={5}>
            <Typography
              gutterBottom={true}
              variant="h4"
              component="h3"
              align="center"
            >
              Student's Speak
            </Typography>
          </Grid>
          <Grid item={true} md={1} />
        </Grid>
        <Grid container={true} className={classes.root}>
          <Grid item={true} xs={1} sm={1} md={1} lg={1} />
          <Grid item={true} xs={12} sm={12} md={5} lg={5}>
            <CardTestimonials
              name="UTKARSH GUPTA"
              air="AIR-17 (GEN), JEE (Advanced) 2016"
              studycenter="Study Centre: Kota"
              data="Hi, I am Utkarsh Gupta and i am from Kota. I have secured a rank of 17 in general category. I am happy on my success, I was sure that I would be selected. I give credit of my success to my mentors (RKV Sir,AGL Sir, SM Sir, CSS Sir) and to my parents who supported throughout the preparation. Daily homework, Consistent hard work leads me to success. Hard work and practice. Resonance provided me a great study environment and dedicated coaching, which helped me crack JEE(Advanced) with flying colors. I am quite surethat without Resonance, the results would have been very different."
            />
          </Grid>
          <Grid item={true} xs={12} sm={12} md={5} lg={5}>
            <CardTestimonials
              name="UTKARSH GUPTA"
              air="AIR-17 (GEN), JEE (Advanced) 2016"
              studycenter="Study Centre: Kota"
              data="Hi, I am Utkarsh Gupta and i am from Kota. I have secured a rank of 17 in general category. I am happy on my success, I was sure that I would be selected. I give credit of my success to my mentors (RKV Sir,AGL Sir, SM Sir, CSS Sir) and to my parents who supported throughout the preparation. Daily homework, Consistent hard work leads me to success. Hard work and practice. Resonance provided me a great study environment and dedicated coaching, which helped me crack JEE(Advanced) with flying colors. I am quite surethat without Resonance, the results would have been very different."
            />
          </Grid>
          <Grid item={true} xs={1} sm={1} md={1} lg={1} />
          <br />
        </Grid>{" "}
        <br /> <br />
      </div>
    );
  }
}
export default withStyles(styles)(SectionThree);
