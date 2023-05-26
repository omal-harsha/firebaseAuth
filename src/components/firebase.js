// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcRFohC0T_rgxzvce9nwnIml4TqiZbhOM",
  authDomain: "react-authenticate-13537.firebaseapp.com",
  projectId: "react-authenticate-13537",
  storageBucket: "react-authenticate-13537.appspot.com",
  messagingSenderId: "433093277382",
  appId: "1:433093277382:web:e477019040ecc45bca89c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app