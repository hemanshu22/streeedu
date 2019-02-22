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

const workshopMutation = gql`
  mutation(
    $name: String!
    $email: String!
    $classs: String!
    $school: String!
    $area: String!
    $mobile: String!
  ) {
    workshop(
      name: $name
      email: $email
      classs: $classs
      school: $school
      area: $area
      mobile: $mobile
    ) {
      path
      message
    }
  }
`;

export const WorkshopFormController = graphql(workshopMutation)(C);
