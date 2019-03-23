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
class ExamInformation extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Screen title="ExamInformation">
        <div>
          <br />
          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true}>
              <Typography variant="display1" gutterBottom={true} align="center">
                ExamInformation
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={10}>
              <Typography variant="body1" gutterBottom={true}>
                <b>What is SAT</b> – Formerly stood for Scholastic Aptitude
                Test, now simply the SAT® is an internationally acclaimed
                entrance exam administered for selecting candidates for
                undergraduate courses in the US and other countries. The test is
                intended to assess students' readiness for college. The SAT is
                designed to be aligned with high school curricula, as the
                questions reflect more closely what students learn in high
                school. Each year, SAT is taken by over three million aspirants
                on a global scale. The SAT Test 2018 is conducted
                internationally in the months of October, December, March, May,
                and June (SAT Subject test). The College Board® is the
                conducting authority founded in 1900 is composed of more than
                6,000 schools, colleges, universities and other educational
                organizations.
              </Typography>
              <br />
              <Typography variant="title" gutterBottom={true}>
                What is SAT Score Structure and Validity
              </Typography>
              <br />
              <Typography variant="body1" gutterBottom={true}>
                <b> SAT Scores:</b> The total SAT score ranges between 400-1600.
                The Evidence-Based Reading and Writing Section score ranges
                between 200–800 and the Mathematics section is scored on a 200
                to 800-point scale. Finally, the optional essay is scored on the
                scale between 2 to 8. There is no composite SAT Essay score to
                be precise, the three scores are not added together and there
                are no percentiles provided by the conducting body.
                <br />
                <br />
                <b>Validity:</b> SAT scores are valid for five years from the
                date of the test. Test takers can request a Question-and-Answer
                Service up to five months after their respective test dates.
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br />
        </div>
      </Screen>
    );
  }
}
export default withStyles(styles)(ExamInformation);
