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

const styles = (theme: any) =>
  createStyles({
    h1style: {
      textAlign: "center",
      borderColor: "#fff"
    },

    imgstyle: {
      width: "100%"
    },

    btnstyle: {
      borderColor: "#fff"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class SuccessStories extends React.Component<Props> {
  state = {
    open1: false,
    open2: false,
    open3: false,
    open4: false
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

  render() {
    const { classes } = this.props;
    return (
      <Screen title="Our-team">
        <div>
          <h2 className={classes.h1style}>SUCCESS STORIES</h2>
          <br />
          <Grid container={true} justify="center" spacing={8}>
            <Grid item={true} xs={12} sm={4}>
              <Button
                className={classes.h1style}
                color="primary"
                onClick={this.handleClickOpen1}
              >
                <img className={classes.imgstyle} src="/Resonancesuccess.jpg" />
              </Button>
            </Grid>

            <Grid item={true} xs={12} sm={4}>
              <Button
                className={classes.btnstyle}
                color="primary"
                onClick={this.handleClickOpen2}
              >
                <img className={classes.imgstyle} src="/Resultbanner.jpg" />
              </Button>
            </Grid>
            <Grid item={true} xs={12} sm={4}>
              <Button
                className={classes.btnstyle}
                color="primary"
                onClick={this.handleClickOpen2}
              >
                <img className={classes.imgstyle} src="/v4.jpg" />
              </Button>
            </Grid>

            <Grid item={true} xs={12} sm={4}>
              <Button
                className={classes.h1style}
                color="primary"
                onClick={this.handleClickOpen1}
              >
                <img className={classes.imgstyle} src="/v5.jpg" />
              </Button>
            </Grid>

            <Grid item={true} xs={12} sm={4}>
              <Button
                className={classes.btnstyle}
                color="primary"
                onClick={this.handleClickOpen2}
              >
                <img className={classes.imgstyle} src="/v1.jpg" />
              </Button>
            </Grid>
            <Grid item={true} xs={12} sm={4}>
              <Button
                className={classes.btnstyle}
                color="primary"
                onClick={this.handleClickOpen2}
              >
                <img className={classes.imgstyle} src="/v2.jpg" />
              </Button>
            </Grid>
          </Grid>

          <Dialog
            open={this.state.open1}
            onClose={this.handleClose1}
            aria-labelledby="form-dialog-title"
          >
            <DialogContent>
              <DialogContentText>
                <img className={classes.imgstyle} src="/Resonancesuccess.jpg" />
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
            <DialogContent>
              <DialogContentText>
                <img className={classes.imgstyle} src="/Resultbanner.jpg" />
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
            <DialogContent>
              <DialogContentText>
                <img className={classes.imgstyle} src="/v4.jpg" />
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
            <DialogTitle id="form-dialog-title">.</DialogTitle>
          </Dialog>
        </div>
      </Screen>
    );
  }
}
export default withStyles(styles)(SuccessStories);
