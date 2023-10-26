// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgc_iF5JxuRCZ95faYgTZI5K2Rg1WEBSY",
  authDomain: "car-doctor-8521b.firebaseapp.com",
  projectId: "car-doctor-8521b",
  storageBucket: "car-doctor-8521b.appspot.com",
  messagingSenderId: "900841341610",
  appId: "1:900841341610:web:7d65f99635cf65f65486d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;