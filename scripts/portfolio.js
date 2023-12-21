portfolio_item_posts = document.getElementById("portfolio-posts");
portfolio_ul = document.getElementById("portfolio-ul");

list = [
  {
    item: "Все работы",
    posts: [
      {
        date: "17 о234rктября",
        inDev: true,
        heading: "IT Profy: Консалтинг /Создание дизайна / Вёрстка ",
        body: "In today's digital era, Facebook Ads are an indispensable part of your marketing strategy. These ads precisely target and reach audiences by demographics, interests, and prior engagement with your content.",
      },
      {
        date: "17 о234rктября",
        inDev: true,
        heading: "IT Profy: Консалтинг /Создание дизайна / Вёрстка ",
        body: "In today's digital era, Facebook Ads are an indispensable part of your marketing strategy. These ads precisely target and reach audiences by demographics, interests, and prior engagement with your content.",
      },
    ],
  },
  {
    item: "Консалтинг",
    posts: [
      {
        date: "17 о234ктября",
        inDev: true,
        heading: "IT Profy: Консалтинг /Создание дизайна / Вёрстка ",
        body: "In today's digital era, Facebook Ads are an indispensable part of your marketing strategy. These ads precisely target and reach audiences by demographics, interests, and prior engagement with your content.",
      },
    ],
  },
  {
    item: "Фронт Энд Разработка",
    posts: [
      {
        date: "17 234октября",
        inDev: true,
        heading: "IT Profy: Консалтинг /Создание дизайна / Вёрстка ",
        body: "In today's digital era, Facebook Ads are an indispensable part of your marketing strategy. These ads precisely target and reach audiences by demographics, interests, and prior engagement with your content.",
      },
      {
        date: "17 о234rктября",
        inDev: true,
        heading: "IT Profy: Консалтинг /Создание дизайна / Вёрстка ",
        body: "In today's digital era, Facebook Ads are an indispensable part of your marketing strategy. These ads precisely target and reach audiences by demographics, interests, and prior engagement with your content.",
      },
      {
        date: "17 о234rктября",
        inDev: true,
        heading: "IT Profy: Консалтинг /Создание дизайна / Вёрстка ",
        body: "In today's digital era, Facebook Ads are an indispensable part of your marketing strategy. These ads precisely target and reach audiences by demographics, interests, and prior engagement with your content.",
      },
    ],
  },
  {
    item: "UX/UI Дизайн",
    posts: [
      {
        date: "17 окт23e4rября",
        inDev: true,
        heading: "Lorem ipsum dolor hsdkbfkwbkhfbkf ",
        body: "In today's digital era, Facebook Ads are an indispensable part of your marketing strategy. These ads precisely target and reach audiences by demographics, interests, and prior engagement with your content.",
      },
    ],
  },
  {
    item: "Графический дизайн",
    posts: [
      {
        date: "172345 октября",
        inDev: true,
        heading: "ОНОООООООООО",
        body: "In today's digital era, Facebook Ads are an indispensable part of your marketing strategy. These ads precisely target and reach audiences by demographics, interests, and prior engagement with your content.",
      },
      {
        date: "172345 октября",
        inDev: true,
        heading: "РАБОООТАААЕЕЕЕТ",
        body: "In today's digital era, Facebook Ads are an indispensable part of your marketing strategy. These ads precisely target and reach audiences by demographics, interests, and prior engagement with your content.",
      },
    ],
  },
];

showPosts = (index) => {
  // console.log("heehhe");

  portfolio_item_posts.innerHTML = "";
  list[index].posts.map(({ date, inDev, heading, body }) => {
    portfolio_item_posts.innerHTML += `
      <p class="p2">${date}</p>
      <h5>${heading}</h5>
      <p class="p1">${body}</p>
    `;
  });
};

showPosts(1);

activateBtn = (_index) => {
  for (let i = 0; i < portfolio_ul.children.length; i++) {
    portfolio_ul.children[i].children[0].className = "p1";
  }
  portfolio_ul.children[_index].children[0].className += " portf-btn-active";
};

list.map(({ item }, index) => {
  portfolio_ul.innerHTML += `
  <li><button onclick="showPosts(${index}); activateBtn(${index})" class="p1 ${
    index + 1 == 1 ? `portf-btn-active` : ""
  }">${item}</button></li>
  `;
});

document.getElementById("portfolio-ul-print").remove();
