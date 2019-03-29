import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const styles = (theme: any) =>
  createStyles({
    cardinner: {
      padding: "15px",
      backgroundColor: "#86576b"
    },
    footer: { color: "#fff" },
    divider: {
      backgroundColor: "rgba(243, 243, 247, 0.94)",
      height: "2px"
    }
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
          variant="body2"
          gutterBottom={true}
          className={classes.footer}
        >
          STREE Training Center
        </Typography>
        <Typography
          variant="caption"
          gutterBottom={true}
          className={classes.footer}
        >
          #102 & 104, Arenco Building Block -B,
          <br /> Zabeel Road, Karama, Dubai (UAE).
        </Typography>
        <br />
        <Divider className={classes.divider} />
        <br />
        {/* <Typography
          variant="body2"
          gutterBottom={true}
          className={classes.footer}
        >
          STREE Education Head Office
        </Typography> */}
        <Typography
          variant="caption"
          gutterBottom={true}
          className={classes.footer}
        >
          #803-B & D, IBN Gate Office Jebel Ali,
          <br />
          Dubai (UAE).
        </Typography>
        <br />
        <Divider className={classes.divider} />
        <br />
        <Typography
          variant="caption"
          gutterBottom={true}
          className={classes.footer}
        >
          #504, Seven Heaven Building, <br />
          King Abdul Aziz Street, Sharjah (UAE).
        </Typography>
      </div>
    );
  }
}
export default withStyles(styles)(OfficeAddress);
