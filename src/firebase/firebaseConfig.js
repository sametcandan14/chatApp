// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeYtAqdQJWkYVEUm3Mbc4YrZXoyX2lIe4",
  authDomain: "hi-chat-41a88.firebaseapp.com",
  projectId: "hi-chat-41a88",
  storageBucket: "hi-chat-41a88.appspot.com",
  messagingSenderId: "1082148419337",
  appId: "1:1082148419337:web:3a92645b2f21d16078c5d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
