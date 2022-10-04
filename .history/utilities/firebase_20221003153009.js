// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_AUTH_API_KEY,
  authDomain: process.env.NEXT_AUTH_DOMAIN,
  projectId: process.env.NEXT_AUTH_PROJRCT,
  storageBucket: process.env.NEXT_AUTH_STORAG,
  messagingSenderId: "689854265172",
  appId: "1:689854265172:web:b9e1115509115b7eea7ac1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);