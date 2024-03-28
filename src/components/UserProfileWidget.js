import React from 'react';
import { useUserAuth } from "../context/UserAuthContext"; // Import the useUserAuth hook

import NavigationBar from "./Navigationbar";


const UserProfileWidget = () => {
  const { user } = useUserAuth(); // Access user object from the context

  return (
    <div>
        <>
        <div className="navbar">
<NavigationBar/>
      </div>
        
        </>
      <h3>User Profile Information</h3>
      {user && (
        <div>
           {/* Assuming displayName is available */}
          <p>Email: {user.email}</p>
          {/* Add other user profile information here */}
        </div>
      )}
    </div>
  );
}

export default UserProfileWidget;
