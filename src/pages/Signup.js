import React, { useContext } from "react";
import { firebaseAuth } from "../provider/AuthProvider";

export default function Signup() {
  const { handleSignup, inputs, setInputs, errors } = useContext(firebaseAuth);
  // console.log(handleSignup())

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit signup componenet");
    handleSignup();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(inputs);
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      sign up page
      <h1>signUp</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={inputs.email}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={inputs.password}
          />
        </label>
        <button type="submit">signUp</button>
        {
          // TODO check how to filter duplicates at the error
          // TODO change error color ;
        }
        {errors.length > 0
          ? errors.map((error) => <p style={{ color: "red" }}>{error}</p>)
          : null}
      </form>
    </div>
  );
}
