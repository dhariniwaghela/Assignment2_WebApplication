import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import "../styles/Login.css"; // Import custom styles
import { useUserAuth } from "../context/UserAuthContext";

// Define the Login component
const Login = () => {
  // Define state variables for email, password, and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();

  // Extract the logIn and googleSignIn functions from the UserAuthContext
  const navigate = useNavigate();

  // Function to handle form submission when logging in
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

  // Function to handle Google sign-in
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  // Render the login form
  return (

    <div class="screen-container background-radial-gradient">
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

                  {error && <div class="alert alert-danger" role="alert"> Please Enter Correct Email or Password </div>}

                  <form onSubmit={handleSubmit}>
                    {/* <!-- Email input --> */}
                    <div class="form-outline mb-4">
                      <input type="email"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        class="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                      />
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
                        Login
                      </button>
                    </div>
                    <div class="text-center">
                      <div class="p-4 box mt-3 text-center">
                        Don't have an account? <a href="/signup">Sign up</a>
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

// Export the Login component as default
export default Login;