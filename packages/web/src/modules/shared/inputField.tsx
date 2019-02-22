import * as React from "react";
import { FieldProps } from "formik";
import TextField from "@material-ui/core/TextField";

export const InputField: React.SFC<FieldProps<any> & {}> = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <div>
    <TextField
      {...field}
      {...props}
      error={errors[field.name] ? true : false}
    />
    {touched[field.name] && errors[field.name] && (
      <div style={{ color: "red" }}>{errors[field.name]}</div>
    )}
  </div>
);
