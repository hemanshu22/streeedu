import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { ActiveView } from "./ActiveView";

const styles = (theme: any) => ({
  screen: {
    marginTop: "50px"
  },
  root: {
    backgroundColor: "#F0F3F4",
    textdecoration: "none"
  }
});

interface PathParamsType {
  routename: string;
}

interface Props {
  data: JSX.Element | null;
}

type PropsType = RouteComponentProps<PathParamsType> &
  WithStyles<"root"> &
  WithStyles<"screen">;

class Comp extends React.Component<PropsType & Props> {
  state = {
    selectedIndex: 1
  };

  handleListItemClick = (index: any) => {
    this.setState({ selectedIndex: index });
    console.log(index);
  };
  render() {
    console.log(this.props);
    // const path = this.props.match.params.routename;
    const { classes } = this.props;
    return (
      <div className={classes.screen}>
        <Grid container={true}>
          <Grid xs={12} lg={2} md={2} />
          <Grid xs={12} lg={2} md={2}>
            <Paper style={{ width: "100%" }} elevation={1}>
              <List component="nav" className={classes.root}>
                <ListItem>
                  <ListItemText primary="My Courses" />
                </ListItem>
                <Divider />
                <Link
                  to={{
                    pathname: "/dashboard",
                    search: "?id=111&name=lastActive"
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <ListItem
                    button={true}
                    onClick={this.handleListItemClick.bind(event, 1)}
                    style={{
                      backgroundColor:
                        this.state.selectedIndex === 1 ? "white" : "#F0F3F4"
                    }}
                  >
                    <ListItemText primary="Last Active" />
                  </ListItem>
                </Link>
                <Divider />
                <Link
                  to={{
                    pathname: "/dashboard",
                    search: "?id=112&name=inActive"
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <ListItem
                    button={true}
                    onClick={this.handleListItemClick.bind(event, 2)}
                    style={{
                      backgroundColor:
                        this.state.selectedIndex === 2 ? "white" : "#F0F3F4"
                    }}
                  >
                    <ListItemText primary="Inactive" />
                  </ListItem>
                </Link>

                <Divider />
                <Link
                  to={{
                    pathname: "/dashboard",
                    search: "?id=113&name=completed"
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <ListItem
                    button={true}
                    onClick={this.handleListItemClick.bind(event, 3)}
                    style={{
                      backgroundColor:
                        this.state.selectedIndex === 3 ? "white" : "#F0F3F4"
                    }}
                  >
                    <ListItemText primary="Completed " />
                  </ListItem>
                </Link>

                <Divider />
                <Link
                  to={{
                    pathname: "/dashboard",
                    search: "?id=114&name=updates"
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <ListItem
                    button={true}
                    onClick={this.handleListItemClick.bind(event, 4)}
                    style={{
                      backgroundColor:
                        this.state.selectedIndex === 4 ? "white" : "#F0F3F4"
                    }}
                  >
                    <ListItemText primary="Updates" />
                  </ListItem>
                </Link>

                <Divider />
                <Link
                  to={{
                    pathname: "/dashboard",
                    search: "?id=115&name=accomplishments"
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <ListItem
                    button={true}
                    onClick={this.handleListItemClick.bind(event, 5)}
                    style={{
                      backgroundColor:
                        this.state.selectedIndex === 5 ? "white" : "#F0F3F4"
                    }}
                  >
                    <ListItemText primary="Accomplishments" />
                  </ListItem>
                </Link>

                <Divider />
                <Link
                  to={{
                    pathname: "/dashboard",
                    search: "?id=116&name=recommendations"
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <ListItem
                    button={true}
                    onClick={this.handleListItemClick.bind(event, 6)}
                    style={{
                      backgroundColor:
                        this.state.selectedIndex === 6 ? "white" : "#F0F3F4"
                    }}
                  >
                    <ListItemText primary="Recommendations" />
                  </ListItem>
                </Link>
              </List>
            </Paper>
          </Grid>
          <Grid xs={12} lg={1} md={1} />
          <Grid xs={12} lg={7} md={7}>
            <ActiveView data={this.props.data} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
const Dashboard = withStyles(styles)(Comp);
export const DashboardView = withRouter(Dashboard);
