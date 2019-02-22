import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";

const styles = (theme: any) =>
  createStyles({
    cardinner: {
      padding: "15px",
      backgroundColor: "#303c42"
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
          Contact
        </Typography>
        <Typography
          variant="body2"
          gutterBottom={true}
          className={classes.footer}
        >
          <b> +971 4 397 7777</b> <br />
          <b> +971 588 488 127 </b> <br />
          <b> +971 588 488 128</b> <br />
          <b> +971 588 488 129</b> <br />
          <b> cc.resonance@stree.ae</b> <br />
        </Typography>
      </div>
    );
  }
}
export default withStyles(styles)(ContactFooter);
