import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, FieldValue } from "firebase/firestore";

import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhy9NdWvPzUTHgCWr9FEIJqI0Ng7YlTC8",
  authDomain: "live-chat-bf452.firebaseapp.com",
  projectId: "live-chat-bf452",
  storageBucket: "live-chat-bf452.appspot.com",
  messagingSenderId: "532901072804",
  appId: "1:532901072804:web:c8a6b2d854d8a73a03fb31",
};

// init firebase
const app = initializeApp(firebaseConfig);

const projectAuth = getAuth(app);
const projectFirestore = getFirestore(app);
const timestamp = FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword };
