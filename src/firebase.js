// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqb-NXvyrfn4BCOqGz6s_o15368V5jXP0",
  authDomain: "scp-react-crud-app-8878b.firebaseapp.com",
  projectId: "scp-react-crud-app-8878b",
  storageBucket: "scp-react-crud-app-8878b.appspot.com",
  messagingSenderId: "798611013542",
  appId: "1:798611013542:web:504f696e3360272a8f9967"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);