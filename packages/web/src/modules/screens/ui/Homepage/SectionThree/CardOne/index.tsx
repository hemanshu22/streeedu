import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = (theme: any) =>
  createStyles({
    cardinner: {
      padding: "15px",
      //  maxWidth: "280px",
      //  position: "relative",
      borderRadius: "5px",
      paddingBottom: "50px",
      transition: "box-shadow .2s ease-in-out",
      //  display: "block",
      boxShadow: "1px 1px 1px 1px #ccc",
      backgroundColor: "#ffffff"
    },
    cardcontent: {
      // padding: "0 25px"
    },
    paragraph: {
      fontSize: "14px"
    },
    fontcolor: {
      color: "#e80404de"
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: any;
  title: any;
  subheading: any;
  src: any;
}
class CardOne extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.cardinner}>
        <br />
        {/* <div className={classes.cardcontent}> */}
        <Typography
          variant="headline"
          component="h3"
          className={classes.fontcolor}
        >
          {this.props.title}
        </Typography>
        <br />
        <Typography variant="title" component="h3">
          {this.props.subheading}
        </Typography>
        <br />
        <Typography
          variant="subheading"
          component="p"
          className={classes.paragraph}
        >
          {this.props.data}
        </Typography>
        {/* </div> */}
      </div>
    );
  }
}
export default withStyles(styles)(CardOne);
