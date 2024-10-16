let loginpg = document.getElementById("footer-login");
let signuppg = document.getElementById("footer-form-img");
function loginbtntop() {
  loginpg.style.display = "block";
  loginpg.style.textAlign = "center";
  signuppg.style.display = "none";
}
function signuptop() {
  signuppg.style.display = "block";
  loginpg.style.display = "none";
}

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://firebase.google.com/docs/web/setup#available-libraries/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCtaorjIFiGnJc5LbETLB1wi2QLgKVsRgU",
  authDomain: "affibind.firebaseapp.com",
  databaseURL: "https://affibind-default-rtdb.firebaseio.com",
  projectId: "affibind",
  storageBucket: "affibind.appspot.com",
  messagingSenderId: "1029163569904",
  appId: "1:1029163569904:web:d6a17cbb2f1481f9132835",
  measurementId: "G-N0DZF4CFQX"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-btn");
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log("user", user);
      window.location.href = "./ChatMat.html";


    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

// email and password
let sinbtn = document.getElementById("signupcon");
sinbtn.addEventListener("click", function (e) {
  e.preventDefault();
  let obj = {
    "email": document.getElementById("signupemail").value
  }

  myarray.push(obj);
  console.log(myarray);
  set(ref(db, 'chats/'), myarray);
}
)
