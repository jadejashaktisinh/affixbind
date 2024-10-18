// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup,FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { firebaseConfig } from "./env.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const faceprovider = new FacebookAuthProvider();

const googlesign = document.getElementById("signup-google-btn");
const googleLogin = document.getElementById("login-google-btn");

const facebooksign=document.getElementById("facebook-sign");
const facebooklogin=document.getElementById("facebook-login");

googlesign.addEventListener("click", function (event) {
  event.preventDefault();

    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            window.location.href = "Dashboard/index.html";
        }).catch((error) => {
            const errorMessage = error.message;
        });
})
googleLogin.addEventListener("click", function (event) {
  event.preventDefault();

    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            window.location.href = "Dashboard/index.html";
        }).catch((error) => {
            const errorMessage = error.message;
        });
})

facebooksign.addEventListener("click", function (event) {
    event.preventDefault();
    signInWithPopup(auth, faceprovider)
  .then((result) => {
    const user = result.user;
    console.log(user);
    window.location.href="Dashboard/index.html";
  })
  .catch((error) => {
    const errorMessage = error.message;
  });

})
facebooklogin.addEventListener("click", function (event) {
    event.preventDefault();
    signInWithPopup(auth, faceprovider)
  .then((result) => {
    const user = result.user;
    console.log(user);
    window.location.href="Dashboard/index.html";
  })
  .catch((error) => {
    const errorMessage = error.message;
  });
})