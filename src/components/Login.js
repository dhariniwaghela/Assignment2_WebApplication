import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
     <div class="container">
  <div class="p-4 box">
    <h2 class="mb-3">Firebase/ React Auth Login</h2>

    {error && <div class="alert alert-danger" role="alert">{error}</div>}

    <form onSubmit={handleSubmit}>
      <div class="form-group mb-3">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div class="form-group mb-3">
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div class="d-grid gap-2">
        <button type="submit" class="btn btn-primary">Log In</button>
      </div>
    </form>
    <hr />
  
  </div>
  <div class="p-4 box mt-3 text-center">
    Don't have an account? <a href="/signup">Sign up</a>
  </div>
</div>

    </>
  );
};

export default Login;
