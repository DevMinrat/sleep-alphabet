//= ../../../node_modules/swiper/swiper-bundle.js
///= components/scrolllock.js

document.addEventListener("DOMContentLoaded", () => {
  //= components/sliders.js

  // header functional

  const header = document.querySelector(".header");
  let scrollPrev = 0;

  if (header) {
    window.addEventListener("scroll", () => {
      let scrolled = document.documentElement.scrollTop;

      if (scrolled > 50 && scrolled > scrollPrev) {
        header.classList.add("out");
      } else {
        header.classList.remove("out");
      }

      if (scrolled <= 50) {
        header.classList.add("top");
      } else {
        header.classList.remove("top");
      }

      scrollPrev = scrolled;
    });

    if (document.documentElement.scrollTop <= 50) {
      header.classList.add("top");
    }
  }

  // Anchor smooth scroll

  const pageLinks = document.querySelectorAll('a[href^="#"]');

  if (pageLinks.length > 0) {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }

  
});
