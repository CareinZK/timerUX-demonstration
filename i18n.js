(function () {
  const STORAGE_KEY = "timerux-lang";
  const THEME_STORAGE_KEY = "timerux-theme";
  const SUPPORTED = ["en", "ru"];
  const SUPPORTED_THEMES = ["dark", "light"];
  const DEFAULT_LANG = "en";
  const DEFAULT_THEME = "dark";

  const translations = {
    en: {
      "common.langSwitchAria": "Language",
      "common.langEn": "English",
      "common.langRu": "Русский",
      "common.backToChoice": "Back to version selection",
      "common.themeSwitchToLight": "Switch to light theme",
      "common.themeSwitchToDark": "Switch to dark theme",

      "index.title": "TimerUX",
      "index.heading": "TimerUX",
      "index.subheader": "General timer",
      "index.subtitle": "Choose a timer variant you want to test",
      "index.choiceAria": "Choose timer variant",
      "index.goodLabel": "Good user experience",
      "index.badLabel": "Bad user experience",
   
      "good.title": "Timer — Good UX",
      "good.heading": "Timer",
      "good.setupAria": "Set timer duration",
      "good.hours": "Hours",
      "good.minutes": "Minutes",
      "good.seconds": "Seconds",
      "good.presetsAria": "Quick presets",
      "good.preset1min": "1 min",
      "good.preset5min": "5 min",
      "good.preset10min": "10 min",
      "good.preset25min": "25 min",
      "good.btnStart": "Start",
      "good.btnPause": "Pause",
      "good.btnContinue": "Continue",
      "good.btnReset": "Reset",
      "good.btnStop": "Stop",
      "good.statusTimeUp": "Time's up!",
      "good.statusRunning": "Timer running…",
      "good.statusPause": "Paused",
      "good.statusDurationError": "Enter a duration greater than zero.",

      "bad.title": "Timer — Bad UX",
      "bad.heading": "TIMER",
      "bad.lede":
        "INSTRUCTIONS: (1) Choose hours, minutes, and seconds from the dropdown lists. (2) Apply the duration to the device. (3) Confirm the duration. (4) Start the countdown. While running, remaining time is shown in seconds.",
      "bad.panelTitle": "Output register",
      "bad.readoutLoading": "Loading…",
      "bad.hoursLabel": "Hrs qty",
      "bad.minutesLabel": "Min qty",
      "bad.secondsLabel": "Sec qty",
      "bad.applyBtn": "Apply duration to device",
      "bad.confirmLabel":
        "I confirm that starting will begin the countdown and that the duration has already been applied.",
      "bad.restoreBtn": "Restore defaults",
      "bad.ceaseBtn": "Cease time flow",
      "bad.proceedBtn": "Start countdown",
      "bad.proceedBtnExpired": "Start countdown (expired)",
      "bad.proceedBtnRunning": "Start countdown (unavailable while running)",
      "bad.proceedBtnPaused": "Start countdown (resume — confirmation required)",
      "bad.presetsLabel": "Quick load:",
      "bad.preset60": "sixty sec",
      "bad.preset300": "three hundred sec",
      "bad.preset600": "six hundred sec",
      "bad.preset1500": "fifteen hundred sec",
      "bad.note":
        "Pause is only available while running. Reset clears applied values and returns the lists to 0:05:00. When finished, a blocking system notification is shown.",
      "bad.clockFormat": "{{h}} hr {{m}} min {{s}} sec",
      "bad.readoutExpired":
        "<strong>STATUS: EXPIRED</strong><br>Countdown reached zero. Close the system notification, then click “Restore defaults”.",
      "bad.readoutRunningSeconds": "(seconds)",
      "bad.readoutRunningApprox": "Approximate breakdown:",
      "bad.readoutRunningNote": "Note: value updates once per second.",
      "bad.readoutPaused": "PAUSED",
      "bad.readoutPausedHold": "seconds on hold.",
      "bad.readoutPending": "Pending duration (applied):",
      "bad.readoutPendingTotal": "seconds total.",
      "bad.readoutPendingHint": "Check the box below, then start.",
      "bad.readoutNotApplied":
        "Duration not applied. Adjust the lists, then click “Apply duration to device”.",
      "bad.msgDurationZero":
        "Duration must be greater than zero. Adjust the lists and apply again.",
      "bad.msgApplied":
        "Duration applied. Check the confirmation box, then start.",
      "bad.msgConfirmRequired": "You must check the confirmation box before starting.",
      "bad.msgCountdownRunning": "Countdown in progress.",
      "bad.msgApplyFirst": "Apply a duration first.",
      "bad.msgPaused": "Paused. Confirmation is required to resume.",
      "bad.msgPresetLoaded":
        "Preset loaded into lists. Click “Apply duration to device”.",
      "bad.confirmApply": "Apply this duration?",
      "bad.confirmStart": "Start countdown for {{seconds}} seconds?\n\n({{clock}})",
      "bad.confirmResume": "Resume countdown from the paused value?",
      "bad.confirmCease": "Cease time flow?\n\nThe countdown will be paused.",
      "bad.confirmRestore":
        "Restore factory timer settings?\n\nApplied duration will be cleared.",
      "bad.confirmPreset": "Load preset for {{seconds}} seconds?",
      "bad.alertFinished":
        "Timer finished.\n\nThe countdown has ended. Click OK to continue.",
    },
    ru: {
      "common.langSwitchAria": "Язык",
      "common.langEn": "English",
      "common.langRu": "Русский",
      "common.backToChoice": "Вернуться к выбору варианта",
      "common.themeSwitchToLight": "Переключить на светлую тему",
      "common.themeSwitchToDark": "Переключить на тёмную тему",

      "index.title": "TimerUX",
      "index.heading": "TimerUX",
      "index.subheader": "Общий таймер",
      "index.subtitle": "Выберите версию таймера для тестирования",
      "index.choiceAria": "Выбор варианта таймера",
      "index.goodLabel": "Хороший опыт взаимодействия",
      "index.badLabel": "Плохой опыт взаимодействия",

      "good.title": "Таймер — хороший UX",
      "good.heading": "Таймер",
      "good.setupAria": "Установка длительности таймера",
      "good.hours": "Часы",
      "good.minutes": "Минуты",
      "good.seconds": "Секунды",
      "good.presetsAria": "Быстрые пресеты",
      "good.preset1min": "1 мин",
      "good.preset5min": "5 мин",
      "good.preset10min": "10 мин",
      "good.preset25min": "25 мин",
      "good.btnStart": "Старт",
      "good.btnPause": "Пауза",
      "good.btnContinue": "Продолжить",
      "good.btnReset": "Сброс",
      "good.btnStop": "Стоп",
      "good.statusTimeUp": "Время вышло!",
      "good.statusRunning": "Таймер запущен…",
      "good.statusPause": "Пауза",
      "good.statusDurationError": "Укажите длительность больше нуля.",

      "bad.title": "Таймер — плохой UX",
      "bad.heading": "ТАЙМЕР",
      "bad.lede":
        "ИНСТРУКЦИЯ: (1) Выберите количество часов, минут и секунд из выпадающих списков. (2) Зафиксируйте длительность на устройстве. (3) Подтвердите длительность. (4) Запустите обратный отсчёт. Во время работы оставшееся время показывается в виде секунд.",
      "bad.panelTitle": "Регистр вывода",
      "bad.readoutLoading": "Загрузка…",
      "bad.hoursLabel": "Кол-во ч",
      "bad.minutesLabel": "Кол-во мин",
      "bad.secondsLabel": "Кол-во сек",
      "bad.applyBtn": "Зафиксировать длительность на устройстве",
      "bad.confirmLabel":
        "Подтверждаю, что запуск начнёт обратный отсчёт и что длительность уже зафиксирована.",
      "bad.restoreBtn": "Восстановить по умолчанию",
      "bad.ceaseBtn": "Остановить течение времени",
      "bad.proceedBtn": "Запустить обратный отсчёт",
      "bad.proceedBtnExpired": "Запустить обратный отсчёт (истекло)",
      "bad.proceedBtnRunning": "Запустить обратный отсчёт (недоступно во время работы)",
      "bad.proceedBtnPaused":
        "Запустить обратный отсчёт (продолжить — нужно подтверждение)",
      "bad.presetsLabel": "Быстрая загрузка:",
      "bad.preset60": "шестьдесят сек",
      "bad.preset300": "триста сек",
      "bad.preset600": "шестьсот сек",
      "bad.preset1500": "полторы тысячи сек",
      "bad.note":
        "Пауза доступна только во время работы. Сброс очищает зафиксированные значения и возвращает списки к 0:05:00. По завершении показывается блокирующее системное уведомление.",
      "bad.clockFormat": "{{h}} ч. {{m}} мин. {{s}} сек.",
      "bad.readoutExpired":
        "<strong>СТАТУС: ИСТЕКЛО</strong><br>Обратный отсчёт достиг нуля. Закройте системное уведомление, затем нажмите «Восстановить по умолчанию».",
      "bad.readoutRunningSeconds": "(секунд)",
      "bad.readoutRunningApprox": "Приблизительная расшифровка:",
      "bad.readoutRunningNote": "Примечание: значение обновляется раз в секунду.",
      "bad.readoutPaused": "ПАУЗА",
      "bad.readoutPausedHold": "секунд на удержании.",
      "bad.readoutPending": "Ожидающая длительность (зафиксирована):",
      "bad.readoutPendingTotal": "секунд всего.",
      "bad.readoutPendingHint": "Отметьте поле ниже, затем запустите.",
      "bad.readoutNotApplied":
        "Длительность не зафиксирована. Настройте списки, затем нажмите «Зафиксировать длительность на устройстве».",
      "bad.msgDurationZero":
        "Длительность должна быть больше нуля. Настройте списки и зафиксируйте снова.",
      "bad.msgApplied":
        "Длительность зафиксирована. Отметьте поле подтверждения, затем запустите.",
      "bad.msgConfirmRequired": "Перед запуском необходимо отметить поле подтверждения.",
      "bad.msgCountdownRunning": "Обратный отсчёт продолжается.",
      "bad.msgApplyFirst": "Сначала зафиксируйте длительность.",
      "bad.msgPaused": "Пауза. Для продолжения нужно подтверждение.",
      "bad.msgPresetLoaded":
        "Пресет загружен в списки. Нажмите «Зафиксировать длительность на устройстве».",
      "bad.confirmApply": "Зафиксировать эту длительность?\n\n",
      "bad.confirmStart":
        "Запустить обратный отсчёт на {{seconds}} секунд?\n\n({{clock}})",
      "bad.confirmResume": "Продолжить обратный отсчёт с приостановленного значения?",
      "bad.confirmCease": "Остановить течение времени?\n\nОбратный отсчёт будет приостановлен.",
      "bad.confirmRestore":
        "Восстановить заводские настройки таймера?\n\nЗафиксированная длительность будет сброшена.",
      "bad.confirmPreset": "Загрузить пресет на {{seconds}} секунд?",
      "bad.alertFinished":
        "Таймер завершён.\n\nОбратный отсчёт окончен. Нажмите ОК, чтобы продолжить.",
    },
  };

  let currentLang = DEFAULT_LANG;
  let currentTheme = DEFAULT_THEME;

  function getStoredLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.includes(stored)) {
        return stored;
      }
    } catch (_) {
      /* localStorage unavailable */
    }
    return DEFAULT_LANG;
  }

  function persistLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      /* localStorage unavailable */
    }
  }

  function getStoredTheme() {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored && SUPPORTED_THEMES.includes(stored)) {
        return stored;
      }
    } catch (_) {
      /* localStorage unavailable */
    }
    return DEFAULT_THEME;
  }

  function persistTheme(theme) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (_) {
      /* localStorage unavailable */
    }
  }

  function applyTheme(theme) {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    updateThemeToggle();
  }

  function updateThemeToggle() {
    const btn = document.querySelector(".theme-toggle");
    if (!btn) return;

    const isLight = currentTheme === "light";
    const labelKey = isLight ? "common.themeSwitchToDark" : "common.themeSwitchToLight";
    btn.setAttribute("aria-label", t(labelKey));
    btn.setAttribute("aria-pressed", isLight ? "true" : "false");
  }

  function interpolate(template, params) {
    return template.replace(/\{\{(\w+)\}\}/g, (_, key) =>
      params[key] !== undefined ? String(params[key]) : ""
    );
  }

  function t(key, params) {
    const langPack = translations[currentLang] || translations[DEFAULT_LANG];
    const fallback = translations[DEFAULT_LANG];
    const template = langPack[key] ?? fallback[key] ?? key;
    return params ? interpolate(template, params) : template;
  }

  function applyStaticTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria-label")));
    });

    const titleKey = document.body.getAttribute("data-i18n-title");
    if (titleKey) {
      document.title = t(titleKey);
    }

    updateLangSwitch();
    updateThemeToggle();
  }

  function updateLangSwitch() {
    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      const lang = btn.getAttribute("data-lang");
      const pressed = lang === currentLang;
      btn.setAttribute("aria-pressed", pressed ? "true" : "false");
      btn.classList.toggle("is-active", pressed);
    });
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang) || lang === currentLang) {
      return;
    }
    currentLang = lang;
    document.documentElement.lang = lang;
    persistLang(lang);
    applyStaticTranslations();
    document.dispatchEvent(
      new CustomEvent("languagechange", { detail: { lang } })
    );
  }

  function setTheme(theme) {
    if (!SUPPORTED_THEMES.includes(theme) || theme === currentTheme) {
      return;
    }
    currentTheme = theme;
    persistTheme(theme);
    applyTheme(theme);
    document.dispatchEvent(
      new CustomEvent("themechange", { detail: { theme } })
    );
  }

  function toggleTheme() {
    setTheme(currentTheme === "light" ? "dark" : "light");
  }

  function initThemeToggle() {
    const btn = document.querySelector(".theme-toggle");
    if (!btn) return;

    btn.addEventListener("click", toggleTheme);
  }

  function initLangSwitch() {
    const nav = document.querySelector(".lang-switch");
    if (!nav) return;

    nav.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLang(btn.getAttribute("data-lang"));
      });
    });
  }

  function init() {
    currentLang = getStoredLang();
    currentTheme = getStoredTheme();
    document.documentElement.lang = currentLang;
    applyTheme(currentTheme);
    applyStaticTranslations();
    initLangSwitch();
    initThemeToggle();
  }

  window.i18n = {
    t,
    getLang: () => currentLang,
    setLang,
    getTheme: () => currentTheme,
    setTheme,
    toggleTheme,
    init,
  };

  init();
})();
