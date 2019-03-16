import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";

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
class Courses extends React.Component<Props> {
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
          Courses
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
                <Link href="/pccp" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={this.handleClose}>PCCP</MenuItem>
                </Link>
                <Link href="/sat" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={this.handleClose}>SAT</MenuItem>
                </Link>
                <Link href="/xii" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={this.handleClose}>XI/XII</MenuItem>
                </Link>
                <Link href="/jeemains" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={this.handleClose}>JEE MAINS</MenuItem>
                </Link>
                <Link href="/neet" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={this.handleClose}>NEET</MenuItem>
                </Link>
                <Link href="/olympiad" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={this.handleClose}>Olympiads</MenuItem>
                </Link>
                <Link href="/boards" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={this.handleClose}>Boards</MenuItem>
                </Link>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popper>
      </div>
    );
  }
}
export default withStyles(styles)(Courses);
