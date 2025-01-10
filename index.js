// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
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



/* === UI === */

/* == UI - Elements == */

const viewLoggedOut = document.getElementById("logged-out-view")
const viewLoggedIn = document.getElementById("logged-in-view")

const signInWithGoogleButtonEl = document.getElementById("sign-in-with-google-btn")

const userProfilePictureEl = document.getElementById("user-profile-picture")
const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")

// for displaying the name
const userGreetingEl = document.getElementById("user-greeting")
const signInButtonEl = document.getElementById("sign-in-btn")
const signOutButtonEl = document.getElementById("sign-out-btn")
const createAccountButtonEl = document.getElementById("create-account-btn")

/* == UI - Event Listeners == */

signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle)

signInButtonEl.addEventListener("click", authSignInWithEmail)
signOutButtonEl.addEventListener("click", authSignOut)
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail)

/* === Main Code === */

const googleAuth = new GoogleAuthProvider()
var currUser = null
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
onAuthStateChanged(auth, (user) => {
if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    user.pfp = "assets/images/defaultPic.jpg"
    user.name = "Well"
    showProfilePicture(userProfilePictureEl, user)
    showUserGreeting(userGreetingEl, user)
    showLoggedInView()
    // ...
} else {
    // User is signed out
    // ...
    showLoggedOutView()
}
});
console.log(auth)

/* === Functions === */

/* = Functions - Firebase - Authentication = */

function authSignInWithGoogle() {
    console.log("Sign in with Google")

    signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
}

function authSignInWithEmail() {
    var email = emailInputEl.value
    var password = passwordInputEl.value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        showLoggedInView()
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
    });
}

function authCreateAccountWithEmail() {
    console.log("Sign up with email and password")

    var email = emailInputEl.value
    var password = passwordInputEl.value

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up
    showLoggedInView()
  })
  .catch((error) => {
    console.error(error.message)
  });

}

function authSignOut() {
    showLoggedOutView()
    signOut(auth)
    .then(()=>{
        console.log("Logout successful")
    }).catch(()=>{
        console.log("Logout unsuccessful")
    })
}

/* == Functions - UI Functions == */

function showLoggedOutView() {
    hideView(viewLoggedIn)
    showView(viewLoggedOut)
 }
 
 
 function showLoggedInView() {
    hideView(viewLoggedOut)
    showView(viewLoggedIn)
 }
 
 
 function showView(view) {
    view.style.display = "flex"
 }
 
 
 function hideView(view) {
    view.style.display = "none"
 }
 
 function showProfilePicture(imgEl, user) {
    imgEl.src = user.pfp
 }

 function showUserGreeting(element, user) {
    /*  Challenge:
        Use the documentation to make this function work.
       
        This function has two parameters: element and user
       
        We will call this function inside of onAuthStateChanged when the user is logged in.
       
        The function will be called with the following arguments:
        showUserGreeting(userGreetingEl, user)
       
        If the user has a display name, then set the textContent of element to:
        "Hi ___ ( your first name)"
        Where __ is replaced with the actual first name of the user
       
        Otherwise, set the textContent of element to:
        "Hey friend, how are you?"
    */
   element.textContent = `Hi ${user.name}!`
 }
 

//credit: coursera