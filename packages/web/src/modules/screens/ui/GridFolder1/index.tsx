import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";

const styles = (theme: any) =>
  createStyles({
    circle_style: {
      width: "80px",
      height: "80px",
      textAlign: "center",
      borderRadius: "100px",
      background: "rgb(49, 53, 72)",
      marginLeft: "173px"
    },

    img_style: {
      width: "35px",
      height: "35px",
      paddingTop: "20px"
    },

    grid_cen: {
      textAlign: "center"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class GridFolder1 extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ background: "#f1f4f7", height: "339px" }}>
        <div style={{ paddingTop: "30px" }}>
          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={4} xs={12}>
              <div className={classes.circle_style}>
                <img
                  className={classes.img_style}
                  src={"/chart-bar-stacked.png"}
                />
              </div>
              <br />
              <Typography
                variant="caption"
                gutterBottom={true}
                style={{ fontSize: "15px" }}
              >
                Scientific Temperament
              </Typography>
            </Grid>

            <Grid item={true} sm={4} xs={12}>
              <div className={classes.circle_style}>
                <img
                  className={classes.img_style}
                  src={"/chart-bar-stacked.png"}
                />
              </div>
              <br />
              <Typography
                variant="caption"
                gutterBottom={true}
                style={{ fontSize: "15px" }}
              >
                Logical Thinking and Reasoning
              </Typography>
            </Grid>

            <Grid item={true} sm={4} xs={12}>
              <div className={classes.circle_style}>
                <img
                  className={classes.img_style}
                  src={"/chart-bar-stacked.png"}
                />
              </div>
              <br />
              <Typography
                variant="caption"
                gutterBottom={true}
                style={{ fontSize: "15px" }}
              >
                Problem Solving Attitude
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br />

          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={4} xs={12}>
              <div className={classes.circle_style}>
                <img
                  className={classes.img_style}
                  src={"/chart-bar-stacked.png"}
                />
              </div>
              <br />
              <Typography
                variant="caption"
                gutterBottom={true}
                style={{ fontSize: "15px" }}
              >
                Competitive Psychology
              </Typography>
            </Grid>

            <Grid item={true} sm={4} xs={12}>
              <div className={classes.circle_style}>
                <img
                  className={classes.img_style}
                  src={"/chart-bar-stacked.png"}
                />
              </div>
              <br />
              <Typography
                variant="caption"
                gutterBottom={true}
                style={{ fontSize: "15px" }}
              >
                Mathematical Aptitude
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(GridFolder1);
