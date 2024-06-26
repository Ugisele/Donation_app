// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {APIKEY,AUTHDOMAIN,PROJECTID,STORAGEBUCKET,MESSAGINGSENDERID,APPID} from 'app/config'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId:PROJECTID,
  storageBucket:STORAGEBUCKET,
  messagingSenderId:MESSAGINGSENDERID,
  appId: APPID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = getAuth(app);

export const DB = getFirestore(app)
