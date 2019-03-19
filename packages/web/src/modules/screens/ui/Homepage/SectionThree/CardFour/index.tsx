import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";

const styles = (theme: any) =>
  createStyles({
    paper: {
      backgroundColor: "#ffffff",
      boxShadow: "none",
      borderRadius: "5px",
      borderTopWidth: "9px",
      borderTopStyle: "solid",
      transition: "box-shadow .5s",
      borderColor: "#FFC400",
      "&:hover": {
        boxShadow: "5px 5px 5px 5px rgba(0,0,0,.05)"
      }
      //  padding: "10px"
      // height: "340px"
    },
    media: {
      padding: "10px",
      backgroundColor: "#FFF"
    },
    div: {
      padding: "5px"
    },
    imagecard: {
      width: "100px",
      height: "100px"
    }
  });

interface Props extends WithStyles<typeof styles> {
  heading: any;
  data: any;
  image: any;
}
class CardFour extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes, data, image, heading } = this.props;
    return (
      <div className={classes.div}>
        <Paper elevation={3} className={classes.paper}>
          <div className={classes.media}>
            <img src={image} className={classes.imagecard} />
            <br />
            <Typography variant="headline" component="h3">
              {heading}
            </Typography>
          </div>
          <Typography gutterBottom={true} variant="body1">
            <List component="nav">
              {data.map((n: any) => {
                return <ListItem key={1}>{n.msg}</ListItem>;
              })}
            </List>
          </Typography>
          {/* <Typography
              variant="body1"
              component="pdata
            >
              {this.props.data}
            </Typography> */}
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(CardFour);
