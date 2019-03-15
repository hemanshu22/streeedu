// tslint:disable
// graphql typescript definitions

declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface IQuery {
    __typename: "Query";
    dashboard: string;
    getenquiryemail: string;
    me: IUser | null;
    getworkshopemail: string;
  }

  interface IDashboardOnQueryArguments {
    desc_number?: number | null;
    name?: string | null;
  }

  interface IGetenquiryemailOnQueryArguments {
    email?: string | null;
  }

  interface IGetworkshopemailOnQueryArguments {
    email?: string | null;
  }

  interface IUser {
    __typename: "User";
    id: string;
    email: string;
  }

  interface IMutation {
    __typename: "Mutation";
    enter_url: Array<IError> | null;
    enquiry: Array<IError> | null;
    sendForgotPasswordEmail: boolean | null;
    forgotPasswordChange: Array<IError> | null;
    login: Array<IError> | null;
    logout: boolean | null;
    register: Array<IError> | null;
    workshop: Array<IError> | null;
  }

  interface IEnterUrlOnMutationArguments {
    desc: string;
    desc_number: number;
  }

  interface IEnquiryOnMutationArguments {
    name: string;
    email: string;
    parentname: string;
    school: string;
    mobile: string;
    area: string;
    grade: string;
    enquiry: string;
  }

  interface ISendForgotPasswordEmailOnMutationArguments {
    email: string;
  }

  interface IForgotPasswordChangeOnMutationArguments {
    newPassword: string;
    key: string;
  }

  interface ILoginOnMutationArguments {
    email: string;
    password: string;
  }

  interface IRegisterOnMutationArguments {
    email: string;
    password: string;
  }

  interface IWorkshopOnMutationArguments {
    name: string;
    email: string;
    classs: string;
    school: string;
    mobile: string;
    area: string;
  }

  interface IError {
    __typename: "Error";
    path: string;
    message: string;
  }
}

// tslint:enable
