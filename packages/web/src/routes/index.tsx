import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RegisterConnector } from "../modules/register/RegisterConnector";
import { DashboardConnector } from "../modules/dashboard/DashboardConnector";
import AboutUs from "../modules/screens/ui/AboutUs";
import { WorkshopFormConnector } from "../modules/screens/connectors/WorkshopFormConnector";
import { EnquiryFormConnector } from "../modules/screens/connectors/EnquiryFormConnector";
import OurTeam from "../modules/screens/ui/OurTeam";
import Home from "../modules/screens/ui/Home";
import SuccessStories from "../modules/screens/ui/SuccessStories";
import AboutPccp from "../modules/screens/ui/AboutPccp";
import Sat from "../modules/screens/ui/Sat";
import Neet from "../modules/screens/ui/Neet";
import JeeMains from "../modules/screens/ui/JeeMains";
import Olympiads from "../modules/screens/ui/Olympiads";
import Boards from "../modules/screens/ui/Boards";
import XII from "../modules/screens/ui/XII";
import KeyProcess from "../modules/screens/ui/KeyProcess";
import Innovations from "../modules/screens/ui/Innovations";
import Admissions from "../modules/screens/ui/Admissions";
import FAQ from "../modules/screens/ui/FAQ";
import Address from "../modules/screens/ui/Address";
import AcademicExcellence from "../modules/screens/ui/AcademicExcellence";
import ExamInformation from "../modules/screens/ui/ExamInformation";
import TeachingMethodology from "../modules/screens/ui/TeachingMethodology";
import TestAnalysis from "../modules/screens/ui/TestAnalysis";
// import StreeLayout from "../modules/shared/App/Layout/StreeLayout";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Home} />
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
      <Route exact={true} path="/sat" component={Sat} />
      <Route exact={true} path="/neet" component={Neet} />
      <Route exact={true} path="/jeemain" component={JeeMains} />
      <Route exact={true} path="/olympiads" component={Olympiads} />
      <Route exact={true} path="/boards" component={Boards} />
      <Route exact={true} path="/xii" component={XII} />
      <Route exact={true} path="/key" component={KeyProcess} />
      <Route exact={true} path="/innovative" component={Innovations} />
      <Route exact={true} path="/career" component={Admissions} />
      <Route exact={true} path="/faq" component={FAQ} />
      <Route exact={true} path="/address" component={Address} />
      <Route exact={true} path="/methodology" component={TeachingMethodology} />
      <Route exact={true} path="/analysis" component={TestAnalysis} />
      <Route exact={true} path="/examinformation" component={ExamInformation} />
      <Route
        exact={true}
        path="/academicexcellence"
        component={AcademicExcellence}
      />
    </Switch>
  </BrowserRouter>
);
