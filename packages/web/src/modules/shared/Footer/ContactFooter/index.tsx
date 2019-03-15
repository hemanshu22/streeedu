import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";

const styles = (theme: any) =>
  createStyles({
    cardinner: {
      padding: "15px",
      backgroundColor: "#86576b"
    },
    footer: {
      color: "#fff"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class ContactFooter extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.cardinner}>
        <Typography
          variant="headline"
          gutterBottom={true}
          className={classes.footer}
        >
          Contact Us
        </Typography>
        <Typography
          variant="body2"
          gutterBottom={true}
          className={classes.footer}
        >
          Phone No.
        </Typography>
        <Typography
          variant="body2"
          gutterBottom={true}
          className={classes.footer}
        >
          +971 4 397 7777, <br />
          +971 588 488 129
        </Typography>
        <br />
        <Typography
          variant="body2"
          gutterBottom={true}
          className={classes.footer}
        >
          Email
        </Typography>
        <Typography
          variant="body2"
          gutterBottom={true}
          className={classes.footer}
        >
          cc.resonance@stree.ae
        </Typography>
      </div>
    );
  }
}
export default withStyles(styles)(ContactFooter);
