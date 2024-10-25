import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, set, get } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js'
import { firebaseConfig } from "../env.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


let uploadImgInput = document.getElementById('affixImg');
let uploadedImgUrl;
let publishBtn = document.getElementById('publishBtn');
let affixTitle = document.getElementById('affixTitle');
let affixDesc = document.getElementById('affixDesc');
let affix = {};
let postID = randomNumber();
let reader = new FileReader();



publishBtn.onclick = () =>{

    reader.readAsDataURL(uploadImgInput.files[0]);
    
    
}
reader.onload = (e) => {
    
    uploadedImgUrl = e.target.result;
    affix = {
         'title':affixTitle.value,
         'Descprition':affixDesc.value,
         'tag':['animal','nature'],
         'imgUrl': uploadedImgUrl,


    }
    
    set(ref(database, 'Post/' + postID ), affix);
    set(ref(database, 'Users/'+ localStorage.getItem('userToken') + '/posts'), postID);


   
}
function randomNumber() {
    
       return Math.ceil( Math.random() * (999999999999999 - 100000000000000) + 100000000000000);
}