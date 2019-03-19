import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Screen from "../../../../utils/components/Screen";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const styles = (theme: any) =>
  createStyles({
    button: {
      margin: theme.spacing.unit,
      color: "#fff",
      border: "#fff"
    },
    card: {
      maxWidth: 345
    },
    media: {
      height: 140
    },

    h1style: {
      textAlign: "center"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class OurTeam extends React.Component<Props> {
  state = {
    open1: false,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
    open6: false,
    open7: false,
    open8: false,
    open9: false
  };

  handleClickOpen1 = () => {
    this.setState({ open1: true });
  };

  handleClose1 = () => {
    this.setState({ open1: false });
  };

  handleClickOpen2 = () => {
    this.setState({ open2: true });
  };

  handleClose2 = () => {
    this.setState({ open2: false });
  };

  handleClickOpen3 = () => {
    this.setState({ open3: true });
  };

  handleClose3 = () => {
    this.setState({ open3: false });
  };

  handleClickOpen4 = () => {
    this.setState({ open4: true });
  };

  handleClose4 = () => {
    this.setState({ open4: false });
  };
  handleClickOpen5 = () => {
    this.setState({ open5: true });
  };
  handleClose5 = () => {
    this.setState({ open5: false });
  };
  handleClickOpen6 = () => {
    this.setState({ open6: true });
  };
  handleClose6 = () => {
    this.setState({ open6: false });
  };
  handleClickOpen7 = () => {
    this.setState({ open7: true });
  };
  handleClose7 = () => {
    this.setState({ open7: false });
  };
  handleClickOpen8 = () => {
    this.setState({ open8: true });
  };
  handleClose8 = () => {
    this.setState({ open8: false });
  };
  handleClickOpen9 = () => {
    this.setState({ open9: true });
  };
  handleClose9 = () => {
    this.setState({ open9: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <Screen title="Our Team">
        <div>
          <Hidden only={["xs", "sm", "md"]}>
            <br />
            <br />
          </Hidden>
          <Typography variant="display1" gutterBottom={true} align="center">
            Academic Team
          </Typography>
          <br />
          <Grid container={true} spacing={8} style={{ textAlign: "center" }}>
            <Grid item={true} xs={12} md={3} sm={6}>
              <Button
                className={classes.h1style}
                variant="outlined"
                style={{ borderColor: "#fff" }}
                color="primary"
                onClick={this.handleClickOpen1}
              >
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "100px"
                  }}
                  src="http://www.streeedu.com/img/stree/tm3.jpg"
                />
              </Button>
              <br />
              <Typography variant="body2" gutterBottom={true}>
                R.K. Verma (RKV Sir)
              </Typography>
            </Grid>

            <Grid item={true} xs={12} md={3} sm={6}>
              <Button
                variant="outlined"
                style={{ borderColor: "#fff" }}
                color="primary"
                onClick={this.handleClickOpen2}
              >
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "100px"
                  }}
                  src="http://www.streeedu.com/img/stree/tm4.jpg"
                />
              </Button>
              <br />
              <Typography variant="body2" gutterBottom={true}>
                Asheesh Sharma (AS Sir)
              </Typography>
            </Grid>
            <Grid item={true} xs={12} md={3} sm={6}>
              <Button
                variant="outlined"
                style={{ borderColor: "#fff" }}
                color="primary"
                onClick={this.handleClickOpen3}
              >
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "100px"
                  }}
                  src="http://www.streeedu.com/img/stree/tm5.jpg"
                />
              </Button>
              <br />
              <Typography variant="body2" gutterBottom={true}>
                Shishir Mittal (SM Sir)
              </Typography>
            </Grid>
            <Grid item={true} xs={12} md={3} sm={6}>
              <Button
                variant="outlined"
                style={{ borderColor: "#fff" }}
                color="primary"
                onClick={this.handleClickOpen4}
              >
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "100px"
                  }}
                  src="http://www.streeedu.com/img/stree/tm7.jpg"
                />
              </Button>
              <br />
              <Typography variant="body2" gutterBottom={true}>
                Lokesh Khandelwal (LK Sir)
              </Typography>
            </Grid>

            <br />
            <Grid item={true} xs={12} />
            <br />

            <Grid item={true} xs={12} md={3} sm={6}>
              <Button
                variant="outlined"
                style={{ borderColor: "#fff" }}
                color="primary"
                onClick={this.handleClickOpen5}
              >
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "100px"
                  }}
                  src="http://www.streeedu.com/img/stree/tm8.jpg"
                />
              </Button>
              <br />
              <Typography variant="body2" gutterBottom={true}>
                Ayush Goyal (AGL Sir)
              </Typography>
            </Grid>
            <Grid item={true} xs={12} md={3} sm={6}>
              <Button
                variant="outlined"
                style={{ borderColor: "#fff" }}
                color="primary"
                onClick={this.handleClickOpen6}
              >
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "100px"
                  }}
                  src="http://www.streeedu.com/img/stree/tm6.jpg"
                />
              </Button>
              <br />
              <Typography variant="body2" gutterBottom={true}>
                Chandra Shekhar Sharma (CSS Sir)
              </Typography>
            </Grid>
            <Grid item={true} xs={12} md={3} sm={6}>
              <Button
                variant="outlined"
                style={{ borderColor: "#fff" }}
                color="primary"
                onClick={this.handleClickOpen7}
              >
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "100px"
                  }}
                  src="http://www.streeedu.com/img/stree/tm1.jpg"
                />
              </Button>
              <br />
              <Typography variant="body2" gutterBottom={true}>
                Dr. Pon Mohaideen Pitchai
              </Typography>
            </Grid>

            <Grid item={true} xs={12} md={3} sm={6}>
              <Button
                variant="outlined"
                style={{ borderColor: "#fff" }}
                color="primary"
                onClick={this.handleClickOpen8}
              >
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "100px"
                  }}
                  src="http://www.streeedu.com/img/stree/tm2.jpg"
                />
              </Button>
              <br />
              <Typography variant="body2" gutterBottom={true}>
                Naveena Manohara
              </Typography>
            </Grid>

            <Grid item={true} xs={12} md={3} sm={6}>
              <Button
                variant="outlined"
                style={{ borderColor: "#fff" }}
                color="primary"
                onClick={this.handleClickOpen9}
              >
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "100px"
                  }}
                  src="http://www.streeedu.com/img/stree/tm2.jpg"
                />
              </Button>
              <br />
              <Typography variant="body2" gutterBottom={true}>
                Suresh Sood
              </Typography>
            </Grid>
          </Grid>

          <Dialog
            open={this.state.open1}
            onClose={this.handleClose1}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              R.K. Verma (RKV Sir)
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Typography variant="button" gutterBottom={true}>
                  Managing Director, Head-Academics & Senior Faculty (Physics)
                </Typography>
                <Typography variant="button" gutterBottom={true}>
                  Qualification: B.Tech. (IIT-Madras, 1994) | Work Exp.: 21+
                  Years | Founder of Resonance.
                </Typography>
              </DialogContentText>
              <DialogContentText>
                He is the quintessential force behind Resonance and the captain
                of the ship. Before founding Resonance, he worked with one of
                the leading coaching institutes for IIT-JEE in Kota as Head,
                Department of Physics from 1995 to 2001. He is an inspiring
                leader with the heart of a teacher and mind of a trailblazer. In
                his career, he has seen more than 28,000+ IIT- JEE
                (JEE-Advanced) selections including numerous toppers. His own
                success story of becoming a strong pillar of coaching industry
                after coming from a humble background makes him best motivator
                and counsellor for the students aspiring for success in
                competitive examinations and life thereafter across country.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose1} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={this.state.open2}
            onClose={this.handleClose2}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Asheesh Sharma (AS Sir)
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Typography variant="button" gutterBottom={true}>
                  Chief Executive Officer & Senior Faculty (Physics)
                </Typography>
                <Typography variant="button" gutterBottom={true}>
                  Qualification: B.Tech. (IIT-Kanpur, 2002) | Work Exp.: 14.5
                  Years | With Resonance: Since 2002
                </Typography>
              </DialogContentText>

              <DialogContentText>
                He started his career by teaching Physics at Resonance,
                immediately after completing his B.Tech. from IIT-Kanpur. His
                managerial acumen and an astute sense of strategy has helped
                Resonance in spreading its study centres and today, he plays a
                key role in taking both academic and non-academic decisions.{" "}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose2} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={this.state.open3}
            onClose={this.handleClose3}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Shishir Mittal (SM Sir)
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Typography variant="button" gutterBottom={true}>
                  Executive President (Academic Training and Development)& Head
                  of Department (Chemistry)
                </Typography>
                <Typography variant="button" gutterBottom={true}>
                  Qualification: B.Tech. (IIT-Bombay, 1998) | Work Exp.: 18+
                  Years | With Resonance: Since 2011
                </Typography>
              </DialogContentText>
              <DialogContentText>
                Renowned visionary, educationist and the best known professor of
                Chemistry for IIT-JEE preparation in India, Shishir Mittal has
                been one of the key persons behind Kota's rise to national fame
                in the coaching industry. During his fifteen years of Chemistry
                teaching at Kota, most of the teaching trends and methodologies
                in Kota have emerged from his very original approach towards the
                subject.{" "}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose3} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={this.state.open4}
            onClose={this.handleClose4}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Lokesh Khandelwal (LK Sir)
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Typography variant="button" gutterBottom={true}>
                  Deputy Managing Director & Senior Faculty (Mathematics)
                </Typography>
                <Typography variant="button" gutterBottom={true}>
                  Qualification: B.Tech. (IIT-Kanpur, 1994) | Work Exp.: 19+
                  Years | Co-founder of Resonance
                </Typography>
              </DialogContentText>
              <DialogContentText>
                He is the quintessential force behind Resonance and the captain
                of the ship. Before founding Resonance, he worked with one of
                the leading coaching institutes for IIT-JEE in Kota as Head,
                Department of Physics from 1995 to 2001. He is an inspiring
                leader with the heart of a teacher and mind of a trailblazer. In
                his career, he has seen more than 28,000+ IIT- JEE
                (JEE-Advanced) selections including numerous toppers. His own
                success story of becoming a strong pillar of coaching industry
                after coming from a humble background makes him best motivator
                and counsellor for the students aspiring for success in
                competitive examinations and life thereafter across country.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose4} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={this.state.open5}
            onClose={this.handleClose5}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Ayush Goyal (AGL Sir)
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Typography variant="button" gutterBottom={true}>
                  Vice President (Academic Planning & Performance) & Head of
                  Department (Mathematics)
                </Typography>
                <Typography variant="button" gutterBottom={true}>
                  Qualification: B.Tech.(IIT-Madras, 2003)|MS (Purdue
                  University, USA, 2006) Work Exp.: 13.5 Years | With Resonance:
                  Since 2006
                </Typography>
              </DialogContentText>
              <DialogContentText>
                Mr. Ayush Goyal is known and respected amongst the student as
                well as faculty fraternities for his prowess in the subject. He
                regularly inspires students to overcome their mental blocks
                towards Mathematics and simplifies the subject to an extent that
                it often becomes the student's favourite subject.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose5} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={this.state.open6}
            onClose={this.handleClose6}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Chandra Shekhar Sharma (CSS Sir)
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Typography variant="button" gutterBottom={true}>
                  Vice President (Student Welfare- Foundation) & Head of
                  Department (Physics)
                </Typography>
                <Typography variant="button" gutterBottom={true}>
                  Qualification: B.Tech. (IIT-Bombay, 2003) EPGEM (IIM-Kolkata)
                  Work Exp.: 13.5 Years | With Resonance: Since 2005
                </Typography>
              </DialogContentText>
              <DialogContentText>
                He started his career as an Assistant Manager at Atul Chemical
                Ltd., Gujarat. Known among students for his grit and unique
                style of teaching, Chandra Shekhar Sharma is a motivator and man
                behind many success stories. He always keeps his lectures very
                lively and after attending just the first session, any student
                can feel the difference of his teaching uniqueness.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose6} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={this.state.open7}
            onClose={this.handleClose7}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              DR. PON MOHAIDEEN PITCHAI
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Typography variant="button" gutterBottom={true}>
                  CEO of the STREE Training Center
                </Typography>
                <Typography variant="button" gutterBottom={true}>
                  Qualification: MBA from UK
                </Typography>
              </DialogContentText>
              <DialogContentText>
                Graduate in Business, Post Graduate in Social Works with
                distinction, MBA from UK, awarded PHD for his extensive research
                work in HR strategy. Principal HR and Management consultant
                based in UAE , who is the CEO of the STREE Training Center. He
                is known for developing and mentoring local UAE Nationals to
                take up senior management roles. He leads the team of Faculty
                members, deputed from Resonance, Kota.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose7} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={this.state.open8}
            onClose={this.handleClose8}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">NAVEENA MANOHARA</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Typography variant="button" gutterBottom={true}>
                  Deputy Managing Director & Senior Faculty (Mathematics)
                </Typography>
                <Typography variant="button" gutterBottom={true}>
                  Qualification: MSC, Mphil in Chemistry
                </Typography>
              </DialogContentText>
              <DialogContentText>
                Expert in Chemistry, holding MSC, Mphil in Chemistry, having 12
                years teaching experience for CBSE / ICSE and IGCSE & IB
                students . He is an academic advisor for STREE Training Center.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose8} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={this.state.open9}
            onClose={this.handleClose9}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">SURESH SOOD</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Typography variant="button" gutterBottom={true}>
                  Director
                </Typography>
                <Typography variant="button" gutterBottom={true}>
                  Qualification: MSC
                </Typography>
              </DialogContentText>
              <DialogContentText>
                Expert in Chemistry, holding MSC, Mphil in Chemistry, having 12
                years teaching experience for CBSE / ICSE and IGCSE & IB
                students . He is an academic advisor for STREE Training Center.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose9} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Screen>
    );
  }
}
export default withStyles(styles)(OurTeam);
