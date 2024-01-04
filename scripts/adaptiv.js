wellcome_h3 = document.getElementById("wellcome").children[0];

// adaptiv();

window.addEventListener(
  "resize",
  function (event) {
    // adaptiv();
  },
  true
);

function adaptiv() {
  if (window.screen.width < 1270) {
    wellcome_h3.classList.remove("text-indent");
  } else {
    wellcome_h3.classList.add("text-indent");
  }
}
