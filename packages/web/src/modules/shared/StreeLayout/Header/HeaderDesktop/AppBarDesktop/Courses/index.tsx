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
          <Typography variant="button">Courses</Typography>
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
                  <MenuItem onClick={this.handleClose}>
                    <Typography variant="button">PCCP</Typography>
                  </MenuItem>
                </Link>
                <Link href="/sat" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={this.handleClose}>
                    <Typography variant="button">SAT</Typography>
                  </MenuItem>
                </Link>
                <Link href="/xii" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={this.handleClose}>
                    <Typography variant="button">XI/XII</Typography>
                  </MenuItem>
                </Link>
                <Link href="/jeemain" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={this.handleClose}>
                    <Typography variant="button">JEE MAIN</Typography>
                  </MenuItem>
                </Link>
                <Link href="/neet" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={this.handleClose}>
                    <Typography variant="button">NEET</Typography>
                  </MenuItem>
                </Link>
                <Link href="/olympiads" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={this.handleClose}>
                    <Typography variant="button">Olympiads</Typography>
                  </MenuItem>
                </Link>
                <Link href="/boards" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={this.handleClose}>
                    <Typography variant="button">Boards</Typography>
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
export default withStyles(styles)(Courses);
