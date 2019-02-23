import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import DrawerComponent from "./DrawerComponent";

const styles = createStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

interface Props extends WithStyles<typeof styles> {
  open: boolean;
}

class MobileDrawer extends React.Component<Props> {
  state = {
    left: false
  };

  toggleDrawer = (side: any, open: any) => () => {
    this.setState({
      [side]: open
    });
  };
  componentWillReceiveProps(props: any) {
    this.setState({ left: props.open });
  }
  render() {
    return (
      <div>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <DrawerComponent open={this.props.open} />
        </Drawer>
      </div>
    );
  }
}
export default withStyles(styles)(MobileDrawer);
