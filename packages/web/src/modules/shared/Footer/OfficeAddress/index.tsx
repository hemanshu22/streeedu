import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const styles = (theme: any) =>
  createStyles({
    cardinner: {
      padding: "15px",
      backgroundColor: "#303c42"
    },
    footer: { color: "#fff" }
  });

interface Props extends WithStyles<typeof styles> {}
class OfficeAddress extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.cardinner}>
        <Typography
          variant="headline"
          component="h3"
          gutterBottom={true}
          className={classes.footer}
        >
          Office locations
        </Typography>
        <Typography
          variant="body1"
          gutterBottom={true}
          className={classes.footer}
        >
          <b>STREE Training Center</b>
        </Typography>
        <Typography
          variant="caption"
          gutterBottom={true}
          className={classes.footer}
        >
          #102 & 104, Arenco Building Block -B ,<br /> Zabeel Road , Karama ,
          Dubai ( UAE ).
        </Typography>
        <Divider />
        <Typography
          variant="body1"
          gutterBottom={true}
          className={classes.footer}
        >
          <b>STREE Education Head Office</b>
        </Typography>
        <Typography
          variant="caption"
          gutterBottom={true}
          className={classes.footer}
        >
          Sheikh Rashid Road,Garhoud,
          <br /> Dubai(UAE).
        </Typography>
      </div>
    );
  }
}
export default withStyles(styles)(OfficeAddress);
