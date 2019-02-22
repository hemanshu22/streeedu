import * as React from "react";

interface Props {
  data: any;
}

export class ActiveView extends React.Component<Props> {
  render() {
    console.log(this.props.data);
    let data = this.props.data;
    if (data != null) {
      data = JSON.parse(data);
    }
    console.log(data);
    return (
      <div>
        <h3>{data.desc}</h3>
      </div>
    );
  }
}
