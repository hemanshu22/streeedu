import React, { Component } from "react";
import Helmet from "../Helmet";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
// import styles from "./styles.module.css";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

const styles = () => ({
  root: {
    margin: "10px",
    minHeight: "250px",
    padding: "10px"
  }
});

class Screen extends Component {
  render() {
    const { title, children, match, classes } = this.props;

    return (
      <div>
        <Helmet title={title} />
        <Paper className={classes.root} elevation={2}>
          {React.cloneElement(children, { match: match })}
        </Paper>
      </div>
    );
  }
}

Screen.propTypes = {
  classes: PropTypes.object.isRequired
};

const Comp = withStyles(styles)(Screen);
export default withRouter(Comp);
