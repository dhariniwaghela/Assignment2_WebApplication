import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Store only email and ID in Firestore
      storeUserData(userCredential.user.uid, {
        email: userCredential.user.email,
        id: userCredential.user.uid
      });
      return userCredential;
    });
  }

  function storeUserData(userId, userData) {
    const db = getFirestore();
    const userRef = doc(db, "users", userId);
    setDoc(userRef, userData)
      .then(() => {
        console.log("User data stored successfully!");
      })
      .catch((error) => {
        console.error("Error storing user data: ", error);
      });
  }

    
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
