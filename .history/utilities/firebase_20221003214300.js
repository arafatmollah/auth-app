// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_AUTH_API_KEY,
  authDomain: process.env.NEXT_AUTH_DOMAIN,
  projectId: process.env.NEXT_AUTH_PROJRCT,
  storageBucket: process.env.NEXT_AUTH_STORAGE,
  messagingSenderId: process.env.NEXT_AUTH_MESSEGE,
  appId: process.env.NEXT_AUTH_APP
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(); 
export const db = getFirestore(app);