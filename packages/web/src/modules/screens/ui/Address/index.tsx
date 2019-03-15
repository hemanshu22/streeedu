import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Screen from "../../../../utils/components/Screen";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import SendIcon from "@material-ui/icons/Send";

const styles = (theme: any) =>
  createStyles({
    button: {
      margin: theme.spacing.unit,
      color: "#0052CC"
    },

    fontStyle: {
      fontSize: "18px"
    },

    typofontStyle: {
      fontSize: "15px",
      fontweight: "300",
      fontStyle: "italic",
      lineHeight: "23px"
    },
    map: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      border: "0"
    },
    mapcard: {
      position: "relative",
      overflow: "hidden",
      paddingTop: "56.25%"
    },
    centerStyle: {
      justifyContent: "center"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class Address extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Screen title="address">
        <div>
          <Grid container={true} spacing={8} className={classes.centerStyle}>
            <Grid item={true} sm={10}>
              <Typography variant="headline" gutterBottom={true} align="center">
                Addresses
              </Typography>
            </Grid>
          </Grid>
          <Grid container={true} spacing={8} className={classes.centerStyle}>
            <Grid item={true} sm={10}>
              <Typography variant="title" gutterBottom={true}>
                STREE Training Center
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                #102 & 104, Arenco Building Block -B,
                <br /> Zabeel Road, Karama, Dubai (UAE).
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container={true} spacing={8} className={classes.centerStyle}>
            <Grid item={true} sm={12} xs={12} md={10} lg={10}>
              <Card>
                <CardContent className={classes.mapcard}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.927820178521!2d55.30274131501035!3d25.239355983876614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42d0ebb87c7d%3A0xfc0895de289b46cc!2sSTREE+Education+Resonance+CBSE+IIT+JEE+SAT+NEET+Coaching+Dubai+%7C+Medical+Entrance+Coaching+Dubai!5e0!3m2!1sen!2sae!4v1552519441814"
                    className={classes.map}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container={true} spacing={8} className={classes.centerStyle}>
            <Grid item={true} sm={10}>
              <Typography variant="body1" gutterBottom={true}>
                #803-B & D, IBN Gate Office Jebel Ali,
                <br /> Dubai (UAE).
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container={true} spacing={8} className={classes.centerStyle}>
            <Grid item={true} sm={12} xs={12} md={10} lg={10}>
              <Card>
                <CardContent className={classes.mapcard}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.802749177354!2d55.114302815085004!3d25.040767244174056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f1363e6c69c9f%3A0x9b5a5047e3fbcf32!2sSTREE+Education+Resonance+CBSE+ICSE+JEE+IIT+NIT+SATII+NEET+Coaching+Discovery+Gardens!5e0!3m2!1sen!2sae!4v1552519629600"
                    className={classes.map}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container={true} spacing={8} className={classes.centerStyle}>
            <Grid item={true} sm={10}>
              <Typography variant="body1" gutterBottom={true}>
                #504, Seven Heaven Building,
                <br /> King Abdul Aziz Street, <br />
                Sharjah (UAE).
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container={true} spacing={8} className={classes.centerStyle}>
            <Grid item={true} sm={12} xs={12} md={10} lg={10}>
              <Card>
                <CardContent className={classes.mapcard}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.7046650449174!2d55.38738121508983!3d25.347689531798522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b3efc9f58fd%3A0x2371c0dbf923350f!2sSTREE+Education+Resonance+CBSE+ICSE+JEE+IIT+NIT+SATII+NEET+Coaching+Sharjah!5e0!3m2!1sen!2sae!4v1552519563327"
                    className={classes.map}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <br />
        </div>
      </Screen>
    );
  }
}
export default withStyles(styles)(Address);
