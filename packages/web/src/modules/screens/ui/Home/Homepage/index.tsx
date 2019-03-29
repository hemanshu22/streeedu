import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Slider from "../../Slider";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";

const styles = (theme: any) => createStyles({});

interface Props extends WithStyles<typeof styles> {}
class Homepage extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    //  const { classes } = this.props;
    return (
      <div>
        <Slider />
        <SectionOne />
        <SectionThree />
      </div>
    );
  }
}
export default withStyles(styles)(Homepage);
