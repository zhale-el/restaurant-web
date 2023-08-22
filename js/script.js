/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// < ====== Remove menu mobile ======= >
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// < ====== Scroll sections active link ====== >
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-menu");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// < ====== Change background header ====== >
function scrollHeader() {
  const nav = document.getElementById("header");
  // when the scoll is greater than 200 viewport height, add the scoll-header class
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scollr-header");
}

window.addEventListener("scroll", scrollHeader);

// < ====== Show scroll top ====== >

function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  //when the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 500) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollTop);

/*==================== DARK LIGHT THEME ====================*/

// Previously selected topic (if user selected)

// We obtain the current theme that the interface has by validating the dark-theme class

// We validate if the user previously chose a topic

// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark

// Activate / deactivate the theme manually with the button

// Add or remove the dark / icon theme

// We save the theme and the current icon that the user chose

/*==================== SCROLL REVEAL ANIMATION ====================*/
