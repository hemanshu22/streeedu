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
class Olympiads extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Screen title="Olympiads">
        <div>
          <br />
          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true}>
              <Typography variant="display1" gutterBottom={true} align="center">
                OLYMPIADS
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={10}>
              <Typography variant="body1" gutterBottom={true}>
                This course aims to develop strong foundation for school
                examination and build Competitive Temperament for talent search
                exams NTSE, NMTC and Olympiads like RMO,IJSO etc. The Study
                Material has theory part with perfect blend of solved examples &
                important notes.
              </Typography>
              <br />
              <Typography variant="title" gutterBottom={true}>
                The following types of exercises are provided in modules:
              </Typography>
              <br />
              <Typography variant="body1" gutterBottom={true}>
                Board Level Exercise is included in modules because of the
                reintroduction of Board examination in CBSE. The exercise covers
                important questions from NCERT and Exemplar as well as previous
                year question papers .
                <br />
                <br />
                <b>Exercise 1:</b> Containing questions according to the pattern
                being asked in school examinations.
                <br />
                <b>Exercise 2:</b> Containing questions in accordance to the
                level being asked in the National Level Competitive
                Examinations.
                <br />
                <b>Exercise 3:</b> Questions from previous year papers of
                competitive examination especially Olympiads.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Screen>
    );
  }
}
export default withStyles(styles)(Olympiads);
