import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
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
        <img
          src="https://www.codec.ie/wp-content/uploads/2017/02/expert-icon-300x251.png"
          className={classes.media}
        />
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
