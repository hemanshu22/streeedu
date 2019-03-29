import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import CameraEnhance from "@material-ui/icons/CameraEnhance";
import Label from "@material-ui/icons/Label";
import QuestionAnswer from "@material-ui/icons/QuestionAnswer";
import Assignment from "@material-ui/icons/Assignment";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import GroupIcon from "@material-ui/icons/Group";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const styles = createStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  drawerList: { height: 104 }
});

interface Props extends WithStyles<typeof styles> {
  open: boolean;
}

class DrawerComponent extends React.Component<Props> {
  state = {
    open: false,
    academics: false,
    contact: false,
    courses: false
  };

  handleClick = () => {
    this.setState({
      open: !this.state.open,
      academics: false,
      contact: false,
      courses: false
    });
  };
  handleAcademicClick = () => {
    this.setState({
      open: false,
      academics: !this.state.academics,
      contact: false,
      courses: false
    });
  };
  handleCourseClick = () => {
    this.setState({
      open: false,
      courses: !this.state.courses,
      contact: false,
      academics: false
    });
  };
  handleContactClick = () => {
    this.setState({
      open: false,
      academics: false,
      courses: false,
      contact: !this.state.contact
    });
  };
  handleAdmissionClick = () => {
    this.setState({});
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <List>
          <ListItem button={true} className={classes.drawerList}>
            <Typography variant="headline" align="center">
              <Link href="/" style={{ textDecoration: "none" }}>
                STREE | Resonance
              </Link>
            </Typography>
          </ListItem>
          <Divider />
          <Grid container={true}>
            <ListItem button={true} onClick={this.handleClick}>
              <Grid item={true} xs={2}>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
              </Grid>
              <Grid item={true} xs={9}>
                <Typography variant="body2" align="left">
                  About Us
                </Typography>
              </Grid>
              <Grid item={true} xs={1}>
                {this.state.open ? (
                  <i className="material-icons right">expand_less</i>
                ) : (
                  <i className="material-icons">expand_more</i>
                )}
              </Grid>
            </ListItem>{" "}
          </Grid>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit={true}>
            <ListItem button={true}>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>

              <Link href="/aboutus" style={{ textDecoration: "none" }}>
                <Typography variant="body1" align="center">
                  About Us
                </Typography>
              </Link>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <Label />
              </ListItemIcon>
              <Link href="/ourteam" style={{ textDecoration: "none" }}>
                <Typography variant="body1" align="center">
                  Academic Council
                </Typography>
              </Link>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <Label />
              </ListItemIcon>
              <Link href="/success" style={{ textDecoration: "none" }}>
                <Typography variant="body1" align="center">
                  Success Stories
                </Typography>
              </Link>
            </ListItem>
          </Collapse>
          <Divider />

          <Grid container={true}>
            <ListItem button={true} onClick={this.handleCourseClick}>
              <Grid item={true} xs={2}>
                <ListItemIcon>
                  <Assignment />
                </ListItemIcon>
              </Grid>
              <Grid item={true} xs={9}>
                <Typography variant="body2" align="left">
                  Courses
                </Typography>
              </Grid>
              <Grid item={true} xs={1}>
                {this.state.courses ? (
                  <i className="material-icons right">expand_less</i>
                ) : (
                  <i className="material-icons">expand_more</i>
                )}
              </Grid>
            </ListItem>{" "}
          </Grid>
          <Collapse in={this.state.courses} timeout="auto" unmountOnExit={true}>
            <ListItem button={true}>
              <ListItemIcon>
                <Label />
              </ListItemIcon>
              <Link href="/pccp" style={{ textDecoration: "none" }}>
                <Typography variant="body1" align="center">
                  PCCP
                </Typography>
              </Link>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <Label />
              </ListItemIcon>
              <Link href="/sat" style={{ textDecoration: "none" }}>
                <Typography variant="body1" align="center">
                  SAT
                </Typography>
              </Link>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <Label />
              </ListItemIcon>
              <Link href="/xii" style={{ textDecoration: "none" }}>
                <Typography variant="body1" align="center">
                  XI/XII
                </Typography>
              </Link>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <Label />
              </ListItemIcon>
              <Link href="/jeemain" style={{ textDecoration: "none" }}>
                <Typography variant="body1" align="center">
                  JEE MAIN
                </Typography>
              </Link>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <Label />
              </ListItemIcon>
              <Link href="/neet" style={{ textDecoration: "none" }}>
                <Typography variant="body1" align="center">
                  NEET
                </Typography>
              </Link>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <Label />
              </ListItemIcon>
              <Link href="/olympiads" style={{ textDecoration: "none" }}>
                <Typography variant="body1" align="center">
                  Olympiads
                </Typography>
              </Link>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <Label />
              </ListItemIcon>
              <Link href="/boards" style={{ textDecoration: "none" }}>
                <Typography variant="body1" align="center">
                  Boards
                </Typography>
              </Link>
            </ListItem>
          </Collapse>

          <Divider />

          <Grid container={true}>
            <ListItem button={true} onClick={this.handleAcademicClick}>
              <Grid item={true} xs={2}>
                <ListItemIcon>
                  <LibraryBooks />
                </ListItemIcon>
              </Grid>
              <Grid item={true} xs={9}>
                <Typography variant="body2" align="left">
                  Academics
                </Typography>
              </Grid>
              <Grid item={true} xs={1}>
                {this.state.academics ? (
                  <i className="material-icons right">expand_less</i>
                ) : (
                  <i className="material-icons">expand_more</i>
                )}
              </Grid>
            </ListItem>{" "}
          </Grid>
          <Collapse
            in={this.state.academics}
            timeout="auto"
            unmountOnExit={true}
          >
            <ListItem button={true}>
              <ListItemIcon>
                <Label />
              </ListItemIcon>
              <Link
                href="/academicexcellence"
                style={{ textDecoration: "none" }}
              >
                <Typography variant="body1" align="center">
                  Academic Excellence
                </Typography>
              </Link>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <Label />
              </ListItemIcon>
              <Link href="/examinformation" style={{ textDecoration: "none" }}>
                <Typography variant="body1" align="center">
                  Exam Information
                </Typography>
              </Link>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <Label />
              </ListItemIcon>
              <Link href="/methodology" style={{ textDecoration: "none" }}>
                <Typography variant="body1" align="center">
                  Teaching Methodology
                </Typography>
              </Link>
            </ListItem>

            <ListItem button={true}>
              <ListItemIcon>
                <Label />
              </ListItemIcon>
              <Link href="/analysis" style={{ textDecoration: "none" }}>
                <Typography variant="body1" align="center">
                  Test Analysis
                </Typography>
              </Link>
            </ListItem>
          </Collapse>
          <Divider />
          <Grid container={true}>
            <ListItem button={true}>
              <Grid item={true} xs={2}>
                <ListItemIcon>
                  <CameraEnhance />
                </ListItemIcon>
              </Grid>
              <Grid item={true} xs={10}>
                <Link href="/gallery" style={{ textDecoration: "none" }}>
                  <Typography variant="body2" align="left">
                    Gallery
                  </Typography>
                </Link>
              </Grid>
            </ListItem>
          </Grid>
          <Divider />
          <Grid container={true}>
            <ListItem button={true}>
              <Grid item={true} xs={2}>
                <ListItemIcon>
                  <QuestionAnswer />
                </ListItemIcon>
              </Grid>
              <Grid item={true} xs={10}>
                <Link href="/faq" style={{ textDecoration: "none" }}>
                  <Typography variant="body2" align="left">
                    Faq
                  </Typography>
                </Link>
              </Grid>
            </ListItem>
          </Grid>
          <Divider />
          <ListItem button={true}>
            <Button variant="outlined" color="primary">
              <Link href="/enquiry" style={{ textDecoration: "none" }}>
                <Typography variant="body2" align="center">
                  EQUIRY
                </Typography>
              </Link>
            </Button>
          </ListItem>
        </List>
      </div>
    );
  }
}
export default withStyles(styles)(DrawerComponent);
