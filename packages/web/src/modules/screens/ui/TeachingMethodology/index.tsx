import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import tree from "../../../../utils/img/tree.png";
import Hidden from "@material-ui/core/Hidden";

const styles = (theme: any) =>
  createStyles({
    button: {
      margin: theme.spacing.unit,
      color: "#0052CC"
    },
    card: {
      minHeight: "124px",
      padding: "22px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    gridcontainer: {
      paddingRight: "10px",
      paddingLeft: "10px"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class TeachingMethodology extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Hidden only={["sm", "xs", "lg"]}>
          <br />
          <br />
          {/* <br />
          <br /> */}
          <Grid container={true} spacing={8}>
            <Grid item={true} xs={12} sm={12} md={12} lg={12}>
              <Typography variant="display1" gutterBottom={true} align="center">
                Teaching Methodology
              </Typography>
            </Grid>
          </Grid>
          <br />
        </Hidden>
        <Hidden only={["sm", "xs", "md"]}>
          <br />
          <br />
          <br />
          <br />
          <Grid container={true} spacing={8}>
            <Grid item={true} xs={12} sm={12} md={12} lg={12}>
              <Typography variant="display1" gutterBottom={true} align="center">
                Teaching Methodology
              </Typography>
            </Grid>
          </Grid>
          <br />
        </Hidden>
        <Hidden only={["md", "lg"]}>
          <br />
          <Grid container={true} spacing={8}>
            <Grid item={true} xs={12} sm={12} md={12} lg={12}>
              <Typography variant="title" gutterBottom={true} align="center">
                Teaching Methodology
              </Typography>
            </Grid>
          </Grid>
          <br />
        </Hidden>
        <Grid container={true} spacing={16} className={classes.gridcontainer}>
          <Grid item={true} xs={12} sm={6} md={6} lg={3}>
            <Card className={classes.card}>
              {/* <CardContent> */}
              <Typography variant="body1" gutterBottom={true}>
                Our teaching pedagogy is so unique and it is not only restricted
                to classroom program. We make the students proficient for
                solving complex and hard problems by improving and sharpening
                their analytical and logical thinking skills
              </Typography>
              {/* </CardContent> */}
            </Card>
          </Grid>
          <Grid item={true} xs={12} sm={6} md={6} lg={3}>
            <Card className={classes.card}>
              {/* <CardContent> */}
              <Typography variant="body1" gutterBottom={true}>
                Our teaching methodology is highly motivational, innovative and
                interactive and designed in such a way that it suits specific
                individual needs and make them think out of box which is pivotal
                for success
              </Typography>
              {/* </CardContent> */}
            </Card>
          </Grid>
          <Grid item={true} xs={12} sm={6} md={6} lg={3}>
            <Card className={classes.card}>
              {/* <CardContent> */}
              <Typography variant="body1" gutterBottom={true}>
                Our lectures are developed in such a way that it is completed
                and finished in stipulated time along with that, we make sure
                the concepts are crystal clear for the students
              </Typography>
              {/* </CardContent> */}
            </Card>
          </Grid>
          <Grid item={true} xs={12} sm={6} md={6} lg={3}>
            <Card className={classes.card}>
              {/* <CardContent> */}
              <Typography variant="body1" gutterBottom={true}>
                A continuous student evaluation is done through regular tests
                and feedbacks are taken to get best out of them
              </Typography>
              {/* </CardContent> */}
            </Card>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container={true} spacing={8}>
          <Hidden only={["md", "lg", "sm"]}>
            <Grid item={true} xs={12}>
              <img src={tree} style={{ width: "100%" }} />
            </Grid>
          </Hidden>
          <Hidden only={["lg", "xs"]}>
            <Grid item={true} sm={12} md={12}>
              <img src={tree} style={{ paddingLeft: "21%" }} />
            </Grid>
          </Hidden>
          <Hidden only={["sm", "xs", "md"]}>
            <Grid item={true} lg={4}>
              <img src={tree} />
            </Grid>
          </Hidden>

          <Grid
            item={true}
            xs={12}
            sm={12}
            md={12}
            lg={8}
            style={{ padding: "20px" }}
          >
            <Grid item={true} xs={12} sm={12} md={12} lg={12}>
              <Typography variant="title" gutterBottom={true}>
                Experienced Educationists
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                To ignite and inspire young minds, Resonance has a team of
                qualified and well trained faculty. These eminent academicians
                are recruited after a grueling selection process and have to
                undergo a rigorous training which further sharpens their skills.
                Our management enables us to allocate multiple faculty members
                for each subject and course, which helps prevent dependence on
                particular faculty members and ensures minimal disruptions in
                our operations due to absence of any faculty members. We also
                maintain a student –faculty ratio that helps ensure adequate
                supervision by our faculty members and effective response to
                each student’s need on an individual basis. Faculty members
                mentor our students to enhance their capabilities by identifying
                patterns in their performance, concentrating on the strengths
                and weaknesses of students based on internal performance
                indicators and enabling a positive approach to examinations.
                They provide counselling services to our students in order to
                build the right mindset towards studies, addressing pressure and
                stress levels and enabling a suitable physical and mental
                environment.
              </Typography>
            </Grid>
            <br />
            <Grid item={true} xs={12} sm={12} md={12} lg={12}>
              <Typography variant="title" gutterBottom={true}>
                Study Material
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                Scientifically relevant and original Study Material and Test
                Papers are prepared based on the latest pattern of exams
                designed by the expert faculty at Resonance. Our Study material
                so well developed that the student can concentrate on two
                factors that is subject knowledge and a regular practice of the
                subject with a conceptual objective based attempt to maintain
                time management and minimizing errors as the studies progress
              </Typography>
            </Grid>
            <br />
            <Grid item={true} xs={12} sm={12} md={12} lg={12}>
              <Typography variant="title" gutterBottom={true}>
                Student satisfaction Survey
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                Each student is given a freedom to write down their thoughts on
                the class teaching methodology.
              </Typography>
            </Grid>
            <br />
            <Grid item={true} xs={12} sm={12} md={12} lg={12}>
              <Typography variant="title" gutterBottom={true}>
                Rewards & Scholarship
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                In order to discover and nurture talent, we conduct Rewards and
                Scholarship to the candidates motivating them to reach a
                specific goal and a motivation to reach the heights. We also
                provide scholarships for qualifying students from the RESO FAST
                tests to in our programs. At STREE Education, students are
                exposed to different types of test segments viz, Periodic Term
                Tests, Cumulative Tests and Competitive Level Tests. The Term
                Tests, are conducted to give students firsthand experience of
                the real test environment. The Cumulative Tests are full length
                tests that cover entire syllabus of the particular subject. The
                Competitive Level Tests are conducted for all students giving an
                opportunity to test their knowledge amongst other students at
                all competitive level.
              </Typography>
            </Grid>
            <br />
            <Grid item={true} xs={12} sm={12} md={12} lg={12}>
              <Typography variant="title" gutterBottom={true}>
                Interactive Small Batches
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                We deliver the courses based on an interactive teaching method
                which ensures communication between the students and the faculty
                while teaching. We ensure that our classrooms provide an
                environment which is conducive for learning by, among other
                things, providing better infrastructure, periodic tests and
                assessments and strict discipline, and continuously endeavor to
                improve these facilities.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(TeachingMethodology);
