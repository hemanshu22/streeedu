import * as React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Person from "@material-ui/icons/Person";
import Email from "@material-ui/icons/Email";
import School from "@material-ui/icons/School";
import SmartPhone from "@material-ui/icons/Smartphone";
import GridContainer from "../../../utils/components/Grid/GridContainer.jsx";
import GridItem from "../../../utils/components/Grid/GridItem.jsx";
import Card from "../../../utils/components/Card/Card.jsx";
import CardHeader from "../../../utils/components/Card/CardHeader.jsx";
import CardBody from "../../../utils/components/Card/CardBody.jsx";
import CardFooter from "../../../utils/components/Card/CardFooter.jsx";
import Button from "@material-ui/core/Button";
import CustomInput from "../../../utils/components/CustomInput/CustomInput.jsx";
import CustomSelect from "../../../utils/components/CustomSelect/CustomSelect.jsx";
import { container } from "../../../utils/jss/material-kit-react.jsx";
import image from "../../../utils/img/sign.jpg";
import { withFormik, FormikErrors, FormikProps, Field, Form } from "formik";
import { validWorkshopFormSchema } from "@abb/common";
import { createStyles } from "@material-ui/core";
import { Loader as MyLoader } from "../../../utils/components/Loader";
import { AlertDialog } from "../../../utils/components/Alert";
import Typography from "@material-ui/core/Typography";

interface FormValues {
  name: string;
  email: string;
  school: string;
  classs: string;
  area: string;
  mobile: number;
}

interface Props extends WithStyles<typeof loginStyle> {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
  showAlert: (msg: any) => any;
  hideAlert: () => any;
  showLoader: () => any;
  hideLoader: () => any;
  alert: any;
  loader: any;
  msg: any;
}
const loginStyle = (theme: any) =>
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
    const { classes, values } = this.props;
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
                      Register For Free Workshop
                    </Typography>
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
                      labelText="Mobile Number"
                      name="mobile"
                      component={CustomInput}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "number",
                        endAdornment: (
                          <InputAdornment position="end">
                            <SmartPhone className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />

                    <Field
                      labelText="Select Class"
                      name="classs"
                      component={CustomSelect}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      selectList={[
                        { value: "VI", name: "VI" },
                        { value: "VII", name: "VII" },
                        { value: "VIII", name: "VIII" },
                        { value: "IX", name: "IX" },
                        { value: "X", name: "X" }
                      ]}
                      value={values.classs}
                    />

                    <Field
                      labelText="Select Area"
                      name="area"
                      component={CustomSelect}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      selectHeader="None"
                      selectList={[{ value: "IBN Gate", name: "IBN Gate" }]}
                      value={values.area}
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
          {this.props.loader && <MyLoader />}
          {this.props.alert && (
            <AlertDialog
              hideAlert={this.props.hideAlert}
              message={this.props.msg}
            />
          )}
        </div>
      </div>
    );
  }
}

const Comp = withFormik<Props, FormValues>({
  validationSchema: validWorkshopFormSchema,
  mapPropsToValues: () => ({
    name: "",
    email: "",
    school: "",
    classs: "",
    area: "",
    mobile: 0
  }),
  handleSubmit: async (values, { props, setErrors, resetForm }) => {
    props.showLoader();
    const errors = await props.submit(values);

    if (errors) {
      console.log(errors);
      props.hideLoader();
      setErrors(errors);
    } else {
      props.hideLoader();
      props.showAlert(
        "Thanks For Registration. We have sent email having workshop details and registration number"
      );
      resetForm();
    }
  }
})(SectionLogin);

export const WorkshopForm = withStyles(loginStyle)(Comp);
