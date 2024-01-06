burger = document.getElementById("header-burger");
dropdown_links = document.getElementById("dropdown-links");

function dropHeaderMenu() {
  if (burger.classList.contains("burger-opened")) {
    burger.classList.remove("burger-opened");
    dropdown_links.classList.add("burger-closed");
  } else {
    burger.classList.add("burger-opened");
    dropdown_links.classList.remove("burger-closed"); // header_links.style.maxHeight = `${header_links.scrollHeight}px`;
  }
}
