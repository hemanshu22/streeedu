import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Screen from "../../../../utils/components/Screen";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Hidden from "@material-ui/core/Hidden";

const styles = (theme: any) =>
  createStyles({
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
      paddingTop: "30%"
    },
    centerStyle: {
      justifyContent: "center"
    },
    center: {
      color: "red"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class Address extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Screen title="address">
        <div>
          <Hidden only={["xs", "sm", "md"]}>
            <br />
            <br />
            <Grid container={true} spacing={8} className={classes.centerStyle}>
              <Grid item={true} lg={12}>
                <Typography
                  variant="display1"
                  gutterBottom={true}
                  align="center"
                >
                  Addresses
                </Typography>
              </Grid>
            </Grid>
            <br />
          </Hidden>
          <Hidden only={["lg"]}>
            <Grid container={true} spacing={8} className={classes.centerStyle}>
              <Grid item={true} xs={12} sm={10} md={10}>
                <Typography
                  variant="display1"
                  gutterBottom={true}
                  align="center"
                >
                  Addresses
                </Typography>
              </Grid>
            </Grid>
            <br />
          </Hidden>
          <Grid container={true} spacing={8}>
            <Grid item={true} md={1} lg={1} sm={1} />
            <Grid item={true} md={4} lg={4} sm={4} xs={12}>
              <Typography variant="title" gutterBottom={true} align="left">
                LOCATION MAP
              </Typography>
              <br />
              <br />
              <Card>
                <CardContent className={classes.mapcard}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.927820178521!2d55.30274131501035!3d25.239355983876614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42d0ebb87c7d%3A0xfc0895de289b46cc!2sSTREE+Education+Resonance+CBSE+IIT+JEE+SAT+NEET+Coaching+Dubai+%7C+Medical+Entrance+Coaching+Dubai!5e0!3m2!1sen!2sae!4v1552519441814"
                    className={classes.map}
                  />
                </CardContent>
              </Card>
              <br />
              <br />
              <Card>
                <CardContent className={classes.mapcard}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.802749177354!2d55.114302815085004!3d25.040767244174056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f1363e6c69c9f%3A0x9b5a5047e3fbcf32!2sSTREE+Education+Resonance+CBSE+ICSE+JEE+IIT+NIT+SATII+NEET+Coaching+Discovery+Gardens!5e0!3m2!1sen!2sae!4v1552519629600"
                    className={classes.map}
                  />
                </CardContent>
              </Card>
              <br />
              <br />
              <Card>
                <CardContent className={classes.mapcard}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.7046650449174!2d55.38738121508983!3d25.347689531798522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b3efc9f58fd%3A0x2371c0dbf923350f!2sSTREE+Education+Resonance+CBSE+ICSE+JEE+IIT+NIT+SATII+NEET+Coaching+Sharjah!5e0!3m2!1sen!2sae!4v1552519563327"
                    className={classes.map}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item={true} md={2} lg={2} sm={2} />
            <Grid item={true} md={4} lg={4} sm={4} xs={12}>
              <Typography variant="title" gutterBottom={true} align="left">
                CONTACT INFO
              </Typography>
              <Typography variant="caption" gutterBottom={true} align="left">
                Welcome to our Website.We are glad to have you around.
              </Typography>
              <br />
              <br />
              <Typography variant="title" gutterBottom={true} align="left">
                Dubai
              </Typography>
              <br />
              <Typography
                variant="button"
                gutterBottom={true}
                align="left"
                className={classes.center}
              >
                Karama
              </Typography>
              <Typography variant="body2" gutterBottom={true} align="left">
                #102 & 104, Arenco Building Block -B,
                <br /> Zabeel Road, Karama, Dubai (UAE).
                <br />
                Contact #04-3370568.
              </Typography>
              <br />

              <Typography
                variant="button"
                gutterBottom={true}
                align="left"
                className={classes.center}
              >
                IBN Gate
              </Typography>
              <Typography variant="body2" gutterBottom={true} align="left">
                #803-B & D, IBN Gate Office Jebel Ali,
                <br />
                Dubai (UAE).
                <br />
                Contact #04-3370568.
              </Typography>
              <br />

              <Typography
                variant="button"
                gutterBottom={true}
                align="left"
                className={classes.center}
              >
                Sharjah
              </Typography>
              <Typography variant="body2" gutterBottom={true} align="left">
                #504, Seven Heaven Building,
                <br />
                King Abdul Aziz Street, Sharjah (UAE).
                <br />
                Contact #04-3370568.
              </Typography>
            </Grid>
            <Grid item={true} md={1} lg={1} sm={1} xs={12} />
          </Grid>
        </div>
      </Screen>
    );
  }
}
export default withStyles(styles)(Address);
