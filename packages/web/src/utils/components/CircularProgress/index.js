import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MyCircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <br />
      <br />
      <br />
      <br />

      <center>
        <MyCircularProgress size={25} />
      </center>
    </React.Fragment>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired
};

export const CircularProgress = withStyles(styles)(CircularIndeterminate);
