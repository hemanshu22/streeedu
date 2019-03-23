import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";

const styles = (theme: any) =>
  createStyles({
    cardinner: {
      // width: 0,
      // height: 0,
      // borderTop: "10px solid red",
      // borderLeft: "10px solid transparent",
      // width: "100%",
      padding: "10px",
      borderRadius: "5px",
      transition: "box-shadow .2s ease-in-out",
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
  link: any;
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
      <Paper elevation={3} className={classes.cardinner}>
        <Typography
          variant="headline"
          component="h3"
          className={classes.fontcolor}
        >
          {this.props.title}
        </Typography>
        <br />
        <Typography variant="body1" component="h3">
          {this.props.subheading}
        </Typography>
        <br />
        <Typography variant="body2" gutterBottom={true} align="right">
          <Link
            href={this.props.link}
            style={{
              color: "#0052CC"
            }}
          >
            Learn more&nbsp;
            <svg
              className="link-arrow-image"
              width="11px"
              height="8px"
              viewBox="0 0 11 8"
              version="1.1"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g
                  className="group-path"
                  transform="translate(-138.000000, -586.000000)"
                  fill="#0052CC"
                >
                  <path
                    d="M145.2803,586.507862 L144.2193,587.568863 L145.9393,589.287862 L138.7503,589.287862 C138.3363,589.287862 138.0003,589.623862 138.0003,590.037862 C138.0003,590.451862 138.3363,590.787862 138.7503,590.787862 L145.9393,590.787862 L144.2193,592.507862 L145.2803,593.568863 L148.8103,590.037862 L145.2803,586.507862 Z"
                    id="Fill-1"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </Typography>
      </Paper>
    );
  }
}
export default withStyles(styles)(CardOne);
