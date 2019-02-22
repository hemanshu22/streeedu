import * as React from "react";
import { WorkshopFormController } from "@abb/controller";

import { WorkshopForm } from "../ui/WorkshopForm";

// container -> view
// container -> connector -> view
// controller -> connector -> view

export class WorkshopFormConnector extends React.PureComponent {
  render() {
    console.log("am i called");
    return (
      <WorkshopFormController>
        {({ submit }: { submit: any }) => <WorkshopForm submit={submit} />}
      </WorkshopFormController>
    );
  }
}
