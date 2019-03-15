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
          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={10}>
              <Typography variant="headline" gutterBottom={true} align="center">
                ADMISSION /CAREER COUNSELING
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={10} xs={12}>
              <Typography variant="title" gutterBottom={true}>
                PCCP
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
              <Typography variant="title" gutterBottom={true}>
                Key features of the organization
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
              <Typography variant="title" gutterBottom={true}>
                Results and achievements
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
              <Typography variant="title" gutterBottom={true}>
                Career stream selection
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
              <Typography variant="title" gutterBottom={true}>
                Performance
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
              <Typography variant="title" gutterBottom={true}>
                Wide spectrum of competitive exams
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
