// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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
export const fireDB = getDatabase(app);

export default fireDB;
