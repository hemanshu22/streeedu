import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import planner from "../../../../utils/img/test.png";
import demo from "../../../../utils/img/demo.svg";
import Hidden from "@material-ui/core/Hidden";

const styles = (theme: any) =>
  createStyles({
    button: {
      margin: theme.spacing.unit,
      color: "#0052CC"
    },
    planner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class AcademicExcellence extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Hidden only={["lg", "sm", "xs"]}>
          <br /><br />
          <Grid container={true} spacing={8}>
            <Grid item={true} xs={12} sm={12} md={12} lg={12}>
              <Typography variant="headline" gutterBottom={true} align="center">
                TEN COMMANDMENTS ON ACADEMIC EXCELLENCE
              </Typography>
            </Grid>
          </Grid>

          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  PRE-DEFINED YEARLY PLANNER
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  Students are provided with a yearly planner consisting of
                  arrayed chapters for each of the subjects, test grid of the
                  whole session with syllabus mentioned in it, holiday schedule,
                  homework checking schedule etc. This planner helps students
                  and parents in planning the strategy for studies and progress
                  ahead.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  ENHANCED CLASSROOM TEACHING WITH LEARNING AIDS
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  In classrooms, faculty members employ latest technologies to
                  deliver topics in the most interesting and possible manner to
                  maximize the absorption of concepts. Students in Resonance
                  study not only through chalkboard method but also through
                  interactive videos and animations.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
              {/* <img src="https://img.icons8.com/color/100/000000/google-classroom.png" /> */}
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
              {/* <img src="https://img.icons8.com/color/100/000000/module.png" /> */}
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  SCIENTIFICALLY DESIGNED CHAPTER MODULES
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  Classroom teaching is supplemented with futuristic study
                  material in the form of chapter modules, which provide
                  sequential theory of a particular chapter with questions at
                  regular intervals to check the progress of students. At the
                  end of the chapter, pictorial and textual summaries are given
                  for a quick revision at the time of tests. After the
                  summaries, exercises are given with carefully selected
                  questions of different types and difficulty levels for
                  comprehensive practice.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  DAILY PRACTICE PROBLEMS (DPPS)
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  In addition to chapter modules, DPPs are given to students.
                  Each DPP includes questions from all the chapters taught
                  before it, even if they've already been covered in earlier
                  DPPs. These problems need to be solved within a mentioned time
                  interval. It helps in boosting revisions and practice of time
                  management at home.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  REGULAR CLASSROOM DISCUSSION OF HOMEWORK QUESTIONS
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  After classroom teaching, homework is given to students, which
                  is discussed in the next class of that particular subject. The
                  immediate practice of a learned concept enhances the chances
                  of absorption of the concept. Students who do regular homework
                  and participate in classroom discussion are very much likely
                  to succeed in the competitive examinations. Scientifically.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  STUDENT ANALYSIS AND PERFORMANCE EVALUATION REPORT (SAPER)
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  Students can check his/her performance and rank generated for
                  each subject at the website of Resonance. This helps students
                  to identify their strength and weakness. The SAPER can be
                  found at www.pccp.resonance.ac.in, under student zone.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
          <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  NATIONAL TALENT BENCHMARK TESTS (NTBT)
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  Special test series is designed for students who are aspiring
                  for good ranks in competitive examinations. In this test
                  series, students (Resonites as well as Non Resonites) appear
                  and showcase their talent which is benchmarked at national
                  level with All India Ranks and helps in analysis of strong and
                  weak topics.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
        
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  SCHOOL EXAMINATION PREPARATORY (SEP) SHEETS
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  These are worksheets which are to be solved and submitted for
                  checking, after each chapter. After checking, they are given
                  back to students with remarks so that students can know the
                  areas they need to focus on.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
          <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  CLINIC CLASSES AND DOUBT CLASSES
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  Clinic classes are for those students who miss out on classes
                  due to unavoidable circumstances or late joining. These
                  classes run throughout the year so that students can catch up
                  anytime they feel left out. Doubt classes also run throughout
                  the year to clear doubts of students after regular classes.
                  Doubt classes are also used by the students to ask the doubts
                  from supplementary books.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
        </Hidden>

        {/*for smaller device*/}

         <Hidden only={["lg", "md", "xs"]}>
          <br /><br />
          <Grid container={true} spacing={8}>
            <Grid item={true} xs={12} sm={12} md={12} lg={12}>
              <Typography variant="headline" gutterBottom={true} align="center">
                TEN COMMANDMENTS ON ACADEMIC EXCELLENCE
              </Typography>
            </Grid>
          </Grid>
          <br/>
          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
              {/* <img src={demo} /> */}
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  PRE-DEFINED YEARLY PLANNER
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  Students are provided with a yearly planner consisting of
                  arrayed chapters for each of the subjects, test grid of the
                  whole session with syllabus mentioned in it, holiday schedule,
                  homework checking schedule etc. This planner helps students
                  and parents in planning the strategy for studies and progress
                  ahead.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  ENHANCED CLASSROOM TEACHING WITH LEARNING AIDS
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  In classrooms, faculty members employ latest technologies to
                  deliver topics in the most interesting and possible manner to
                  maximize the absorption of concepts. Students in Resonance
                  study not only through chalkboard method but also through
                  interactive videos and animations.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
              {/* <img src="https://img.icons8.com/color/100/000000/google-classroom.png" /> */}
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
              {/* <img src="https://img.icons8.com/color/100/000000/module.png" /> */}
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  SCIENTIFICALLY DESIGNED CHAPTER MODULES
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  Classroom teaching is supplemented with futuristic study
                  material in the form of chapter modules, which provide
                  sequential theory of a particular chapter with questions at
                  regular intervals to check the progress of students. At the
                  end of the chapter, pictorial and textual summaries are given
                  for a quick revision at the time of tests. After the
                  summaries, exercises are given with carefully selected
                  questions of different types and difficulty levels for
                  comprehensive practice.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  DAILY PRACTICE PROBLEMS (DPPS)
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  In addition to chapter modules, DPPs are given to students.
                  Each DPP includes questions from all the chapters taught
                  before it, even if they've already been covered in earlier
                  DPPs. These problems need to be solved within a mentioned time
                  interval. It helps in boosting revisions and practice of time
                  management at home.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  REGULAR CLASSROOM DISCUSSION OF HOMEWORK QUESTIONS
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  After classroom teaching, homework is given to students, which
                  is discussed in the next class of that particular subject. The
                  immediate practice of a learned concept enhances the chances
                  of absorption of the concept. Students who do regular homework
                  and participate in classroom discussion are very much likely
                  to succeed in the competitive examinations. Scientifically.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  STUDENT ANALYSIS AND PERFORMANCE EVALUATION REPORT (SAPER)
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  Students can check his/her performance and rank generated for
                  each subject at the website of Resonance. This helps students
                  to identify their strength and weakness. The SAPER can be
                  found at www.pccp.resonance.ac.in, under student zone.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
           <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  NATIONAL TALENT BENCHMARK TESTS (NTBT)
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  Special test series is designed for students who are aspiring
                  for good ranks in competitive examinations. In this test
                  series, students (Resonites as well as Non Resonites) appear
                  and showcase their talent which is benchmarked at national
                  level with All India Ranks and helps in analysis of strong and
                  weak topics.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  SCHOOL EXAMINATION PREPARATORY (SEP) SHEETS
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  These are worksheets which are to be solved and submitted for
                  checking, after each chapter. After checking, they are given
                  back to students with remarks so that students can know the
                  areas they need to focus on.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
          <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  CLINIC CLASSES AND DOUBT CLASSES
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  Clinic classes are for those students who miss out on classes
                  due to unavoidable circumstances or late joining. These
                  classes run throughout the year so that students can catch up
                  anytime they feel left out. Doubt classes also run throughout
                  the year to clear doubts of students after regular classes.
                  Doubt classes are also used by the students to ask the doubts
                  from supplementary books.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
        </Hidden>

        {/*----------*/}
        {/*for larger device*/}
        <Hidden only={["xs","md","sm"]}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Grid container={true} spacing={8}>
            <Grid item={true} xs={12} sm={12} md={12} lg={12}>
              <Typography variant="headline" gutterBottom={true} align="center">
                TEN COMMANDMENTS ON ACADEMIC EXCELLENCE
              </Typography>
            </Grid>
          </Grid>
          {/* <br /> <br /> */}
          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
              {/* <img src={demo} /> */}
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
               <div>
                <Typography variant="headline" gutterBottom={true}>
                  PRE-DEFINED YEARLY PLANNER
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  Students are provided with a yearly planner consisting of
                  arrayed chapters for each of the subjects, test grid of the
                  whole session with syllabus mentioned in it, holiday schedule,
                  homework checking schedule etc. This planner helps students
                  and parents in planning the strategy for studies and progress
                  ahead.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  ENHANCED CLASSROOM TEACHING WITH LEARNING AIDS
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  In classrooms, faculty members employ latest technologies to
                  deliver topics in the most interesting and possible manner to
                  maximize the absorption of concepts. Students in Resonance
                  study not only through chalkboard method but also through
                  interactive videos and animations.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
              {/* <img src="https://img.icons8.com/color/100/000000/google-classroom.png" /> */}
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
              {/* <img src="https://img.icons8.com/color/100/000000/module.png" /> */}
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  SCIENTIFICALLY DESIGNED CHAPTER MODULES
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  Classroom teaching is supplemented with futuristic study
                  material in the form of chapter modules, which provide
                  sequential theory of a particular chapter with questions at
                  regular intervals to check the progress of students. At the
                  end of the chapter, pictorial and textual summaries are given
                  for a quick revision at the time of tests. After the
                  summaries, exercises are given with carefully selected
                  questions of different types and difficulty levels for
                  comprehensive practice.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  DAILY PRACTICE PROBLEMS (DPPS)
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  In addition to chapter modules, DPPs are given to students.
                  Each DPP includes questions from all the chapters taught
                  before it, even if they've already been covered in earlier
                  DPPs. These problems need to be solved within a mentioned time
                  interval. It helps in boosting revisions and practice of time
                  management at home.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  REGULAR CLASSROOM DISCUSSION OF HOMEWORK QUESTIONS
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  After classroom teaching, homework is given to students, which
                  is discussed in the next class of that particular subject. The
                  immediate practice of a learned concept enhances the chances
                  of absorption of the concept. Students who do regular homework
                  and participate in classroom discussion are very much likely
                  to succeed in the competitive examinations. Scientifically.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
          <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  STUDENT ANALYSIS AND PERFORMANCE EVALUATION REPORT (SAPER)
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  Students can check his/her performance and rank generated for
                  each subject at the website of Resonance. This helps students
                  to identify their strength and weakness. The SAPER can be
                  found at www.pccp.resonance.ac.in, under student zone.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
          <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  NATIONAL TALENT BENCHMARK TESTS (NTBT)
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  Special test series is designed for students who are aspiring
                  for good ranks in competitive examinations. In this test
                  series, students (Resonites as well as Non Resonites) appear
                  and showcase their talent which is benchmarked at national
                  level with All India Ranks and helps in analysis of strong and
                  weak topics.
                </Typography>
              </div>
            </Grid>
           
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  SCHOOL EXAMINATION PREPARATORY (SEP) SHEETS
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  These are worksheets which are to be solved and submitted for
                  checking, after each chapter. After checking, they are given
                  back to students with remarks so that students can know the
                  areas they need to focus on.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
          <br />
          <Grid container={true}>
          <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid item={true} xs={12} sm={4} md={4} lg={4}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
            <Grid
              item={true}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.planner}
            >
              <div>
                <Typography variant="headline" gutterBottom={true}>
                  CLINIC CLASSES AND DOUBT CLASSES
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom={true}>
                  Clinic classes are for those students who miss out on classes
                  due to unavoidable circumstances or late joining. These
                  classes run throughout the year so that students can catch up
                  anytime they feel left out. Doubt classes also run throughout
                  the year to clear doubts of students after regular classes.
                  Doubt classes are also used by the students to ask the doubts
                  from supplementary books.
                </Typography>
              </div>
            </Grid>
            <Grid item={true} xs={12} sm={1} md={1} lg={1} />
          </Grid>
        </Hidden>
        <Hidden only={["sm","md", "lg"]}>
          <br />
          <Grid container={true} spacing={8}>
            <Grid item={true} xs={12} sm={12} md={12} lg={12}>
              <Typography variant="title" gutterBottom={true} align="center">
                TEN COMMANDMENTS ON ACADEMIC EXCELLENCE
              </Typography>
            </Grid>
          </Grid>
          <Grid container={true}>
            <Grid item={true} xs={12}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} className={classes.planner}>
              <div>
                <Typography
                  variant="subheading"
                  gutterBottom={true}
                  align="center"
                >
                  <b>PRE-DEFINED YEARLY PLANNER</b>
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom={true}
                  style={{ padding: "10px" }}
                >
                  Students are provided with a yearly planner consisting of
                  arrayed chapters for each of the subjects, test grid of the
                  whole session with syllabus mentioned in it, holiday schedule,
                  homework checking schedule etc. This planner helps students
                  and parents in planning the strategy for studies and progress
                  ahead.
                </Typography>
              </div>
            </Grid>
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} className={classes.planner}>
              <div>
                <Typography
                  variant="subheading"
                  gutterBottom={true}
                  align="center"
                >
                  <b>ENHANCED CLASSROOM TEACHING WITH LEARNING AIDS</b>
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom={true}
                  style={{ padding: "10px" }}
                >
                  In classrooms, faculty members employ latest technologies to
                  deliver topics in the most interesting and possible manner to
                  maximize the absorption of concepts. Students in Resonance
                  study not only through chalkboard method but also through
                  interactive videos and animations.
                </Typography>
              </div>
            </Grid>
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} className={classes.planner}>
              <div>
                <Typography
                  variant="subheading"
                  gutterBottom={true}
                  align="center"
                >
                  <b> SCIENTIFICALLY DESIGNED CHAPTER MODULES</b>
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom={true}
                  style={{ padding: "10px" }}
                >
                  Classroom teaching is supplemented with futuristic study
                  material in the form of chapter modules, which provide
                  sequential theory of a particular chapter with questions at
                  regular intervals to check the progress of students. At the
                  end of the chapter, pictorial and textual summaries are given
                  for a quick revision at the time of tests. After the
                  summaries, exercises are given with carefully selected
                  questions of different types and difficulty levels for
                  comprehensive practice.
                </Typography>
              </div>
            </Grid>
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} className={classes.planner}>
              <div>
                <Typography
                  variant="subheading"
                  gutterBottom={true}
                  align="center"
                >
                  <b>DAILY PRACTICE PROBLEMS (DPPS)</b>
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom={true}
                  style={{ padding: "10px" }}
                >
                  In addition to chapter modules, DPPs are given to students.
                  Each DPP includes questions from all the chapters taught
                  before it, even if they've already been covered in earlier
                  DPPs. These problems need to be solved within a mentioned time
                  interval. It helps in boosting revisions and practice of time
                  management at home.
                </Typography>
              </div>
            </Grid>
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} className={classes.planner}>
              <div>
                <Typography
                  variant="subheading"
                  gutterBottom={true}
                  align="center"
                >
                  <b>REGULAR CLASSROOM DISCUSSION OF HOMEWORK QUESTIONS</b>
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom={true}
                  style={{ padding: "10px" }}
                >
                  After classroom teaching, homework is given to students, which
                  is discussed in the next class of that particular subject. The
                  immediate practice of a learned concept enhances the chances
                  of absorption of the concept. Students who do regular homework
                  and participate in classroom discussion are very much likely
                  to succeed in the competitive examinations. Scientifically.
                </Typography>
              </div>
            </Grid>
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} className={classes.planner}>
              <div>
                <Typography
                  variant="subheading"
                  gutterBottom={true}
                  align="center"
                >
                  <b>
                    STUDENT ANALYSIS AND PERFORMANCE EVALUATION REPORT (SAPER)
                  </b>
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom={true}
                  style={{ padding: "10px" }}
                >
                  Students can check his/her performance and rank generated for
                  each subject at the website of Resonance. This helps students
                  to identify their strength and weakness. The SAPER can be
                  found at www.pccp.resonance.ac.in, under student zone.
                </Typography>
              </div>
            </Grid>
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} className={classes.planner}>
              <div>
                <Typography
                  variant="subheading"
                  gutterBottom={true}
                  align="center"
                >
                  <b>NATIONAL TALENT BENCHMARK TESTS (NTBT)</b>
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom={true}
                  style={{ padding: "10px" }}
                >
                  Special test series is designed for students who are aspiring
                  for good ranks in competitive examinations. In this test
                  series, students (Resonites as well as Non Resonites) appear
                  and showcase their talent which is benchmarked at national
                  level with All India Ranks and helps in analysis of strong and
                  weak topics.
                </Typography>
              </div>
            </Grid>
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} className={classes.planner}>
              <div>
                <Typography
                  variant="subheading"
                  gutterBottom={true}
                  align="center"
                >
                  <b>SCHOOL EXAMINATION PREPARATORY (SEP) SHEETS</b>
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom={true}
                  style={{ padding: "10px" }}
                >
                  These are worksheets which are to be solved and submitted for
                  checking, after each chapter. After checking, they are given
                  back to students with remarks so that students can know the
                  areas they need to focus on.
                </Typography>
              </div>
            </Grid>
          </Grid>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12}>
              <img src={demo} />
            </Grid>
            <Grid item={true} xs={12} className={classes.planner}>
              <div>
                <Typography
                  variant="subheading"
                  gutterBottom={true}
                  align="center"
                >
                  <b>CLINIC CLASSES AND DOUBT CLASSES</b>
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom={true}
                  style={{ padding: "10px" }}
                >
                  Clinic classes are for those students who miss out on classes
                  due to unavoidable circumstances or late joining. These
                  classes run throughout the year so that students can catch up
                  anytime they feel left out. Doubt classes also run throughout
                  the year to clear doubts of students after regular classes.
                  Doubt classes are also used by the students to ask the doubts
                  from supplementary books.
                </Typography>
              </div>
            </Grid>
          </Grid>
          <br />
        </Hidden>
      </div>
    );
  }
}
export default withStyles(styles)(AcademicExcellence);
