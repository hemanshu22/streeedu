import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
// import CardContent from "@material-ui/core/CardContent";
// import Paper from "@material-ui/core/Paper";

const styles = (theme: any) =>
  createStyles({
    paper: {
      backgroundColor: "#f7f7f7",

      height: "auto"
    },
    card: {
      //   padding: "10%",
      backgroundColor: "#fff",
      borderRadius: "5px",
      boxShadow:
        "0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)"
    },
    typoone: {
      color: "#253858",
      fontFamily:
        "Charlie Display,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif",
      fontWeight: 500
    },
    typosecond: {
      fontfamily:
        "Charlie Text,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif",
      fontSize: "20px"
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
          <Grid item={true} xs={2} md={2} />
          <Grid item={true} xs={8} md={8}>
            <Typography
              gutterBottom={true}
              variant="h3"
              component="h2"
              align="center"
              className={classes.typoone}
            >
              What we do for youuuuuu
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
            </Typography>
          </Grid>
          <Grid item={true} xs={2} md={2} />
        </Grid>
        <br />
        <br />
      </div>
    );
  }
}
export default withStyles(styles)(SectionOne);
