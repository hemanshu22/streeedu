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
    contact: false
  };

  handleClick = () => {
    this.setState({
      open: !this.state.open,
      academics: false,
      contact: false
    });
  };
  handleAcademicClick = () => {
    this.setState({
      open: false,
      academics: !this.state.academics,
      contact: false
    });
  };
  handleContactClick = () => {
    this.setState({
      open: !this.state.open,
      contact: false
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
            <Typography variant="title" align="center">
              About Us
            </Typography>
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit={true}>
            <ListItem button={true}>
              <Typography variant="body1" align="center">
                <Link href="/aboutus" style={{ textDecoration: "none" }}>
                  About Us
                </Link>
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <Typography variant="body1" align="center">
                <Link href="/success" style={{ textDecoration: "none" }}>
                  Success Stories
                </Link>
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <Typography variant="body1" align="center">
                <Link href="/ourteam" style={{ textDecoration: "none" }}>
                  Our Team
                </Link>
              </Typography>
            </ListItem>
          </Collapse>
          <Divider />
          <ListItem button={true}>
            <Typography variant="title" align="center">
              Courses
            </Typography>
          </ListItem>
          <Divider />
          <ListItem button={true} onClick={this.handleAcademicClick}>
            <Typography variant="title" align="center">
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
              <Typography variant="body1" align="center">
                <Link href="/pccp" style={{ textDecoration: "none" }}>
                  About PCCP
                </Link>
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <Typography variant="body1" align="center">
                <Link href="/key" style={{ textDecoration: "none" }}>
                  Key Process
                </Link>
              </Typography>
            </ListItem>
            <ListItem button={true}>
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
              <Typography variant="body1" align="center">
                <Link href="/innovative" style={{ textDecoration: "none" }}>
                  Innovation & Continual Improvement
                </Link>
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <Typography variant="body1" align="center">
                <Link href="/career" style={{ textDecoration: "none" }}>
                  Admission/Career Counselling
                </Link>
              </Typography>
            </ListItem>
          </Collapse>
          <Divider />
          <ListItem button={true}>
            <Typography variant="title" align="center">
              Gallery
            </Typography>
          </ListItem>
          <Divider />
          <ListItem button={true}>
            <Typography variant="title" align="center">
              <Link href="/faq" style={{ textDecoration: "none" }}>
                Faq
              </Link>
            </Typography>
          </ListItem>
          <Divider />
          <ListItem button={true}>
            <Button variant="outlined" color="primary">
              <Link href="/enquiry" style={{ textDecoration: "none" }}>
                EQUIRY NOW
              </Link>
            </Button>
          </ListItem>
        </List>
      </div>
    );
  }
}
export default withStyles(styles)(DrawerComponent);
