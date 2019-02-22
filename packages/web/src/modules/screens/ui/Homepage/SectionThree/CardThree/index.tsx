import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = (theme: any) =>
  createStyles({
    paper: {
      maxWidth: "280px",
      padding: "10px"
    },
    heading: {
      lineHeight: "26px"
    },
    paragraph: {
      lineHeight: "22px",
      fontSize: "14px"
    }
  });

interface Props extends WithStyles<typeof styles> {
  heading: any;
  data: any;
}
class CardThree extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <svg
          version="1.1"
          id="gads-logo"
          viewBox="0 0 192 192"
          width="40px"
          height="40px"
        >
          <rect
            x="8"
            y="62.52"
            transform="matrix(0.5 -0.866 0.866 0.5 -46.2127 103.666)"
            fill="#FBBC04"
            width="117.33"
            height="58.67"
          />
          <path
            fill="#4285F4"
            d="M180.07,127.99L121.4,26.38c-8.1-14.03-26.04-18.84-40.07-10.74c-14.03,8.1-18.84,26.04-10.74,40.07 l58.67,101.61c8.1,14.03,26.04,18.83,40.07,10.74C183.36,159.96,188.16,142.02,180.07,127.99z"
          />
          <circle fill="#34A853" cx="37.34" cy="142.66" r="29.33" />
        </svg>
        <br />
        <br />
        <Typography variant="h5" component="h3" className={classes.heading}>
          {this.props.heading}
        </Typography>
        <br />

        <Typography
          variant="subheading"
          component="p"
          className={classes.paragraph}
        >
          {this.props.data}
        </Typography>
      </div>
    );
  }
}
export default withStyles(styles)(CardThree);
