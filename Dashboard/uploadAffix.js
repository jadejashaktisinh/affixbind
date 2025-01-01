import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";
import { firebaseConfig } from "../env.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let uploadImgInput = document.getElementById("affixImg");
let publishBtn = document.getElementById("publishBtn");
let affixTitle = document.getElementById("affixTitle");
let affixDesc = document.getElementById("affixDesc");

publishBtn.onclick = () => {
  if (!uploadImgInput.files[0]) {
    alert("Please upload an image.");
    return;
  }

  let reader = new FileReader();
  reader.readAsDataURL(uploadImgInput.files[0]);

  reader.onload = async (e) => {
    const uploadedImgUrl = e.target.result;
    const affix = {
      title: affixTitle.value,
      description: affixDesc.value,
      tags: ["animal", "nature"],
      imgUrl: uploadedImgUrl,
    };

    const postID = randomNumber();
    const userToken = localStorage.getItem("userToken");

    try {
      await set(ref(database, `Post/${postID}`), affix);
      if (userToken) {
        await set(
          ref(database, `Users/${userToken}/posts/${postID}`),
          true
        );
      }
      alert("Post published successfully!");
    } catch (error) {
      console.error("Error publishing post:", error);
      alert("Failed to publish post.");
    }
  };
};

function randomNumber() {
  return Math.ceil(Math.random() * (999999999999999 - 100000000000000) + 100000000000000);
}
