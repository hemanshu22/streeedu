import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import InboxIcon from "@material-ui/icons/Inbox";
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
          <ListItem button={true} onClick={this.handleClick}>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <Typography variant="body2" align="center">
              About Us
            </Typography>

            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit={true}>
            <ListItem button={true}>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <Typography variant="body1" align="center">
                <Link href="/aboutus" style={{ textDecoration: "none" }}>
                  About Us
                </Link>
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Typography variant="body1" align="center">
                <Link href="/ourteam" style={{ textDecoration: "none" }}>
                  Academic Council
                </Link>
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Typography variant="body1" align="center">
                <Link href="/success" style={{ textDecoration: "none" }}>
                  Success Stories
                </Link>
              </Typography>
            </ListItem>
          </Collapse>
          <Divider />
          <ListItem button={true} onClick={this.handleCourseClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Typography variant="body2" align="center">
              Courses
            </Typography>
            {this.state.courses ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={this.state.courses} timeout="auto" unmountOnExit={true}>
            <ListItem button={true}>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <Typography variant="body1" align="center">
                <Link href="/pccp" style={{ textDecoration: "none" }}>
                  PCCP
                </Link>
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Typography variant="body1" align="center">
                <Link href="/sat" style={{ textDecoration: "none" }}>
                  SAT
                </Link>
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Typography variant="body1" align="center">
                <Link href="/xii" style={{ textDecoration: "none" }}>
                  XI/XII
                </Link>
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Typography variant="body1" align="center">
                <Link href="/jeemain" style={{ textDecoration: "none" }}>
                  JEE MAIN
                </Link>
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Typography variant="body1" align="center">
                <Link href="/neet" style={{ textDecoration: "none" }}>
                  NEET
                </Link>
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Typography variant="body1" align="center">
                <Link href="/olympiads" style={{ textDecoration: "none" }}>
                  Olympiads
                </Link>
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Typography variant="body1" align="center">
                <Link href="/boards" style={{ textDecoration: "none" }}>
                  Boards
                </Link>
              </Typography>
            </ListItem>
          </Collapse>

          <Divider />
          <ListItem button={true} onClick={this.handleAcademicClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Typography variant="body2" align="center">
              Academics
            </Typography>
            {this.state.academics ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={this.state.academics}
            timeout="auto"
            unmountOnExit={true}
          >
            <ListItem button={true}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Typography variant="body1" align="center">
                <Link
                  href="/academicexcellence"
                  style={{ textDecoration: "none" }}
                >
                  Academic Excellence
                </Link>
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Typography variant="body1" align="center">
                <Link
                  href="/examinformation"
                  style={{ textDecoration: "none" }}
                >
                  Exam Information
                </Link>
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Typography variant="body1" align="center">
                <Link href="/methodology" style={{ textDecoration: "none" }}>
                  Teaching Methodology
                </Link>
              </Typography>
            </ListItem>
            {/* <ListItem button={true}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Typography variant="body1" align="center">
                <Link href="/innovative" style={{ textDecoration: "none" }}>
                  Innovation & Continual Improvement
                </Link>
              </Typography>
            </ListItem> */}
            <ListItem button={true}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Typography variant="body1" align="center">
                <Link href="/analysis" style={{ textDecoration: "none" }}>
                  Test Analysis
                </Link>
              </Typography>
            </ListItem>
            {/* <ListItem button={true}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Typography variant="body1" align="center">
                <Link href="/methodology" style={{ textDecoration: "none" }}>
                  Teaching Methodology
                </Link>
              </Typography>
            </ListItem> */}
          </Collapse>
          <Divider />
          <ListItem button={true}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Typography variant="body2" align="center">
              Gallery
            </Typography>
          </ListItem>
          <Divider />
          <ListItem button={true}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Typography variant="body2" align="center">
              <Link href="/faq" style={{ textDecoration: "none" }}>
                Faq
              </Link>
            </Typography>
          </ListItem>
          <Divider />
          <ListItem button={true}>
            <Button variant="outlined" color="primary">
              <Link href="/enquiry" style={{ textDecoration: "none" }}>
                EQUIRY
              </Link>
            </Button>
          </ListItem>
        </List>
      </div>
    );
  }
}
export default withStyles(styles)(DrawerComponent);
