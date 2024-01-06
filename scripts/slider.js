const swiper = new Swiper(".slider", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 25,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 5000,
  },
  // slidesPerView: 1,
  // breakpoints: {
  //   1024: {
  //     slidesPerView: "auto",
  //   },
  //   800: {
  //     slidesPerView: 2,
  //   },
  // },
});
