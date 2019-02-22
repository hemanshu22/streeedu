import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import AboutusLower from './AboutusLower/index';
import List from "@material-ui/core/List";
import Hidden from "@material-ui/core/Hidden";

const styles = (theme: any) =>
  createStyles({
    button: {
      margin: theme.spacing.unit,
      color: "#0052CC"
    },
    title: {
      margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
    },

    abt_img_mob: {
      width: "100%"
    },

    grid_cen: {
      textAlign: "center"
    },

    achivment: {
      background: "#F4F5F7"
    },

    h1Style: {
      fontSize: "15px",
      lineHeight: "30px",
      fontweight: "300",
      fontStyle: "italic"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class Achivements extends React.Component<Props> {
  state = {
    dense: false
  };
  render() {
    const { classes } = this.props;
    const { dense } = this.state;

    return (
      <div>
        <br /> <br />
        <div className={classes.achivment}>
          <Grid container={true}>
            <Grid item={true} sm={7} className={classes.grid_cen}>
              <br /> <br />
              <Hidden mdDown={true}>
                <img src="/Acheivements.png" />
              </Hidden>
              <Hidden lgUp={true}>
                <img className={classes.abt_img_mob} src="/Acheivements.png" />
              </Hidden>
            </Grid>
            <Grid item={true} sm={5}>
              <br />
              <Typography variant="title" gutterBottom={true}>
                ACHIEVEMENTS
              </Typography>
              <div>
                <Typography
                  variant="caption"
                  gutterBottom={true}
                  className={classes.h1Style}
                >
                  <List dense={dense}>34534 IITians since 2002</List>
                  <List dense={dense}>
                    161460 selections in JEE (Main ) since 2003
                  </List>
                  <List dense={dense}>
                    6321 selection in AIPMT / NEET since 2012
                  </List>
                  <List dense={dense}>421 selection in AIIMS since 2012</List>

                  <List dense={dense}>
                    1724 KVPY Fellowship winners since 2006
                  </List>
                  <List dense={dense}>42 medalists in olympiads</List>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Achivements);
