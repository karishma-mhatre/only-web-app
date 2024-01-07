// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from  'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebase)

