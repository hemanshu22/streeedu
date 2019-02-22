import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Card from "@material-ui/core/Card";
// import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const styles = (theme: any) =>
  createStyles({
    paper: {
      maxWidth: "250",
      padding: "20px",
      borderRadius: "5px",
      backgroundColor: "#ffffff",
      boxShadow: "1px 1px 1px 1px #ccc"
    },
    // div: {
    //   backgroundColor: "blue"
    // },
    media: {
      backgroundPosition: "top center",
      backgroundSize: "cover",
      maxHeight: 140
    }
  });

interface Props extends WithStyles<typeof styles> {}
class ImageCard extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper elevation={16} className={classes.paper}>
        {/* <div className={classes.div}> */}
        <img
          src="https://www.codec.ie/wp-content/uploads/2017/02/expert-icon-300x251.png"
          className={classes.media}
        />
        {/* </div> */}
        <br />
        <br />
        <Typography variant="headline" component="h3">
          Classes By Experts
        </Typography>
        <Typography variant="subheading" component="p">
          Classes are taken by the experienced faculty members of Resonance who
          have mentored number of students.
        </Typography>
      </Paper>
    );
  }
}
export default withStyles(styles)(ImageCard);
