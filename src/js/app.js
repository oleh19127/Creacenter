/*
USEFUL LINKS

CDN.JS
https://cdnjs.com/

SLIDERS
SWIPER(VANILLA JS) https://swiperjs.com/get-started
OWL CAROUSEL 2 SLIDER(JQUERY) https://owlcarousel2.github.io/OwlCarousel2/
FOTORAMA SLIDER(JQUERY) https://fotorama.io/#5264c896-cf01-4ad9-9216-114c20a388cc

GALLERY
LIGHT GALLERY(VANILLA JS) https://www.lightgalleryjs.com/
FANCY BOX(JQUERY) https://fancyapps.com/fancybox/3/

SCROLL ANIMATION
AOS(VANILLA JS) https://michalsnik.github.io/aos/

GRID SYSTEM
EG.JS(VANILLA JS) https://naver.github.io/egjs-infinitegrid/

POPUP
TINGLE(VANILLA JS) https://tingle.robinparisi.com/
POPUP(JQUERY) https://jquerymodal.com/

LAZY LOAD
JQUERY LAZY http://jquery.eisbehr.de/lazy/
LOZAD(VANILLA JS) https://github.com/ApoorvSaxena/lozad.js
LAYZR(VANILLA JS) https://github.com/callmecavs/layzr.js

*/

// VARIABLES
// const menuLinksData = document.querySelectorAll(".menu__link[data-goto]");
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
// const menuLinks = document.querySelectorAll(".menu__link");
const menuArrows = document.querySelectorAll(".menu__arrow");
const load = document.querySelector(".loading");
const sublists = document.querySelectorAll(".menu__sublist");

window.onload = function () {
  load.classList.add("none");
};

document.addEventListener("DOMContentLoaded", function () {
  function ibg() {
    $.each($(".ibg"), function (index, val) {
      if ($(this).find("img").length > 0) {
        $(this).css(
          "background-image",
          'url("' + $(this).find("img").attr("src") + '")'
        );
      }
    });
  }

  ibg();

  $(".menu__arrow").click(function () {
    $(this).toggleClass("_active");
    $(this).closest("li").find(".menu__sublist").slideToggle("slow");
    $(this).closest("li").find(".menu__link").toggleClass("orange");
  });

  $(".search-input input").click(function () {
    $(".search-input img").addClass("none");
  });

  // SCROLL
  // if (menuLinksData) {
  //   menuLinksData.forEach((menuLink) => {
  //     menuLink.addEventListener("click", onMenuLinkClick);
  //   });
  //   function onMenuLinkClick(e) {
  //     const menuLink = e.target;
  //     if (
  //       menuLink.dataset.goto &&
  //       document.querySelector(menuLink.dataset.goto)
  //     ) {
  //       const gotoBlock = document.querySelector(menuLink.dataset.goto);
  //       const gotoBlockValue =
  //         gotoBlock.getBoundingClientRect().top +
  //         pageYOffset -
  //         document.querySelector("header").offsetHeight;
  //       window.scrollTo({
  //         top: gotoBlockValue,
  //         behavior: "smooth",
  //       });
  //       e.preventDefault();
  //     }
  //   }
  // }

  // BURGER
  if (iconMenu) {
    iconMenu.onclick = () => {
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
      document.body.classList.toggle("_lock");
    };
  }

  // CLOSE MENU WHEN CLICK ON LINK
  // for (const link of menuLinks) {
  //   link.onclick = () => {
  //     document.body.classList.remove("_lock");
  //     iconMenu.classList.remove("_active");
  //     menuBody.classList.remove("_active");
  //   };
  // }
  // ACTION LISTEN
  function documentActions(e) {
    const targetElement = e.target;
    if (
      !targetElement.closest(".menu__arrow") &&
      document.querySelector(".menu__arrow._active") &&
      !targetElement.closest(".menu__sublist") &&
      document.querySelector(".menu__sublist.open")
    ) {
      for (const arrow of arrows) {
        arrow.classList.remove("_active");
      }
      for (const sublist of sublists) {
        sublist.classList.remove("open");
      }
    }
    // console.log(targetElement)
  }
  document.addEventListener("click", documentActions);
});
