import * as React from "react";
import { FieldProps } from "formik";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { createStyles } from "@material-ui/core";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
// import OutlinedInput from "@material-ui/core/OutlinedInput";

const style = (theme: any) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2
    }
  });

class InputField extends React.Component<
  FieldProps<any> & WithStyles<typeof style>
> {
  state = {
    value: false
  };

  handleChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const {
      field,
      form: { touched, errors },
      ...props
    } = this.props;
    return (
      <div>
        <Select
          {...props}
          error={errors[field.name] ? true : false}
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth={true}
          inputProps={{
            name: field.name
          }}
          //   input={
          //     <OutlinedInput labelWidth={0} name="age" id="outlined-age-simple" />
          //   }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

        {touched[field.name] && errors[field.name] && (
          <div style={{ color: "red" }}>{errors[field.name]}</div>
        )}
      </div>
    );
  }
}

export default withStyles(style)(InputField);
