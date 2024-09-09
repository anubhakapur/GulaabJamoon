// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIT6Pm-E25cB26OtCtRw-tKQGPThtPZJE",
  authDomain: "gulaab-jamoon-26c70.firebaseapp.com",
  projectId: "gulaab-jamoon-26c70",
  storageBucket: "gulaab-jamoon-26c70.appspot.com",
  messagingSenderId: "945370817733",
  appId: "1:945370817733:web:b5d8da3f479946cdf2fcac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;


