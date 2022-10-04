// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {}
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE736WneJlbKro2jVxiF1Piq2Qt7WnXok",
  authDomain: "auth-app-5b6ba.firebaseapp.com",
  projectId: "auth-app-5b6ba",
  storageBucket: "auth-app-5b6ba.appspot.com",
  messagingSenderId: "689854265172",
  appId: "1:689854265172:web:b9e1115509115b7eea7ac1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);