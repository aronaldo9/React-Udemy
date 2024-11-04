// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPKOgGbfuaP-ApMimE22CYe3EuE_qdTDg",
  authDomain: "react-cursoudemy.firebaseapp.com",
  projectId: "react-cursoudemy",
  storageBucket: "react-cursoudemy.appspot.com",
  messagingSenderId: "217120137546",
  appId: "1:217120137546:web:ad7e27c5052ab3f5a6e1b3",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
