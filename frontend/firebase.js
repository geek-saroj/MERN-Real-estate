// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-9fe7f.firebaseapp.com",
  projectId: "mern-state-9fe7f",
  storageBucket: "mern-state-9fe7f.appspot.com",
  messagingSenderId: "1090143666346",
  appId: "1:1090143666346:web:ca94b4dfdb3737605110d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);