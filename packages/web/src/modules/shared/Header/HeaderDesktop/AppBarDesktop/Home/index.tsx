import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = (theme: any) =>
  createStyles({
    button: {
      // margin: theme.spacing.unit,
      color: "#42526E"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class Home extends React.Component<Props> {
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
        <Button className={classes.button} variant="text">
          Home
        </Button>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
