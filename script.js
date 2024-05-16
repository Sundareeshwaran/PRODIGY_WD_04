//Menu

const menuBtn = document.querySelector("#menuBtn"),
  mobileView = document.querySelector(".mobileView");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("ri-menu-line"),
    mobileView.classList.toggle("hidden");
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("ri-close-line");
});

// Autotype

let typed = new Typed(".auto-type", {
  strings: ["Programmer", "Coder", "Designer", "Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
