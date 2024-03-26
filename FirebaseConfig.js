// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKgDKz0KIuVL9JbBIKXnII8i_XqOITKcU",
  authDomain: "donation-app-ef6c0-1d834.firebaseapp.com",
  projectId: "donation-app-ef6c0",
  storageBucket: "donation-app-ef6c0.appspot.com",
  messagingSenderId: "438582693477",
  appId: "1:438582693477:web:2222ddf490a518d059008c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = getAuth(app);

export const FIREBASE_DB = getFirestore(app)