/* eslint-disable react/no-unescaped-entities */

import "./pracise.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";

const Login = () => {
  //const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Log in email:", email);
    console.log("log in pasword:", password);
  };
  return (
    <div className="addUser">
      <h3>Sign in</h3>
      <form className="addUserForm" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="btn btn-primary">
            Login
          </Button>
        </div>
      </form>
      <div className="login">
        <p>Don't have Account? </p>
        <Link to="/register" className="btn btn-primary">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
