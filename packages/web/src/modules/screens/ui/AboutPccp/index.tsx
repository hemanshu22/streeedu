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
    grid_cen: {
      justifyContent: "center"
    },

    h1Style: {
      fontSize: "15px",
      fontStyle: "italic",
      fontweight: "300",
      lineHeight: "23px"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class EduSystem extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Screen title="AboutPccp">
        <div>
          <br />
          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={10}>
              <img src="/b1.png" style={{ width: "100%" }} />
            </Grid>
          </Grid>
          <br />
          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={10}>
              <Typography variant="h6" gutterBottom={true}>
                <br />
                <b>
                  THE PCCP COURSES ARE MEANT FOR STUDENTS OF CLASSES V TO X,THE
                  COURSES SEEK TO DEVELOP THE FOLLOWING QUALITIES IN YOUNG
                  STUDENT:
                </b>
              </Typography>
            </Grid>
          </Grid>

          <br />

          <Grid container={true} spacing={8} className={classes.grid_cen}>
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
                        className={classes.h1Style}
                      >
                        Scientific Temperament.
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.h1Style}
                      >
                        Problem Solving Attitude
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.h1Style}
                      >
                        Competitive Psychology
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.h1Style}
                      >
                        Exam Temperament
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
                        className={classes.h1Style}
                      >
                        Mathematical Aptitude
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.h1Style}
                      >
                        Logical Reasoning
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.h1Style}
                      >
                        Self Confidence
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.h1Style}
                      >
                        Time Management
                      </Typography>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <br />

          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={10} xs={12}>
              <Typography
                variant="caption"
                gutterBottom={true}
                className={classes.h1Style}
                style={{ lineHeight: "25px" }}
              >
                An early beginning is essential to succeed NTSE,IJSO and other
                talent recognition&Scholarship examinations like KVPY and
                olympiads at class XI and XII levels the basics of
                mathematics,science and mental ability developed at early stage
                of learning may also prove to be of assistance to the students
                in performing better in various competitive examinations like
                JEE (main&advanced),AIIMS/NEET,C.S/CA/CLAT and other aptitude
                based examinations.
              </Typography>
            </Grid>
          </Grid>

          <br />
          <Grid container={true} spacing={8} className={classes.grid_cen}>
            <Grid item={true} sm={10} xs={12}>
              <Typography variant="h6" gutterBottom={true}>
                <b> CORE FEATURES</b>
              </Typography>
            </Grid>
          </Grid>

          <Grid container={true} spacing={8} className={classes.grid_cen}>
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
                        className={classes.h1Style}
                      >
                        Concept building through theory,illustrations and
                        derivations in the classes using UNIQUE TEACHING
                        METHODOLOGY to clear all the basic doubts and building
                        strong foundation for future.
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.h1Style}
                      >
                        Comprehensive & best study material.
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.h1Style}
                      >
                        Series of Worksshops & mock tests for best preparation
                        of various competitive exams
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.h1Style}
                      >
                        Doubt clearing sessions and regular academic feedback of
                        home work checking with verification throught parents
                        signature.
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.h1Style}
                      >
                        Daily practice problems (DPPs) are discussed in
                        classrooms to challenge students in time bound manner to
                        boost revision of the students.
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
                        className={classes.h1Style}
                      >
                        Concept building through theory,illustrations and
                        derivations in the classes using UNIQUE TEACHING
                        METHODOLOGY to clear all the basic doubts and building
                        strong foundation for future.
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.h1Style}
                      >
                        Comprehensive & best study material.
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.h1Style}
                      >
                        Series of Worksshops & mock tests for best preparation
                        of various competitive exams
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.h1Style}
                      >
                        Doubt clearing sessions and regular academic feedback of
                        home work checking with verification throught parents
                        signature.
                      </Typography>
                    </ListItem>

                    <ListItem button={true}>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <Typography
                        variant="caption"
                        gutterBottom={true}
                        className={classes.h1Style}
                      >
                        Daily practice problems (DPPs) are discussed in
                        classrooms to challenge students in time bound manner to
                        boost revision of the students.
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
export default withStyles(styles)(EduSystem);
