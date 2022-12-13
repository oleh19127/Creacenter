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

  $(document).on("click", "body", function (e) {
    if (
      !$(e.target).is(".menu__list") &&
      !$(e.target).is(".menu__link") &&
      !$(e.target).is(".menu__arrow._active") &&
      !$(e.target).is(".menu__arrow") &&
      !$(e.target).is(".sublist-li") &&
      !$(e.target).is("li")
    ) {
      // console.log(e.target);
      $(".menu__sublist").slideUp("slow");
      $(".menu__link").removeClass("orange");
      $(".menu__arrow").removeClass("_active");
    }
  });

  $(".menu__link").click(function () {
    $(this).closest("li").find(".menu__arrow").toggleClass("_active");
    $(this).closest("li").find(".menu__sublist").slideToggle("slow");
    $(this).closest("li").find(".menu__link").toggleClass("orange");
  });

  $(".search-input input").click(function () {
    $(".search-input img").addClass("none");
  });

  // BURGER
  if (iconMenu) {
    iconMenu.onclick = () => {
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
      document.body.classList.toggle("_lock");
    };
  }

  // intro slider
  let swiper = new Swiper(".intro-swiper", {
    // loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: true,
    // },
    keyboard: {
      enabled: true,
    },
    // mousewheel: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
});
