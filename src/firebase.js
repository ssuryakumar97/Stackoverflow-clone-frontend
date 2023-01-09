// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlHr0mjr38XUQ1b67VKnHG_v2hTR111XY",
  authDomain: "stackoverflowclone-d5fcb.firebaseapp.com",
  projectId: "stackoverflowclone-d5fcb",
  storageBucket: "stackoverflowclone-d5fcb.appspot.com",
  messagingSenderId: "231853152262",
  appId: "1:231853152262:web:d3c763f649030054e28b87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const provider = new GoogleAuthProvider();