import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

const styles = (theme: any) =>
  createStyles({
    paper: {
      maxWidth: "215px",
      height: "auto",
      padding: "17px",
      backgroundColor: "#fafafa"
    },
    avatar: {
      margin: 10,
      width: 100,
      height: 100,
      border: "3px solid #dedddd"
    }
  });

interface Props extends WithStyles<typeof styles> {
  medal: any;
  title: any;
  name: any;
  src: any;
  grade: any;
  school: any;
}
class ResultCard extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Grid container={true} direction="row">
        <Grid item={true}>
          <Paper className={classes.paper}>
            <Typography variant="subheading" component="h3" align="center">
              {this.props.title}
            </Typography>
            <br />
            <Grid container={true} justify="center" alignItems="center">
              <Avatar
                alt="Remy Sharp"
                src={this.props.src}
                className={classes.avatar}
              />
            </Grid>
            <Typography variant="body2" component="h3" align="center">
              {this.props.name}
            </Typography>
            <br />
            <Typography
              variant="body1"
              component="h3"
              align="center"
              style={{ color: "#f10b0b" }}
            >
              {this.props.medal}
            </Typography>
            {/* <br /> */}
            <Typography variant="body1" component="h3" align="center">
              {this.props.grade}
            </Typography>
            {/* <br /> */}
            <Typography variant="body1" component="h3" align="center">
              {this.props.school}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(ResultCard);
