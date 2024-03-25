import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
     <div class="container">
  <div class="p-4 box">
    <h2 class="mb-3">Firebase/ React Auth Signup</h2>

    
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
        <button type="submit" class="btn btn-primary">Sign up</button>
      </div>
    </form>
  </div>
  <div class="p-4 box mt-3 text-center">
    Already have an account? <a href="/">Log In</a>
  </div>
</div>

    </>
  );
};

export default Signup;
