import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const styles = (theme: any) =>
  createStyles({
    button: {
      margin: theme.spacing.unit
    },
    paper: {
      marginTop: "9px"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class AboutUs extends React.Component<Props> {
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
        {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
        <Button
          aria-owns={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          className={classes.button}
          onClick={this.handleToggle}
        >
          <Typography variant="button">About Us</Typography>
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
                <Link href="/aboutus" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={this.handleClose}>
                    <Typography variant="button">About Us</Typography>
                  </MenuItem>
                </Link>
                <Link href="/ourteam" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={this.handleClose}>
                    <Typography variant="button">Academic Council</Typography>
                  </MenuItem>
                </Link>
                <Link href="/success" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={this.handleClose}>
                    <Typography variant="button">Success Stories</Typography>
                  </MenuItem>
                </Link>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popper>
      </div>
    );
  }
}
export default withStyles(styles)(AboutUs);
