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
              STREE | Resonance
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
                About Us
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <Typography variant="body1" align="center">
                Success Stories
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <Typography variant="body1" align="center">
                Our Team
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
                About PCCP
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <Typography variant="body1" align="center">
                Key Process
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <Typography variant="body1" align="center">
                Academic Excellence
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <Typography variant="body1" align="center">
                Innovation & Continual Improvement
              </Typography>
            </ListItem>
            <ListItem button={true}>
              <Typography variant="body1" align="center">
                Admission/Career Counselling
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
              Faq
            </Typography>
          </ListItem>
          <Divider />
          <ListItem button={true}>
            <Button
              variant="outlined"
              color="primary"
              // className={classes.button}
            >
              EQUIRY NOW
            </Button>
            {/* <Typography variant="title" align="center">
              ENQUIRY
            </Typography> */}
          </ListItem>
        </List>
      </div>
    );
  }
}
export default withStyles(styles)(DrawerComponent);
