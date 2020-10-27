import React, { useContext } from "react";
import Header from "./components/Header";
import SideNavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { firebaseAuth } from "./provider/AuthProvider";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Rent from "./pages/Rent";
import Services from "./pages/Services";
import Trends from "./pages/Trends";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./PrivateRoute"
// import Routes from "./routes";
import "./styles/global.scss";

function App() {
  // const { token } = useContext(firebaseAuth);
  // console.log(token);
  // const {handleSignup } = useContext(firebaseAuth)
  // console.log (handleSignup)
  return (
    <div className="App">
      <Header />
      <div className="flex row ">
        <Router>
          <SideNavBar />

          <Switch>
          <Route exact path ="/" component={Home}/>
            { 
            //   <Route
            //   path="/"
            //   exact
            //   render={(rProps) =>
            //     token === null ? <Login /> : <UserProfile />
            //   }
            //   // component={Home}
            // />
            }

            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/userprofile" component={UserProfile} />
            <PrivateRoute path="/rent" component={Rent} />
            <PrivateRoute path="/services" component={Services} />
            <PrivateRoute path="/trends" component={Trends} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
