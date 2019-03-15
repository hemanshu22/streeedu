import * as React from "react";
import { WorkshopFormController } from "@abb/controller";

import { WorkshopForm } from "../ui/WorkshopForm";

// container -> view
// container -> connector -> view
// controller -> connector -> view

export class WorkshopFormConnector extends React.PureComponent {
  state = {
    alert: false,
    loader: false,
    msg: ""
  };
  showAlert = (msg: any) => {
    this.setState({ alert: true, msg });
  };
  hideAlert = () => {
    this.setState({ alert: false });
  };
  showLoader = () => {
    this.setState({ loader: true });
  };
  hideLoader = () => {
    this.setState({ loader: false });
  };
  render() {
    return (
      <WorkshopFormController>
        {({ submit }: { submit: any }) => (
          <WorkshopForm
            submit={submit}
            showAlert={this.showAlert}
            hideAlert={this.hideAlert}
            alert={this.state.alert}
            hideLoader={this.hideLoader}
            showLoader={this.showLoader}
            loader={this.state.loader}
            msg={this.state.msg}
          />
        )}
      </WorkshopFormController>
    );
  }
}
