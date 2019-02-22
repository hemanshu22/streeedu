import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";

const styles = (theme: any) =>
  createStyles({
    list: {
      color: "white",
      fontSize: "16px",
      marginBottom: "10px",
      padding: "20px",
      listStyleType: "none",
      fontFamily:
        "Charlie Display,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif",
      fontWeight: 500
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: any;
}
class CardTwo extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    return (
      <li className={classes.list}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path fill="#ffffff" d="M0 0h20v20H0z" />
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
        </svg>
        &nbsp; &nbsp;
        {this.props.data}
      </li>
    );
  }
}
export default withStyles(styles)(CardTwo);
