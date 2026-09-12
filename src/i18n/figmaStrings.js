/**
 * All user-visible copy for the Figma-style invitation page (hy = Armenian, en = English).
 */

const scheduleEn = [
  {
    time: "10:00",
    datetime: "2026-10-26T10:00:00",
    title: "Groom's home",
    place: "Family gathering and blessing",
    detail: "The groom gets ready, surrounded by family and close friends.",
    tag: "Groom",
  },
  {
    time: "12:00",
    datetime: "2026-10-26T12:00:00",
    title: "Bride's home",
    place: "Family gathering and blessing",
    detail:
      "The bride waits for the groom's arrival, surrounded by her loved ones.",
    tag: "Bride",
  },
  {
    time: "14:00",
    datetime: "2026-10-26T14:00:00",
    title: "Wedding ceremony",
    place: "Surp Mariam Astvatsatsin Church, Nork Marash",
    detail:
      "We exchange our vows surrounded by family and friends. Please silence phones and enjoy the moment with us.",
    tag: "Vows",
  },
  {
    time: "17:00",
    datetime: "2026-10-26T17:00:00",
    title: "Civil ceremony",
    place: "Vivaldi Hall",
    detail: "The official registration of our marriage.",
    tag: "Registration",
  },
  {
    time: "17:30",
    datetime: "2026-10-26T17:30:00",
    title: "Reception",
    place: "",
    detail: "The celebration continues with family and friends.",
    tag: "Feast",
  },
];

const scheduleHy = [
  {
    time: "10:00",
    datetime: "2026-10-26T10:00:00",
    title: "Փեսայի տուն",
    place: "Հավաքույթ և օրհնանք փեսայի ընտանիքում",
    detail: "Փեսան պատրաստվում է իր հարազատների և մտերիմ ընկերների հետ։",
    tag: "Փեսա",
  },
  {
    time: "12:00",
    datetime: "2026-10-26T12:00:00",
    title: "Հարսի տուն",
    place: "Հավաքույթ և օրհնանք հարսի ընտանիքում",
    detail: "Հարսը սպասում է փեսայի ժամանմանը՝ շրջապատված իր հարազատներով։",
    tag: "Հարս",
  },
  {
    time: "14:00",
    datetime: "2026-10-26T14:00:00",
    title: "Պսակադրություն",
    place: "Մարիամ Աստվածածին եկեղեցի, Նորք Մարաշ",
    detail:
      "Մենք խոստումներ կտանք մեր ընտանիքի և ընկերների ներկայությամբ։ Խնդրում ենք անջատել հեռախոսների ձայնը և վայելել այս պահը մեզ հետ։",
    tag: "Երդում",
  },
  {
    time: "17:00",
    datetime: "2026-10-26T17:00:00",
    title: "Զագսի արարողություն",
    place: "Վիվալդի Հոլլ",
    detail: "Ամուսնության պաշտոնական գրանցում։",
    tag: "Գրանցում",
  },
  {
    time: "17:30",
    datetime: "2026-10-26T17:30:00",
    title: "Տոնական Խնջույք",
    place: "",
    detail: "Տոնակատարությունը շարունակվում է հարազատների և ընկերների հետ։",
    tag: "Տոնական Խնջույք",
  },
];

const scheduleRu = [
  {
    time: "10:00",
    datetime: "2026-10-26T10:00:00",
    title: "Дом жениха",
    place: "Сбор и благословение в семье жениха",
    detail: "Жених готовится в окружении родных и близких друзей.",
    tag: "Жених",
  },
  {
    time: "12:00",
    datetime: "2026-10-26T12:00:00",
    title: "Дом невесты",
    place: "Сбор и благословение в семье невесты",
    detail: "Невеста ждёт жениха в окружении своих близких.",
    tag: "Невеста",
  },
  {
    time: "14:00",
    datetime: "2026-10-26T14:00:00",
    title: "Венчание",
    place: "Церковь Сурб Мариам Аствацацин, Норк Мараш",
    detail:
      "Мы обменяемся клятвами в окружении семьи и друзей. Пожалуйста, переведите телефоны в беззвучный режим и насладитесь этим моментом вместе с нами.",
    tag: "Обеты",
  },
  {
    time: "17:00",
    datetime: "2026-10-26T17:00:00",
    title: "Регистрация брака",
    place: "Vivaldi Hall",
    detail: "Официальная регистрация нашего брака.",
    tag: "Регистрация",
  },
  {
    time: "17:30",
    datetime: "2026-10-26T17:30:00",
    title: "Банкет",
    place: "",
    detail: "Праздник продолжается в кругу семьи и друзей.",
    tag: "Банкет",
  },
];

