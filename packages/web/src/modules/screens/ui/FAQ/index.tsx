import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Screen from "../../../../utils/components/Screen";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Hidden from "@material-ui/core/Hidden";

const styles = (theme: any) =>
  createStyles({
    h1Style: {
      fontSize: "14px",
      lineHeight: "30px"
    },
    grid_cen: {
      textAlign: "center"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class FAQ extends React.Component<
  Props,
  {
    open1: boolean;
    open2: boolean;
    open3: boolean;
    open4: boolean;
    open5: boolean;
  }
> {
  state = {
    open1: true,
    open2: true,
    open3: true,
    open4: true,
    open5: true
  };

  handleClick1 = () => {
    this.setState(state => ({ open1: !state.open1 }));
  };

  handleClick2 = () => {
    this.setState(state => ({ open2: !state.open2 }));
  };

  handleClick3 = () => {
    this.setState(state => ({ open3: !state.open3 }));
  };

  handleClick4 = () => {
    this.setState(state => ({ open4: !state.open4 }));
  };

  handleClick5 = () => {
    this.setState(state => ({ open5: !state.open5 }));
  };
  render() {
    const { classes } = this.props;
    return (
      <Screen title="FAQ">
        <List component="nav">
          <br />
          <Typography
            variant="headline"
            gutterBottom={true}
            className={classes.grid_cen}
          >
            FAQ
          </Typography>
          <br />
          <Grid container={true}>
            <Grid item={true} xs={12}>
              <ListItem button={true} onClick={this.handleClick1}>
                <Hidden mdDown={true}>
                  <ListItemText
                    inset={true}
                    primary="1. How varied teaching experience does STREE coaching center has ?"
                  />
                  {this.state.open1 ? <ExpandLess /> : <ExpandMore />}
                </Hidden>

                <Hidden lgUp={true}>
                  <ListItemText
                    style={{ paddingLeft: "0px" }}
                    inset={true}
                    primary="1. How varied teaching experience does STREE coaching center has ?"
                  />
                  {this.state.open1 ? <ExpandLess /> : <ExpandMore />}
                </Hidden>
              </ListItem>
            </Grid>
          </Grid>
          <Grid container={true} justify="center">
            <Grid item={true} sm={10}>
              <Collapse
                in={this.state.open1}
                timeout="auto"
                unmountOnExit={true}
              >
                <List disablePadding={true}>
                  <ListItem button={true}>
                    <Typography
                      variant="caption"
                      gutterBottom={true}
                      className={classes.h1Style}
                    >
                      Teachers at STREE bring along a wide angle of teaching
                      experience, which varies from 5 to 15 years. Our teachers
                      bring in a very high level of interaction with students.
                      Our teachers are experienced and endowed with rich
                      teaching knowledge during lectures, helping students build
                      stronger concepts and get good exposure of all kinds of
                      questions that can be probably asked in the examinations.
                    </Typography>
                  </ListItem>
                </List>
              </Collapse>
            </Grid>
          </Grid>

          <br />

          <Grid container={true}>
            <Grid item={true} xs={12}>
              <ListItem button={true} onClick={this.handleClick2}>
                <Hidden mdDown={true}>
                  <ListItemText
                    inset={true}
                    primary="2. Do you conduct parent’s teacher meetings (PTM)?"
                  />
                  {this.state.open2 ? <ExpandLess /> : <ExpandMore />}
                </Hidden>

                <Hidden lgUp={true}>
                  <ListItemText
                    style={{ paddingLeft: "0px" }}
                    inset={true}
                    primary="2. Do you conduct parent’s teacher meetings (PTM)?"
                  />
                  {this.state.open2 ? <ExpandLess /> : <ExpandMore />}
                </Hidden>
              </ListItem>
            </Grid>
          </Grid>
          <Grid container={true} justify="center">
            <Grid item={true} sm={10}>
              <Collapse
                in={this.state.open2}
                timeout="auto"
                unmountOnExit={true}
              >
                <List disablePadding={true}>
                  <ListItem button={true}>
                    <Typography
                      variant="caption"
                      gutterBottom={true}
                      className={classes.h1Style}
                    >
                      Teachers at STREE bring along a wide angle of teaching
                      experience, which varies from 5 to 15 years. Our teachers
                      bring in a very high level of interaction with students.
                      Our teachers are experienced and endowed with rich
                      teaching knowledge during lectures, helping students build
                      stronger concepts and get good exposure of all kinds of
                      questions that can be probably asked in the examinations.
                    </Typography>
                  </ListItem>
                </List>
              </Collapse>
            </Grid>
          </Grid>

          <br />

          <Grid container={true}>
            <Grid item={true} xs={12}>
              <ListItem button={true} onClick={this.handleClick3}>
                <Hidden mdDown={true}>
                  <ListItemText
                    inset={true}
                    primary="3. Do you ensure time and attendance in classes?"
                  />
                  {this.state.open3 ? <ExpandLess /> : <ExpandMore />}
                </Hidden>

                <Hidden lgUp={true}>
                  <ListItemText
                    style={{ paddingLeft: "0px" }}
                    inset={true}
                    primary="3. Do you ensure time and attendance in classes?"
                  />
                  {this.state.open3 ? <ExpandLess /> : <ExpandMore />}
                </Hidden>
              </ListItem>
            </Grid>
          </Grid>
          <Grid container={true} justify="center">
            <Grid item={true} sm={10}>
              <Collapse
                in={this.state.open3}
                timeout="auto"
                unmountOnExit={true}
              >
                <List disablePadding={true}>
                  <ListItem button={true}>
                    <Typography
                      variant="caption"
                      gutterBottom={true}
                      className={classes.h1Style}
                    >
                      Of course, classroom time and attendance records are
                      maintained and monitored. Parents will also be kept
                      informed on their child's attendance and test results.
                    </Typography>
                  </ListItem>
                </List>
              </Collapse>
            </Grid>
          </Grid>

          <br />

          <Grid container={true}>
            <Grid item={true} xs={12}>
              <ListItem button={true} onClick={this.handleClick4}>
                <Hidden mdDown={true}>
                  <ListItemText
                    inset={true}
                    primary="4. What is PCCP all about?"
                  />
                  {this.state.open4 ? <ExpandLess /> : <ExpandMore />}
                </Hidden>

                <Hidden lgUp={true}>
                  <ListItemText
                    style={{ paddingLeft: "0px" }}
                    inset={true}
                    primary="4. What is PCCP all about?"
                  />
                  {this.state.open4 ? <ExpandLess /> : <ExpandMore />}
                </Hidden>
              </ListItem>
            </Grid>
          </Grid>
          <Grid container={true} justify="center">
            <Grid item={true} sm={10}>
              <Collapse
                in={this.state.open4}
                timeout="auto"
                unmountOnExit={true}
              >
                <List disablePadding={true}>
                  <ListItem button={true}>
                    <Typography
                      variant="caption"
                      gutterBottom={true}
                      className={classes.h1Style}
                    >
                      Pre-Foundation Career Care Programme (PCCP)is designed to
                      provide an early edge beginning to the students for career
                      examinations like JEE (Main&Advanced), NEET / AIIMS / CA /
                      CS / CLAT,etc., before entering into Senior Secondary
                      Classes. PCCP program build conceptual understanding in
                      CBSE syllabus and conducting various academic workshops to
                      make students understand the applications of several
                      concepts. As a result, students excel in academic
                      performance, and secure top rank in Board examinations.
                      The basics of Mathematics, Science and Mental ability
                      developed at the early stage of learning benefits
                      immensely the students in form of top rank and selection
                      in first attempt in various competitive examinations.{" "}
                    </Typography>
                  </ListItem>
                </List>
              </Collapse>
            </Grid>
          </Grid>

          <br />

          <Grid container={true}>
            <Grid item={true} xs={12}>
              <ListItem button={true} onClick={this.handleClick5}>
                <Hidden mdDown={true}>
                  <ListItemText
                    inset={true}
                    primary="5. What is the importance of competitive examinations in the career of a student?"
                  />
                  {this.state.open5 ? <ExpandLess /> : <ExpandMore />}
                </Hidden>

                <Hidden lgUp={true}>
                  <ListItemText
                    style={{ paddingLeft: "0px" }}
                    inset={true}
                    primary="5. What is the importance of competitive examinations in the career of a student?"
                  />
                  {this.state.open5 ? <ExpandLess /> : <ExpandMore />}
                </Hidden>
              </ListItem>
            </Grid>
          </Grid>
          <Grid container={true} justify="center">
            <Grid item={true} sm={10}>
              <Collapse
                in={this.state.open5}
                timeout="auto"
                unmountOnExit={true}
              >
                <List disablePadding={true}>
                  <ListItem button={true}>
                    <Typography
                      variant="caption"
                      gutterBottom={true}
                      className={classes.h1Style}
                    >
                      Importance of competitive examinations:-
                      <br />
                      The competitive examinations viz. NTSE, IJSO, IMO and
                      other Olympiad examinations evaluate the calibre of
                      students and provide an early platform of competition to
                      them.
                      <br />
                      These examinations help in building scholarly aptitude and
                      build confidence in a student.
                      <br />
                      It adds to the curriculum vitae of the students.{" "}
                    </Typography>
                  </ListItem>
                </List>
              </Collapse>
            </Grid>
          </Grid>
        </List>
      </Screen>
    );
  }
}
export default withStyles(styles)(FAQ);
