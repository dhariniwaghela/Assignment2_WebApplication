// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJS3ntt9lqBYgOXVQthTZ8uTsm6hCm750",
  authDomain: "web-react-native.firebaseapp.com",
  projectId: "web-react-native",
  storageBucket: "web-react-native.appspot.com",
  messagingSenderId: "474365525725",
  appId: "1:474365525725:web:4e325014d921604d4fe534",
  measurementId: "G-8MD9R26022"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;