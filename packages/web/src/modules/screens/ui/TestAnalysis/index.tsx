import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Analysis from "../../../../utils/img/analysis3.png";

const styles = (theme: any) =>
  createStyles({
    gridcontainer: {
      paddingRight: "10px",
      paddingLeft: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class TestAnalysis extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <br />
        <br />
        <Grid container={true} spacing={8}>
          <Grid item={true} xs={12} sm={12} md={12} lg={12}>
            <Typography variant="display1" gutterBottom={true} align="center">
              Test Analysis
            </Typography>
          </Grid>
        </Grid>
        <br />
        <Grid container={true} spacing={8} direction="row">
          <Grid
            item={true}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className={classes.gridcontainer}
          >
            <img src={Analysis} />
          </Grid>
        </Grid>
        <br />
      </div>
    );
  }
}
export default withStyles(styles)(TestAnalysis);
