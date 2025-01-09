// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB5wpWDw1oDVzc7ojEuMMRN7ASr5yTILM",
  authDomain: "hot-and-cold-f0f4f.firebaseapp.com",
  databaseURL: "https://hot-and-cold-f0f4f-default-rtdb.firebaseio.com",
  projectId: "hot-and-cold-f0f4f",
  storageBucket: "hot-and-cold-f0f4f.firebasestorage.app",
  messagingSenderId: "394970785304",
  appId: "1:394970785304:web:a1a3474abc214f6ce2456d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
console.log(auth)


/* === UI === */
console.log(app.options.projectId)

/* == UI - Elements == */


/* == UI - Event Listeners == */


/* === Main Code === */


/* === Functions === */


/* = Functions - Firebase - Authentication = */


/* == Functions - UI Functions == */
