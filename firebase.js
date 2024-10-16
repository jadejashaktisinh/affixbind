// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup,FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

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
const faceprovider = new FacebookAuthProvider();


const googlesign = document.getElementById("signup-google-btn");
const googleLogin = document.getElementById("login-google-btn");

const facebooksign=document.getElementById("facebook-sign");
const facebooklogin=document.getElementById("facebook-login");

googlesign.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            window.location.href = "Dashboard/index.html";
        }).catch((error) => {
            const errorMessage = error.message;
        });
})
googleLogin.addEventListener("click", function () {
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



//   window.fbAsyncInit = function() {
//     FB.init({
//       appId      : '1231986291462743',
//       cookie     : true,
//       xfbml      : true,
//       version    : 'v21.0'
//     });
      
//     FB.AppEvents.logPageView();   
      
//   };

//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "https://connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));

   
// FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
// });


// {
//     status: 'connected',
//     authResponse: {
//         accessToken: '...',
//         expiresIn:'...',
//         signedRequest:'...',
//         userID:'...'
//     }
// }


// function checkLoginState() {
//     FB.getLoginStatus(function(response) {
//       statusChangeCallback(response);
//     });
//   }