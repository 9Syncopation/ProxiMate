import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Rent from "./pages/Rent";
import Services from "./pages/Services";
import Trends from "./pages/Trends";
import NotFound from "./pages/NotFound";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <route path="/" exact component={Home} />
        <route path="/login" component={Login} />
        <route path="/rent" component={Rent} />
        <route path="/services" component={Services} />
        <route path="/trends" component={Trends} />
        <route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
