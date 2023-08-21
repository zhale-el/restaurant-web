// < ====== Show menu ====== >
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  //validate that variables exist

  if (toggle && nav) {
    // we add the show-menu class the div tag the nav__mene class
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// < ====== Remove menu mobile ======= >

// when we click on each nav__link, we remove the show-menu class

// < ====== Scroll sections active link ====== >

// < ====== Change background header ====== >

// when the scoll is greater than 200 viewport height, add the scoll-header class
