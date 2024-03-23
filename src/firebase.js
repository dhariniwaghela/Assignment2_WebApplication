// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8CuRto43SDUq_zw0fZf_8NqVAfKXtRcM",
  authDomain: "assignment2-webapplication.firebaseapp.com",
  projectId: "assignment2-webapplication",
  storageBucket: "assignment2-webapplication.appspot.com",
  messagingSenderId: "721541659165",
  appId: "1:721541659165:web:d3904900c601ebce8ba4f4",
  measurementId: "G-CYDY5V7P2F"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;