let loginpg = document.getElementById("footer-login");
let signuppg = document.getElementById("footer-form-img");
function loginbtntop() {
  loginpg.style.display = "block";
  loginpg.style.textAlign = "center";
  signuppg.style.display = "none";
}
function signuptop() {
  signuppg.style.display = "block";
  loginpg.style.display = "none";
}