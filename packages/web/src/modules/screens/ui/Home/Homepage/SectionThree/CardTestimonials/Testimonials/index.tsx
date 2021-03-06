import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

const styles = (theme: any) =>
  createStyles({
    paper: {
      padding: "10px",
      backgroundColor: "#ffffff",
      borderRadius: "5px",
      borderTopWidth: "4px",
      borderTopStyle: "solid",
      transition: "box-shadow .5s",
      borderColor: "#86576b",
      "&:hover": {
        boxShadow: "5px 5px 5px 5px rgba(0,0,0,.05)"
      }
    },
    avatar: {
      width: "150px",
      height: "150px",
      zIndex: 1,
      top: -80,
      margin: "0 auto"
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
  name: any;
  data: any;
  air: any;
  studycenter: any;
}
class Testimonials extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    return (
      <div
        className={classes.div}
        style={{ textAlign: "center", paddingTop: "83px" }}
      >
        <Paper elevation={3} className={classes.paper}>
          <Avatar
            alt="Remy Sharp"
            className={classes.avatar}
            src="https://material-ui.com//static/images/avatar/1.jpg"
          />
          <div style={{ marginTop: "-60px" }}>
            <Typography variant="body2" component="h3">
              {this.props.name}
            </Typography>
            <Typography variant="overline">{this.props.air}</Typography>
            <Typography variant="button" component="h3">
              {this.props.studycenter}
            </Typography>
            <br />
            <Typography variant="body1" component="p" align="left">
              {this.props.data}
            </Typography>
          </div>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(Testimonials);
