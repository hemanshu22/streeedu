import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const dashboardQuery = gql`
  query($id: Int!, $name: String!) {
    dashboard(desc_number: $id, name: $name)
  }
`;

interface WithViewListing {
  listing: JSX.Element | null;
  loading: boolean;
}

interface Props {
  id: number;
  name: string;
  children: (data: WithViewListing) => JSX.Element | null;
}

export class DashboardController extends React.PureComponent<Props> {
  render() {
    const { children, id, name } = this.props;
    console.log("controller :- " + id);
    console.log("controller :- " + name);
    return (
      <Query query={dashboardQuery} variables={{ id: id, name: name }}>
        {({ data, loading }) => {
          let listing: any | null = null;
          if (data && data.dashboard) {
            listing = data.dashboard;
          }

          return children({
            listing,
            loading
          });
        }}
      </Query>
    );
  }
}
