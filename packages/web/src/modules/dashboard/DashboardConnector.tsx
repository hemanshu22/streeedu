import * as React from "react";
import { DashboardController } from "@abb/controller";
import { DashboardView } from "./ui/DashboardView";
// import { RouteComponentProps } from "react-router-dom";
import * as queryString from "query-string";
// const queryString = require("query-string");

export class DashboardConnector extends React.PureComponent {
  render() {
    const parsed = queryString.parse(location.search);
    console.log(parsed.id);
    console.log(parsed.name);
    const id: any = parsed.id;
    // const params = new URLSearchParams(location.search);
    // const uid = params.get("id");
    // const id = parseInt(this.props.match.params.id, 10);
    const uid: number = parseInt(id, 10);
    const uname: any = parsed.name;
    return (
      <DashboardController id={uid} name={uname}>
        {data => {
          console.log(data);
          if (!data.listing) {
            return <div>...loading</div>;
          }

          return <DashboardView data={data.listing} />;
        }}
      </DashboardController>
    );
  }
}
