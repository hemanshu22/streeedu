import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = (theme: any) =>
  createStyles({
    paper: {
      backgroundColor: "#ffffff",
      width: "100%",
      height: "auto"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class SectionTwo extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <br />
        <br />
        <Grid container={true}>
          <Grid item={true} xs={2} md={2} />
          <Grid item={true} xs={8} md={8} />
          <Grid item={true} xs={2} md={2} />
        </Grid>
        <br />
      </div>
    );
  }
}
export default withStyles(styles)(SectionTwo);
