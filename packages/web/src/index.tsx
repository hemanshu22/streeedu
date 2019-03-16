import * as React from "react";
import * as ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { MuiThemeProvider } from "@material-ui/core/styles";
import registerServiceWorker from "./registerServiceWorker";
import { client } from "./apollo";
import { Routes } from "./routes";
import Header from "./modules/shared/Header";
import { Theme } from "./modules/shared/Theme";
import Footer from "./modules/shared/Footer";
import Hidden from "@material-ui/core/Hidden";

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={Theme}>
      <Header />
      <Hidden only={["xs", "sm", "md"]}>
        <br />
        <br />
        <br />
        <br />
      </Hidden>
      <Hidden only={["lg", "xl"]}>
        <br />
      </Hidden>
      <Routes />
      <Footer />
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
