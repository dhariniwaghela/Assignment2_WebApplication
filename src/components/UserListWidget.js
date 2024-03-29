import React, { useState, useEffect } from 'react';
import { useUserAuth } from "../context/UserAuthContext"; // Import the useUserAuth hook
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase'; // Import Firebase firestore instance

import NavigationBar from "./Navigationbar";


const UserListWidget = () => {
  const { user } = useUserAuth(); // Access user object from the context
  const [userList, setUserList] = useState([]);

  useEffect(() => {

    const fetchUserList = async () => {
      try {
        const usersRef = collection(db, 'users'); // Assuming 'users' is your collection name
        const snapshot = await getDocs(usersRef);
        const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUserList(users);
        console.log(users)
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    };

    fetchUserList();
  }, []);

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
                  <h1 class="h2">User List</h1>
                  <p>Retrive list of users</p>
                </header>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 mx-auto">
                <blockquote class="blockquote blockquote-custom bg-white p-5">
                  <div class="blockquote-custom-icon bg-info shadow-sm"><i class="fa fa-quote-left text-white"></i></div>
                  <div class="alert alert-secondary" role="alert">
                    <p>Current user: {user && user.email}</p> {/* Display current user's email */}
                    <ul>
                      {userList.map(user => (
                        <li key={user.id}>{user.name} - {user.email}</li>

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
