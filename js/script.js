// < ====== Show menu ====== >
const showMenu = () => {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav-menu");

  //validate that variables exist

  if (toggle && nav) {
    // we add the show-menu class the div tag the nav__mene class
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu();

// < ====== Remove menu mobile ======= >

// when we click on each nav__link, we remove the show-menu class

// < ====== Scroll sections active link ====== >

// < ====== Change background header ====== >

// when the scoll is greater than 200 viewport height, add the scoll-header class