const paletteWomenEn = [
  { hex: "#7a8c7e", name: "Sage" },
  { hex: "#b8918d", name: "Blush" },
  { hex: "#c4a574", name: "Champagne" },
  { hex: "#b8d4e3", name: "Light blue" },
  { hex: "#8b7d82", name: "Dusty mauve" },
  { hex: "#4a6f5c", name: "Eucalyptus" },
  { hex: "#cb6c75", name: "Rose" },
  { hex: "#f5d4cf", name: "Petal pink" },
];

const paletteWomenHy = [
  { hex: "#7a8c7e", name: "Շալֆեյ (Sage)" },
  { hex: "#b8918d", name: "Մուգ վարդագույն (Blush)" },
  { hex: "#c4a574", name: "Շամպայն" },
  { hex: "#b8d4e3", name: "Թեթև կապույտ" },
  { hex: "#8b7d82", name: "Մուգ մանուշակագույն" },
  { hex: "#4a6f5c", name: "Եվկալիպտ" },
  { hex: "#cb6c75", name: "Վարդագույն" },
  { hex: "#f5d4cf", name: "Բաց վարդագույն" },
];

const paletteMenEn = [
  { hex: "#1b3022", name: "Forest" },
  { hex: "#3d5244", name: "Moss" },
  { hex: "#2a3540", name: "Midnight" },
  { hex: "#1a1a1a", name: "Black" },
  { hex: "#4a4a48", name: "Charcoal" },
  { hex: "#d4c4a8", name: "Sand" },
];

const paletteMenHy = [
  { hex: "#1b3022", name: "Անտառագույն" },
  { hex: "#3d5244", name: "Մամուռ" },
  { hex: "#2a3540", name: "Կեսգիշեր" },
  { hex: "#1a1a1a", name: "Սև" },
  { hex: "#4a4a48", name: "Մուգ մոխրագույն" },
  { hex: "#d4c4a8", name: "Ավազագույն" },
];

const paletteWomenRu = [
  { hex: "#7a8c7e", name: "Шалфей" },
  { hex: "#b8918d", name: "Тёмный румянец" },
  { hex: "#c4a574", name: "Шампанское" },
  { hex: "#b8d4e3", name: "Светло-голубой" },
  { hex: "#8b7d82", name: "Темно-лиловый" },
  { hex: "#4a6f5c", name: "Эвкалипт" },
  { hex: "#cb6c75", name: "Розовый" },
  { hex: "#f5d4cf", name: "Нежно-розовый" },
];

const paletteMenRu = [
  { hex: "#1b3022", name: "Лесной" },
  { hex: "#3d5244", name: "Мох" },
  { hex: "#2a3540", name: "Полночь" },
  { hex: "#1a1a1a", name: "Черный" },
  { hex: "#4a4a48", name: "Угольный" },
  { hex: "#d4c4a8", name: "Песочный" },
];

