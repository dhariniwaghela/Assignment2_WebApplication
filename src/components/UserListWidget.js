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
          <>
          <div className="navbar">
<NavigationBar/>
      </div>
        
        </>
      <h3>User List</h3>
      <p>Current user: {user && user.email}</p> {/* Display current user's email */}
      <ul>
        {userList.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
       
        ))}
      </ul>
    </div>
  );
}

export default UserListWidget;
