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

    typoStyle: {
      fontSize: "15px",
      lineHeight: "24px"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class Innovations extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Screen title="AboutPccp">
        <div>
          <br />
          <br />
          <br />
          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={10}>
              <Typography variant="h6" gutterBottom={true}>
                <b>INNOVATION & CONTINUAL IMPROVEMENT</b>
              </Typography>
            </Grid>
          </Grid>

          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={10}>
              <Typography
                variant="caption"
                gutterBottom={true}
                className={classes.typoStyle}
              >
                <br />
                Resonance is one of the few education institutes in India to
                have a separate Research & Development Wing. The objective of
                the wing is to consistently improve the academic delivery system
                at Resonance so that we improve our best practices year on year.
                We innovate regularly by introducing new products/programs every
                year to cater to students need & expectations and also enhance
                our Students' Services System.{" "}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Screen>
    );
  }
}
export default withStyles(styles)(Innovations);
