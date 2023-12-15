const swiper = new Swiper(".slider", {
  slidesPerView: "auto",
  // centeredSlides: true,
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
});
