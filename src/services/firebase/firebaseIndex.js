import firebase, { firestore } from "firebase";
import "firebase/auth";
import "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBAQlPLmyC2256eEsQkDQ-Rrml0SJoLPF0",
  authDomain: "proximate-44fb6.firebaseapp.com",
  databaseURL: "https://proximate-44fb6.firebaseio.com",
  projectId: "proximate-44fb6",
  storageBucket: "proximate-44fb6.appspot.com",
  messagingSenderId: "266487175983",
  appId: "1:266487175983:web:a4ef4d958ef9e6e6d85fda",
  measurementId: "G-H606PQW5RN",
};

// firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.auth();

export default {
  firebaseConfig,
};
