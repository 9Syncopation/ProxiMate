import React, { useContext } from "react";
import { firebaseAuth } from "../provider/AuthProvider";
import { withRouter } from "react-router-dom";

export default function Login() {
  console.log("login");
  const { handleLogin, inputs, setInputs, errors } = useContext(firebaseAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    handleLogin();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(inputs);
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Log in</h1>
      <input
        onChange={handleChange}
        name="email"
        placeholder="email"
        value={inputs.email}
      />
      <input
        onChange={handleChange}
        name="password"
        placeholder="password"
        value={inputs.password}
      />

      <button type="submit">Log in</button>
      {errors.length > 0
        ? errors.map((error) => <p style={{ color: "red" }}>{error}</p>)
        : null}
    </form>
  );
}
