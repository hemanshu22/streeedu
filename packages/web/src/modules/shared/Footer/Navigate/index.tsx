import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = (theme: any) =>
  createStyles({
    cardinner: {
      padding: "15px",
      backgroundColor: "#86576b"
    },
    footer: { color: "#fff" }
  });

interface Props extends WithStyles<typeof styles> {}
class Navigate extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.cardinner}>
        <Typography variant="h5" gutterBottom={true} className={classes.footer}>
          Navigate Us
        </Typography>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.9319147792885!2d55.302847315010325!3d25.239218083876608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf0c354f8ed77fb2!2sArenco+Real+Estate!5e0!3m2!1sen!2sus!4v1499711331883" />
      </div>
    );
  }
}
export default withStyles(styles)(Navigate);
