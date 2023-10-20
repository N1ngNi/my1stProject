let pageText = document.getElementById("pagenametext");
let logoImg = document.getElementById("logoimage");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  pageText.style.right = value * 1.05 + "px";
  logoImg.style.bottom = value * 1.05 + "px";
});
