import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import { normalizeErrors } from "../../utils/normalizeErrors";
import { NormalizedErrorMap } from "../../types/NormalizedErrorMap";

interface EnquiryMutation_enquiry {
  path: string;
  message: string;
}

interface EnquiryMutation {
  enquiryform: EnquiryMutation_enquiry[] | null;
}

interface EnquiryMutationVariables {
  name: string;
  email: string;
  parentname: string;
  school: string;
  area: string;
  mobile: string;
  grade: string;
  enquiry: string;
}

interface Props {
  children: (data: {
    submit: (
      values: EnquiryMutationVariables
    ) => Promise<NormalizedErrorMap | null>;
  }) => JSX.Element | null;
}

class C extends React.PureComponent<
  ChildMutateProps<Props, EnquiryMutation, EnquiryMutationVariables>
> {
  submit = async (values: EnquiryMutationVariables) => {
    const {
      data: { enquiryform }
    } = await this.props.mutate({
      variables: values
    });
    console.log("response: ", enquiryform);
    if (enquiryform) {
      return normalizeErrors(enquiryform);
    }
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
