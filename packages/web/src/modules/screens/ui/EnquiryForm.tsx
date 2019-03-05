import * as React from "react";

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import School from "@material-ui/icons/School";
import SmartPhone from "@material-ui/icons/Smartphone";
import Home from "@material-ui/icons/Home";
import Person from "@material-ui/icons/Person";
import Grade from "@material-ui/icons/Grade";
import GridContainer from "../../../utils/components/Grid/GridContainer.jsx";
import GridItem from "../../../utils/components/Grid/GridItem.jsx";
import Card from "../../../utils/components/Card/Card.jsx";
import CardHeader from "../../../utils/components/Card/CardHeader.jsx";
import CardBody from "../../../utils/components/Card/CardBody.jsx";
import CardFooter from "../../../utils/components/Card/CardFooter.jsx";
import Button from "@material-ui/core/Button";
import CustomInput from "../../../utils/components/CustomInput/CustomInput.jsx";
import { container } from "../../../utils/jss/material-kit-react.jsx";
import image from "../../../utils/img/sign.jpg";
import { withFormik, FormikErrors, FormikProps, Field, Form } from "formik";
import { validEnquiryFormSchema } from "@abb/common";
import { createStyles } from "@material-ui/core";
import CustomInputMultiline from "../../../utils/components/CustomInputMultiline/CustomInputMultiline.jsx";

interface FormValues {
  name: string;
  email: string;
  school: string;
  parentname: string;
  area: string;
  mobile: string;
  grade: string;
  enquiry: string;
}

interface Props extends WithStyles<typeof loginStyle> {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}
const loginStyle = () =>
  createStyles({
    section: {
      minHeight: "110vh",
      maxHeight: "1600px",
      overflow: "hidden",
      padding: "70px 0",
      backgroundPosition: "top center",
      backgroundSize: "cover",
      margin: "0",
      border: "0",
      display: "flex",
      alignItems: "center",
      backgroundImage: "url(" + image + ")"
    },
    container,
    form: {
      margin: "0"
    },
    cardHeader: {
      width: "auto",
      textAlign: "center",
      marginLeft: "20px",
      marginRight: "20px",
      marginTop: "-40px",
      padding: "20px 0",
      marginBottom: "15px"
    },
    socialIcons: {
      maxWidth: "24px",
      marginTop: "0",
      width: "100%",
      transform: "none",
      left: "0",
      top: "0",
      height: "100%",
      lineHeight: "41px",
      fontSize: "20px"
    },
    divider: {
      marginTop: "30px",
      marginBottom: "0px",
      textAlign: "center"
    },
    cardFooter: {
      paddingTop: "0rem",
      border: "0",
      borderRadius: "6px",
      justifyContent: "center !important"
    },
    socialLine: {
      marginTop: "1rem",
      textAlign: "center",
      padding: "0"
    },
    inputIconsColor: {
      color: "#495057"
    }
  });

class SectionLogin extends React.Component<FormikProps<FormValues> & Props> {
  state = {
    value: "0"
  };
  onChange = (e: any) => {
    this.setState({ value: e.target.value });
  };

  handleClick = () => {
    console.log("im here");
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <Card>
                <Form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <Typography
                      component="h2"
                      variant="title"
                      gutterBottom={true}
                      style={{ color: "white" }}
                    >
                      ENQUIRY FORM
                    </Typography>
                    {/* <h4>ENQUIRY FORM</h4> */}
                  </CardHeader>
                  <CardBody>
                    <Field
                      labelText="Name"
                      name="name"
                      component={CustomInput}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Person className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <Field
                      labelText="Grade"
                      name="grade"
                      component={CustomInput}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Grade className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <Field
                      labelText="School Name"
                      name="school"
                      component={CustomInput}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <School className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <Field
                      labelText="Address"
                      name="area"
                      component={CustomInput}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Home className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <Field
                      labelText="Parent Name"
                      name="parentname"
                      component={CustomInput}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <Field
                      labelText="Mobile Number"
                      name="mobile"
                      component={CustomInput}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <SmartPhone className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <Field
                      labelText="Email"
                      name="email"
                      placeholder="Email"
                      component={CustomInput}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <Field
                      labelText="Enter Your Query Here.."
                      name="enquiry"
                      component={CustomInputMultiline}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <School className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      variant="outlined"
                      color="primary"
                      type="submit"
                      //    onClick={this.handleClick}
                    >
                      Submit
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

const Comp = withFormik<Props, FormValues>({
  validationSchema: validEnquiryFormSchema,
  mapPropsToValues: () => ({
    name: "",
    email: "",
    school: "",
    parentname: "",
    area: "",
    mobile: "",
    grade: "",
    enquiry: ""
  }),
  handleSubmit: async (values, { props, setErrors }) => {
    console.log("test");
    console.log(values);
    console.log(props);
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(SectionLogin);

export const EnquiryForm = withStyles(loginStyle)(Comp);
