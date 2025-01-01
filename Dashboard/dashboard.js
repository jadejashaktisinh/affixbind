import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";
import { firebaseConfig } from "../env.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let content = document.getElementById("content");

onValue(ref(database, "Post/"), (snapshot) => {
  const posts = snapshot.val();
  if (!posts) {
    content.innerHTML = "<p>No posts available.</p>";
    return;
  }

  content.innerHTML = "";
  Object.keys(posts).forEach((postID) => {
    const post = posts[postID];
    const postHtml = `
        <div class="con">
          <div class="box"><img src="${post.imgUrl}" class="box" alt="Post Image" /></div>
        </div>
    `;
    content.innerHTML += postHtml;
  });
}, (error) => {
  console.error("Error fetching posts:", error);
});
