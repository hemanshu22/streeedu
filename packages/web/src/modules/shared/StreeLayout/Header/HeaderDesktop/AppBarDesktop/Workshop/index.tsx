import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const styles = (theme: any) =>
  createStyles({
    button: {
      margin: theme.spacing.unit,
      backgroundColor: "#86576b",
      color: "white"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class Workshop extends React.Component<Props> {
  state = {
    open: false
  };

  handleToggle = (event: any) => {
    this.setState({
      open: event.currentTarget
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Link href="/workshop" style={{ textDecoration: "none" }}>
          <Button className={classes.button} variant="contained">
            WORKSHOP
          </Button>
        </Link>
      </div>
    );
  }
}
export default withStyles(styles)(Workshop);
