import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const data = [
  {
    sno: "1",
    exam: "NSO Level-1",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "Science Olympiad Foundation",
    mode: "Through School",
    examdate: "11/11/19,21/11/19",
    website: "www.sofworld.org"
  },
  {
    sno: "2",
    exam: "IMO Level-1",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "Science Olympiad Foundation",
    mode: "Through School",
    examdate: "11/11/19,21/11/19",
    website: "www.sofworld.org"
  },
  {
    sno: "3",
    exam: "NSO Level-2",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "Science Olympiad Foundation",
    mode: "Through School",
    examdate: "2,3 Feb 2020",
    website: "www.sofworld.org"
  },
  {
    sno: "4",
    exam: "IMO Level-2",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "Science Olympiad Foundation",
    mode: "Through School",
    examdate: "2,3 Feb 2020",
    website: "www.sofworld.org"
  },
  {
    sno: "5",
    exam: "Mathematics Olympiad Qualifier-LEVEL-1",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "InternationaL Olympiad Foundation",
    mode: "Individual Registration",
    examdate: "SEP -OCT 2019",
    website: "http://www.olympiads.org"
  },
  {
    sno: "6",
    exam: "Science Olympiad Qualifier-LEVEL-1",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "InternationaL Olympiad Foundation",
    mode: "Individual Registration",
    examdate: "SEP -OCT 2019",
    website: "http://www.olympiads.org"
  },
  {
    sno: "7",
    exam: "Mathematics olympiad Qualifier-LEVEL-2",
    eligibility: "VIII,IX,X,XI,XII",
    organisation: "InternationaL Olympiad Foundation",
    mode: "Individual Registration",
    examdate: "Jan 20",
    website: "http://www.olympiads.org"
  },
  {
    sno: "8",
    exam: "Science Olympiad Qualifier-LEVEL-2",
    eligibility: "VIII,IX,X,XI,XII",
    organisation: "InternationaL Olympiad Foundation",
    mode: "Individual Registration",
    examdate: "Jan 20",
    website: "http://www.olympiads.org"
  },
  {
    sno: "9",
    exam: "International Olympiad of Mathematics-Level-1",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "SILVERZONE(IOM) Level-1",
    mode: "Through School",
    examdate: "13th Nov 2019,13th Dec 2019",
    website: "www.silverzone.org"
  },
  {
    sno: "10",
    exam: "International Olympiad of Mathematics-Level-2",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "SILVERZONE(IOM) Level-2",
    mode: "Through School",
    examdate: "JAN/FEB2020",
    website: "www.silverzone.org"
  },
  {
    sno: "11",
    exam: "International Olympiad of Mathematics-Level-3",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "SILVERZONE(IOM) Level-3",
    mode: "Through School",
    examdate: "-",
    website: "www.silverzone.org"
  },
  {
    sno: "12",
    exam: "International Olympiad of Science Level-1",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "SILVERZONE(IOM) Level-1",
    mode: "Through School",
    examdate: "19thNov 2019,19th Dec 2019",
    website: "www.sofworld.org"
  },
  {
    sno: "13",
    exam: "International Olympiad of Science Level-2",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "SILVERZONE(IOM) Level-2",
    mode: "Through School",
    examdate: "JAN/FEB 2020",
    website: "www.sofworld.org"
  },
  {
    sno: "14",
    exam: "International Olympiad of Science Level-3",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "SILVERZONE(IOM) Level-3",
    mode: "Through School",
    examdate: "-",
    website: "www.sofworld.org"
  },
  {
    sno: "15",
    exam: "International Reasoning & Mental Ability Olympiad",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "SILVERZONE(IOM) Level-1",
    mode: "Through School",
    examdate: "29th Nov 2019,24th Jan 2019",
    website: "www.sofworld.org"
  },
  {
    sno: "16",
    exam: "CREST Mathematics Olympiad-Level -1",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "CREST Olympiad",
    mode: "Individual Registration",
    examdate: "30th Nov 2019,20th Dec 2019",
    website: "www.crestolympiads.com"
  },
  {
    sno: "17",
    exam: "CREST Mathematics Olympiad-Level-2",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "CREST Olympiad",
    mode: "Individual Registration",
    examdate: "1st FEB 2020",
    website: "www.crestolympiads.com"
  },
  {
    sno: "18",
    exam: "CREST Science Olympiad-Level -1",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "CREST Olympiad",
    mode: "Individual Registration",
    examdate: "7th Nov 2019,14th Nov  2019",
    website: "www.crestolympiads.com"
  },
  {
    sno: "19",
    exam: "CREST Science Olympiad-Level-2",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "CREST Olympiad",
    mode: "Individual Registration",
    examdate: "25th JAN 2020",
    website: "www.crestolympiads.com"
  },
  {
    sno: "20",
    exam: "CREST -REASONING OLYMPIAD",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "CREST  Olympiad",
    mode: "Through School",
    examdate: "20th July 19,27th July 19",
    website: "www.crestolympiads.com"
  },
  {
    sno: "21",
    exam: "ASSET EXAM",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "-",
    mode: "Through School",
    examdate: "15th June,22nd June",
    website: "www.assettalentsearch.com"
  },
  {
    sno: "22",
    exam: "Kenken Exam",
    eligibility: "VI,VII,VIII,IX,X,XI,XII",
    organisation: "Science Olympiad Foundation",
    mode: "Through School",
    examdate: "-",
    website: "-"
  },
  {
    sno: "23",
    exam: "NTSE Stage-2",
    eligibility: "X",
    organisation: "NCERT",
    mode: "Through School",
    examdate: "12th May 2019",
    website: "www.ncert.nic.in"
  }
];

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#86576b",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = (theme: any) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    table: {
      minWidth: 700
    },
    row: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.background.default
      }
    },
    grid_cen: {
      justifyContent: "center"
    }
  });

