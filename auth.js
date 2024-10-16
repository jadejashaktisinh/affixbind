import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js'
import { firebaseConfig } from "./env.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


let signupBtn = document.getElementById('signup-btn');
let loginBtn = document.getElementById('login-btn');


signupBtn.addEventListener('click',createUser)
loginBtn.addEventListener('click',loginUser)
function createUser(){

    let email = document.getElementById('exampleInputEmail1').value;
    let password = document.getElementById('exampleInputPassword1').value;

    console.log(email);
    console.log(password);
    
    

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

}
function loginUser(){
    
    let email = document.getElementById('exampleInputEmail2').value;
    let password = document.getElementById('exampleInputPassword2').value;
    console.log(email);
    console.log(password);
    
    

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}