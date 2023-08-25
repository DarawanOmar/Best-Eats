// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBskpPPR778kUbVYel7GokkqzM_bqCOzqQ",
  authDomain: "fastfood-project.firebaseapp.com",
  projectId: "fastfood-project",
  storageBucket: "fastfood-project.appspot.com",
  messagingSenderId: "652091677780",
  appId: "1:652091677780:web:9b0a3ae7dbc31baa42e1c1",
  measurementId: "G-P48Z3SGN8L"
};

// Initialize Firebase
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)