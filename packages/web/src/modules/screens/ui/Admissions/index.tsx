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
    },
    h1Style: {
      fontSize: "14px"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class Admissions extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Screen title="AboutPccp">
        <div>
          <br />
          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={10}>
              <Typography variant="h6" gutterBottom={true}>
                <b>ADMISSION /CAREER COUNSELING</b>
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={10} xs={12}>
              <Typography
                variant="title"
                gutterBottom={true}
                className={classes.h1Style}
              >
                <b>1. PCCP :</b>
              </Typography>
            </Grid>
            <Grid item={true} sm={10}>
              <Typography
                variant="caption"
                gutterBottom={true}
                style={{ fontSize: "15px" }}
              >
                Visitors / students are counselled about the admission
                eligibility ,process , fees , test patterns , and academic
                syllabus.
              </Typography>
            </Grid>
          </Grid>

          <br />
          <br />
          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={10} xs={12}>
              <Typography
                variant="title"
                gutterBottom={true}
                className={classes.h1Style}
              >
                <b> 2. Key features of the organization :</b>
              </Typography>
            </Grid>
            <Grid item={true} sm={10}>
              <Typography
                variant="caption"
                gutterBottom={true}
                style={{ fontSize: "15px" }}
              >
                Visitors / students are counselled about the admission
                eligibility ,process , fees , test patterns , and academic
                syllabus.
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={10} xs={12}>
              <Typography
                variant="title"
                gutterBottom={true}
                className={classes.h1Style}
              >
                <b>3. Results and achievements :</b>
              </Typography>
            </Grid>
            <Grid item={true} sm={10}>
              <Typography
                variant="caption"
                gutterBottom={true}
                style={{ fontSize: "15px" }}
              >
                Results of pccp and past achievements are highlighted.
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={10} xs={12}>
              <Typography
                variant="title"
                gutterBottom={true}
                className={classes.h1Style}
              >
                <b>4. Career stream selection :</b>
              </Typography>
            </Grid>
            <Grid item={true} sm={10}>
              <Typography
                variant="caption"
                gutterBottom={true}
                style={{ fontSize: "15px" }}
              >
                Students are advised an appropriate stream as per their aptitude
                , past academic performance and interest.
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br />

          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={10} xs={12}>
              <Typography
                variant="title"
                gutterBottom={true}
                className={classes.h1Style}
              >
                <b>5. Performance</b>
              </Typography>
            </Grid>
            <Grid item={true} sm={10} xs={12}>
              <Typography
                variant="caption"
                gutterBottom={true}
                style={{ fontSize: "15px" }}
              >
                Students are guided appropriately to help fill gap between
                actual and desired performance and are advised accordingly.
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br />

          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={10} xs={12}>
              <Typography
                variant="title"
                gutterBottom={true}
                className={classes.h1Style}
              >
                <b>6. Wide spectrum of competitive exams :</b>
              </Typography>
            </Grid>
            <Grid item={true} sm={10} xs={12}>
              <Typography
                variant="caption"
                gutterBottom={true}
                style={{ fontSize: "15px" }}
              >
                Students are briefed about various competitive exams and how to
                crack them successfully.{" "}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Screen>
    );
  }
}
export default withStyles(styles)(Admissions);
