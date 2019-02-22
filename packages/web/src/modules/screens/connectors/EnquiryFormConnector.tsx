import * as React from "react";
import { EnquiryFormController } from "@abb/controller";
import { EnquiryForm } from "../ui/EnquiryForm";
// import { EnquiryFormHome } from "../ui/EnquiryFormHome";

// container -> view
// container -> connector -> view
// controller -> connector -> view

export class EnquiryFormConnector extends React.PureComponent {
  render() {
    console.log("am i called");
    return (
      <EnquiryFormController>
        {({ submit }: { submit: any }) => <EnquiryForm submit={submit} />}
      </EnquiryFormController>
    );
  }
}
