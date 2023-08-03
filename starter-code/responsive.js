const toggler = document.getElementById("toggler");
const container = document.querySelector("body");

toggler.addEventListener("change", () => {
  if (toggler.checked) {
    container.classList.add("no-scroll");
  } else {
    container.classList.remove("no-scroll");
  }
});
