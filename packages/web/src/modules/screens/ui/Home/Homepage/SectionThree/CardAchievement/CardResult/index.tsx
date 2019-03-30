import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import ResultCard from "./ResultCard";

const styles = (theme: any) => createStyles({});

interface Props extends WithStyles<typeof styles> {
  medal: any;
  title: any;
  name: any;
  src: any;
  grade: any;
  school: any;
}
class CardResult extends React.Component<Props> {
  render() {
    return (
      <ResultCard
        name={this.props.name}
        title={this.props.title}
        src={this.props.src}
        medal={this.props.medal}
        grade={this.props.grade}
        school={this.props.school}
      />
    );
  }
}
export default withStyles(styles)(CardResult);
