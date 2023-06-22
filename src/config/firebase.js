// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5XkFNfEG5uEcopaNWe50P8wrut-RwR1w",
  authDomain: "felix-movies-2.firebaseapp.com",
  projectId: "felix-movies-2",
  storageBucket: "felix-movies-2.appspot.com",
  messagingSenderId: "1071161700694",
  appId: "1:1071161700694:web:2f372a088b23505c3866f7",
  measurementId: "G-RXTWPG4VF5"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
