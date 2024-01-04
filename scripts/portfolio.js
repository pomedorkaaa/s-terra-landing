portfolio_item_posts = document.getElementById("portfolio-posts");
portfolio_ul = document.getElementById("portfolio-ul");

list = [
  {
    item: "Все работы",
    posts: [
      {
        date: "17 октября 2023",
        inDev: false,
        heading: "DigitalCraft E-Commerce Platform",
        body: "Создание уникальной электронной коммерции для DigitalCraft — платформы, сочетающей стильный дизайн с высокой функциональностью. Результат - максимально удобный опыт покупок для клиентов и эффективная система управления продуктами для владельцев бизнеса.",
      },
      {
        date: "21 ноября 2023",
        inDev: true,
        heading: "Arturia Learning Management System",
        body: "Разработка системы управления обучением для Arturia LMS — инновационной образовательной платформы. Пользователи могут легко навигировать, создавать курсы и взаимодействовать, обеспечивая эффективное онлайн-обучение.",
      },
      {
        date: "6 декабря 2023",
        inDev: true,
        heading: "EcoGreen Corporate Website Redesign",
        body: "Пересмотр корпоративного веб-сайта EcoGreen с акцентом на устойчивость и современный дизайн. Новый сайт подчеркивает экологическую ответственность компании и предоставляет пользовательский опыт высокого качества.",
      },
    ],
  },
  {
    item: "Консалтинг",
    posts: [
      {
        date: "17 октября",
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
        date: "17 октября",
        inDev: true,
        heading: "IT Profy: Консалтинг /Создание дизайна / Вёрстка ",
        body: "In today's digital era, Facebook Ads are an indispensable part of your marketing strategy. These ads precisely target and reach audiences by demographics, interests, and prior engagement with your content.",
      },
      {
        date: "17 октября",
        inDev: true,
        heading: "IT Profy: Консалтинг /Создание дизайна / Вёрстка ",
        body: "In today's digital era, Facebook Ads are an indispensable part of your marketing strategy. These ads precisely target and reach audiences by demographics, interests, and prior engagement with your content.",
      },
      {
        date: "17 октября",
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
        date: "17 октября",
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
        date: "17 октября",
        inDev: true,
        heading: "ОНОООООООООО",
        body: "In today's digital era, Facebook Ads are an indispensable part of your marketing strategy. These ads precisely target and reach audiences by demographics, interests, and prior engagement with your content.",
      },
      {
        date: "17 октября",
        inDev: true,
        heading: "РАБОООТАААЕЕЕЕТ",
        body: "In today's digital era, Facebook Ads are an indispensable part of your marketing strategy. These ads precisely target and reach audiences by demographics, interests, and prior engagement with your content.",
      },
    ],
  },
];

showPosts = (id) => {
  // console.log("heehhe");

  portfolio_item_posts.innerHTML = "";
  list[id].posts.map(({ date, inDev, heading, body }, index) => {
    portfolio_item_posts.innerHTML += `
    <li class="portfolio-post">
      <div class="post-info">
        <div class="post-meta">
          <time class="p2"
          >${date}</time>
          ${inDev ? `<p class="p2">В разработке</p>` : ""}
        </div>
        <h5>${heading}</h5>
        <p class="p1">${body}</p>
      </div>
      <img src="./images/portfolio/item${id + 1}/post${
      index + 1
    }.png" class="post-img"/>
    </li>
    `;
  });
};

showPosts(0);

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
