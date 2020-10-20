import React, { useState } from "react";
import { authMethods } from "../services/firebase/AuthenticationMethods";

export const firebaseAuth = React.createContext();

export default function AuthProvider(props) {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);

  const handleSignup = () => {
    // middle man between firebase and signup
    console.log("sginup provider");
    // calling signup from firebase server
    authMethods.signup(inputs.email, inputs.password, setErrors);
    console.log(errors);
  };
  return (
    <firebaseAuth.Provider
      value={{
        // test:"context s working"
        handleSignup,
        inputs,
        setInputs,
        errors,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
}
