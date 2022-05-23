// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABR_z6V6KYP-_9yleVtmwDUJrDGo2n4hM",
  authDomain: "bike-spot.firebaseapp.com",
  projectId: "bike-spot",
  storageBucket: "bike-spot.appspot.com",
  messagingSenderId: "502906353407",
  appId: "1:502906353407:web:943096447852e0c8e0beca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
