import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Card from "@material-ui/core/Card";
// import Grid from "@material-ui/core/Grid";
// import CardContent from "@material-ui/core/CardContent";
// import Avatar from "@material-ui/core/Avatar";
// import image from "../../../../utils/img/city.jpg";
import Paper from "@material-ui/core/Paper";

const styles = (theme: any) =>
  createStyles({
    paper: {
      maxWidth: 345,
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      // borderRadius: "10px",
      backgroundColor: "#fff",
      margin: "10px",
      boxShadow:
        "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)"
    },
    media: {
      height: 140,
      //  backgroundColor: "blue",
      // backgroundImage: "url(" + image + ")",
      backgroundPosition: "top center",
      backgroundSize: "cover"
    },
    cardcontent: {
      // backgroundColor: "#783473",
      padding: "8px"
    },
    bigAvatar: { margin: 10, width: 60, height: 60 },
    headline: { color: "#c49213" },
    paragraph: { color: "white" }
  });

interface Props extends WithStyles<typeof styles> {}
class CardDesign extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper elevation={1} className={classes.paper}>
        <div className={classes.media} />
        {/* <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
          className={classes.bigAvatar}
        /> */}
        <div className={classes.cardcontent}>
          <Typography
            variant="headline"
            gutterBottom={true}
            className={classes.headline}
          />

          <Typography
            variant="body1"
            gutterBottom={true}
            className={classes.paragraph}
          />
          <br />
          <br />
          <Typography
            variant="body1"
            gutterBottom={true}
            className={classes.paragraph}
          >
            <span>Read More-></span>
          </Typography>
        </div>
      </Paper>
    );
  }
}
export default withStyles(styles)(CardDesign);
