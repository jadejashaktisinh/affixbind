// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getDatabase,ref,set,get  } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js'
import { firebaseConfig } from "./env.js";
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const faceprovider = new FacebookAuthProvider();

const googlesign = document.getElementById("signup-google-btn");
const googleLogin = document.getElementById("login-google-btn");

const facebooksign = document.getElementById("facebook-sign");
const facebooklogin = document.getElementById("facebook-login");

googlesign.addEventListener("click", function (event) {
  event.preventDefault();

  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      
      set(ref(database, 'Users/'+user.uid+"/email"),user.email).then(()=>{

        window.location.href = "Dashboard/index.html";
      })
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
      console.log(user);
      
      set(ref(database, 'Users/'+user.uid+"/email"),user.email).then(()=>{

        window.location.href = "Dashboard/index.html";
      })

    }).catch((error) => {
      const errorMessage = error.message;
    });
})

facebooksign.addEventListener("click", function (event) {
  event.preventDefault();
  signInWithPopup(auth, faceprovider)
    .then((result) => {
      const user = result.user;
      set(ref(database, 'Users/'+user.uid+"/email"),user.email).then(()=>{

        window.location.href = "Dashboard/index.html";
      })
      console.log(user);
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
      set(ref(database, 'Users/'+user.uid+"/email"),user.email).then(()=>{

        window.location.href = "Dashboard/index.html";
      })
    })
    .catch((error) => {
      const errorMessage = error.message;
    });
})