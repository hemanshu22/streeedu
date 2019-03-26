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
      boxShadow: "5px 7px 7px #F3F3F3",
      "&:hover": {
        backgroundColor: "#f7f7f7"
      }
    },
    font: {
      color: "#ffffff"
    },
    paragraph: {
      fontSize: "14px"
    },
    fontcolor: {
      color: "#ffffff",
      textShadow: "-5px 1px 4px rgba(168, 168, 168, 1)"
    }
  });

interface Props extends WithStyles<typeof styles> {
  link: any;
  title: any;
  subheading: any;
  src: any;
  backgroundcolor: any;
}
class CardOne extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes, backgroundcolor } = this.props;
    return (
      <Paper
        elevation={3}
        className={classes.cardinner}
        style={{ backgroundColor: backgroundcolor }}
      >
        <Typography
          variant="display1"
          component="h2"
          align="center"
          className={classes.fontcolor}
          style={{ textShadow: "-5px 1px 4px #ad1457" }}
        >
          {this.props.title}
        </Typography>
        <br />
        <Typography
          variant="body1"
          component="h3"
          align="center"
          className={classes.fontcolor}
        >
          {this.props.subheading}
        </Typography>
        <br />
        <Typography variant="body2" gutterBottom={true} align="right">
          <Link
            href={this.props.link}
            style={{
              color: "#ffffff"
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
                  fill="#ffffff"
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
