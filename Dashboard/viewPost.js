import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";
import { firebaseConfig } from "../env.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const urlParams = new URLSearchParams(window.location.search);
      const postID = urlParams.get('postID');
      console.log('Post ID:', postID);

onValue(ref(database, `Post/${postID}`), (e) => {
  const posts = e.val();
  console.log('Post:', posts);
      document.getElementById("postImage").src = posts.imgUrl;
      document.getElementById("postTitle").innerText = posts.title;
    });