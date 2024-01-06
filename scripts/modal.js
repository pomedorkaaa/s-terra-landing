let modal = document.getElementById("modal");
let modal_form = document.getElementById("modal-form-state");
let modal_done = document.getElementById("modal-done-state");

function showModal() {
  modal.classList.add("modal-show");
}

function closeModal() {
  modal.classList.remove("modal-show");
  setTimeout(() => {
    if (modal_done.classList.contains("modal-done-state")) {
      modal_done.classList.remove("modal-done-state");
      modal_form.classList.remove("modal-form-done");
    }
  }, 500);
}

let form = document.getElementById("modal-form");
// console.log(form);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  for (let i = 0; i < form.children.length; i++) {
    form.children[i].value = "";
  }
  document.getElementById("modal-privacy-checkbox").checked = false;
  setTimeout(() => {
    console.log("усех");

    modal_form.classList.add("modal-form-done");
    modal_done.classList.add("modal-done-state");
  }, 1000);
});
