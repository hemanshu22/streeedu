import * as React from "react";
import * as ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { MuiThemeProvider } from "@material-ui/core/styles";
import registerServiceWorker from "./registerServiceWorker";
import { client } from "./apollo";
import StreeLayout from "./modules/shared/StreeLayout";
import { Routes } from "./routes";
import { Theme } from "./modules/shared/Theme";

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={Theme}>
      <StreeLayout>
        <Routes />
      </StreeLayout>
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
