wellcome_h3 = document.getElementById("wellcome").children[0];
burger = document.getElementById("header-burger");
dropdown_links = document.getElementById("dropdown-links");

window.addEventListener(
  "resize",
  function (event) {
    adaptiv();
  }
  // true
);

function adaptiv() {
  if (window.screen.width < 1024) {
  } else {
    // burger.classList.remove("burger-opened");
    // dropdown_links.classList.add("burger-closed");
  }
}
