import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = (theme: any) =>
  createStyles({
    button: {
      margin: theme.spacing.unit
      //  color: "#0052CC"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class Courses extends React.Component<Props> {
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
          Courses
        </Button>
      </div>
    );
  }
}
export default withStyles(styles)(Courses);
