import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";

interface Props {
  children: (data: {
    submit: (values: any) => Promise<null>;
  }) => JSX.Element | null;
}

class C extends React.PureComponent<ChildMutateProps<Props, any, any>> {
  submit = async (values: any) => {
    console.log(values);
    console.log(this.props);
    const response = await this.props.mutate({
      variables: values
    });
    console.log("response: ", response);
    return null;
  };

  render() {
    return this.props.children({ submit: this.submit });
  }
}

const enquiryMutation = gql`
  mutation(
    $name: String!
    $email: String!
    $parentname: String!
    $school: String!
    $area: String!
    $mobile: String!
    $grade: String!
    $enquiry: String!
  ) {
    enquiry(
      name: $name
      email: $email
      parentname: $parentname
      school: $school
      area: $area
      mobile: $mobile
      grade: $grade
      enquiry: $enquiry
    ) {
      path
      message
    }
  }
`;

export const EnquiryFormController = graphql(enquiryMutation)(C);
