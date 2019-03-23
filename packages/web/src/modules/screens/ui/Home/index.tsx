import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Homepage from "./Homepage";
// import StreeLayout from "../../../shared/App/Layout/StreeLayout";

const styles = (theme: any) => createStyles({});

interface Props extends WithStyles<typeof styles> {}
class Home extends React.Component<Props> {
  render() {
    //  const { classes } = this.props;
    return (
      // <StreeLayout>
      <Homepage />
      // </StreeLayout>
    );
  }
}
export default withStyles(styles)(Home);
