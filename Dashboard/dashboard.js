import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";
import { firebaseConfig } from "../env.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let content = document.getElementById("content");

// Fetch posts from the database
onValue(ref(database, "Post/"), (snapshot) => {
  // Hide the loader after data is fetched
  document.getElementById('container-loader').style.display = 'none';
  
  const posts = snapshot.val();
  // Clear previous content
  content.innerHTML = "";

  // Generate HTML for each post
  Object.keys(posts).forEach((postID) => {
    const post = posts[postID];
    const postHtml = `
      <div class="con">
        <div class="box">
          <a href="#" onclick="savePostData('${postID}'); return false;">
  <img src="${post.imgUrl}" class="box" alt="${post.title}" />
</a>

        </div>
      </div>
    `;
    content.innerHTML += postHtml;
  });
  }, (error) => {
    console.error("Error fetching posts:", error);
});

export function savePostData(postID) {
  window.location.href = `./viewPost.html?postID=${postID}`;
}

// Attach to the window object
window.savePostData = savePostData;


Object.keys(posts).forEach((postID) => {
  const post = posts[postID];
  const postHtml = `
    <div class="con">
      <div class="box">
        <a onclick='savePostData("${postID}")'>
        <img src="${post.imgUrl}" class="box" alt="${post.title}" />
        </a>
      </div>
    </div>
  `;
  content.innerHTML += postHtml;
});
