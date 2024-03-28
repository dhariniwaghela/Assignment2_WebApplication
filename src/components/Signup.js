import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "../styles/Login.css"; // Import custom styles
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

    <div class="screen-container">
      <section class="background-radial-gradient overflow-hidden">

        <div class="container py-5 text-center text-lg-start my-5">
          <div class="row gx-lg-5 align-items-center mb-5">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <h1 class="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
                Manage your <br />
                <span style={{ color: 'hsl(218, 81%, 75%)' }}>personal profile</span>
              </h1>
              <p class="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
                Resgiter with us and manage your personal profile and details
              </p>
            </div>

            <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

              <div class="card bg-glass">
                <div class="card-body px-4 py-5 px-md-5">

                  {error && <div class="alert alert-danger" role="alert">{error}</div>}
                  <form onSubmit={handleSubmit}>
                    {/* <!-- Email input --> */}
                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        class="form-control"
                        onChange={(e) => setEmail(e.target.value)} />
                      <label class="form-label" for="form3Example3">Email address</label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="exampleInputPassword1"
                        class="form-control"
                        onChange={(e) => setPassword(e.target.value)} />
                      <label class="form-label" for="form3Example4">Password</label>
                    </div>

                    {/* <!-- Submit button --> */}
                    <div class="text-center d-flex justify-content-center">
                      <button type="submit" class="btn btn-primary btn-block mb-4 ">
                        Signup
                      </button>
                    </div>
                    {/* 
        <!-- Register buttons --> */}
                    <div class="text-center">
                      <div class="p-4 box mt-3 text-center">
                        Already have an account? <a href="/">Log In</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;