import firebase from "firebase/app";
import "firebase/firestore";

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
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTImestamp;

export { projectFirestore, timestamp };
