// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwlmcqECrN2ci8BxM_Qtexscie6zoeynM",
  authDomain: "ejercicio2-app.firebaseapp.com",
  projectId: "ejercicio2-app",
  storageBucket: "ejercicio2-app.firebasestorage.app",
  messagingSenderId: "940258142714",
  appId: "1:940258142714:web:68daabc08fbd5f8e2f5c43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getDatabase(app);
export const auth = getAuth();