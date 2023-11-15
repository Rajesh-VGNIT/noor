/**
* Template URL: https://bootstrapmade.com/presento-bootstrap-corporate-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  //const onscroll = (el, listener) => {
  //  el.addEventListener('scroll', listener)
  //}

  /**
   * Navbar links active state on scroll
   */
  //let navbarlinks = select('#navbar .scrollto', true)
  //const navbarlinksActive = () => {
  //  let position = window.scrollY + 200
  //  navbarlinks.forEach(navbarlink => {
  //  console.log(navbarlink.hash);
  //    if (!navbarlink.hash) return
  //    let section = select(navbarlink.hash)
  //    if (!section) return
  //    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
  //      navbarlink.classList.add('active')
  //    } else {
  //      navbarlink.classList.remove('active')
  //    }
  //  })
  //}
  //window.addEventListener('load', navbarlinksActive)
  //onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  //const scrollto = (el) => {
  //  let header = select('#header')
  //  let offset = header.offsetHeight
  //
  //  if (!header.classList.contains('header-scrolled')) {
  //    offset -= 16
  //  }
  //
  //  let elementPos = select(el).offsetTop
  //  window.scrollTo({
  //    top: elementPos - offset,
  //    behavior: 'smooth'
  //  })
  //}

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  //let selectHeader = select('#header')
  //if (selectHeader) {
  //  const headerScrolled = () => {
  //    if (window.scrollY > 100) {
  //      selectHeader.classList.add('header-scrolled')
  //    } else {
  //      selectHeader.classList.remove('header-scrolled')
  //    }
  //  }
  //  window.addEventListener('load', headerScrolled)
  //  onscroll(document, headerScrolled)
  //}

  /**
   * Back to top button
   */
  //let backtotop = select('.back-to-top')
  //if (backtotop) {
  //  const toggleBacktotop = () => {
  //    if (window.scrollY > 100) {
  //      backtotop.classList.add('active')
  //    } else {
  //      backtotop.classList.remove('active')
  //    }
  //  }
  //  window.addEventListener('load', toggleBacktotop)
  //  onscroll(document, toggleBacktotop)
  //}

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  //on('click', '.scrollto', function(e) {
  //  console.log(this.hash);
  //  if (select(this.hash)) {
  //    e.preventDefault()
  //
  //    let navbar = select('#navbar')
  //    if (navbar.classList.contains('navbar-mobile')) {
  //      navbar.classList.remove('navbar-mobile')
  //      let navbarToggle = select('.mobile-nav-toggle')
  //      navbarToggle.classList.toggle('bi-list')
  //      navbarToggle.classList.toggle('bi-x')
  //    }
  //    scrollto(this.hash)
  //  }
  //}, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  //window.addEventListener('load', () => {
  //  if (window.location.hash) {
  //    if (select(window.location.hash)) {
  //      scrollto(window.location.hash)
  //    }
  //  }
  //});
  
   /**
   * Main Slider
   */
  var headerSlider = new Swiper('.main-slider', {
    speed: 1200,
    loop: true,
  //effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    },
  on: {
      slideChangeTransitionStart: function () {
          // Slide captions
          var swiper = this;
          setTimeout(function () {
            var currentTitle = $(swiper.slides[swiper.activeIndex]).find('h1').html();
            var currentSubtitle = $(swiper.slides[swiper.activeIndex]).find('h5').html();
          }, 200);
          gsap.to($(".slide-title"), 0.5, {autoAlpha: 0, y: -40, ease: Power1.easeIn});
          gsap.to($(".slide-subtitle"), 0.5, {autoAlpha: 0, y: -40, delay: 0.15, ease: Power1.easeIn});
      },
      slideChangeTransitionEnd: function () {
          // Slide captions
          var swiper = this;
          var currentTitle = $(swiper.slides[swiper.activeIndex]).find('h1').html();
          var currentSubtitle = $(swiper.slides[swiper.activeIndex]).find('h5').html();
          $(".slide-captions").html(function() {
            return "<h1 class='slide-title'>" + currentTitle + "</h1>" + "<h5 class='slide-subtitle'>" + currentSubtitle + "</h5>";
          });
          gsap.from($(".slide-title"), 0.1, {autoAlpha: 0, y: 40, ease: Power1.easeOut});
          gsap.from($(".slide-subtitle"), 0.1, {autoAlpha: 0, y: 40, delay: 0.15, ease: Power1.easeOut});
      }
    }
  });
  // Slide captions
  var currentTitle = $(headerSlider.slides[headerSlider.activeIndex]).find('h1').html();
  var currentSubtitle = $(headerSlider.slides[headerSlider.activeIndex]).find('h5').html();
  $(".slide-captions").html(function() {
    return "<h1 class='slide-title'>" + currentTitle + "</h1>" + "<h5 class='slide-subtitle'>" + currentSubtitle + "</h5>";
  });
  
  /***/
  
  /** section slides */
   var sectionSlides = new Swiper(".sectionSlides", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".arrow-bottom",
      clickable: true,
    },
    });
  
  //page jump to section
  $('.scrollto').click(sectionSlides,function(e){
    e.preventDefault();
    if (this.hash) { 
      const el = document.querySelector(this.hash);
      const index = [...el.parentNode.children].indexOf(el);
      sectionSlides.slideTo(index);
    }
  });
  
  
    /**
   * Main Slider
   */
  new Swiper('.trucking-slider', {
    speed: 400,
    loop: true,
   effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });
  
  /***/
  
  /**
   * Clients Slider
   */
  //new Swiper('.clients-slider', {
  //  speed: 400,
  //  loop: true,
  //  autoplay: {
  //    delay: 1,
  //    disableOnInteraction: false
  //  },
  //  slidesPerView: 'auto',
  //  pagination: {
  //    el: '.swiper-pagination',
  //    type: 'bullets',
  //    clickable: true
  //  },
  //  breakpoints: {
  //    320: {
  //      slidesPerView: 2,
  //      spaceBetween: 40
  //    },
  //    480: {
  //      slidesPerView: 3,
  //      spaceBetween: 60
  //    },
  //    640: {
  //      slidesPerView: 4,
  //      spaceBetween: 80
  //    },
  //    992: {
  //      slidesPerView: 5,
  //      spaceBetween: 120
  //    },
  //  
  //  1500: {
  //      slidesPerView: 6,
  //      spaceBetween: 120
  //    }
  //  }
  //});

  /**


  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
  
  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev', 
      },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    //pagination: {
    //  el: '.swiper-pagination',
    //  type: 'bullets',
    //  clickable: true
    //},
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()