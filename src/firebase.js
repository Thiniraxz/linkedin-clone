import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC2-mQEKD-1YW2jHsILie4Itk8DLYb2qVY",
  authDomain: "linkedin-clone-d8cd7.firebaseapp.com",
  projectId: "linkedin-clone-d8cd7",
  storageBucket: "linkedin-clone-d8cd7.appspot.com",
  messagingSenderId: "133062051882",
  appId: "1:133062051882:web:591a7f0c6351619572db53",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
