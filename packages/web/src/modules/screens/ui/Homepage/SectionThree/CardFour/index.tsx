import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const styles = (theme: any) =>
  createStyles({
    paper: {
      backgroundColor: "#ffffff",
      boxShadow: "none",
      borderRadius: "5px",
      borderTopWidth: "9px",
      borderTopStyle: "solid",
      transition: "box-shadow .5s",
      borderColor: "#FFC400",
      "&:hover": {
        boxShadow: "5px 5px 5px 5px rgba(0,0,0,.05)"
      }
      //  padding: "10px"
      // height: "340px"
    },
    media: {
      padding: "10px",
      backgroundColor: "#FFF"
      // borderRadius: "5px",
      // borderTopWidth: "9px",
      // borderTopStyle: "solid",
      // transition: "box-shadow .5s",
      // borderColor: "#FFC400",
      // "&:hover": {
      //   boxShadow: "5px 5px 5px 5px rgba(0,0,0,.05)"
      // }
    },
    div: {
      padding: "5px"
    },
    imagecard: {
      width: "100px",
      height: "100px"
    }
  });

interface Props extends WithStyles<typeof styles> {
  heading: any;
  data: any;
  image: any;
}
class CardFour extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.div}>
        <Paper elevation={3} className={classes.paper}>
          <div className={classes.media}>
            <img src={this.props.image} className={classes.imagecard} />
            <br />
            <Typography variant="headline" component="h3">
              {this.props.heading}
            </Typography>
            <br />
            <Typography
              variant="body1"
              component="p"
              // className={classes.paragraph}
            >
              {this.props.data}
            </Typography>
          </div>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(CardFour);
