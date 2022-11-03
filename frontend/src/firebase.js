// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxYHs7_CHfkfapMSlb6eWII_a8Tx_EHEk",
  authDomain: "nim-assessments.firebaseapp.com",
  projectId: "nim-assessments",
  storageBucket: "nim-assessments.appspot.com",
  messagingSenderId: "10883826251",
  appId: "1:10883826251:web:2e370bd7ee5df8b03483ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
