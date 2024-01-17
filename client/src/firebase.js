// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL3pvVBdEsZ0WbUonCTw67hQLj3YvgKqA",
  authDomain: "mern-estate-new-5c5a2.firebaseapp.com",
  projectId: "mern-estate-new-5c5a2",
  storageBucket: "mern-estate-new-5c5a2.appspot.com",
  messagingSenderId: "475544297073",
  appId: "1:475544297073:web:bdfd04ef4093932e2045d0",
  measurementId: "G-J29CZ8NP43"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);