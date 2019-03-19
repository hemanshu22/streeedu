import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = (theme: any) =>
  createStyles({
    circular: {
      borderRadius: "50%",
      width: "120px",
      height: "120px",
      textAlign: "center"
    },
    text: {
      color: "#fff",
      lineHeight: 4.5,
      textShadow: "0px 7px 30px #191818;"
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: any;
  backgroundcolor: any;
}
class CardTwo extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper
        className={classes.circular}
        style={{ background: this.props.backgroundcolor }}
      >
        <Typography
          variant="h5"
          component="h3"
          align="center"
          className={classes.text}
        >
          {this.props.data}
        </Typography>
      </Paper>
    );
  }
}
export default withStyles(styles)(CardTwo);
