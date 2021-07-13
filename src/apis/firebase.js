import firebase from "firebase/app";
import "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBVO0M0x_jNQYeI98Jwd8ifuh_8o0a8p-w",
  authDomain: "dimbula-dev.firebaseapp.com",
  projectId: "dimbula-dev",
  storageBucket: "dimbula-dev.appspot.com",
  messagingSenderId: "912020945305",
  appId: "1:912020945305:web:14aa232242c9cd182d3b08"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebase;
