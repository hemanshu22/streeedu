import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import { normalizeErrors } from "../../utils/normalizeErrors";
import { NormalizedErrorMap } from "../../types/NormalizedErrorMap";

interface RegisterMutation_register {
  path: string;
  message: string;
}

interface RegisterMutation {
  workshop: RegisterMutation_register[] | null;
}

interface RegisterMutationVariables {
  name: string;
  email: string;
  classs: string;
  school: string;
  area: string;
  mobile: string;
}

interface Props {
  children: (data: {
    submit: (
      values: RegisterMutationVariables
    ) => Promise<NormalizedErrorMap | null>;
  }) => JSX.Element | null;
}

class C extends React.PureComponent<
  ChildMutateProps<Props, RegisterMutation, RegisterMutationVariables>
> {
  submit = async (values: RegisterMutationVariables) => {
    console.log(values);
    console.log(this.props);
    const {
      data: { workshop }
    } = await this.props.mutate({
      variables: values
    });
    console.log("response: ", workshop);

    if (workshop) {
      return normalizeErrors(workshop);
    }

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
