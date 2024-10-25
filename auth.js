import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js'
import { getDatabase,ref,set,get  } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js'
import { firebaseConfig } from "./env.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app)


let signupBtn = document.getElementById('signup-btn');
let loginBtn = document.getElementById('login-btn');


signupBtn.addEventListener('click',createUser)
loginBtn.addEventListener('click',loginUser)
function createUser(){

    let email = document.getElementById('exampleInputEmail1').value;
    let password = document.getElementById('exampleInputPassword1').value;

    

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    console.log(userCredential);
    
    const user = userCredential.user;
    localStorage.setItem('userToken',user.uid);
    set(ref(database, 'Users/'+user.uid+'/email'),user.email,).then(()=>{

      window.location.href = "Dashboard/index.html";
    })


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

      
    
    

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
        let user = userCredential.user;
        localStorage.setItem('userToken',user.uid);

    window.location.href="Dashboard/index.html";

    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}