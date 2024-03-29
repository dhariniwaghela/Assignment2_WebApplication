import React, { useState, useEffect } from 'react';
import { useUserAuth } from "../context/UserAuthContext"; // Import the useUserAuth hook
import { ref, get, getDatabase } from 'firebase/database';

import NavigationBar from "./Navigationbar";

// Define the UserListWidget component
const UserListWidget = () => {
  const { user } = useUserAuth();
  const [userEmails, setUserEmails] = useState([]);

  useEffect(() => {
    const fetchUserEmails = async () => {
      try {
        const db = getDatabase();
        const usersRef = ref(db, "Users");
        const snapshot = await get(usersRef);
        const userEmailList = [];
        snapshot.forEach((childSnapshot) => {
          const userData = childSnapshot.val();
          userEmailList.push(userData.email);
        });
        setUserEmails(userEmailList);
      } catch (error) {
        console.error("Error fetching user emails:", error);
      }
    };

    fetchUserEmails();
  }, []);

  return (
    <div>
      <div className="navbar">
        <NavigationBar />
      </div>
      <div>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <header className="text-center pb-5">
                  <h1 className="h2">User List</h1>
                  <p>Retrieve list of users</p>
                </header>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <blockquote className="blockquote blockquote-custom bg-white p-5">
                  <div className="blockquote-custom-icon bg-info shadow-sm"><i className="fa fa-quote-left text-white"></i></div>
                  <div className="alert alert-secondary" role="alert">
                    <p>Current user: {user && user.email}</p>
                    <ul>
                      {userEmails.map((email, index) => (
                        <li key={index}>{email}</li>
                      ))}
                    </ul>
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

export default UserListWidget;
