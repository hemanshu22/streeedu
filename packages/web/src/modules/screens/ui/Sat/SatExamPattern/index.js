import * as React from "react";
import * as PropTypes from "prop-types";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

function TabContainer(props) {
  return (
    <Typography
      variant="body2"
      component="div"
      style={{ padding: 8 * 3, backgroundColor: "#ececec" }}
    >
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tab: {
    color: "#ffffff"
  },
  appbar: {
    backgroundColor: "#86576b"
  }
});

class SatExamPattern extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor={classes.indicator}
            variant="scrollable"
            scrollButtons="auto"
            className={classes.tab}
          >
            <Tab label="SAT Format" />
            <Tab label="Duration" />
            <Tab label="Number of sections in SAT (Reasoning) Test" />
            <Tab label="Overall score range of SAT (Reasoning) Test" />
            <Tab label="Total number of questions in SAT (Reasoning) Test" />
            <Tab label="Type of examination" />
            <Tab label="Number of Subjects in SAT Subject Test" />
            <Tab label="Overall score range of SAT Subject Test" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>SAT(Reasoning) Test SAT Subject Test</TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            Three hours (SAT without Essay) 3 hours and 50 minutes (SAT with
            Essay)
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            Evidence-Based Reading and Writing, Reading Test, Writing and
            Language Test, Mathematics and Essay (optional)
          </TabContainer>
        )}
        {value === 3 && <TabContainer>400-1600</TabContainer>}
        {value === 4 && (
          <TabContainer>154 questions + 1 (optional essay)</TabContainer>
        )}
        {value === 5 && <TabContainer>Mostly objective</TabContainer>}
        {value === 6 && <TabContainer>20</TabContainer>}
        {value === 7 && <TabContainer>200-800</TabContainer>}
      </div>
    );
  }
}

SatExamPattern.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SatExamPattern);
