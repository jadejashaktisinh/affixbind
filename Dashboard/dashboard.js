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
          <div class="box">
            <a onclick="savePostData(${postID}">
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
function savePostData(postID) {
  const post = posts[postID]; // Ensure `posts` is accessible
  console.log("Post ID:", postID); // Log the post ID
  console.log("Posts Object:", posts); // Log the posts object
  
  if (post) {
    localStorage.setItem("selectedPost", JSON.stringify(post));
    console.log("Post data saved to localStorage:", post); // Log the saved data
  } else {
    console.error("Post not found for ID:", postID); // Log an error if post is undefined
  }
}

