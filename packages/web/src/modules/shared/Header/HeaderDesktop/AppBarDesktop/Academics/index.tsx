import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";

const styles = (theme: any) =>
  createStyles({
    button: {
      // margin: theme.spacing.unit,
      // color: "#0052CC",
      paddingTop: "14px"
    },
    paper: {
      marginTop: "9px"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class Academics extends React.Component<Props> {
  state = {
    anchorEl: null
  };
  handleToggle = (event: any) => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };
  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div>
        <Button
          aria-owns={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          className={classes.button}
          onClick={this.handleToggle}
        >
          Academics
        </Button>
        <Popper
          open={open}
          anchorEl={anchorEl}
          popperOptions={{
            vertical: "bottom",
            horizontal: "center"
          }}
          disablePortal={true}
        >
          <Paper className={classes.paper}>
            <ClickAwayListener onClickAway={this.handleClose}>
              <MenuList>
                <MenuItem onClick={this.handleClose}>About PCCP</MenuItem>
                <MenuItem onClick={this.handleClose}>Key Process</MenuItem>
                <MenuItem onClick={this.handleClose}>
                  Academic Excellence
                </MenuItem>
                <MenuItem onClick={this.handleClose}>
                  Innovation & Continual Improvement.
                </MenuItem>
                <MenuItem onClick={this.handleClose}>
                  Admission/Career Counselling
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popper>
      </div>
    );
  }
}
export default withStyles(styles)(Academics);
