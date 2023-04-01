const hamburger = document.querySelector(".hamburger");
const dropMenu = document.querySelector(".drop-menu");
const links = document.getElementsByClassName("drop-menu__link");
const contact = document.querySelector(".drop-menu__contact");

///HAMBURGER LOGIC
hamburger.addEventListener("click", () => {
  document.documentElement.classList.add("grid-reveal");
  dropMenu.style.display = "grid";
});

///IF I CLICK IF HAMBURGER BEEN CLICKED SOMEWHERE ELSE

document.addEventListener("click", (event) => {
  if (!dropMenu.contains(event.target) && event.target !== hamburger) {
    document.documentElement.classList.remove("grid-reveal");
    dropMenu.style.display = "none";
  }
});

///TEMPORARY CODE THAT WILL HIDE MENU IF LINK IS CLICKED

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    dropMenu.classList.remove("grid-reveal");
    dropMenu.style.display = "none";
  });
}
contact.addEventListener("click", function () {
  dropMenu.classList.remove("grid-reveal");
  dropMenu.style.display = "none";
});
