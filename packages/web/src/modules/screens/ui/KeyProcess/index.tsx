import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Screen from "../../../../utils/components/Screen";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SendIcon from "@material-ui/icons/Send";

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

    centerStyle: {
      justifyContent: "center"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class KeyProcess extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Screen title="Key Process">
        <div>
          <Grid container={true} spacing={8} className={classes.centerStyle}>
            <Grid item={true} sm={10}>
              <Typography variant="headline" gutterBottom={true}>
                EDU-SYSTEM
              </Typography>
            </Grid>
          </Grid>
          <Grid container={true} spacing={8} className={classes.centerStyle}>
            <Grid item={true} sm={10}>
              <Typography
                variant="caption"
                gutterBottom={true}
                className={classes.typofontStyle}
              >
                Every part of Resonance system be it the academics,
                student-faculty relation, performance monitoring, orientation,
                curriculum execution or other relevant areas follow a set of
                do's and don'ts along with target based goals. This ensures that
                every student at Resonance experiences uniform attention and
                interaction with each faculty member along with setting of their
                individual goals and achievement.
              </Typography>
            </Grid>
          </Grid>

          <br />
          <br />
          <Grid container={true} spacing={8} className={classes.centerStyle}>
            <Grid item={true} sm={10}>
              <Typography
                variant="title"
                gutterBottom={true}
                // className={classes.fontStyle}
              >
                Key Processes: Academics
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container={true} spacing={8} className={classes.centerStyle}>
            <Grid item={true} sm={5} xs={12}>
              <Card>
                <CardContent>
                  <List disablePadding={true}>
                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.typofontStyle}
                      >
                        Student's Performance Management .
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.typofontStyle}
                      >
                        Academic Quality Control & Auditing .
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.typofontStyle}
                      >
                        Study Material Development & Question Bank Management .
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.typofontStyle}
                      >
                        Faculty Workload/Productivity Management .
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.typofontStyle}
                      >
                        Regular Class Management .
                      </Typography>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item={true} sm={5} xs={12}>
              <Card>
                <CardContent>
                  <List disablePadding={true}>
                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.typofontStyle}
                      >
                        Course/Lecture Planning
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.typofontStyle}
                      >
                        Teaching Methodology.
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.typofontStyle}
                      >
                        Study Material Development & Question Bank Management .
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.typofontStyle}
                      >
                        Faculty Workload/Productivity Management .
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.typofontStyle}
                      >
                        Regular Class Management .
                      </Typography>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Screen>
    );
  }
}
export default withStyles(styles)(KeyProcess);
