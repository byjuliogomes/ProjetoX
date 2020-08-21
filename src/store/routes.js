import React from "react";
import Explore from "../pages/explore";
import Login from "../pages/login";
import Categorias from "../pages/categorias";
import NovoDeck from "../pages/novodeck";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/" component={Explore} />
      <Route path="/login" component={Login} />
      <Route path="/categorias" component={Categorias} />
      <Route path="/novodeck" component={NovoDeck} history={useHistory} />
    </Switch>
  );
}
