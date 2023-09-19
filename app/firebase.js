// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDBgbCpU2X560rm56un9jWWjTaA5svyhhc",
  authDomain: "bard-clone.firebaseapp.com",
  projectId: "bard-clone",
  storageBucket: "bard-clone.appspot.com",
  messagingSenderId: "753616528695",
  appId: "1:753616528695:web:63dd176ab5daa1de68a6b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)