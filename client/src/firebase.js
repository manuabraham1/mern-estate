// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-32caf.firebaseapp.com",
  projectId: "mern-estate-32caf",
  storageBucket: "mern-estate-32caf.appspot.com",
  messagingSenderId: "842467610690",
  appId: "1:842467610690:web:250479cb995b7d557e9ddb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);