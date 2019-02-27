import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";

const styles = (theme: any) =>
  createStyles({
    paper: {
      backgroundColor: "#ffffff",
      padding: "10px",
      marginRight: "5px",
      marginLeft: "5px"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class AboutUs extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <br />
        <Paper elevation={2} className={classes.paper}>
          <Typography variant="headline" gutterBottom={true} align="center">
            About Us
          </Typography>
          <br />
          <Grid item={true}>
            <Typography variant="body1" gutterBottom={true}>
              Resonance launched Pre-foundation Career Care Programs (PCCPs)
              Division in 2006 with the philosophy of an early start. As the
              name suggests, the division aims at giving the edge to the
              students for Career Examinations like JEE (Main + Advanced), NEET/
              AIIMS, CA/CS/CLAT etc. before entering into senior secondary
              classes.
            </Typography>
          </Grid>
          <br />
          <Grid item={true}>
            <Typography variant="body1" gutterBottom={true}>
              In last 11 years, PCCP division has evolved significantly and
              works in two segments of classes, namely, Sub-Junior classes (V –
              VIII) and Junior classes (IX – X).The two segments have different
              teaching methodologies and so are their targets.
            </Typography>
          </Grid>
          <br />
          <Grid item={true}>
            <Typography variant="body1" gutterBottom={true}>
              In Junior classes, the targeted competitive examinations are
              National Standard Examination in Junior Science (NSEJS, 1st stage
              of International Junior Science Olympiad (IJSO)), National Talent
              Search Examinations (NTSE), Pre Regional Mathematics Olympiad
              (PreRMO, 1st stage of International Mathematics Olympiad). In
              addition to these competitive examinations, we also prepare
              students for class X board examination, according to the latest
              changes made in it, by exposing them to mock situations like that
              of the real one.
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom={true}>
              In Junior classes, the targeted competitive examinations are
              National Standard Examination in Junior Science (NSEJS, 1st stage
              of International Junior Science Olympiad (IJSO)), National Talent
              Search Examinations (NTSE), Pre Regional Mathematics Olympiad
              (PreRMO, 1st stage of International Mathematics Olympiad). In
              addition to these competitive examinations, we also prepare
              students for class X board examination, according to the latest
              changes made in it, by exposing them to mock situations like that
              of the real one.
            </Typography>
          </Grid>
        </Paper>
        <br />
      </div>
    );
  }
}
export default withStyles(styles)(AboutUs);
