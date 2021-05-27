import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import PricingPage from "./views/PricingPage";



function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pricing"  component={PricingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
