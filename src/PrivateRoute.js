import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { firebaseAuth } from "./provider/AuthProvider";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { token } = useContext(firebaseAuth);
  console.log("token", token);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!token ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};
export default PrivateRoute;
