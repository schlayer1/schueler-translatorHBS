// Multilingual translations for the Student UI, Navigation, Actions, Categories & Rotating Greetings
// Languages: de, uk, ru, en, ro, hu

export const ROTATING_GREETINGS = [
  { text: "Ласкаво просимо", lang: "uk", flag: "🇺🇦", name: "Українська" },
  { text: "Добро пожаловать", lang: "ru", flag: "🇷🇺", name: "Русский" },
  { text: "Welcome", lang: "en", flag: "🇬🇧", name: "English" },
  { text: "Bine ai venit", lang: "ro", flag: "🇷🇴", name: "Română" },
  { text: "Üdvözlünk", lang: "hu", flag: "🇭🇺", name: "Magyar" },
  { text: "Willkommen", lang: "de", flag: "🇩🇪", name: "Deutsch" },
];

export const UI_TRANSLATIONS = {
  de: {
    // Navigation
    tabTranslate: "Übersetzen",
    tabPhrases: "Ich sage…",
    tabPhrasesBadge: "Sätze",
    tabSaved: "Gemerkt",
    tabSettings: "Optionen",

    // Header
    offlineIndicator: "Offline",
    onlineIndicator: "Schul-KI",
    appSubtitle: "Schüler-Übersetzer",

    // Onboarding & Welcome
    selectLanguageTitle: "Wähle deine Sprache",
    selectLanguageSubtitle: "In welcher Sprache sprichst du am liebsten?",
    whatIsYourName: "Wie heißt du?",
    nameDescription: "Gib deinen Vornamen ein, damit die App dich persönlich ansprechen kann.",
    namePlaceholder: "Dein Vorname...",
    continueBtn: "Weiter",
    backBtn: "Zurück",
    skipBtn: "Später",
    startBtn: "Jetzt loslegen",
    welcomeTitle: "Schön, dass du da bist",
    welcomeSchool: "Heimbürgeschule Kahla",
    welcomeSubtitle: "Dieser Übersetzer hilft dir im Unterricht, bei Fragen und beim Deutschlernen – auch ganz ohne Internet!",
    cardLanguagesTitle: "6 Schulsprachen",
    cardLanguagesDesc: "Ukrainisch, Russisch, Englisch, Rumänisch und Ungarisch sind sofort offline startklar.",
    cardListenTitle: "Deutsch anhören & üben",
    cardListenDesc: "Tippe auf den blauen Lautsprecher, höre die Aussprache und sprich nach.",
    cardPhrasesTitle: "Ich möchte sagen…",
    cardPhrasesDesc: "Wichtige Schulsätze für den Unterricht: Hilfe, Toilette, Unwohlsein oder Hausaufgaben.",
    cardAiTitle: "Schul-KI",
    cardAiDesc: "Automatisch für dich aktiviert.",
    
    // DaZ Learning Tip
    dazTipTitle: "Tipp zum Deutschlernen",
    dazTipText: "Höre dir die deutsche Übersetzung mit dem blauen Lautsprecher-Knopf an und sprich sie 2–3 Mal laut nach. Das hilft dir, im Unterricht schnell flüssig mitzureden!",
    dazTipPersonal: "Tipp für dich, {name}: Höre dir die deutsche Aussprache mit dem blauen Lautsprecher an und sprich sie 2–3 Mal laut nach. Du schaffst das!",
    hello: "Hallo",
    studentBadge: "Schüler",

    // Translator Action Buttons & Controls
    translateBtn: "Übersetzen",
    translatingBtn: "Übersetze...",
    listenBtn: "Anhören",
    listenGermanBtn: "🇩🇪 Deutsch anhören",
    listenSourceBtn: "Vorlesen",
    copyBtn: "Kopieren",
    copiedBtn: "Kopiert!",
    clearBtn: "Löschen",
    favoriteBtn: "Merken",
    favoritedBtn: "Gemerkt",
    fullscreenBtn: "Großansicht",
    speechInputTooltip: "Sprechen",
    studentTone: "Schüler-Ton",
    parentTone: "Eltern-Ton",
    simplified: "Vereinfacht",
    frequentPairsLabel: "Häufig:",
    speechSpeedTitle: "Sprechgeschwindigkeit",
    practiceTipTitle: "Pädagogischer Praxistipp",

    // School Phrases (Katalog "Ich sage...")
    phrasesTitle: "Ich möchte sagen…",
    phrasesSubtitle: "Wichtige Schulsätze für den Unterricht",
    searchPhrasesPlaceholder: "Satz auf Deutsch oder in deiner Sprache suchen...",
    listenGermanPhrase: "🇩🇪 Deutsch anhören",
    openInTranslator: "Im Übersetzer anpassen",
    bilingualCopy: "Zweisprachig kopieren",
    pronunciationAid: "Lautschrift:",
    customPhraseBadge: "Eigenes",
    addCustomPhraseBtn: "Eigene Redewendung hinzufügen",
    noPhrasesFound: "Keine passenden Sätze gefunden.",

    // Phrase Categories
    catAll: "Alle Sätze",
    catVerstehen: "Verstehen & Fragen",
    catBitten: "Bitten & Erlaubnis",
    catGesundheit: "Mir geht es nicht gut",
    catMaterial: "Hausaufgaben & Sachen",
    catAlltag: "Pause & Mensa",
    catCustom: "Eigene Sätze",

    // Saved View (Gemerkt & Verlauf)
    savedTitle: "Gemerkt & Verlauf",
    savedSubtitle: "Schneller Zugriff auf gespeicherte Schulsätze",
    tabBookmarks: "Lesezeichen",
    tabHistory: "Verlauf",
    clearHistoryBtn: "Verlauf leeren",
    noBookmarksYet: "Noch keine Lesezeichen gespeichert.",
    noBookmarksSub: "Tippe auf das Lesezeichen-Symbol bei einer Übersetzung, um sie hier zu sichern.",
    noHistoryYet: "Noch kein Verlauf vorhanden.",

    // Options View
    settingsTitle: "Optionen & Schüler-Profil",
    settingsSubtitle: "Konfiguration für die Heimbürgeschule Kahla",
    profileTitle: "Mein Schüler-Profil",
    profileRepeatOnboarding: "Sprach-Auswahl wiederholen",
    profileNameLabel: "Dein Vorname",
    profileLangLabel: "Deine Muttersprache",
    saveSettingsBtn: "Einstellungen speichern",
    settingsSavedSuccess: "Einstellungen gespeichert!",

    // Student Quick Situation Chips (1-Klick Vorlagen im Übersetzer)
    chips: [
      { label: "Nicht verstanden", icon: "❓", text: "Entschuldigung, ich habe das nicht verstanden. Können Sie das bitte langsamer wiederholen?" },
      { label: "Toilette", icon: "🚻", text: "Darf ich bitte kurz zur Toilette gehen?" },
      { label: "Hilfe bei Aufgabe", icon: "🙋‍♂️", text: "Ich brauche bitte Hilfe bei dieser Aufgabe. Ich weiß nicht, was ich tun soll." },
      { label: "Bauchweh / Krank", icon: "🩺", text: "Mir geht es gar nicht gut. Mein Kopf und mein Bauch tun weh." },
      { label: "Buch vergessen", icon: "📖", text: "Ich habe leider mein Schulbuch zu Hause vergessen. Darf ich mit jemandem zusammen reinschauen?" },
      { label: "Stift / Lineal leihen", icon: "✏️", text: "Kann mir bitte jemand einen Stift oder ein Lineal leihen?" },
    ]
  },

  uk: {
    // Navigation
    tabTranslate: "Перекладач",
    tabPhrases: "Фрази",
    tabPhrasesBadge: "Урок",
    tabSaved: "Збережене",
    tabSettings: "Налаштування",

    // Header
    offlineIndicator: "Офлайн",
    onlineIndicator: "Шкільний ШІ",
    appSubtitle: "Перекладач учня",

    // Onboarding & Welcome
    selectLanguageTitle: "Обери свою мову",
    selectLanguageSubtitle: "Якою мовою тобі зручніше спілкуватися?",
    whatIsYourName: "Як тебе звати?",
    nameDescription: "Введи своє ім'я, щоб ми могли вітати тебе особисто.",
    namePlaceholder: "Твоє ім'я...",
    continueBtn: "Далі",
    backBtn: "Назад",
    skipBtn: "Пізніше",
    startBtn: "Почати",
    welcomeTitle: "Раді бачити тебе",
    welcomeSchool: "Heimbürgeschule Kahla",
    welcomeSubtitle: "Цей перекладач допоможе тобі на уроках, ставити запитання та вчити німецьку мову – навіть без інтернету!",
    cardLanguagesTitle: "6 шкільних мов",
    cardLanguagesDesc: "Українська, російська, англійська, румунська та угорська готові до роботи офлайн.",
    cardListenTitle: "Слухай та вчи німецьку",
    cardListenDesc: "Натискай синій динамік, слухай вимову та повторюй уголос.",
    cardPhrasesTitle: "Я хочу сказати…",
    cardPhrasesDesc: "Готові фрази для уроків: допомога з завданнями, вийти в туалет, погане самопочуття або зошит.",
    cardAiTitle: "Шкільний ШІ",
    cardAiDesc: "Автоматично активовано для тебе.",
    
    // DaZ Learning Tip
    dazTipTitle: "Порада для вивчення німецької",
    dazTipText: "Послухай німецький переклад за допомогою синього динаміка та повтори 2–3 рази вголос. Це допоможе тобі впевнено говорити на уроках!",
    dazTipPersonal: "Порада для тебе, {name}: Послухай вимову німецькою через синій динамік і повтори кілька разів уголос. У тебе все вийде!",
    hello: "Привіт",
    studentBadge: "Учень",

    // Translator Action Buttons & Controls
    translateBtn: "Перекласти",
    translatingBtn: "Перекладаю...",
    listenBtn: "Слухати",
    listenGermanBtn: "🇩🇪 Слухати німецьку",
    listenSourceBtn: "Озвучити",
    copyBtn: "Копіювати",
    copiedBtn: "Скопійовано!",
    clearBtn: "Очистити",
    favoriteBtn: "Зберегти",
    favoritedBtn: "Збережено",
    fullscreenBtn: "На весь екран",
    speechInputTooltip: "Говорити голосом",
    studentTone: "Тон учня",
    parentTone: "Тон батьків",
    simplified: "Спрощено",
    frequentPairsLabel: "Часті:",
    speechSpeedTitle: "Швидкість мовлення",
    practiceTipTitle: "Порада для уроку",

    // School Phrases (Katalog "Ich sage...")
    phrasesTitle: "Я хочу сказати…",
    phrasesSubtitle: "Важливі шкільні фрази для уроків",
    searchPhrasesPlaceholder: "Пошук фрази німецькою або твоєю мовою...",
    listenGermanPhrase: "🇩🇪 Слухати німецьку",
    openInTranslator: "Змінити в перекладачі",
    bilingualCopy: "Копіювати двома мовами",
    pronunciationAid: "Вимова:",
    customPhraseBadge: "Своє",
    addCustomPhraseBtn: "Додати власну фразу",
    noPhrasesFound: "Відповідних фраз не знайдено.",

    // Phrase Categories
    catAll: "Всі фрази",
    catVerstehen: "Розуміння та питання",
    catBitten: "Прохання та дозвіл",
    catGesundheit: "Мені погано",
    catMaterial: "Домашні завдання та речі",
    catAlltag: "Перерва та їдальня",
    catCustom: "Власні фрази",

    // Saved View (Gemerkt & Verlauf)
    savedTitle: "Збережене та історія",
    savedSubtitle: "Швидкий доступ до збережених шкільних фраз",
    tabBookmarks: "Закладки",
    tabHistory: "Історія",
    clearHistoryBtn: "Очистити історію",
    noBookmarksYet: "Ще немає збережених закладок.",
    noBookmarksSub: "Натисни на значок закладки біля перекладу, щоб зберегти його тут.",
    noHistoryYet: "Історія поки що порожня.",

    // Options View
    settingsTitle: "Налаштування та профіль учня",
    settingsSubtitle: "Конфігурація для Heimbürgeschule Kahla",
    profileTitle: "Мій профіль учня",
    profileRepeatOnboarding: "Повторити вибір мови",
    profileNameLabel: "Твоє ім'я",
    profileLangLabel: "Твоя рідна мова",
    saveSettingsBtn: "Зберегти налаштування",
    settingsSavedSuccess: "Налаштування збережено!",

    // Student Quick Situation Chips (1-Klick Vorlagen im Übersetzer)
    chips: [
      { label: "Не зрозумів(-ла)", icon: "❓", text: "Вибачте, я не зрозумів(-ла). Чи можете ви повторити повільніше?" },
      { label: "До туалету", icon: "🚻", text: "Чи можу я вийти до туалету, будь ласка?" },
      { label: "Потрібна допомога", icon: "🙋‍♂️", text: "Мені потрібна допомога з цим завданням. Я не знаю, що робити." },
      { label: "Погано почуваюся", icon: "🩺", text: "Мені погано. У мене болить голова та живіт." },
      { label: "Забув(-ла) підручник", icon: "📖", text: "Я забув(-ла) підручник удома. Чи можу я подивитися разом з сусідом?" },
      { label: "Позичити ручку", icon: "✏️", text: "Чи може хтось позичити мені ручку або лінійку, будь ласка?" },
    ]
  },

  ru: {
    // Navigation
    tabTranslate: "Переводчик",
    tabPhrases: "Фразы",
    tabPhrasesBadge: "Урок",
    tabSaved: "Сохранённое",
    tabSettings: "Настройки",

    // Header
    offlineIndicator: "Офлайн",
    onlineIndicator: "Школьный ИИ",
    appSubtitle: "Переводчик ученика",

    // Onboarding & Welcome
    selectLanguageTitle: "Выбери свой язык",
    selectLanguageSubtitle: "На каком языке тебе удобнее общаться?",
    whatIsYourName: "Как тебя зовут?",
    nameDescription: "Введи своё имя, чтобы мы могли обращаться к тебе лично.",
    namePlaceholder: "Твоё имя...",
    continueBtn: "Далее",
    backBtn: "Назад",
    skipBtn: "Позже",
    startBtn: "Начать",
    welcomeTitle: "Рады тебя видеть",
    welcomeSchool: "Heimbürgeschule Kahla",
    welcomeSubtitle: "Этот переводчик поможет тебе на уроках, задавать вопросы и учить немецкий язык – даже без интернета!",
    cardLanguagesTitle: "6 школьных языков",
    cardLanguagesDesc: "Украинский, русский, английский, румынский и венгерский работают сразу офлайн.",
    cardListenTitle: "Слушай и учи немецкий",
    cardListenDesc: "Нажимай синий динамик, слушай произношение и повторяй вслух.",
    cardPhrasesTitle: "Я хочу сказать…",
    cardPhrasesDesc: "Важные фразы для уроков: помощь, туалет, плохое самочувствие или забытая тетрадь.",
    cardAiTitle: "Школьный ИИ",
    cardAiDesc: "Автоматически активирован для тебя.",
    
    // DaZ Learning Tip
    dazTipTitle: "Совет по изучению немецкого",
    dazTipText: "Послушай перевод на немецкий через синий динамик и повтори 2–3 раза вслух. Это поможет тебе быстрее заговорить на уроках!",
    dazTipPersonal: "Совет для тебя, {name}: Послушай произношение на немецком через синий динамик и повтори вслух. У тебя всё получится!",
    hello: "Привет",
    studentBadge: "Ученик",

    // Translator Action Buttons & Controls
    translateBtn: "Перевести",
    translatingBtn: "Перевожу...",
    listenBtn: "Слушать",
    listenGermanBtn: "🇩🇪 Слушать немецкий",
    listenSourceBtn: "Озвучить",
    copyBtn: "Копировать",
    copiedBtn: "Скопировано!",
    clearBtn: "Очистить",
    favoriteBtn: "Сохранить",
    favoritedBtn: "Сохранено",
    fullscreenBtn: "На весь экран",
    speechInputTooltip: "Говорить голосом",
    studentTone: "Тон ученика",
    parentTone: "Тон родителей",
    simplified: "Упрощённо",
    frequentPairsLabel: "Частые:",
    speechSpeedTitle: "Скорость речи",
    practiceTipTitle: "Совет для урока",

    // School Phrases (Katalog "Ich sage...")
    phrasesTitle: "Я хочу сказать…",
    phrasesSubtitle: "Важные школьные фразы для уроков",
    searchPhrasesPlaceholder: "Поиск фразы на немецком или твоём языке...",
    listenGermanPhrase: "🇩🇪 Слушать немецкий",
    openInTranslator: "Изменить в переводчике",
    bilingualCopy: "Копировать на двух языках",
    pronunciationAid: "Произношение:",
    customPhraseBadge: "Своё",
    addCustomPhraseBtn: "Добавить собственную фразу",
    noPhrasesFound: "Подходящих фраз не найдено.",

    // Phrase Categories
    catAll: "Все фразы",
    catVerstehen: "Понимание и вопросы",
    catBitten: "Просьбы и разрешение",
    catGesundheit: "Мне нехорошо",
    catMaterial: "Домашние задания и вещи",
    catAlltag: "Перемена и столовая",
    catCustom: "Свои фразы",

    // Saved View (Gemerkt & Verlauf)
    savedTitle: "Сохранённое и история",
    savedSubtitle: "Быстрый доступ к сохранённым школьным фразам",
    tabBookmarks: "Закладки",
    tabHistory: "История",
    clearHistoryBtn: "Очистить историю",
    noBookmarksYet: "Пока нет сохранённых закладок.",
    noBookmarksSub: "Нажми на значок закладки у перевода, чтобы сохранить его здесь.",
    noHistoryYet: "История пока пуста.",

    // Options View
    settingsTitle: "Настройки и профиль ученика",
    settingsSubtitle: "Конфигурация для Heimbürgeschule Kahla",
    profileTitle: "Мой профиль ученика",
    profileRepeatOnboarding: "Повторить выбор языка",
    profileNameLabel: "Твоё имя",
    profileLangLabel: "Твой родной язык",
    saveSettingsBtn: "Сохранить настройки",
    settingsSavedSuccess: "Настройки сохранены!",

    // Student Quick Situation Chips (1-Klick Vorlagen im Übersetzer)
    chips: [
      { label: "Не понял(а)", icon: "❓", text: "Извините, я не понял(а). Не могли бы вы повторить медленнее?" },
      { label: "В туалет", icon: "🚻", text: "Можно выйти в туалет, пожалуйста?" },
      { label: "Нужна помощь", icon: "🙋‍♂️", text: "Мне нужна помощь с этим заданием. Я не знаю, что делать." },
      { label: "Плохо себя чувствую", icon: "🩺", text: "Мне нехорошо. У меня болит голова и живот." },
      { label: "Забыл(а) учебник", icon: "📖", text: "Я забыл(а) учебник дома. Можно мне посмотреть с соседом?" },
      { label: "Одолжить ручку", icon: "✏️", text: "Кто-нибудь может одолжить мне ручку или линейку, пожалуйста?" },
    ]
  },

  en: {
    // Navigation
    tabTranslate: "Translate",
    tabPhrases: "Phrases",
    tabPhrasesBadge: "Class",
    tabSaved: "Saved",
    tabSettings: "Settings",

    // Header
    offlineIndicator: "Offline",
    onlineIndicator: "School AI",
    appSubtitle: "Student Translator",

    // Onboarding & Welcome
    selectLanguageTitle: "Choose your language",
    selectLanguageSubtitle: "Which language do you prefer to speak?",
    whatIsYourName: "What is your name?",
    nameDescription: "Enter your first name so we can address you personally.",
    namePlaceholder: "Your first name...",
    continueBtn: "Continue",
    backBtn: "Back",
    skipBtn: "Later",
    startBtn: "Get Started",
    welcomeTitle: "Welcome",
    welcomeSchool: "Heimbürgeschule Kahla",
    welcomeSubtitle: "This translator helps you participate in class, ask questions, and learn German – completely offline too!",
    cardLanguagesTitle: "6 School Languages",
    cardLanguagesDesc: "Ukrainian, Russian, English, Romanian, and Hungarian work 100% offline out of the box.",
    cardListenTitle: "Listen & Practice German",
    cardListenDesc: "Tap the blue speaker button, listen to the pronunciation, and repeat out loud.",
    cardPhrasesTitle: "I want to say…",
    cardPhrasesDesc: "Helpful classroom phrases: asking for help, restroom, feeling unwell, or homework.",
    cardAiTitle: "School AI",
    cardAiDesc: "Automatically active for you.",
    
    // DaZ Learning Tip
    dazTipTitle: "Tip for learning German",
    dazTipText: "Listen to the German translation with the blue speaker button and repeat it out loud 2–3 times. This helps you speak fluently in class!",
    dazTipPersonal: "Tip for you, {name}: Listen to the German pronunciation with the blue speaker and repeat it out loud. You can do it!",
    hello: "Hello",
    studentBadge: "Student",

    // Translator Action Buttons & Controls
    translateBtn: "Translate",
    translatingBtn: "Translating...",
    listenBtn: "Listen",
    listenGermanBtn: "🇩🇪 Listen to German",
    listenSourceBtn: "Speak out",
    copyBtn: "Copy",
    copiedBtn: "Copied!",
    clearBtn: "Clear",
    favoriteBtn: "Save",
    favoritedBtn: "Saved",
    fullscreenBtn: "Full Screen",
    speechInputTooltip: "Speak",
    studentTone: "Student tone",
    parentTone: "Parent tone",
    simplified: "Simplified",
    frequentPairsLabel: "Frequent:",
    speechSpeedTitle: "Speech rate",
    practiceTipTitle: "Classroom tip",

    // School Phrases (Katalog "Ich sage...")
    phrasesTitle: "I want to say…",
    phrasesSubtitle: "Important classroom phrases",
    searchPhrasesPlaceholder: "Search phrase in German or your language...",
    listenGermanPhrase: "🇩🇪 Listen to German",
    openInTranslator: "Edit in translator",
    bilingualCopy: "Copy bilingual",
    pronunciationAid: "Pronunciation:",
    customPhraseBadge: "Custom",
    addCustomPhraseBtn: "Add custom phrase",
    noPhrasesFound: "No matching phrases found.",

    // Phrase Categories
    catAll: "All Phrases",
    catVerstehen: "Understanding & Questions",
    catBitten: "Requests & Permission",
    catGesundheit: "Feeling unwell",
    catMaterial: "Homework & Supplies",
    catAlltag: "Break & Cafeteria",
    catCustom: "Custom phrases",

    // Saved View (Gemerkt & Verlauf)
    savedTitle: "Saved & History",
    savedSubtitle: "Quick access to saved classroom phrases",
    tabBookmarks: "Bookmarks",
    tabHistory: "History",
    clearHistoryBtn: "Clear history",
    noBookmarksYet: "No bookmarks saved yet.",
    noBookmarksSub: "Tap the bookmark icon on any translation to save it here.",
    noHistoryYet: "History is empty.",

    // Options View
    settingsTitle: "Options & Student Profile",
    settingsSubtitle: "Configuration for Heimbürgeschule Kahla",
    profileTitle: "My Student Profile",
    profileRepeatOnboarding: "Repeat language selection",
    profileNameLabel: "Your first name",
    profileLangLabel: "Your native language",
    saveSettingsBtn: "Save settings",
    settingsSavedSuccess: "Settings saved!",

    // Student Quick Situation Chips (1-Klick Vorlagen im Übersetzer)
    chips: [
      { label: "Didn't understand", icon: "❓", text: "Excuse me, I didn't understand that. Could you please repeat it more slowly?" },
      { label: "Restroom", icon: "🚻", text: "May I please go to the restroom?" },
      { label: "Need help", icon: "🙋‍♂️", text: "I need help with this task, please. I don't know what to do." },
      { label: "Feeling unwell", icon: "🩺", text: "I'm not feeling well. My head and stomach hurt." },
      { label: "Forgot my book", icon: "📖", text: "I forgot my textbook at home. May I look together with someone?" },
      { label: "Borrow a pen", icon: "✏️", text: "Could someone please lend me a pen or a ruler?" },
    ]
  },

  ro: {
    // Navigation
    tabTranslate: "Traducere",
    tabPhrases: "Fraze utile",
    tabPhrasesBadge: "Ore",
    tabSaved: "Salvate",
    tabSettings: "Opțiuni",

    // Header
    offlineIndicator: "Offline",
    onlineIndicator: "AI Școlar",
    appSubtitle: "Traducător elev",

    // Onboarding & Welcome
    selectLanguageTitle: "Alege limba ta",
    selectLanguageSubtitle: "În ce limbă preferi să vorbești?",
    whatIsYourName: "Cum te cheamă?",
    nameDescription: "Introdu prenumele tău pentru a te saluta personal.",
    namePlaceholder: "Prenumele tău...",
    continueBtn: "Mai departe",
    backBtn: "Înapoi",
    skipBtn: "Mai târziu",
    startBtn: "Începe acum",
    welcomeTitle: "Bine ai venit",
    welcomeSchool: "Heimbürgeschule Kahla",
    welcomeSubtitle: "Acest traducător te ajută la ore, să pui întrebări și să înveți limba germană – chiar și fără internet!",
    cardLanguagesTitle: "6 limbi școlare",
    cardLanguagesDesc: "Ucraineană, rusă, engleză, română și maghiară funcționează direct offline.",
    cardListenTitle: "Ascultă și exersează germana",
    cardListenDesc: "Apasă pe difuzorul albastru, ascultă pronunția și repetă cu voce tare.",
    cardPhrasesTitle: "Vreau să spun…",
    cardPhrasesDesc: "Fraze utile pentru ore: ajutor la teme, baie, stare de rău sau rechizite.",
    cardAiTitle: "AI Școlar",
    cardAiDesc: "Activat automat pentru tine.",
    
    // DaZ Learning Tip
    dazTipTitle: "Sfat pentru învățarea limbii germane",
    dazTipText: "Ascultă traducerea în germană cu butonul albastru de difuzor și repet-o de 2–3 ori cu voce tare. Te va ajuta să vorbești fluent la ore!",
    dazTipPersonal: "Sfat pentru tine, {name}: Ascultă pronunția în germană cu difuzorul albastru și repet-o cu voce tare. Vei reuși!",
    hello: "Salut",
    studentBadge: "Elev",

    // Translator Action Buttons & Controls
    translateBtn: "Tradu",
    translatingBtn: "Se traduce...",
    listenBtn: "Ascultă",
    listenGermanBtn: "🇩🇪 Ascultă germana",
    listenSourceBtn: "Redă sonor",
    copyBtn: "Copiază",
    copiedBtn: "Copiat!",
    clearBtn: "Șterge",
    favoriteBtn: "Salvează",
    favoritedBtn: "Salvat",
    fullscreenBtn: "Ecran complet",
    speechInputTooltip: "Vorbește la microfon",
    studentTone: "Ton elev",
    parentTone: "Ton părinți",
    simplified: "Simplificat",
    frequentPairsLabel: "Frecvente:",
    speechSpeedTitle: "Viteza vorbirii",
    practiceTipTitle: "Sfat util",

    // School Phrases (Katalog "Ich sage...")
    phrasesTitle: "Vreau să spun…",
    phrasesSubtitle: "Fraze importante pentru ore",
    searchPhrasesPlaceholder: "Caută fraze în germană sau în limba ta...",
    listenGermanPhrase: "🇩🇪 Ascultă germana",
    openInTranslator: "Ajustează în traducător",
    bilingualCopy: "Copiază bilingv",
    pronunciationAid: "Pronunție:",
    customPhraseBadge: "Propriu",
    addCustomPhraseBtn: "Adaugă o frază proprie",
    noPhrasesFound: "Nu s-au găsit fraze potrivite.",

    // Phrase Categories
    catAll: "Toate frazele",
    catVerstehen: "Înțelegere și întrebări",
    catBitten: "Cereri și permisiune",
    catGesundheit: "Nu mă simt bine",
    catMaterial: "Teme și rechizite",
    catAlltag: "Pauză și cantină",
    catCustom: "Fraze proprii",

    // Saved View (Gemerkt & Verlauf)
    savedTitle: "Salvate și istoric",
    savedSubtitle: "Acces rapid la frazele școlare salvate",
    tabBookmarks: "Semne de carte",
    tabHistory: "Istoric",
    clearHistoryBtn: "Șterge istoricul",
    noBookmarksYet: "Niciun semn de carte salvat încă.",
    noBookmarksSub: "Apasă pe semnul de carte la o traducere pentru a o salva aici.",
    noHistoryYet: "Istoricul este gol.",

    // Options View
    settingsTitle: "Opțiuni și profil elev",
    settingsSubtitle: "Configurație pentru Heimbürgeschule Kahla",
    profileTitle: "Profilul meu de elev",
    profileRepeatOnboarding: "Repetă selecția limbii",
    profileNameLabel: "Prenumele tău",
    profileLangLabel: "Limba ta maternă",
    saveSettingsBtn: "Salvează setările",
    settingsSavedSuccess: "Setările au fost salvate!",

    // Student Quick Situation Chips (1-Klick Vorlagen im Übersetzer)
    chips: [
      { label: "Nu am înțeles", icon: "❓", text: "Mă scuzați, nu am înțeles. Puteți vă rog să repetați mai rar?" },
      { label: "La baie", icon: "🚻", text: "Pot să merg la baie, vă rog?" },
      { label: "Am nevoie de ajutor", icon: "🙋‍♂️", text: "Am nevoie de ajutor la acest exercițiu. Nu știu ce trebuie să fac." },
      { label: "Nu mă simt bine", icon: "🩺", text: "Nu mă simt deloc bine. Mă doare capul și burta." },
      { label: "Am uitat cartea", icon: "📖", text: "Mi-am uitat manualul acasă. Pot să mă uit cu un coleg?" },
      { label: "Împrumută un pix", icon: "✏️", text: "Îmi poate împrumuta cineva un pix sau o riglă, vă rog?" },
    ]
  },

  hu: {
    // Navigation
    tabTranslate: "Fordító",
    tabPhrases: "Mondatok",
    tabPhrasesBadge: "Óra",
    tabSaved: "Mentettek",
    tabSettings: "Beállítások",

    // Header
    offlineIndicator: "Offline",
    onlineIndicator: "Iskolai MI",
    appSubtitle: "Diák fordító",

    // Onboarding & Welcome
    selectLanguageTitle: "Válaszd ki a nyelved",
    selectLanguageSubtitle: "Milyen nyelven beszélsz a legszívesebben?",
    whatIsYourName: "Hogy hívnak?",
    nameDescription: "Add meg a nevedet, hogy személyesen üdvözölhessünk.",
    namePlaceholder: "A keresztneved...",
    continueBtn: "Tovább",
    backBtn: "Vissza",
    skipBtn: "Később",
    startBtn: "Kezdés",
    welcomeTitle: "Üdvözlünk",
    welcomeSchool: "Heimbürgeschule Kahla",
    welcomeSubtitle: "Ez a fordító segít neked az órákon, kérdéseket feltenni és németül tanulni – akár internet nélkül is!",
    cardLanguagesTitle: "6 iskolai nyelv",
    cardLanguagesDesc: "Az ukrán, orosz, angol, román és magyar azonnal offline is használható.",
    cardListenTitle: "Hallgasd és gyakorold a németet",
    cardListenDesc: "Koppints a kék hangszóró gombra, hallgasd meg a kiejtést és ismételd el hangosan.",
    cardPhrasesTitle: "Azt szeretném mondani…",
    cardPhrasesDesc: "Fontos mondatok az órákra: segítségkérés, mosdó, rossz közérzet vagy házi feladat.",
    cardAiTitle: "Iskolai MI",
    cardAiDesc: "Automatikusan bekapcsolva.",
    
    // DaZ Learning Tip
    dazTipTitle: "Tipp a némettanuláshoz",
    dazTipText: "Hallgasd meg a német fordítást a kék hangszóróval, és ismételd el 2–3-szor hangosan. Ez segít abban, hogy gyorsan magabiztosan beszélj az órákon!",
    dazTipPersonal: "Tipp neked, {name}: Hallgasd meg a kiejtést a kék hangszóróval, és ismételd el hangosan. Ügyes leszel!",
    hello: "Szia",
    studentBadge: "Diák",

    // Translator Action Buttons & Controls
    translateBtn: "Fordítás",
    translatingBtn: "Fordítás...",
    listenBtn: "Meghallgatás",
    listenGermanBtn: "🇩🇪 Német meghallgatása",
    listenSourceBtn: "Felolvasás",
    copyBtn: "Másolás",
    copiedBtn: "Másolva!",
    clearBtn: "Törlés",
    favoriteBtn: "Mentés",
    favoritedBtn: "Mentve",
    fullscreenBtn: "Teljes képernyő",
    speechInputTooltip: "Beszédfelismerés",
    studentTone: "Diák stílus",
    parentTone: "Szülői stílus",
    simplified: "Egyszerűsített",
    frequentPairsLabel: "Gyakori:",
    speechSpeedTitle: "Beszédsebesség",
    practiceTipTitle: "Hasznos tanács",

    // School Phrases (Katalog "Ich sage...")
    phrasesTitle: "Azt szeretném mondani…",
    phrasesSubtitle: "Fontos iskolai mondatok az órákra",
    searchPhrasesPlaceholder: "Mondat keresése németül vagy a nyelveden...",
    listenGermanPhrase: "🇩🇪 Német meghallgatása",
    openInTranslator: "Módosítás a fordítóban",
    bilingualCopy: "Kétnyelvű másolás",
    pronunciationAid: "Kiejtés:",
    customPhraseBadge: "Saját",
    addCustomPhraseBtn: "Saját kifejezés hozzáadása",
    noPhrasesFound: "Nem található megfelelő mondat.",

    // Phrase Categories
    catAll: "Minden mondat",
    catVerstehen: "Megértés és kérdések",
    catBitten: "Kérések és engedély",
    catGesundheit: "Nem érzem jól magam",
    catMaterial: "Házi feladat és tanszerek",
    catAlltag: "Szünet és menza",
    catCustom: "Saját mondatok",

    // Saved View (Gemerkt & Verlauf)
    savedTitle: "Mentettek és előzmények",
    savedSubtitle: "Gyors elérés a mentett iskolai mondatokhoz",
    tabBookmarks: "Könyvjelzők",
    tabHistory: "Előzmények",
    clearHistoryBtn: "Előzmények törlése",
    noBookmarksYet: "Még nincsenek mentett könyvjelzők.",
    noBookmarksSub: "Koppints a könyvjelző ikonra bármely fordításnál a mentéshez.",
    noHistoryYet: "Az előzmények még üresek.",

    // Options View
    settingsTitle: "Beállítások és diákprofil",
    settingsSubtitle: "Heimbürgeschule Kahla konfiguráció",
    profileTitle: "A diákprofilom",
    profileRepeatOnboarding: "Nyelvválasztás megismétlése",
    profileNameLabel: "A keresztneved",
    profileLangLabel: "Az anyanyelved",
    saveSettingsBtn: "Beállítások mentése",
    settingsSavedSuccess: "Beállítások elmentve!",

    // Student Quick Situation Chips (1-Klick Vorlagen im Übersetzer)
    chips: [
      { label: "Nem értettem", icon: "❓", text: "Elnézést, nem értettem. Meg tudná ismételni lassabban, kérem?" },
      { label: "Mosdóba menni", icon: "🚻", text: "Kimehetek a mosdóba, kérem?" },
      { label: "Segítség kell", icon: "🙋‍♂️", text: "Segítségre van szükségem ezzel a feladattal. Nem tudom, mit kell tennem." },
      { label: "Rosszul vagyok", icon: "🩺", text: "Egyáltalán nem érzem jól magam. Fáj a fejem és a hasam." },
      { label: "Otthon maradt a könyvem", icon: "📖", text: "Otthon felejtettem a tankönyvemet. Benézhetek valaki mellé?" },
      { label: "Tollat kérni kölcsön", icon: "✏️", text: "Tudna valaki kölcsönadni egy tollat vagy vonalzót, kérem?" },
    ]
  }
};

export function getUIText(lang = 'de') {
  return UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.de;
}
