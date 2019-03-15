import * as React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { CircularProgress } from "../CircularProgress";
const style = {
  padding: 5,
  paddingLeft: 20,
  paddingRight: 30
};
export class Loader extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Dialog open aria-labelledby="responsive-dialog-title">
          <DialogContent style={style}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CircularProgress />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <DialogContentText>Please wait...</DialogContentText>
            </div>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}
