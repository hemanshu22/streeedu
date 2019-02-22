import * as React from "react";
import { ActiveView } from "./ui/ActiveView";

interface Props {
  data: JSX.Element | null;
}

export class ActiveViewConnector extends React.PureComponent<Props> {
  render() {
    return <ActiveView data={this.props.data} />;
  }
}
