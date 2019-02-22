import * as React from "react";
import Button from "@material-ui/core/Button";
import { withFormik, FormikErrors, FormikProps, Field, Form } from "formik";
import { validUserSchema } from "@abb/common";
import { InputField } from "../../shared/inputField";

interface FormValues {
  email: string;
  password: string;
}
interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.Component<FormikProps<FormValues> & Props> {
  render() {
    return (
      <Form style={{ display: "flex" }}>
        <div style={{ width: 400, margin: "auto" }}>
          <h2>Login</h2>
          <Field name="email" placeholder="Email" component={InputField} />
          <Field
            name="password"
            placeholder="Password"
            type="password"
            component={InputField}
          />
          <Button
            size="medium"
            variant="contained"
            type="submit"
            color="primary"
          >
            Login
          </Button>
        </div>
      </Form>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    console.log(values);
    console.log(props);
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);
// export const C = RegisterView ;
// field in form
