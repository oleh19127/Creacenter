/*
USEFUL LINKS

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
  // INTRO NEWS SECTION
  if ($(".right-side-news__image-with-title-container")[0]) {
    let newsTittleHeights = [];
    let newsTextHeights = [];

    setTimeout(() => {
      const newsTittle = $(
        ".left-side-news__main-images-with-title-container .right-side-news__image-with-title-container .left-side-news__description h3"
      );

      $.each(newsTittle, function (index, value) {
        newsTittleHeights.push($(this).height());
      });

      const biggestHeightTittle = Math.max(...newsTittleHeights);

      $.each(newsTittle, function (index, value) {
        $(this).height(biggestHeightTittle);
      });

      const newsText = $(
        ".left-side-news__main-images-with-title-container .right-side-news__image-with-title-container .left-side-news__description p"
      );

      $.each(newsText, function (index, value) {
        newsTextHeights.push($(this).height());
      });

      const biggestHeightText = Math.max(...newsTextHeights);

      $.each(newsText, function (index, value) {
        $(this).height(biggestHeightText);
      });
    }, 50);
  }

  // ARTICLES
  if ($(".search-results")) {
    let newsTittleHeights = [];
    let newsTextHeights = [];
    setTimeout(() => {
      const newsTittle = $(
        ".search-results .search-results-block-description__title h3"
      );

      $.each(newsTittle, function (index, value) {
        newsTittleHeights.push($(this).height());
      });

      const biggestHeightTittle = Math.max(...newsTittleHeights);

      $.each(newsTittle, function (index, value) {
        $(this).height(biggestHeightTittle);
      });

      const newsText = $(
        ".search-results .search-results-block-description-info__text"
      );

      $.each(newsText, function (index, value) {
        newsTextHeights.push($(this).height());
      });

      const biggestHeightText = Math.max(...newsTextHeights);

      $.each(newsText, function (index, value) {
        $(this).height(biggestHeightText);
        $(this).css("margin-bottom", 10);
        $(this).css("margin-top", 10);
      });
    }, 50);
  }

  // BOOKS PAGE
  if ($(".all-books .new-books-block")) {
    let booksTittleHeights = [];
    let booksDateHeights = [];
    let booksInfoHeights = [];
    let booksInfoAuthors = [];

    setInterval(() => {
      const booksTittle = $(
        ".all-books .new-books-block-description .new-books-block-description__title"
      );

      $.each(booksTittle, function (index, value) {
        booksTittleHeights.push($(this).height());
      });

      const biggestHeightTittle = Math.max(...booksTittleHeights);

      $.each(booksTittle, function (index, value) {
        $(this).height(biggestHeightTittle);
      });

      const booksDate = $(".all-books .new-books-block-description__date");

      $.each(booksDate, function (index, value) {
        booksDateHeights.push($(this).height());
      });

      const biggestHeightDate = Math.max(...booksDateHeights);

      $.each(booksDate, function (index, value) {
        $(this).height(biggestHeightDate);
      });

      const booksInfo = $(".all-books .new-books-block-description__info");

      $.each(booksInfo, function (index, value) {
        booksInfoHeights.push($(this).height());
      });

      const biggestHeightInfo = Math.max(...booksInfoHeights);

      $.each(booksInfo, function (index, value) {
        $(this).height(biggestHeightInfo);
      });

      const booksAuthors = $(
        ".all-books .new-books-block-description__authors"
      );

      $.each(booksAuthors, function (index, value) {
        booksInfoAuthors.push($(this).height());
      });

      const biggestHeightAuthors = Math.max(...booksInfoAuthors);

      $.each(booksAuthors, function (index, value) {
        $(this).height(biggestHeightAuthors);
      });
    }, 50);
  }

  // VIDEO SECTION
  $(".play-button").click(function () {
    $(this).addClass("none");
    const imgPlaceholder = $(this)
      .closest(".media-block__player")
      .closest(".media-block-body")
      .find(".media-block__content");

    imgPlaceholder.addClass("none");

    const img = $(this)
      .closest(".media-block__player")
      .closest(".media-block-body")
      .find(".media-block__content")
      .find(".youtube-placeholder");

    const imgSrc = $(img).attr("src");

    const imgId = imgSrc.split("/")[4];

    const mediaBlockBody = $(this)
      .closest(".media-block__player")
      .closest(".media-block-body")
      .find(".media-block__player");

    mediaBlockBody.append(`<iframe width="100%" height="100%"
    src="https://www.youtube.com/embed/${imgId}?controls=1&autoplay=1"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    playsinline></iframe>`);

    ev.preventDefault();
  });

  //ARTICLES SLIDE TOGGLE

  $(".articles-block-text__subtitle").click(function () {
    $(this).find(".articles-block-text-subtitle__arrow").toggleClass("active");
    $(this)
      .closest(".articles-block")
      .find(".articles-block-list")
      .slideToggle("slow");
  });

  // ANNOTATION
  $(".new-books-block-description-annotation__toggle").click(function () {
    $(this)
      .closest(".new-books-block-description-annotation")
      .find(".new-books-block-description-annotation__text")
      .slideToggle("slow");
    $(this).toggleClass("active");
  });

  // ADDITION
  $(".make-contribution-additional-menu-title").click(function () {
    $(this).toggleClass("orange");
    $(this)
      .find(".make-contribution-additional-menu-title__arrow")
      .toggleClass("active");

    $(this)
      .closest(".make-contribution-additional-menu")
      .find(".make-contribution-additional-menu-sublist")
      .slideToggle("slow");
  });

  // BODY LISTENER
  $(document).on("click", "body", function (e) {
    if (
      !$(e.target).is("li .menu__link") &&
      !$(e.target).is("li .menu__sublink") &&
      !$(e.target).is("li .menu__sublink span") &&
      !$(e.target).is("li .sublist-li") &&
      !$(e.target).is("li .menu__sublist") &&
      !$(e.target).is(".menu__arrow")
    ) {
      $(".language li .menu__arrow").removeClass("_active");
      $(".language li .menu__sublist").slideUp("slow");
      $(".language li .menu__link").removeClass("orange");

      $(".menu__list li .menu__arrow").removeClass("_active");
      $(".menu__list li .menu__sublist").slideUp("slow");
      $(".menu__list li .menu__link").removeClass("orange");
    }
  });

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

  // ANIMATE ON SCROLL
  AOS.init();

  // SHOW GO UP BUTTON IF SCROLL AFTER INTRO

  $(window).scroll(function () {
    if (
      $(this).scrollTop() >
      $(
        ".intro, .about-us-intro, .help-us-intro, .contact-intro, .team-intro, .lectures-intro, .seminars-intro, .video-intro, .books-intro, .museum-intro, .articles-intro"
      ).height()
    ) {
      $(".go-up").removeClass("none");
    } else {
      $(".go-up").addClass("none");
    }
  });

  // SCROLL TOP
  $(".go-up").click(function () {
    $("html").animate({ scrollTop: 0 }, 600);
    return false;
  });

  // PRELOAD
  // $(".loading").addClass("none");
  $("body").removeClass("_lock");

  // DYNAMIC ADAPTIVE
  useDynamicAdapt();

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

  // IBG METHOD
  if ($(".ibg")) {
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
  }

  // INDEX SLIDER
  if ($(".intro-swiper")) {
    let indexSwiper = new Swiper(".intro-swiper", {
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
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
      centeredSlides: true,
      loop: true,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 250,
        modifier: 1,
        slideShadows: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        991: {
          slidesPerView: 2,
        },
      },
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
   *
   *
   *
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
