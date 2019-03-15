import * as React from "react";
import { EnquiryFormController } from "@abb/controller";
import { EnquiryForm } from "../ui/EnquiryForm";
// import { EnquiryFormHome } from "../ui/EnquiryFormHome";

// container -> view
// container -> connector -> view
// controller -> connector -> view

export class EnquiryFormConnector extends React.PureComponent {
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
      <EnquiryFormController>
        {({ submit }: { submit: any }) => (
          <EnquiryForm
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
      </EnquiryFormController>
    );
  }
}
