import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RegisterConnector } from "../modules/register/RegisterConnector";
// import { ActiveViewConnector } from "../modules/dashboard/ActiveViewConnector";
// import { InactiveViewConnector } from "../modules/dashboard/InactiveViewConnector";
import { DashboardConnector } from "../modules/dashboard/DashboardConnector";
import AboutUs from "../modules/screens/ui/AboutUs";
import { WorkshopFormConnector } from "../modules/screens/connectors/WorkshopFormConnector";
import { EnquiryFormConnector } from "../modules/screens/connectors/EnquiryFormConnector";
import OurTeam from "../modules/screens/ui/OurTeam";
import Homepage from "../modules/screens/ui/Homepage";
import SuccessStories from "../modules/screens/ui/SuccessStories";
import AboutPccp from "../modules/screens/ui/AboutPccp";
import KeyProcess from "../modules/screens/ui/KeyProcess";
import Innovations from "../modules/screens/ui/Innovations";
import Admissions from "../modules/screens/ui/Admissions";
import FAQ from "../modules/screens/ui/FAQ";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Homepage} />
      <Route exact={true} path="/register" component={RegisterConnector} />
      <Route exact={true} path="/dashboard" component={DashboardConnector} />
      <Route
        exact={true}
        path="/dashboard/:id"
        component={DashboardConnector}
      />
      <Route exact={true} path="/workshop" component={WorkshopFormConnector} />
      <Route exact={true} path="/enquiry" component={EnquiryFormConnector} />
      <Route exact={true} path="/aboutus" component={AboutUs} />
      <Route exact={true} path="/ourteam" component={OurTeam} />
      <Route exact={true} path="/success" component={SuccessStories} />
      <Route exact={true} path="/pccp" component={AboutPccp} />
      <Route exact={true} path="/key" component={KeyProcess} />
      <Route exact={true} path="/innovative" component={Innovations} />
      <Route exact={true} path="/career" component={Admissions} />
      <Route exact={true} path="/faq" component={FAQ} />
      {/* <Route
        exact={true}
        path="/inactiveview"
        component={InactiveViewConnector}
      /> */}
    </Switch>
  </BrowserRouter>
);
