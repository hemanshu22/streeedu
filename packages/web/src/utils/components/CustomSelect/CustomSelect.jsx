import React from "react";
import ReactDOM from "react-dom";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
// import Input from "@material-ui/core/Input";
import customInputStyle from "../../jss/material-kit-react/components/customInputStyle.jsx";
import { FieldProps } from "formik";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";

class SelectField extends React.Component {
  state = {
    value: "",
    labelWidth: 0
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  setFieldValue = event => {
    // tslint:disable-next-line:no-console
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  };
  render() {
    const {
      field,
      form: { touched, errors, values, handleChange},
      classes,
      formControlProps,
      labelText,
      id,
      name,
      labelProps,
      inputProps,
      error,
      white,
      inputRootCustomClasses,
      success,
      selectList,
      selectHeader,
      ...props,
     
    } = this.props;

    const labelClasses = classNames({
      [" " + classes.labelRootError]: error,
      [" " + classes.labelRootSuccess]: success && !error
    });
    const underlineClasses = classNames({
      [classes.underlineError]: error,
      [classes.underlineSuccess]: success && !error,
      [classes.underline]: true,
      [classes.whiteUnderline]: white
    });
    const marginTop = classNames({
      [inputRootCustomClasses]: inputRootCustomClasses !== undefined
    });
    const inputClasses = classNames({
      [classes.input]: true,
      [classes.whiteInput]: white
    });
    var formControlClasses;
    if (formControlProps !== undefined) {
      formControlClasses = classNames(
        formControlProps.className,
        classes.formControl
      );
    } else {
      formControlClasses = classes.formControl;
    }
    // tslint:disable-next-line:no-console
    console.log(selectList);

    return (
      <FormControl
        {...formControlProps}
        className={formControlClasses}
        variant="outlined"
      >
        {labelText !== undefined ? (
          <InputLabel
            className={classes.labelRoot + " " + labelClasses}
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor={name}
          >
            {labelText}
          </InputLabel>
        ) : null}
        <Select
        {...props}
        onChange={handleChange}
          {...field}
          error={errors[field.name] ? true : false}
          
          fullWidth={true}
          classes={{
            input: inputClasses,
            root: marginTop,
            disabled: classes.disabled,
            underline: underlineClasses
          }}
          {...inputProps}
          input={
            <OutlinedInput
              labelWidth={this.state.labelWidth}
              name={name}
              id={name}
            />
          }
        >
          {selectHeader !== undefined ? (
            <MenuItem>
              <em>{selectHeader}</em>
            </MenuItem>
          ) : null}
          {selectList.map((n, key) => {
            return <MenuItem value={n.value}>{n.name}</MenuItem>;
          })}
        </Select>
        {touched[field.name] && errors[field.name] && (
          <div style={{ color: "red" }}>{errors[field.name]}</div>
        )}
      </FormControl>
    );
  }
}

SelectField.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool
};

export default withStyles(customInputStyle)(SelectField);
