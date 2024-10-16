// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

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
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("signup-google-btn");
const google2Login = document.getElementById("login-google-btn");
googleLogin.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            window.location.href = "./ChatMat.html";
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
})
google2Login.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            window.location.href = "./ChatMat.html";
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
})