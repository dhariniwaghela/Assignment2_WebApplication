import React from 'react';
import { useUserAuth } from "../context/UserAuthContext"; // Import the useUserAuth hook

import NavigationBar from "./Navigationbar";


const UserProfileWidget = () => {
  const { user } = useUserAuth(); // Access user object from the context

  return (
    <div>
      <div className="navbar">
        <NavigationBar />
      </div>
      <div>
        <section class="py-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 mx-auto">
                <header class="text-center pb-5">
                  <h1 class="h2">User Profile Information</h1>
                  <p>Retrive your personal details here</p>
                </header>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 mx-auto">
                <blockquote class="blockquote blockquote-custom bg-white p-5">
                  <div class="blockquote-custom-icon bg-info shadow-sm"><i class="fa fa-quote-left text-white"></i></div>
                  <div class="alert alert-secondary" role="alert">
                    {user && (
                      <div>
                        {/* Assuming displayName is available */}
                        <p>Email: {user.email}</p>
                        {/* Add other user profile information here */}
                      </div>
                    )}
                  </div>
                </blockquote>

              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}

export default UserProfileWidget;
