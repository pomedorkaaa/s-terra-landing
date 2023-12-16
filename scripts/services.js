// console.log("hello");
services = [
  {
    h5: "Обучение frontend специалистов",
    p: "Is your business maximising its potential using Influencer marketing? Whether you're managing yours in-house, or are currently working with an influencer marketing agency then we can help you drastically improve your results.",
  },
  {
    h5: "Консалтинг веб проектов",
    p: "In 2022, marketing your brand on TikTok is a must. Utilising the viral growth, their advertising platform, and the ability to get your business in front of millions - it's time to take advantage. Whether you're managing yours in-house, or are currently working with a TikTok Marketing agency, then we can help you drastically improve your results.",
  },
  {
    h5: "Графический дизайн",
    p: "Are you lacking a social strategy that's driving your brand forward? Our team knows how to craft always-on and campaign strategies to elevate your content & community across your organic social channels.",
  },
  {
    h5: "Создание дизайна веб/Моб проектов",
    p: "Not happy with your existing performance and looking for a partner that can drive sustainable growth that delivers incrementality in site-wide performance and brand uplift?We leverage the major social platforms with platform-specific performance creative to drive performance at all stages of the funnel.",
  },
  {
    h5: "Вёрстка дизайна",
    p: "Is your social content uninspiring, not platform-specific or lacking in creativity? Whether it's social-first video content, photography or design - we're ready to help take your brand to the next level.",
  },
  {
    h5: "Графический дизайн",
    p: "Are you lacking a social strategy that's driving your brand forward? Our team knows how to craft always-on and campaign strategies to elevate your content & community across your organic social channels.",
  },
];

swiper_wrapper = document.getElementById("swiper-wrapper");

services.map(({ h5, p }, index) => {
  swiper_wrapper.innerHTML += `
  <li class="swiper-slide">
    <a href="#" >
      <div class="slider-img">
        <img src="./images/slide-${index + 1}.png" alt="">
      </div>
      <h5>${h5}</h5>
      <p>${p}</p>
      </a>
  </li>
  `;
});

document.getElementById("services-print").remove();
