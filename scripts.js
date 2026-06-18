(() => {
  const FONT_SIZE_MIN = 14;
  const FONT_SIZE_MAX = 18;
  const FONT_SIZE_STEP = 1;
  const LANG_STORAGE_KEY = "cv_lang";
  const DEFAULT_LANG = "en";

  const TRANSLATIONS = {
    en: {
      page_title: "Anatoliy Popov - Front-end Developer - CV",
      role_title: "FRONT-END DEVELOPER",
      role_name: "Anatoliy Popov",

      tooltip_email: "Email me",
      tooltip_telegram: "I'm on telegram",
      tooltip_linkedin: "Linkedin page",
      tooltip_github: "GitHub account",
      tooltip_pdf: "Download PDF",
      tooltip_font_size: "Font size",
      tooltip_translate: "Select language",

      summary_title: "Summary",
      summary_text:
        "Front-end developer with 8 years of commercial experience building enterprise websites, web applications, admin panels, and scalable user interfaces. I am currently looking for a long-term front-end development opportunity.",
      summary_core_stack:
        '> Core stack: <span class="black">JavaScript, TypeScript, Vue 2/3, Nuxt, Vuex, Pinia</span>',
      summary_additional:
        '> Additional expertise: <span class="black">React, jQuery, Node.js, Jest, HTML, CSS</span>',

      experience_title: "Relevant Experience",
      job_responsibilities: "Responsibilities:",
      job_achievements: "Achievements:",
      job_stack: "Tech Stack:",

      job_rabata_title:
        'FRONT-END DEVELOPER @ RABATA <span class="subtitle_small">/ March 2025 - March 2026</span>',
      job_rabata_dates: "/ March 2025 - March 2026",
      job_rabata_location: "[ England, London, diversified startup ]",
      job_rabata_responsibilities: {
        1: "Contributed to multiple product platforms and user-facing web applications.",
        2: "Improved video streaming functionality and user experience.",
        3: "Helped scale the Clips section to more than 10k+ daily views.",
        4: "Optimized Core Web Vitals and performance metrics, bringing key pages into Google's green zone.",
        5: "Modernized legacy codebase and improved maintainability.",
        6: "Introduced AI-assisted development workflows using Cursor, Claude and Codex.",
      },
      job_rabata_achievements: {},

      job_webbankir_title:
        'FRONT-END DEVELOPER @ WEBBANKIR <span class="subtitle_small">/ February 2024 - March 2025</span>',
      job_webbankir_dates: "/ February 2024 - March 2025",
      job_webbankir_location: "[ Russia, Moscow, fintech company ]",
      job_webbankir_responsibilities: {
        1: "Developed and maintained internal administrative systems and customer-facing interfaces.",
        2: "Delivered new product features and business functionality.",
        3: "Improved frontend stability and maintainability.",
      },
      job_webbankir_achievements: {},

      job_livetyping_title:
        'FRONT-END DEVELOPER @ LIVETYPING <span class="subtitle_small">/ January 2024 - June 2024</span>',
      job_livetyping_dates: "/ January 2024 - June 2024",
      job_livetyping_location: "[ Russia, outsource, part-time, project work ]",
      job_livetyping_responsibilities: {
        1: "Built a transportation tender management platform \"Electronic Trade Portal\" from scratch using Vue 3.",
        2: "Designed frontend architecture and application structure.",
        3: "Implemented authentication, role management and tender workflows.",
        4: "Integrated frontend with backend APIs.",
      },
      job_livetyping_achievements: {},

      job_marfatech_title:
        'FRONT-END DEVELOPER @ MARFATECH <span class="subtitle_small">/ June 2023 - November 2023</span>',
      job_marfatech_dates: "/ June 2023 - November 2023",
      job_marfatech_location: "[ Cyprus, online casino startup, project work ]",
      job_marfatech_responsibilities: {
        1: "Participated in migration toward micro-frontend architecture.",
        2: "Developed new product functionality and improved existing user flows.",
        3: "Worked in a fast-paced product environment with frequent releases.",
      },
      job_marfatech_achievements: {},

      job_akbars_title:
        'FRONT-END DEVELOPER @ AK BARS DIGITAL <span class="subtitle_small">/ June 2022 - June 2023</span>',
      job_akbars_dates: "/ June 2022 - June 2023",
      job_akbars_location: "[ Russia, Kazan, digital division of Ak Bars bank ]",
      job_akbars_responsibilities: {
        1: "Developed customer-facing interfaces for a major banking platform with Vue and Nuxt.js.",
        2: "Worked with SSR applications and BFF integrations.",
        3: "Improved performance and brought key pages into Google's green PageSpeed zone.",
        4: "Collaborated with cross-functional teams on digital banking products.",
      },
      job_akbars_achievements: {},

      job_lenvendo_title: 'FRONT-END DEVELOPER @ LENVENDO <span class="subtitle_small">/ April 2021 - May 2022</span>',
      job_lenvendo_dates: "/ April 2021 - May 2022",
      job_lenvendo_location: "[ Russia, Saint-Petersburg, development of highload projects ]",
      job_lenvendo_responsibilities: {
        1: "Delivered frontend solutions for large-scale e-commerce and enterprise projects.",
      },
      job_lenvendo_eldorado_title: "# Eldorado (retail chain selling consumer electronics)",
      job_lenvendo_achievements_eldorado: {
        1: "Redesigned the Eldoblog portal.",
        2: "Improved performance, accessibility and maintainability.",
        3: "Optimized blog performance for Google PageSpeed and real users.",
      },

      job_lenvendo_magnit_title: "# Magnit (chain of retail stores) ",
      job_lenvendo_achievements_magnit: {
        1: "Developed marketplace and delivery service interfaces.",
        2: "Maintained and improved a Vue application built with TypeScript.",
        3: "Added automated tests using Jest.",
        4: "Worked with CI processes in a large development team.",
      },

      job_lenvendo_sber_title: "# SberMegamarket (online food and goods delivery service) ",
      job_lenvendo_achievements_sber: {
        1: "Designed frontend architecture for a marketing experiments platform.",
        2: "Built administrative interfaces and business tools.",
        3: "Implemented CRUD operations for experiment workflows and ROI calculators.",
      },

      job_umi_title:
        'FRONT-END DEVELOPER @ 1C - UMI <span class="subtitle_small">/ April 2018 - April 2021</span>',
      job_umi_dates: "/ April 2018 - April 2021",
      job_umi_location: "[ Russia, Saint-Petersburg, IT company producing website builder]",
      job_umi_responsibilities: {
        1: "Developed and maintained functionality for a large website builder platform.",
        2: "Worked with extensive legacy codebase.",
        3: "Improved Google PageSpeed metrics.",
        4: "Built HTML templates for a website builder and maintained XSLT/PHP templates.",
      },
      job_umi_achievements: {},

      skills_title: "Skills",
      skills_core_label: "core = [ ",
      skills_layout_label: "layout = [ ",
      skills_technologies_label: "technologies = [ ",
      skills_ai_label: "ai = [ ",
      skills_tools_label: "tools = [ ",
      skills_design_label: "design = [ ",
      skills_teamwork_label: "teamwork = [ ",
      skills_personality_label: "personality = [ ",
      skills_interests_label: "interests = [ ",
      skills_personality_items_mobile:
        "'Organized', 'Punctual', 'Non-confrontational', 'Attentive to details',\n'Able to solve problems', 'Ready to learn new things'",
      skills_interests_items_mobile:
        "'Web technologies', 'House renovation', '3D printing', 'Traveling', 'Cycling'",
      personality_organized: "'Organized',",
      personality_punctual: "'Punctual',",
      personality_nonconfrontational: "'Non-confrontational',",
      personality_attentive: "'Attentive to details',",
      personality_problem_solver: "'Able to solve problems',",
      personality_ready_to_learn: "'Ready to learn new things'",
      interests_web_tech: "'Web technologies',",
      interests_renovation: "'House renovation',",
      interests_printing: "'3D printing',",
      interests_traveling: "'Traveling',",
      interests_cycling: "'Cycling'",
      education_title: "Education",
      education_text:
        "Yuri Gagarin State Technical University of Saratov<br />Information Systems and Programming, IRBIS Faculty / 2010",
      about_title: "About me",
      about_text:
        "I am a front-end developer with 8 years of commercial experience in enterprise web projects, admin panels, product interfaces, and scalable web applications.\n\nMy main focus is JavaScript, Vue/Nuxt, TypeScript, responsive layout, performance optimization, and maintainable front-end architecture. I have worked in product teams, outsourcing companies, fintech, e-commerce, and online entertainment projects.\n\nI actively follow AI technologies and use them in development while continuing to write and review code myself.",
    },
    ru: {
      page_title: "Анатолий Попов — Фронтенд-разработчик — CV",
      role_title: "ФРОНТЕНД-РАЗРАБОТЧИК",
      role_name: "Анатолий Попов",

      tooltip_email: "Написать на email",
      tooltip_telegram: "Я в Telegram",
      tooltip_linkedin: "Страница LinkedIn",
      tooltip_github: "Аккаунт GitHub",
      tooltip_pdf: "Скачать PDF",
      tooltip_font_size: "Размер шрифта",
      tooltip_translate: "Выбор языка",

      summary_title: "Вкратце",
      summary_text:
        "8 лет коммерческого опыта в разработке корпоративных сайтов и приложений, админ-панелей и\u00A0масштабируемых веб-интерфейсов.\nИщу долгосрочную позицию разработчика с возможностью профессионального роста и участия в развитии продукта.",
      summary_core_stack:
        '> Основной стек: <span class="black">JavaScript, TypeScript, Vue 2/3, Nuxt, Vuex, Pinia</span>',
      summary_additional:
        '> Дополнительные навыки: <span class="black">React, jQuery, Node.js, Jest, HTML, CSS</span>',

      experience_title: "Опыт работы",
      job_responsibilities: "Обязанности:",
      job_achievements: "Достижения:",
      job_stack: "Стек:",

      job_rabata_title:
        'ФРОНТЕНД-РАЗРАБОТЧИК @ RABATA <span class="subtitle_small">/ март 2025 — март 2026</span>',
      job_rabata_dates: "/ март 2025 — март 2026",
      job_rabata_location: "[ Англия, Лондон, продуктовый стартап ]",
      job_rabata_responsibilities: {
        1: "Развитие нескольких продуктовых платформ компании, включая видеостриминговые сервисы и пользовательские интерфейсы.",
      },
      job_rabata_achievements: {
        1: "Развивал раздел видеоконтента и клипов, который вырос до 10к+ просмотров в день.",
        2: "Оптимизировал производительность и Core Web Vitals ключевых страниц, доведя показатели до зеленой зоны.",
        3: "Улучшил и модернизировал legacy-кодовую базу, повышая поддерживаемость проекта.",
        4: "Разработал новые продуктовые функции и интегрировал их в существующую архитектуру.",
        5: "Внедрил использование AI-инструментов (Cursor, Claude, Codex), ускорив выполнение повседневных задач разработки.",
      },

      job_webbankir_title:
        'ФРОНТЕНД-РАЗРАБОТЧИК @ WEBBANKIR <span class="subtitle_small">/ февраль 2024 — март 2025</span>',
      job_webbankir_dates: "/ февраль 2024 — март 2025",
      job_webbankir_location: "[ Россия, Москва, финтех ]",
      job_webbankir_responsibilities: {
        1: "Разработка внутренних сервисов и клиентских интерфейсов финансовой платформы."
      },
      job_webbankir_achievements: {
        1: "Разработал и поддерживал административные панели и клиентские интерфейсы.",
        2: "Реализовал новые продуктовые функции для внутренних и внешних пользователей.",
        3: "Улучшил стабильность и качество frontend-части продукта.",
      },

      job_livetyping_title:
        'ФРОНТЕНД-РАЗРАБОТЧИК @ LIVETYPING <span class="subtitle_small">/ январь 2024 — июнь 2024</span>',
      job_livetyping_dates: "/ январь 2024 — июнь 2024",
      job_livetyping_location: "[ Россия, аутсорс, проектная работа ]",
      job_livetyping_responsibilities: {
        1: "Frontend разработка электронного торгового портала для управления тендерами грузоперевозок.",
      },
      job_livetyping_achievements: {
        1: "Самостоятельно реализовал frontend-приложение с нуля на Vue 3 и Quasar.",
        2: "Спроектировал структуру проекта и архитектуру интерфейсов.",
        3: "Реализовал авторизацию, роли пользователей, статусы и бизнес-процессы тендеров.",
        4: "Интегрировал frontend с backend API и бизнес-логикой портала.",
      },

      job_marfatech_title:
        'ФРОНТЕНД-РАЗРАБОТЧИК @ MARFATECH <span class="subtitle_small">/ июнь 2023 — ноябрь 2023</span>',
      job_marfatech_dates: "/ июнь 2023 — ноябрь 2023",
      job_marfatech_location: "[ Кипр, стартап онлайн-казино, проектная работа ]",
      job_marfatech_responsibilities: {
        1: "Разработка новых функций и улучшение существующих пользовательских сценариев.",
        2: "Миграция на micro-frontend архитектуру.",
      },
      job_marfatech_achievements: {
        1: "Поддерживал качество интерфейсов в условиях быстрого темпа разработки и частых продуктовых изменений.",
        2: "Взаимодействовал с существующей кодовой базой, дорабатывал функциональность и помогал адаптировать фронтенд под новую архитектуру.",
      },

      job_akbars_title:
        'ФРОНТЕНД-РАЗРАБОТЧИК @ AK BARS DIGITAL <span class="subtitle_small">/ июнь 2022 — июнь 2023</span>',
      job_akbars_dates: "/ июнь 2022 — июнь 2023",
      job_akbars_location: "[ Россия, Казань, digital-подразделение банка Ак Барс ]",
      job_akbars_responsibilities: {
        1: "Разработка компонентов и пользовательских интерфейсов для сайта банка.",
        2: "Серверный рендеринг и интеграция приложения с BFF.",
      },
      job_akbars_achievements: {
        1: "Разработал пользовательские интерфейсы и компоненты на Vue и Nuxt.js.",
        2: "Интегрировал фронтенд-фичи с внутренними сервисами и командами.",
        3: "Вывел ключевые страницы проекта в зеленую зону Google PageSpeed.",
        4: "Участвовал в развитии банковского цифрового продукта.",
      },

      job_lenvendo_title:
        'ФРОНТЕНД-РАЗРАБОТЧИК @ LENVENDO <span class="subtitle_small">/ апрель 2021 — май 2022</span>',
      job_lenvendo_dates: "/ апрель 2021 — май 2022",
      job_lenvendo_location: "[ Россия, Санкт‑Петербург, аутсорс разработка высоконагруженных проектов]",
      job_lenvendo_responsibilities: {
        1: "Разработка и развитие крупных e-commerce и внутренних корпоративных платформ для клиентов компании- SberMegaMarket, Eldorado и Magnit.",
      },

      job_lenvendo_eldorado_title: "# Eldorado",
      job_lenvendo_achievements_eldorado: {
        1: "Участвовал в редизайне Eldoblog.",
        2: "Оптимизировал производительность и улучшал показатели Google PageSpeed.",
        3: "Повысил доступность пользовательских интерфейсов.",
      },

      job_lenvendo_magnit_title: "# Magnit",
      job_lenvendo_achievements_magnit: {
        1: "Разработал интерфейсы маркетплейса на Vue.js и TypeScript.",
        2: "Покрыл функциональность тестами на Jest.",
      },

      job_lenvendo_sber_title: "# SberMegamarket",
      job_lenvendo_achievements_sber: {
        1: "Спроектировал frontend-архитектуру платформы маркетинговых экспериментов.",
        2: "Реализовал CRUD-интерфейсы для управления экспериментами.",
        3: "Реализовал калькулятор оценки эффективности маркетинговых гипотез.",
      },

      job_umi_title:
        'ФРОНТЕНД-РАЗРАБОТЧИК @ 1C - UMI <span class="subtitle_small">/ апрель 2018 — апрель 2021</span>',
      job_umi_dates: "/ апрель 2018 — апрель 2021",
      job_umi_location: "[ Россия, Санкт‑Петербург, конструктор сайтов ]",
      job_umi_responsibilities: {
        1: "Разработка новых функций для конструктора сайтов.",
        2: "Поддержка и развитие существующей функциональности.",
        3: "Работа с крупной legacy-кодовой базой.",
        4: "Создание адаптивной кроссбраузерной верстки.",
        5: "Разработка шаблонов сайтов и HTML-писем.",
        6: "Оптимизация производительности страниц.",
      },
      job_umi_achievements: {
        1: "Поддерживал и развивал продукт, используемый большим количеством клиентов.",
        2: "Улучшил показатели Google PageSpeed и скорость загрузки страниц.",
        3: "Участвовал в развитии крупной платформы-конструктора сайтов на протяжении трёх лет.",
      },

      skills_title: "Навыки",
      skills_core_label: "основные = [ ",
      skills_layout_label: "верстка = [ ",
      skills_technologies_label: "технологии = [ ",
      skills_ai_label: "ии = [ ",
      skills_tools_label: "инструменты = [ ",
      skills_design_label: "дизайн = [ ",
      skills_teamwork_label: "процессы = [ ",
      skills_personality_label: "качества = [ ",
      skills_interests_label: "интересы = [ ",
      skills_personality_items_mobile:
        "'Организованный', 'Пунктуальный', 'Неконфликтный', 'Внимательный к деталям',\n'Умею решать проблемы', 'Готов учиться новому'",
      skills_interests_items_mobile:
        "'Веб‑технологии', 'Ремонт дома', '3D печать', 'Путешествия', 'Велосипеды'",
      personality_organized: "'Организованный',",
      personality_punctual: "'Пунктуальный',",
      personality_nonconfrontational: "'Неконфликтный',",
      personality_attentive: "'Внимательный к деталям',",
      personality_problem_solver: "'Умею решать проблемы',",
      personality_ready_to_learn: "'Готов учиться новому'",
      interests_web_tech: "'Веб‑технологии',",
      interests_renovation: "'Ремонт дома',",
      interests_printing: "'3D печать',",
      interests_traveling: "'Путешествия',",
      interests_cycling: "'Велосипеды'",
      education_title: "Образование",
      education_text:
        "Саратовский государственный технический университет им. Ю. А. Гагарина<br />Программирование вычислительных систем, ИРБИС / 2010",
      about_title: "О себе",
      about_text:
        "Я фронтенд-разработчик с 8-летним коммерческим опытом в корпоративных веб-проектах, административных панелях, продуктовых интерфейсах и масштабируемых веб-приложениях.\n\nОсновной стек: JavaScript, Vue/Nuxt, TypeScript, HTML, CSS и современные фронтенд-инструменты. Моя экспертиза включает адаптивную вёрстку, оптимизацию производительности, работу с legacy-кодом и построение поддерживаемой фронтенд-архитектуры.\n\nЯ работал в продуктовых командах, аутсорсинге, финтехе, e-commerce и проектах в сфере онлайн-развлечений. Активно использую AI-инструменты в разработке, продолжая самостоятельно писать, анализировать и ревьюить код.",
    },
  };

  function clamp(n, min, max) {
    return Math.min(max, Math.max(min, n));
  }

  function getLang() {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    return stored === "ru" || stored === "en" ? stored : DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  }

  function toggleLanguageBlocks(lang) {
    document.querySelectorAll(".show_en, .show_ru").forEach((el) => {
      const shouldShow =
        (lang === "en" && el.classList.contains("show_en")) ||
        (lang === "ru" && el.classList.contains("show_ru"));

      el.hidden = !shouldShow;
    });
  }

  function renderTranslatedLists(dict, fallbackDict) {
    document.querySelectorAll("[data-i18n-list]").forEach((list) => {
      const key = list.getAttribute("data-i18n-list");
      if (!key) return;

      const items = dict[key] ?? fallbackDict?.[key];

      if (!items || typeof items !== "object") return;

      list.innerHTML = "";

      Object.keys(items)
        .sort((a, b) => Number(a) - Number(b))
        .forEach((itemKey) => {
          const value = items[itemKey];

          if (typeof value !== "string") return;

          const li = document.createElement("li");
          li.textContent = `> ${value}`;
          list.appendChild(li);
        });
    });
  }

  function applyTranslations(lang) {
    const dict = TRANSLATIONS[lang] ?? TRANSLATIONS[DEFAULT_LANG];

    document.documentElement.setAttribute("lang", lang);
    if (dict.page_title) document.title = dict.page_title;

    const cvLink = document.querySelector('.contacts .download a[data-cv-en][data-cv-ru]');
    if (cvLink instanceof HTMLAnchorElement) {
      const nextHref = lang === "ru" ? cvLink.dataset.cvRu : cvLink.dataset.cvEn;
      if (typeof nextHref === "string" && nextHref.length) {
        cvLink.href = nextHref;
        cvLink.download = nextHref;
      }
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const value = dict[key] ?? TRANSLATIONS[DEFAULT_LANG]?.[key];
      if (typeof value === "string") el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      const value = dict[key] ?? TRANSLATIONS[DEFAULT_LANG]?.[key];
      if (typeof value === "string") el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-tooltip]").forEach((el) => {
      const key = el.getAttribute("data-i18n-tooltip");
      if (!key) return;
      const value = dict[key] ?? TRANSLATIONS[DEFAULT_LANG]?.[key];
      if (typeof value === "string") el.setAttribute("data-tooltip", value);
    });

    document.querySelectorAll(".lang-btn[data-lang]").forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang");
      btn.classList.toggle("active", btnLang === lang);
    });

    renderTranslatedLists(dict, TRANSLATIONS[DEFAULT_LANG]);
    toggleLanguageBlocks(lang);
  }

  function initEasterEgg() {
    const links = document.querySelectorAll(".contacts > .link");
    const glasses = document.querySelector(".glasses");
    if (!links.length || !glasses) return;

    let touches = 0;

    function handleContactTouch() {
      touches += 1;
      if (touches === links.length) {
        glasses.classList.add("show");
        window.setTimeout(() => {
          glasses.classList.remove("show");
        }, 2500);
      }
    }

    links.forEach((contact) => {
      contact.addEventListener("mouseover", handleContactTouch, { once: true });
    });
  }

  function initFontSizeControls() {
    const decBtn = document.querySelector('[data-font-action="dec"]');
    const incBtn = document.querySelector('[data-font-action="inc"]');
    if (!(decBtn instanceof HTMLButtonElement) || !(incBtn instanceof HTMLButtonElement)) return;

    const root = document.documentElement;
    const computed = window.getComputedStyle(root).fontSize;
    const initial = Number.parseInt(computed, 10);
    let fontSize = clamp(
      Number.isFinite(initial) ? initial : FONT_SIZE_MIN,
      FONT_SIZE_MIN,
      FONT_SIZE_MAX
    );

    function apply() {
      root.style.fontSize = `${fontSize}px`;
      decBtn.disabled = fontSize <= FONT_SIZE_MIN;
      incBtn.disabled = fontSize >= FONT_SIZE_MAX;
      decBtn.setAttribute("aria-disabled", String(decBtn.disabled));
      incBtn.setAttribute("aria-disabled", String(incBtn.disabled));
    }

    decBtn.addEventListener("click", () => {
      fontSize = clamp(fontSize - FONT_SIZE_STEP, FONT_SIZE_MIN, FONT_SIZE_MAX);
      apply();
    });

    incBtn.addEventListener("click", () => {
      fontSize = clamp(fontSize + FONT_SIZE_STEP, FONT_SIZE_MIN, FONT_SIZE_MAX);
      apply();
    });

    apply();
  }

  function initLanguageControls() {
    const buttons = Array.from(document.querySelectorAll(".lang-btn[data-lang]")).filter(
      (el) => el instanceof HTMLButtonElement
    );
    if (!buttons.length) return;

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (lang !== "ru" && lang !== "en") return;
        setLang(lang);
        applyTranslations(lang);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initEasterEgg();
    initFontSizeControls();
    initLanguageControls();
    applyTranslations(getLang());
  });
})();

