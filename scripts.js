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
        '> Core stack: <span class="black">HTML, CSS, JavaScript, Vue 2/3, Nuxt, Vuex, Pinia</span>',
      summary_additional:
        '> Additional expertise: <span class="black">TypeScript, React, jQuery, Jest, Node.js, micro-frontends</span>',

      experience_title: "Relevant Experience",

      job_rabata_title:
        'FRONT-END DEVELOPER @ RABATA <span class="subtitle_small">/ March 2025 - March 2026</span>',
      job_rabata_dates: "/ March 2025 - March 2026",
      job_rabata_location: "[ England, London, diversified startup ]",
      job_rabata_1: "> Maintained front-end code across multiple company projects",
      job_rabata_2: "> Improved and refactored legacy code",
      job_rabata_3: "> Optimized Core Web Vitals and front-end performance",
      job_rabata_4: "> Worked with video streaming and custom video player functionality",
      job_rabata_5: "> Developed and implemented various product features",

      job_webbankir_title:
        'FRONT-END DEVELOPER @ WEBBANKIR <span class="subtitle_small">/ February 2024 - March 2025</span>',
      job_webbankir_dates: "/ February 2024 - March 2025",
      job_webbankir_location: "[ Russia, Moscow, fintech company ]",
      job_webbankir_1: "> Participated in the development of internal admin panels and company websites",
      job_webbankir_2: "> Improved existing internal tools and web interfaces",
      job_webbankir_3: "> Developed new features for admin panels and customer-facing interfaces",

      job_livetyping_title:
        'FRONT-END DEVELOPER @ LIVETYPING <span class="subtitle_small">/ January 2024 - June 2024</span>',
      job_livetyping_dates: "/ January 2024 - June 2024",
      job_livetyping_location: "[ Russia, outsource, part-time ]",
      job_livetyping_text:
        "Built the front-end of the “Electronic Trade Portal”, an admin panel for managing cargo transportation tenders.\nThe application included authentication, role-based access, tender workflows, status management, tender winners, and related operations.",
      job_livetyping_1: "> Built the front-end from scratch using Vue 3 and Quasar",

      job_marfatech_title:
        'FRONT-END DEVELOPER @ MARFATECH <span class="subtitle_small">/ June 2023 - November 2023</span>',
      job_marfatech_dates: "/ June 2023 - November 2023",
      job_marfatech_location: "[ Cyprus, online casino startup ]",
      job_marfatech_1: "> Developed new features and fixed bugs",
      job_marfatech_2: "> Participated in the migration to a micro-frontend architecture",
      job_marfatech_3: "> Worked in a fast-paced environment with high code quality standards",
      job_marfatech_4:
        "> Used modern front-end technologies: Vue 3, TypeScript, Pinia, and micro-frontends",

      job_akbars_title:
        'FRONT-END DEVELOPER @ AK BARS DIGITAL <span class="subtitle_small">/ June 2022 - June 2023</span>',
      job_akbars_dates: "/ June 2022 - June 2023",
      job_akbars_location: "[ Russia, Kazan, digital division of Ak Bars bank ]",
      job_akbars_1: "> Created components and interfaces with Vue and Nuxt.js",
      job_akbars_2: "> Worked as part of the bank website development team",
      job_akbars_3:
        "> Integrated front-end features with internal bank services and cross-functional teams",

      job_lenvendo_title:
        'FRONT-END DEVELOPER @ LENVENDO <span class="subtitle_small">/ April 2021 - May 2022</span>',
      job_lenvendo_dates: "/ April 2021 - May 2022",
      job_lenvendo_location: "[ Russia, Saint-Petersburg, development of highload projects ]",

      job_lenvendo_eldorado_title: "# Eldorado (retail chain selling consumer electronics)",
      job_lenvendo_eldorado_1: "> Redesigned the Eldoblog portal",
      job_lenvendo_eldorado_2: "> Refactored legacy code",
      job_lenvendo_eldorado_3: "> Improved the front-end development workflow",
      job_lenvendo_eldorado_4: "> Optimized blog performance for Google PageSpeed and real users",
      job_lenvendo_eldorado_5: "> Improved blog accessibility",

      job_lenvendo_magnit_title: "# Magnit (chain of retail stores) ",
      job_lenvendo_magnit_1:
        "> Contributed to the development of marketplace and delivery service interfaces",
      job_lenvendo_magnit_2: "> Maintained and improved a Vue application built with TypeScript",
      job_lenvendo_magnit_3: "> Covered features with Jest tests",
      job_lenvendo_magnit_4: "> Worked with CI processes in a large development team",

      job_lenvendo_sber_title: "# SberMegamarket (online food and goods delivery service) ",
      job_lenvendo_sber_1: "> Built an admin interface for the marketing experiments platform",
      job_lenvendo_sber_2: "> Developed front-end architecture and project setup",
      job_lenvendo_sber_3: "> Implemented CRUD operations for experiments",
      job_lenvendo_sber_4: "> Created a calculator for evaluating marketing experiment feasibility",
      job_lenvendo_sber_5: "> Worked with TypeScript, Vue, Vuex, Vuetify, Axios, and Pug/Stylus",

      job_umi_title:
        'FRONT-END DEVELOPER @ 1C - UMI <span class="subtitle_small">/ April 2018 - April 2021</span>',
      job_umi_dates: "/ April 2018 - April 2021",
      job_umi_location: "[ Russia, Saint-Petersburg, IT company producing website builder]",
      job_umi_1:
        "> Built cross-browser, responsive, pixel-perfect layouts for static and dynamic web pages",
      job_umi_2: "> Developed features with vanilla JavaScript and jQuery",
      job_umi_3: "> Integrated and configured JavaScript libraries",
      job_umi_4: "> Troubleshot and fixed bugs in legacy JavaScript code",
      job_umi_5:
        "> Created HTML templates for a website builder and maintained XSLT/PHP templates",
      job_umi_6: "> Optimized website performance and improved Google PageSpeed scores",
      job_umi_7: "> Created HTML email layouts",

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
        '> Основной стек: <span class="black">HTML, CSS, JavaScript, Vue 2/3, Nuxt, Vuex, Pinia</span>',
      summary_additional:
        '> Дополнительные навыки: <span class="black">TypeScript, React, jQuery, Jest, Node.js, micro-frontends</span>',

      experience_title: "Опыт работы",

      job_rabata_title:
        'FRONT-END DEVELOPER @ RABATA <span class="subtitle_small">/ март 2025 — март 2026</span>',
      job_rabata_dates: "/ март 2025 — март 2026",
      job_rabata_location: "[ Англия, Лондон, продуктовый стартап ]",
      job_rabata_1: "> Поддерживал фронтенд в нескольких проектах компании",
      job_rabata_2: "> Улучшал и рефакторил легаси",
      job_rabata_3: "> Оптимизировал Core Web Vitals и производительность",
      job_rabata_4: "> Работал с видеостримингом и улучшал видеоплеер",
      job_rabata_5: "> Разрабатывал и внедрял продуктовые фичи",

      job_webbankir_title:
        'FRONT-END DEVELOPER @ WEBBANKIR <span class="subtitle_small">/ февраль 2024 — март 2025</span>',
      job_webbankir_dates: "/ февраль 2024 — март 2025",
      job_webbankir_location: "[ Россия, Москва, финтех ]",
      job_webbankir_1: "> Участвовал в разработке внутренних админ-панелей и сайтов компании",
      job_webbankir_2: "> Улучшал существующие внутренние инструменты и веб-интерфейсы",
      job_webbankir_3: "> Делал новые фичи для админок и клиентских интерфейсов",

      job_livetyping_title:
        'FRONT-END DEVELOPER @ LIVETYPING <span class="subtitle_small">/ январь 2024 — июнь 2024</span>',
      job_livetyping_dates: "/ январь 2024 — июнь 2024",
      job_livetyping_location: "[ Россия, аутсорс, проектная работа ]",
      job_livetyping_text:
        "Сделал фронтенд «Электронного торгового портала» — админ-панели для управления тендерами грузоперевозок.\nВ приложении были реализованы: авторизация, роли, статусы, победители и связанные операции с тендерами.",
      job_livetyping_1: "> Собрал фронтенд пректа с нуля на Vue 3 и Quasar",

      job_marfatech_title:
        'FRONT-END DEVELOPER @ MARFATECH <span class="subtitle_small">/ июнь 2023 — ноябрь 2023</span>',
      job_marfatech_dates: "/ июнь 2023 — ноябрь 2023",
      job_marfatech_location: "[ Кипр, стартап онлайн-казино ]",
      job_marfatech_1: "> Разрабатывал фичи и исправлял баги",
      job_marfatech_2: "> Участвовал в миграции на micro-frontend архитектуру",
      job_marfatech_3: "> Работал в быстром темпе с высокими требованиями к качеству продукта",
      job_marfatech_4:
        "> Использовал современные технологии: Vue 3, TypeScript, Pinia и micro-frontends",

      job_akbars_title:
        'FRONT-END DEVELOPER @ AK BARS DIGITAL <span class="subtitle_small">/ июнь 2022 — июнь 2023</span>',
      job_akbars_dates: "/ июнь 2022 — июнь 2023",
      job_akbars_location: "[ Россия, Казань, digital-подразделение банка Ак Барс ]",
      job_akbars_1: "> Делал компоненты и интерфейсы на Vue и Nuxt.js",
      job_akbars_2: "> Работал в команде разработки сайта банка",
      job_akbars_3:
        "> Интегрировал фронтенд-фичи с внутренними сервисами и командами",

      job_lenvendo_title:
        'FRONT-END DEVELOPER @ LENVENDO <span class="subtitle_small">/ апрель 2021 — май 2022</span>',
      job_lenvendo_dates: "/ апрель 2021 — май 2022",
      job_lenvendo_location: "[ Россия, Санкт‑Петербург, аутсорс разработка высоконагруженных проектов]",

      job_lenvendo_eldorado_title: "# Eldorado (ритейл бытовой электроники)",
      job_lenvendo_eldorado_1: "> Сделал редизайн портала Eldoblog",
      job_lenvendo_eldorado_2: "> Рефакторил легаси",
      job_lenvendo_eldorado_3: "> Улучшил процесс фронтенд-разработки",
      job_lenvendo_eldorado_4: "> Оптимизировал блог для Google PageSpeed и реальных пользователей",
      job_lenvendo_eldorado_5: "> Улучшил доступность блога",

      job_lenvendo_magnit_title: "# Magnit (сеть розничных магазинов) ",
      job_lenvendo_magnit_1: "> Участвовал в разработке интерфейсов маркетплейса",
      job_lenvendo_magnit_2: "> Поддерживал и дорабатывал Vue-приложение на TypeScript",
      job_lenvendo_magnit_3: "> Покрывал фичи тестами на Jest",
      job_lenvendo_magnit_4: "> Работал в большой команде разработки и участвовал в CI-процессах.",

      job_lenvendo_sber_title: "# SberMegamarket (доставка еды и товаров) ",
      job_lenvendo_sber_1: "> Сделал интерфейс админ-панели платформы маркетинговых экспериментов",
      job_lenvendo_sber_2: "> Спроектировал фронтенд-архитектуру и настройку проекта",
      job_lenvendo_sber_3: "> Реализовал CRUD для маркетинговых экспериментов",
      job_lenvendo_sber_4: "> Интегрировал калькулятор оценки целесообразности эксперимента",
      job_lenvendo_sber_5: "> Использовал TypeScript, Vue, Vuex, Vuetify, Axios и Pug/Stylus",

      job_umi_title:
        'FRONT-END DEVELOPER @ 1C - UMI <span class="subtitle_small">/ апрель 2018 — апрель 2021</span>',
      job_umi_dates: "/ апрель 2018 — апрель 2021",
      job_umi_location: "[ Россия, Санкт‑Петербург, конструктор сайтов ]",
      job_umi_1:
        "> Делал адаптивную кроссбраузерную вёрстку по pixel-perfect макетам для статических и динамических веб-страниц.",
      job_umi_2: "> Разрабатывал ui фичи на ванильном JavaScript и jQuery",
      job_umi_3: "> Интегрировал и настраивал JavaScript-библиотеки",
      job_umi_4: "> Находил и исправлял баги в легаси проекта",
      job_umi_5:
        "> Делал HTML-шаблоны для билдера и поддерживал шаблоны на XSLT/PHP",
      job_umi_6: "> Оптимизировал производительность и повышал Google PageSpeed",
      job_umi_7: "> Делал HTML-верстку писем",

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

