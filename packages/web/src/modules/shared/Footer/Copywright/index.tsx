import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = (theme: any) =>
  createStyles({
    cardinner: {
      padding: "15px"
      //  backgroundColor: "#303c42"
    },
    copywright: { color: "#fff" }
  });

interface Props extends WithStyles<typeof styles> {}
class Copywright extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.cardinner}>
        <Typography
          variant="body1"
          gutterBottom={true}
          className={classes.copywright}
        >
          © 2017 Stree Education. All rights reserved.
        </Typography>
      </div>
    );
  }
}
export default withStyles(styles)(Copywright);