interface Props extends WithStyles<typeof styles> {}
class ExamInformation extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <br /> */}
        <Grid container={true} spacing={8} className={classes.grid_cen}>
          <Grid item={true}>
            <Typography variant="display1" gutterBottom={true} align="center">
              <br /> Exam Information
            </Typography>
          </Grid>
        </Grid>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>S.NO</CustomTableCell>
                <CustomTableCell align="center">Exam Name</CustomTableCell>
                <CustomTableCell align="center">Eligibility</CustomTableCell>
                <CustomTableCell align="center">Organisation</CustomTableCell>
                <CustomTableCell align="center">
                  Mode of Participation
                </CustomTableCell>
                <CustomTableCell align="center">Exam Date </CustomTableCell>
                <CustomTableCell align="center">Website </CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((n: any) => {
                return (
                  <TableRow className={classes.row} key={n.sno}>
                    <CustomTableCell align="center">
                      <Typography
                        variant="body2"
                        gutterBottom={true}
                        align="center"
                      >
                        {n.sno}
                      </Typography>
                    </CustomTableCell>
                    <CustomTableCell align="center">
                      <Typography
                        variant="body2"
                        gutterBottom={true}
                        align="center"
                      >
                        {n.exam}
                      </Typography>
                    </CustomTableCell>
                    <CustomTableCell align="center">
                      <Typography
                        variant="body2"
                        gutterBottom={true}
                        align="center"
                      >
                        {n.eligibility}
                      </Typography>
                    </CustomTableCell>
                    <CustomTableCell align="center">
                      <Typography
                        variant="body2"
                        gutterBottom={true}
                        align="center"
                      >
                        {n.organisation}
                      </Typography>
                    </CustomTableCell>
                    <CustomTableCell align="center">
                      <Typography
                        variant="body2"
                        gutterBottom={true}
                        align="center"
                      >
                        {n.mode}
                      </Typography>
                    </CustomTableCell>
                    <CustomTableCell align="center">
                      <Typography
                        variant="body2"
                        gutterBottom={true}
                        align="center"
                      >
                        {n.examdate}
                      </Typography>
                    </CustomTableCell>
                    <CustomTableCell align="center">
                      <Typography
                        variant="body2"
                        gutterBottom={true}
                        align="center"
                      >
                        <Link href={n.website}>{n.website}</Link>
                      </Typography>
                    </CustomTableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(ExamInformation);