export const figmaByLang = {
  en: {
    nav: {
      ariaLabel: "Primary",
      home: "Home",
      story: "Story",
      details: "Details",
      attire: "Attire",
      schedule: "Schedule",
      roots: "Roots",
      rsvp: "RSVP",
    },
    logo: { first: "Andranik", second: "Anushik" },
    hero: {
      ariaSection: "Welcome",
      kicker: "You are invited to the wedding of",
      title: "Andranik & Anushik",
      dateLine: "October 26, 2026",
      countdownIntro: "Now only time keeps us apart, and all that remains is",
      thankYouPassed: "With love, thank you for celebrating with us.",
      days: "Days",
      hours: "Hours",
      mins: "Mins",
      chevronAria: "Scroll to story",
      coverAlt:
        "Illustration of an outdoor wedding reception, long table in an orchard with string lights",
    },
    story: {
      eyebrow: "Our Journey",
      heading: "How we found each other, and kept choosing one another.",
      lead: [
        "It began in the most ordinary way, during a work meeting in the office, where a conversation lingered just a little longer than expected and the professional line quietly softened into curiosity, then friendship, and eventually something neither of us saw coming. What started as routine grew into a connection no agenda or calendar could predict, unfolding naturally until a simple, real-life moment turned everything into a shared future, honest, unexpected, and deeply ours.",
      ],
      altPortrait: "Andranik and Anushik, portrait",
    },
    events: {
      eyebrow: "The Celebration",
      title: "Where and When",
      ceremonyTitle: "The Ceremony",
      ceremonyQuote:
        "A sacred union amidst the soft whispers of stone and spirit.",
      celebrationTitle: "The Celebration",
      celebrationQuote:
        "An elegant evening of vows, toasts, and dancing at Vivaldi Hall.",
      getDirections: "Get directions",
      ceremonyVenue: "Surp Mariam Astvatsatsin Church",
      ceremonyAddress: "Nork Marash, Yerevan, Armenia",
      receptionVenue: "Vivaldi Hall",
      receptionAddress: "Yerevan, Armenia",
      mapAltCeremony: "Surp Mariam Astvatsatsin Church, Nork Marash, Yerevan",
      mapAltReception: "Vivaldi Hall, Yerevan",
    },
    attire: {
      eyebrow: "Dress the part",
      title: "What to wear & which colours feel at home",
      leadWomenMark: "Ladies",
      leadWomenText: ", please avoid black, red, white, and cream.",
      leadMenMark: "Gentlemen",
      leadMenText: ", formal attire is appreciated.",
      codeKicker: "",
      codeTitle: "",
      codeP1:
        "Think of the day in two chapters: the ceremony at Saint Anna, then celebration among the gardens and halls of Art Village. Long or midi dresses, tailored suits, and polished separates all feel at home, we love when you dress up a little, in whatever shape that takes for you.",
      codeP2:
        "Layers are your friend: June light can be warm, and the evening may cool once the sun drops. Nothing has to match perfectly; we care most that you feel comfortable moving from stone and pew to lawn, terrace, and dance floor without a second thought.",
      bullet1:
        "Fabrics that breathe: linen, silk, light wool, crepe, anything that drapes and moves with you through a long, happy day",
      bullet2:
        "Heels are welcome; a block heel, wedge, or elegant flat will be kinder on grass and gravel between venues",
      bullet3:
        "For suits, black is absolutely welcome, alongside navy, charcoal, greens, or anything in the palette below. A well-fitted jacket and trousers (or refined separates) photographs beautifully beside softer dress tones",
      bullet4:
        "A wrap, shawl, or light jacket for after sunset, especially if you run cool when the music starts",
      bullet5:
        "Small bag or clutch is plenty; you won't need to carry much once you're with us",
      paletteKicker: "Palette",
      paletteTitle: "Colours we're dreaming of",
      forHer: "For her",
      forHim: "For him",
      womenAria: "Suggested colours for women",
      menAria: "Suggested colours for men",
      paletteWomen: paletteWomenEn,
      paletteMen: paletteMenEn,
    },
    schedule: {
      eyebrow: "The Day Unfolds",
      title: "Wedding day schedule",
      sub: "Everything you need to know about where to be and when, times are a gentle guide; we'll keep you looked after from arrival to send-off.",
      rows: scheduleEn,
    },
    roots: {
      eyebrow: "Two families, one canopy",
      heading: "Rooted together",
      subline: "Growing a new branch of family.",
      lead: "For us, marriage is more than a vow between two people. It gathers the stories, tables, and traditions we each grew up with, two family trees leaning close until their branches meet, and something altogether new has room to grow.",
      quote:
        "We carry the love that raised us into the home we're building side by side.",
      li1: "Honoring the parents and elders who taught us how to love well.",
      li2: "Celebrating cousins, siblings, and friends who already feel like kin.",
      li3: "Looking ahead to the memories we'll make, anniversaries, holidays, and ordinary Tuesdays.",
      altPortrait: "Andranik and Anushik, hand in hand by the water",
    },
    rsvp: {
      eyebrow: "RSVP",
      heading: "Kindly confirm your attendance",
      intro:
        "Please confirm your attendance and fill out the form below by October 5, 2026.",
      nameLabel: "First name",
      surnameLabel: "Last name",
      guestOfLabel: "Whose guest are you",
      guestOfGroom: "Groom's",
      guestOfBride: "Bride's",
      guestOfBoth: "Both's",
      guestCountLabel: "Number of guests",
      songLabel: "Request a song for the dance floor",
      attendingYes: "I'll be there",
      attendingNo: "Sorry, I can't make it",
      submit: "Confirm",
      submitting: "Sending…",
      successTitle: "Thank you!",
      successMessage: "Your response has been recorded. We can't wait to celebrate with you.",
      errorMessage: "Something went wrong sending your response. Please try again.",
      requiredError: "Please fill in your name, surname, and let us know if you're attending.",
    },
    footer: {
      names: "Andranik & Anushik",
      legal: "© 2026 Andranik & Anushik. Made with love.",
    },
  },

  hy: {
    nav: {
      ariaLabel: "Գլխավոր նավիգացիա",
      home: "Գլխավոր",
      story: "Պատմություն",
      details: "Մանրամասներ",
      attire: "Դրես-կոդ",
      schedule: "Ծրագիր",
      roots: "Արմատներ",
      rsvp: "Հաստատում",
    },
    logo: { first: "Անդրանիկ", second: "Անուշիկ" },
    hero: {
      ariaSection: "Բարի գալուստ",
      kicker: "Սիրով հրավիրում ենք մեր հարսանիքին",
      title: "Անդրանիկ և Անուշիկ",
      dateLine: "26 հոկտեմբերի 2026",
      countdownIntro: "Հիմա մեզ բաժանողը միայն ժամանակն է, որին մնաց՝",
      thankYouPassed:
        "Սիրով շնորհակալ ենք, որ մեզ հետ կիսեցիք մեր ուրախությունը։",
      days: "Օր",
      hours: "Ժամ",
      mins: "Րոպե",
      chevronAria: "Սահեցնել դեպի պատմությունը",
      coverAlt:
        "Նկարազարդում՝ բաց երկնքի տակ հարսանեկան ընթրիք, երկար սեղան այգում, լույսերի շղթաներով",
    },
    story: {
      eyebrow: "Մեր ճանապարհը",
      heading: "Ինչպես գտանք և ընտրեցինք միմյանց։",
      lead: [
        "Մի պատմություն, որը սկսվեց դպրոցական տարիքից։",
        "«Երբ առաջին անգամ մտա դպրոց, իմ աչքին միայն դու երեւացիր…Ա+ Ա = ❤️» Այս խոսքերն ասվել են դեռ 16 տարի առաջ՝ 15.01.2010թ …",
        "Տրվեց Մի հարց, որի պատասխանը ուշացավ…",
        "Անցան տարիներ, ընկերությունը դարձավ սեր, իսկ սերը՝ շուտով կդառնա ընտանիք։",
        "16 տարի անց, Աստծո կամոք, մենք նորից գտանք իրար։ Այն, ինչ սկսվել էր դպրոցական տարիներին, այսօր դարձել է մեր ամենասիրելի պատմությունը, որը տարիների ընթացքում չավարտվեց, այլ պարզապես սպասեց իր շարունակությանը։",
        "Եվ հիմա մենք պատրաստ ենք գրել մեր պատմության ամենագեղեցիկ էջը՝ մեր ընտանիքի սկիզբը։ 🤍",
        "Սիրուց ծնված այս պատմության հաջորդ էջը կգրվի հենց այն օրը, երբ մենք միմյանց կասենք՝ «Այո՛»։ 26.10.26",
      ],
      altPortrait: "Անդրանիկ և Անուշիկ",
    },
    events: {
      eyebrow: "Տոնակատարությունը",
      title: "Որտեղ և Երբ",
      ceremonyTitle: "Պսակադրություն",
      ceremonyQuote: "Սուրբ միություն՝ քարի ու հոգու նուրբ շշնջյունների ներքո։",
      celebrationTitle: "Տոնական Խնջույք",
      celebrationQuote:
        "Էլեգանտ երեկո՝ երդումներով, կենացներով և պարով՝ Վիվալդի Հոլլում։",
      getDirections: "Ցույց տալ երթուղին",
      ceremonyVenue: "Մարիամ Աստվածածին եկեղեցի",
      ceremonyAddress: "Նորք Մարաշ, Երևան, Հայաստան",
      receptionVenue: "Վիվալդի Հոլլ",
      receptionAddress: "Երևան, Հայաստան",
      mapAltCeremony: "Մարիամ Աստվածածին եկեղեցի, Նորք Մարաշ, Երևան",
      mapAltReception: "Վիվալդի Հոլլ, Երևան",
    },
    attire: {
      eyebrow: "Դրես-կոդ",
      title: "Ինչ հագնել և որ գույներն ընտրել",
      leadWomenMark: "Կանայք",
      leadWomenText: ", խնդրում ենք չհագնել սև, կարմիր, սպիտակ և կրեմային գույներ։",
      leadMenMark: "Տղամարդիկ",
      leadMenText: ", խնդրում ենք ներկայանալ պաշտոնական հագուստով",
      codeKicker: "",
      codeTitle: "",
      codeP1:
        "Մեր օրը բաղկացած է լինելու երկու մասից. պսակադրություն Սուրբ Աննա եկեղեցում, ապա տոնակատարություն Art Village-ի այգիներում։ Երկար կամ միդի զգեստները, նրբաճաշակ կոստյումներն ու համադրված հագուստները շատ տեղին կլինեն. մեզ դուր է գալիս, երբ դուք գեղեցիկ եք հագնվում՝ պահպանելով ձեր անհատական ոճը։",
      codeP2:
        "Խորհուրդ ենք տալիս հագնվել շերտերով, քանի որ հունիսյան արևը կարող է տաք լինել, իսկ երեկոյան՝ մայրամուտից հետո, օդը կզովանա։ Ամեն ինչ չէ, որ պետք է կատարյալ համադրված լինի. մեզ համար ամենակարևորն այն է, որ դուք ձեզ հարմարավետ զգաք՝ անհոգ քայլելով եկեղեցու բակից դեպի խոտածածկ այգիներ և պարահարթակ։",
      bullet1:
        "Շնչող գործվածքներ՝ վուշ (linen), մետաքս, թեթև բուրդ, կրեպ. այնպիսի կտորներ, որոնք թեթև են և հարմարավետ երկար ու ուրախ օրվա համար։",
      bullet2:
        "Բարձրակրունկները ողջունելի են, սակայն հաստ կրունկով կամ հարթ տակացուով կոշիկները շատ ավելի հարմար կլինեն խոտածածկի և քարերի վրա քայլելիս։",
      bullet3:
        "Կոստյումների դեպքում սև գույնը միանշանակ ընդունելի է՝ մուգ կապույտի, մուգ մոխրագույնի, կանաչի կամ ներքևում նշված գունապնակի ցանկացած այլ գույնի հետ մեկտեղ։",
      bullet4:
        "Շալ կամ թեթև բաճկոն մայրամուտից հետո հագնելու համար, հատկապես երբ երաժշտությունը սկսվի և երեկոն զովանա։",
      bullet5: "Փոքրիկ պայուսակը կամ կլատչը միանգամայն բավական են։",
      paletteKicker: "Գունապնակ",
      paletteTitle: "Գույներ, որոնք մենք պատկերացնում ենք",
      forHer: "Կանանց համար",
      forHim: "Տղամարդկանց համար",
      womenAria: "Առաջարկվող գույներ կանանց համար",
      menAria: "Առաջարկվող գույներ տղամարդկանց համար",
      paletteWomen: paletteWomenHy,
      paletteMen: paletteMenHy,
    },
    schedule: {
      eyebrow: "Օրվա ընթացքը",
      title: "Հարսանեկան ծրագիր",
      sub: "Ամեն ինչ, որ պետք է իմանաք ժամերի և վայրերի մասին։ Ժամերը մոտավոր են, բայց մենք կհոգանք ձեր մասին՝ հյուրերի ժամանումից մինչև երեկոյի ավարտ։",
      rows: scheduleHy,
    },
    roots: {
      eyebrow: "Երկու ընտանիք, մեկ սաղարթ",
      heading: "Միավորված արմատներ",
      subline: "Միասին ստեղծելով նոր ընտանիք։",
      lead: "Մեզ համար ամուսնությունը ավելին է, քան պարզապես երդում երկու մարդու միջև։ Այն միավորում է պատմությունները, ավանդույթներն ու մեր մանկության հուշերը՝ երկու ընտանեկան ծառեր, որոնք մոտենում են իրար, մինչև ճյուղերը միահյուսվեն, և տեղ բացվի նորի համար։",
      quote:
        "Այն սերը, որով մեզ մեծացրել են, մենք բերում ենք այն տուն, որը միասին ենք կառուցում։",
      li1: "Շնորհակալ ենք մեր ծնողներին ու մեծերին, որ մեզ սովորեցրին ճշմարիտ սիրել։",
      li2: "Տոնում ենք մեր քույրերի, եղբայրների, զարմիկների և ընկերների հետ, որոնք արդեն հարազատ են դարձել։",
      li3: "Անհամբեր սպասում ենք այն հուշերին, տարեդարձերին, տոներին ու հասարակ երեքշաբթիներին, որոնք դեռ պիտի ստեղծենք։",
      altPortrait: "Անդրանիկ և Անուշիկ, ձեռք ձեռքի ջրի եզերքին",
    },
    rsvp: {
      eyebrow: "Հաստատում",
      heading: "Խնդրում ենք հաստատել Ձեր ներկայությունը",
      intro: "Լրացնել հարցաթերթիկը մինչև 20.10.2026թ.։",
      nameLabel: "Անուն",
      surnameLabel: "Ազգանուն",
      guestOfLabel: "Ում հյուրն եք",
      guestOfGroom: "Փեսայի",
      guestOfBride: "Հարսի",
      guestOfBoth: "Երկուսի",
      guestCountLabel: "Հյուրերի քանակը",
      songLabel: "Գրեք Ձեր նախընտրելի երգը",
      attendingYes: "Կարող եմ մասնակցել միջոցառմանը",
      attendingNo: "Կներեք, չեմ կարողանա գալ",
      submit: "Հաստատել",
      submitting: "Ուղարկվում է…",
      successTitle: "Շնորհակալություն",
      successMessage: "Ձեր պատասխանն ընդունված է։ Անհամբեր սպասում ենք հանդիպելուն։",
      errorMessage: "Ձեր պատասխանն ուղարկելիս սխալ առաջացավ։ Խնդրում ենք փորձել կրկին։",
      requiredError: "Խնդրում ենք լրացնել Ձեր անունը, ազգանունը և հաստատել՝ կմասնակցե՞ք։",
    },
    footer: {
      names: "Անդրանիկ և Անուշիկ",
      legal: "© 2026 Անդրանիկ և Անուշիկ։ Ստեղծված է սիրով։",
    },
  },

  ru: {
    nav: {
      ariaLabel: "Главная навигация",
      home: "Главная",
      story: "История",
      details: "Детали",
      attire: "Дресс-код",
      schedule: "Программа",
      roots: "Корни",
      rsvp: "Подтверждение",
    },
    logo: { first: "Андраник", second: "Анушик" },
    hero: {
      ariaSection: "Добро пожаловать",
      kicker: "С любовью приглашаем на нашу свадьбу",
      title: "Андраник и Анушик",
      dateLine: "26 октября 2026",
      countdownIntro: "Теперь нас разделяет лишь время, которого осталось",
      thankYouPassed:
        "С любовью благодарим за то, что разделили с нами нашу радость.",
      days: "Дней",
      hours: "Часов",
      mins: "Минут",
      chevronAria: "Прокрутить к истории",
      coverAlt:
        "Иллюстрация: свадебный ужин на открытом воздухе, длинный стол в саду, гирлянды огней",
    },
    story: {
      eyebrow: "Наш путь",
      heading: "Как мы нашли и выбрали друг друга.",
      lead: [
        "Всё началось самым обыкновенным образом — на рабочей встрече в офисе, когда разговор затянулся чуть дольше обычного и профессиональная граница незаметно смягчилась в интерес, затем в дружбу и наконец в нечто такое, чего мы сами не ожидали. То, что казалось рутиной, переросло в связь, которую не предугадал бы ни план, ни календарь, и всё развивалось естественно, пока простой, настоящий жизненный миг не превратил всё в общее будущее — честное, неожиданное и по-настоящему наше.",
      ],
      altPortrait: "Андраник и Анушик",
    },
    events: {
      eyebrow: "Торжество",
      title: "Где и когда",
      ceremonyTitle: "Венчание",
      ceremonyQuote: "Священный союз под тихий шепот камня и духа.",
      celebrationTitle: "Банкет",
      celebrationQuote:
        "Изысканный вечер клятв, тостов и танцев в Vivaldi Hall.",
      getDirections: "Проложить маршрут",
      ceremonyVenue: "Церковь Сурб Мариам Аствацацин",
      ceremonyAddress: "Норк Мараш, Ереван, Армения",
      receptionVenue: "Vivaldi Hall",
      receptionAddress: "Ереван, Армения",
      mapAltCeremony: "Церковь Сурб Мариам Аствацацин, Норк Мараш, Ереван",
      mapAltReception: "Vivaldi Hall, Ереван",
    },
    attire: {
      eyebrow: "Дресс-код",
      title: "Что надеть и какие цвета выбрать",
      leadWomenMark: "Дамы",
      leadWomenText: ", просим избегать чёрного, красного, белого и кремового.",
      leadMenMark: "Джентльмены",
      leadMenText: ", будем признательны за формальный наряд.",
      codeKicker: "",
      codeTitle: "",
      codeP1:
        "Наш день будет состоять из двух частей: венчание в церкви Святой Анны, а затем торжество в садах и залах Art Village. Длинные платья или платья миди, элегантные костюмы и продуманные сочетания будут весьма уместны. Нам очень нравится, когда вы красиво наряжаетесь, сохраняя свой индивидуальный стиль.",
      codeP2:
        "Советуем одеваться многослойно, так как июньское солнце может быть жарким, а вечером, после заката, станет прохладно. Не всё должно идеально сочетаться: для нас важнее всего, чтобы вы чувствовали себя комфортно, беззаботно переходя из церковного двора в зеленые сады и на танцпол.",
      bullet1:
        "Дышащие ткани: лен, шелк, легкая шерсть, креп — материалы, которые легки и удобны для длинного, радостного дня.",
      bullet2:
        "Высокие каблуки приветствуются, однако туфли на толстом каблуке, танкетке или плоской подошве будут гораздо удобнее при ходьбе по газону и камням.",
      bullet3:
        "Для костюмов черный цвет однозначно подходит, наряду с темно-синим, темно-серым, зеленым или любым другим цветом из палитры ниже.",
      bullet4:
        "Шаль или легкий пиджак для вечера — особенно когда начнется музыка и станет прохладно.",
      bullet5: "Маленькой сумочки или клатча будет вполне достаточно.",
      paletteKicker: "Палитра",
      paletteTitle: "Цвета, о которых мы мечтаем",
      forHer: "Для нее",
      forHim: "Для него",
      womenAria: "Рекомендуемые цвета для женщин",
      menAria: "Рекомендуемые цвета для мужчин",
      paletteWomen: paletteWomenRu,
      paletteMen: paletteMenRu,
    },
    schedule: {
      eyebrow: "Программа дня",
      title: "Свадебное расписание",
      sub: "Всё, что нужно знать о времени и местах. Время ориентировочное, но мы позаботимся о вас от момента прибытия гостей и до конца вечера.",
      rows: scheduleRu,
    },
    roots: {
      eyebrow: "Две семьи, одна крона",
      heading: "Сплетенные корни",
      subline: "Вместе создавая новую семью.",
      lead: "Для нас брак — это нечто большее, чем просто клятва между двумя людьми. Он объединяет истории, традиции и воспоминания нашего детства. Два семейных древа сближаются, пока их ветви не переплетутся, чтобы освободить место для чего-то нового.",
      quote:
        "Любовь, в которой нас растили, мы приносим в дом, который строим вместе.",
      li1: "Благодарим наших родителей и старших, которые научили нас любить по-настоящему.",
      li2: "Празднуем с нашими братьями, сестрами, кузенами и друзьями, которые уже стали родными.",
      li3: "С нетерпением ждем воспоминаний, годовщин, праздников и простых вторников, которые нам еще предстоит создать.",
      altPortrait: "Андраник и Анушик, держась за руки у воды",
    },
    rsvp: {
      eyebrow: "Подтверждение",
      heading: "Просим подтвердить ваше присутствие",
      intro:
        "Пожалуйста, подтвердите свое присутствие и заполните форму ниже до 5 сентября 2026 г.",
      nameLabel: "Имя",
      surnameLabel: "Фамилия",
      guestOfLabel: "Вы гость со стороны",
      guestOfGroom: "Жениха",
      guestOfBride: "Невесты",
      guestOfBoth: "Обоих",
      guestCountLabel: "Количество гостей",
      songLabel: "Ваша любимая песня для танцпола",
      attendingYes: "Обязательно буду",
      attendingNo: "К сожалению, не смогу",
      submit: "Подтвердить",
      submitting: "Отправка…",
      successTitle: "Спасибо!",
      successMessage: "Ваш ответ получен. Мы очень ждём встречи с вами.",
      errorMessage: "Не удалось отправить ответ. Пожалуйста, попробуйте ещё раз.",
      requiredError: "Пожалуйста, укажите имя, фамилию и подтвердите своё участие.",
    },
    footer: {
      names: "Андраник и Анушик",
      legal: "© 2026 Андраник и Анушик. Сделано с любовью.",
    },
  },
};
