import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, set} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js'
import { firebaseConfig } from "../env.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let img = document.querySelectorAll('.profile-img');
let imgSrc;
let inputfile = document.getElementById('inputfile');
let reader = new FileReader();if (localStorage.getItem('imgSrc')) {
    for (let i = 0; i < img.length; i++) {
        img[i].src = localStorage.getItem('imgSrc');
    }
} else {
    console.warn('No image source found in localStorage.');
}

reader.onload = (e) => {
    imgSrc = e.target.result;
    if (!localStorage.getItem('userToken')) {
        console.error('User token is not set in localStorage.');
        return;
    }
    localStorage.setItem('imgSrc', imgSrc);
    set(ref(database, `Users/${localStorage.getItem('userToken')}/profilepic`), imgSrc)
        .catch((error) => console.error("Error setting profile picture:", error));
    for (let i = 0; i < img.length; i++) {
        img[i].style.width = '100%';
        img[i].style.height = '100%';
        img[i].src = imgSrc;
    }
};
