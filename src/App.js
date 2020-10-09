import React from "react";
import Header from "./components/Header";
import SideNavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Rent from "./pages/Rent";
import Services from "./pages/Services";
import Trends from "./pages/Trends";
import NotFound from "./pages/NotFound";
// import Routes from "./routes";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex row">
      <Router>
      <SideNavBar />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/rent" component={Rent} />
      <Route path="/services" component={Services} />
      <Route path="/trends" component={Trends} />
      <Route component={NotFound} />
      </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
