import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const styles = (theme: any) =>
  createStyles({
    button: {
      margin: theme.spacing.unit,
      color: "#86576b"
    },
    enquiry: {
      //  textAlign: "right"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class Enquiry extends React.Component<Props> {
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
      <div className={classes.enquiry}>
        <Link href="/enquiry" style={{ textDecoration: "none" }}>
          <Button className={classes.button} variant="outlined">
            <Typography variant="button">ENQUIRY</Typography>
          </Button>
        </Link>
      </div>
    );
  }
}
export default withStyles(styles)(Enquiry);
