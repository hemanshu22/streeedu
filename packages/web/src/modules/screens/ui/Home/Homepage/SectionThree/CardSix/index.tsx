import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ChipIcon from "../../../../../../../utils/img/ChipIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import StarBorder from "@material-ui/icons/StarBorder";
import Chip from "@material-ui/core/Chip";
// import { Hidden } from "@material-ui/core";
// import { Hidden } from "@material-ui/core";

const styles = (theme: any) =>
  createStyles({
    paper: {
      backgroundColor: "#ffffff",
      width: "-webkit-fill-available"
    },
    chip: {
      fontSize: "18px",
      fontWeight: 600
    },
    chipdiv: {
      textAlign: "center",
      paddingTop: "25px"
    },
    listtext: {
      fontSize: "12px"
    }
  });

interface Props extends WithStyles<typeof styles> {
  heading: any;
  data: any;
}
class CardSix extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes, data } = this.props;
    console.log(this.props);
    return (
      <Paper elevation={1} className={classes.paper}>
        <div className={classes.chipdiv}>
          <Chip
            color="primary"
            icon={<ChipIcon />}
            variant="outlined"
            label={this.props.heading}
            className={classes.chip}
          />
        </div>
        <Typography gutterBottom={true}>
          <List component="nav">
            {data.map((n: any) => {
              return (
                <ListItem key={1}>
                  <StarBorder />
                  <ListItemText primary={n.label} />
                </ListItem>
              );
            })}
          </List>
        </Typography>
      </Paper>
    );
  }
}
export default withStyles(styles)(CardSix);
