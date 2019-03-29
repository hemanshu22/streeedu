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
          <Typography variant="button">Academics</Typography>
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
                <Link
                  href="/academicexcellence"
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem onClick={this.handleClose}>
                    <Typography variant="button">
                      Academic Excellence
                    </Typography>
                  </MenuItem>
                </Link>
                <Link
                  href="/examinformation"
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem onClick={this.handleClose}>
                    <Typography variant="button">Exam Information</Typography>
                  </MenuItem>
                </Link>
                <Link href="/methodology" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={this.handleClose}>
                    <Typography variant="button">
                      Teaching Methodology
                    </Typography>
                  </MenuItem>
                </Link>
                <Link href="/analysis" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={this.handleClose}>
                    <Typography variant="button">Test Analysis</Typography>
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
export default withStyles(styles)(Academics);
