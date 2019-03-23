import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import pccpimage from "../../../../../../utils/img/pccp.png";

const styles = (theme: any) =>
  createStyles({
    paper: {
      backgroundColor: "#f7f7f7",
      height: "auto"
    },
    pccp: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class SectionOne extends React.Component<Props> {
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
          <Grid item={true} xs={2} sm={2} md={2} lg={2} />

          <Grid
            item={true}
            xs={8}
            sm={8}
            md={8}
            lg={8}
            className={classes.pccp}
          >
            <img src={pccpimage} style={{ width: "116%" }} />
            {/* <Typography
              gutterBottom={true}
              variant="h3"
              component="h2"
              align="center"
              className={classes.typoone}
            >
              What we do for you
            </Typography>
            <Typography
              variant="subheading"
              component="h3"
              align="center"
              className={classes.typosecond}
            >
              STREE Training Center offers basics of Mathematics, Science and
              Mental Ability. When developed at the early stage of learning,
              immensely benefits students in securing top ranks and helps to get
              selected in first attempt in various competitive examinations like
              Engineering (JEE -Main & Advanced), Medical entrance (NEET), CAT
              and other Management test.
            </Typography> */}
          </Grid>
          <Grid item={true} xs={2} sm={2} md={2} lg={2} />
        </Grid>
        <br />
        <br />
      </div>
    );
  }
}
export default withStyles(styles)(SectionOne);
