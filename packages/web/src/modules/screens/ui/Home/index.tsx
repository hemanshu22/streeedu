import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Homepage from "./Homepage";

const styles = (theme: any) => createStyles({});

interface Props extends WithStyles<typeof styles> {}
class Home extends React.Component<Props> {
  render() {
    return <Homepage />;
  }
}
export default withStyles(styles)(Home);
