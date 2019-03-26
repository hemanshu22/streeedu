import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import Link from "@material-ui/core/Link";

const styles = (theme: any) =>
  createStyles({
    home: {
      margin: theme.spacing.unit,
      color: "#86576b"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class Home extends React.Component<Props> {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    return (
      // <Button>
      <Link href="/" style={{ textDecoration: "none" }}>
        <HomeIcon className={classes.home} />
      </Link>
      // </Button>
    );
  }
}
export default withStyles(styles)(Home);
