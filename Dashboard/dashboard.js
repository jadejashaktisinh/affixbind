import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, set, get } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js';
import { firebaseConfig } from "../env.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


let postID=[];
onValue(ref(db, 'Post/'), function (call) {
    postID = call.val();
    // if (myarrayjs == null) {
    //     myarray = [];
    // }
    // else {
    //     myarray = myarrayjs;
    // }
     content.innerHTML = " ";

    for (let i = 0; i < postID.length; i++) {
        let p = document.createElement('p');
        p.innerHTML ='<div id="cantiner">'
                    +'<div>' +`<img src="${postID[i].uploadedImgUrl}" id="dp">`+'</div>'
                      +'<div id="text">'
                        +'<div id="name"> ~'+ postID[i].name+'</div>' 
                        +'<div id="chat">  '+ postID[i].input+'</div>' 
                        +'</div>'
                        +'</div>';
        content.appendChild(p);
    }
});