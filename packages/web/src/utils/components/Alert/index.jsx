import * as React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

export class AlertDialog extends React.Component {
  state = {
    open: true
  };
  hideAlert = () => {
    this.setState({ open: false });
    this.props.hideAlert();
  };
  render() {
    return (
      <div>
        <Dialog
          fullScreen={this.props.fullScreen}
          open={this.state.open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.props.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              label="OK"
              onClick={this.hideAlert}
              color="primary"
              autoFocus
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
