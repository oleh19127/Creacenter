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

$(document).ready(function () {
  // MENU
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    $(".language li").click(function () {
      $(".menu__list li .menu__sublist").slideUp("slow");
      $(".menu__list li .menu__link").removeClass("orange");
      $(".menu__list li .menu__arrow").removeClass("_active");
    });

    $(".menu__list li").click(function () {
      $(".language li .menu__sublist").slideUp("slow");
      $(".language li .menu__link").removeClass("orange");
      $(".language li .menu__arrow").removeClass("_active");
    });
    $(".language li, .menu__list li").click(function () {
      $(this).find(".menu__arrow").toggleClass("_active");
      $(this).find(".menu__sublist").slideToggle("slow");
      $(this).find(".menu__link").toggleClass("orange");
    });
  } else {
    $(".language li, .menu__list li").hover(
      function () {
        $(this).find(".menu__arrow").addClass("_active");
        $(this).find(".menu__sublist").stop().slideDown("slow");
      },
      function () {
        $(this).find(".menu__arrow").removeClass("_active");
        $(this).find(".menu__sublist").stop().slideUp("slow");
      }
    );
  }

  // SHOW GO UP BUTTON IF SCROLL AFTER INTRO
  $("body").scroll(function () {
    if ($("body").scrollTop() > $(".intro").height()) {
      $(".go-up").removeClass("none");
    } else {
      $(".go-up").addClass("none");
    }
  });

  // SCROLL TOP
  $(".go-up").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  // PRELOAD
  // $(".loading").addClass("none");
  $("body").removeClass("_lock");

  // DYNAMIC ADAPTIVE
  useDynamicAdapt();

  // BODY LISTENER
  $(document).on("click", "body", function (e) {
    if (
      !$(e.target).is(".menu__list") &&
      !$(e.target).is(".menu__link") &&
      !$(e.target).is(".menu__arrow._active") &&
      !$(e.target).is(".menu__arrow") &&
      !$(e.target).is(".sublist-li") &&
      !$(e.target).is("li")
    ) {
      $(".menu__sublist").slideUp("slow");
      $(".menu__link").removeClass("orange");
      $(".menu__arrow").removeClass("_active");
    }
  });

  // SEARCH INPUT
  $(".search-input input").click(function () {
    $(".search-input img").addClass("none");
  });

  // BURGER
  $(".menu__icon").click(function () {
    $(".menu__icon").toggleClass("_active");
    $(".menu__body").toggleClass("_active");
    $("body").toggleClass("_lock");
  });

  // INDEX SLIDER
  if ($(".intro-swiper")) {
    let indexSwiper = new Swiper(".intro-swiper", {
      // loop: true,
      lazy: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
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
  }

  //OUR TEAM SLIDER
  if ($(".our-team-swiper")) {
    let OurTeamSwiper = new Swiper(".our-team-swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      loop: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
    });
  }
});

/**
 * @typedef {Object} dNode
 * @property {HTMLElement} parent
 * @property {HTMLElement} element
 * @property {HTMLElement} to
 * @property {string} breakpoint
 * @property {string} order
 * @property {number} index
 */

/**
 * @typedef {Object} dMediaQuery
 * @property {string} query
 * @property {number} breakpoint
 */

/**
 * @param {'min' | 'max'} type
 */
function useDynamicAdapt(type = "max") {
  const className = "_dynamic_adapt_";
  const attrName = "data-da";

  /** @type {dNode[]} */
  const dNodes = getDNodes();

  /** @type {dMediaQuery[]} */
  const dMediaQueries = getDMediaQueries(dNodes);

  dMediaQueries.forEach((dMediaQuery) => {
    const matchMedia = window.matchMedia(dMediaQuery.query);
    // массив объектов с подходящим брейкпоинтом
    const filteredDNodes = dNodes.filter(
      ({ breakpoint }) => breakpoint === dMediaQuery.breakpoint
    );
    const mediaHandler = getMediaHandler(matchMedia, filteredDNodes);
    matchMedia.addEventListener("change", mediaHandler);

    mediaHandler();
  });

  function getDNodes() {
    const result = [];
    const elements = [...document.querySelectorAll(`[${attrName}]`)];

    elements.forEach((element) => {
      const attr = element.getAttribute(attrName);
      const [toSelector, breakpoint, order] = attr
        .split(",")
        .map((val) => val.trim());

      const to = document.querySelector(toSelector);

      if (to) {
        result.push({
          parent: element.parentElement,
          element,
          to,
          breakpoint: breakpoint ?? "767",
          order:
            order !== undefined
              ? isNumber(order)
                ? Number(order)
                : order
              : "last",
          index: -1,
        });
      }
    });

    return sortDNodes(result);
  }

  /**
   * @param {dNode} items
   * @returns {dMediaQuery[]}
   */
  function getDMediaQueries(items) {
    const uniqItems = [
      ...new Set(
        items.map(
          ({ breakpoint }) => `(${type}-width: ${breakpoint}px),${breakpoint}`
        )
      ),
    ];

    return uniqItems.map((item) => {
      const [query, breakpoint] = item.split(",");

      return { query, breakpoint };
    });
  }

  /**
   * @param {MediaQueryList} matchMedia
   * @param {dNodes} items
   */
  function getMediaHandler(matchMedia, items) {
    return function mediaHandler() {
      if (matchMedia.matches) {
        items.forEach((item) => {
          moveTo(item);
        });

        items.reverse();
      } else {
        items.forEach((item) => {
          if (item.element.classList.contains(className)) {
            moveBack(item);
          }
        });

        items.reverse();
      }
    };
  }

  /**
   * @param {dNode} dNode
   */
  function moveTo(dNode) {
    const { to, element, order } = dNode;
    dNode.index = getIndexInParent(dNode.element, dNode.element.parentElement);
    element.classList.add(className);

    if (order === "last" || order >= to.children.length) {
      to.append(element);

      return;
    }

    if (order === "first") {
      to.prepend(element);

      return;
    }

    to.children[order].before(element);
  }

  /**
   * @param {dNode} dNode
   */
  function moveBack(dNode) {
    const { parent, element, index } = dNode;
    element.classList.remove(className);

    if (index >= 0 && parent.children[index]) {
      parent.children[index].before(element);
    } else {
      parent.append(element);
    }
  }

  /**
   * @param {HTMLElement} element
   * @param {HTMLElement} parent
   */
  function getIndexInParent(element, parent) {
    return [...parent.children].indexOf(element);
  }

  /**
   * Функция сортировки массива по breakpoint и order
   * по возрастанию для type = min
   * по убыванию для type = max
   *
   * @param {dNode[]} items
   */
  function sortDNodes(items) {
    const isMin = type === "min" ? 1 : 0;

    return [...items].sort((a, b) => {
      if (a.breakpoint === b.breakpoint) {
        if (a.order === b.order) {
          return 0;
        }

        if (a.order === "first" || b.order === "last") {
          return -1 * isMin;
        }

        if (a.order === "last" || b.order === "first") {
          return 1 * isMin;
        }

        return 0;
      }

      return (a.breakpoint - b.breakpoint) * isMin;
    });
  }

  function isNumber(value) {
    return !isNaN(value);
  }
}
