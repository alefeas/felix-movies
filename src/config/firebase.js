// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNUeijGd3qP54tVUMyXyNmzBmPhww9ZQ8",
  authDomain: "felix-73c38.firebaseapp.com",
  projectId: "felix-73c38",
  storageBucket: "felix-73c38.appspot.com",
  messagingSenderId: "370014973499",
  appId: "1:370014973499:web:8f260b2025b08de5bf761e",
  measurementId: "G-R1QJE5MV9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);