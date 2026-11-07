/*
 * Products Paramount Consultants builds and runs. Each entry renders
 * /products/<slug> and a card on /products. Facts here must match the live
 * product: they are published with SoftwareApplication structured data.
 *
 * Optional fields: url, highlights, features, steps, builtWith, relatedServices.
 * The detail template omits any section whose data is absent.
 */
const POINT_POKER = "https://www.pointpoker.app";

const products = [
  {
    slug: "point-poker",
    logo: "/products/point-poker.png",
    logoWidth: 192,
    logoHeight: 192,
    name: "Point Poker",
    icon: "Cards",
    url: `${POINT_POKER}/`,
    category: "Planning poker for agile teams",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    inLanguage: ["en", "pt-BR", "ja"],
    free: true,
    metaTitle: "Point Poker: Free Planning Poker for Agile Teams",
    metaDescription:
      "Point Poker is a free online planning poker and scrum poker tool built by Paramount Consultants. Real-time rooms for up to 20 people, no sign-up, three card decks and CSV export for Jira.",
    shortDescription:
      "Free online planning poker for agile and Scrum teams. Create a room in seconds, share the link, and everyone reveals their estimate at once.",
    intro:
      "Point Poker is the planning poker tool we built for our own delivery teams and then opened up to everyone, free. Someone creates a room, pastes the link into the team chat, and everyone picks a card in private. All the cards turn over together, so the first number said out loud never sets the estimate.",
    highlights: [
      { value: "Free", label: "No paid tier, no ads, no card details" },
      { value: "20", label: "People per room, facilitators included" },
      { value: "0", label: "Sign-ups needed to create or join a room" },
      { value: "3", label: "Languages: English, Portuguese and Japanese" },
    ],
    features: [
      {
        title: "Everyone reveals at once",
        body: "Every card stays hidden until the whole table has voted, then they all turn over together. That is the point of planning poker: nobody anchors on the first number.",
        link: { label: "What is planning poker?", href: `${POINT_POKER}/what-is-planning-poker` },
      },
      {
        title: "Three card decks",
        body: "Fibonacci story points from 1 to 34, T-shirt sizes from XS to XXL, or Powers of 2 from 1 to 32. Every deck has a ? card for items nobody can size yet.",
        link: { label: "Fibonacci story points explained", href: `${POINT_POKER}/fibonacci-story-points` },
      },
      {
        title: "Made for Scrum ceremonies",
        body: "A facilitator role that runs the room without voting, a story and task queue, a paste-in backlog and a countdown timer for refinement and sprint planning.",
        link: { label: "Scrum poker online", href: `${POINT_POKER}/scrum-poker` },
      },
      {
        title: "Works alongside Jira",
        body: "No plugin and no admin approval. Paste the backlog in, estimate together, then export the agreed points as CSV for Jira, Linear or Azure DevOps.",
        link: { label: "Planning poker with Jira", href: `${POINT_POKER}/planning-poker-jira` },
      },
      {
        title: "Team Rooms and sprint history",
        body: "A free account reserves two permanent Team Room links a squad reuses every sprint, and keeps a sprint history. Guests never need an account to join.",
        link: { label: "Why everything is free", href: `${POINT_POKER}/pricing` },
      },
      {
        title: "Analytics and exports",
        body: "The facilitator sees where the team disagreed, records the agreed number, and exports the session to the clipboard, a CSV file or a PDF report.",
      },
    ],
    steps: [
      { title: "Create a room", description: "Type a name and pick a deck. The room is ready in about ten seconds." },
      { title: "Share the link", description: "Paste it into Slack, Teams or the meeting chat. People join from any browser, with nothing to install." },
      { title: "Vote in private", description: "Everyone picks a card. Nothing is visible until the whole table has voted." },
      { title: "Reveal and record", description: "The cards turn over together. Discuss the outliers, re-vote if needed, and record the agreed estimate." },
    ],
    builtWithIntro:
      "Point Poker is also the clearest example of how we work: the same engineering, search and delivery practice we bring to client projects, on a product we run ourselves.",
    builtWith: [
      "A React single-page app with real-time rooms on Firebase, and server-side rules that validate every vote against the room's deck",
      "Every public page prerendered with its own metadata and structured data, so search engines read real content rather than an empty app shell",
      "English, Portuguese and Japanese pages at their own URLs with hreflang, so each language reaches the right searchers",
      "A token-based design system, with WCAG AA colour contrast checked automatically in both light and dark themes",
      "More than 500 automated tests, database rules tested against the Firebase emulator, and a production deploy on every push to the main branch",
    ],
    relatedServices: ["full-stack-development", "agile-delivery", "digital-marketing"],
  },

  {
    slug: "sajdatime",
    logo: "/products/sajdatime.png",
    logoWidth: 512,
    logoHeight: 512,
    name: "SajdaTime",
    icon: "NativeApp",
    url: "https://play.google.com/store/apps/details?id=com.sajdatime.app",
    category: "Prayer times for Android and Wear OS",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Android, Wear OS",
    inLanguage: ["en", "ar", "ur", "tr", "id", "bn"],
    free: true,
    metaTitle: "SajdaTime: Prayer Times, Qibla and Adhan Alerts",
    metaDescription:
      "SajdaTime gives Sunni and Shia Muslims prayer times, adhan alerts and a Qibla compass on Android and Wear OS. No ads, no account, and prayer times work offline.",
    shortDescription:
      "Prayer times, adhan alerts and a Qibla compass for Sunni and Shia Muslims, on Android and Wear OS. No ads, no account, and it works offline.",
    intro:
      "SajdaTime works out prayer times on your own phone, so they are right whether you have signal or not. Fajr through Isha, adhan alerts and a Qibla compass for Android, with a watch app and tile for Wear OS. It is pro bono work: built to serve communities rather than a market.",
    highlights: [
      { value: "4.5+", label: "Google Play rating from verified reviewers" },
      { value: "6", label: "Languages: English, Arabic, Urdu, Turkish, Indonesian and Bengali" },
      { value: "Offline", label: "Prayer times calculated on the handset, no signal needed" },
      { value: "0", label: "Ads, accounts or anything to buy" },
    ],
    features: [
      {
        title: "Prayer times and the Hijri date",
        body: "Fajr, Sunrise, Dhuhr, Asr, Maghrib and Isha for wherever you are, with a live countdown to the next prayer and the Islamic calendar date beside today's date.",
      },
      {
        title: "Alerts and adhan",
        body: "For each prayer you choose nothing, a notification, or an alarm loud enough for Fajr, even when the app is closed. A built-in adhan for Sunni and Shia users, or any sound already on your phone.",
      },
      {
        title: "Qibla compass",
        body: "A compass corrected to true north that buzzes once when you are facing the Kaaba.",
      },
      {
        title: "Ramadan and Eid",
        body: "Suhoor and iftar times for your location, a countdown, how long each fast is, and a suhoor reminder 15 to 60 minutes before it ends.",
      },
      {
        title: "Widgets and Wear OS",
        body: "Home screen widgets with a big countdown to the next prayer, and a Wear OS app and tile that either follow your phone or work on their own.",
      },
      {
        title: "PDF timetables",
        body: "Timetables for today, seven days, the month or Ramadan, ready to save or print.",
      },
      {
        title: "Modern, uncluttered design",
        body: "A calm, contemporary interface that follows your phone's light or dark theme, and works with large text and screen readers.",
      },
      {
        title: "Pro bono, and free to use",
        body: "There is no paid tier and nothing to buy. SajdaTime is built pro bono, as a way to put the practice's skills to work for different communities.",
      },
      {
        title: "iPhone version on the way",
        body: "An iOS release is in development and rolling out soon, so the same prayer times, alerts and Qibla reach iPhone users.",
      },
    ],
    relatedServices: ["full-stack-development", "it-project-management"],
  },

  {
    slug: "voicecake",
    logo: "/products/voicecake.svg",
    invert: true,
    // White mark: needs its own dark ground to read on the cream field.
    logoBackdrop: "ink",
    logoWidth: 275,
    logoHeight: 188,
    name: "Voicecake",
    icon: "AutomationBolt",
    url: "https://voicecake.co.uk/",
    category: "AI voice agents for business",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    metaTitle: "Voicecake: AI Voice Agents for Service Businesses",
    metaDescription:
      "Voicecake answers calls, texts, WhatsApp and email for service businesses with AI voice agents. Paramount Consultants built and implemented the software.",
    shortDescription:
      "AI voice agents that answer calls, texts, WhatsApp and email for service businesses, around the clock.",
    intro:
      "Voicecake is a digital colleague for service businesses: it picks up the call, replies to the text, and books the job. Paramount Consultants created and implemented the software behind it.",
    highlights: [
      { value: "24/7", label: "Every call answered, day or night" },
      { value: "4", label: "Channels: calls, texts, WhatsApp and email" },
      { value: "Built by us", label: "Designed, implemented and maintained by Paramount" },
    ],
    features: [
      {
        title: "One assistant, every channel",
        body: "Calls, texts, WhatsApp and email arrive in the same place and get the same answer, so a customer is not left waiting because they chose the wrong channel.",
      },
      {
        title: "Built for service businesses",
        body: "Voicecake is aimed at trades and appointment-led work: heating and air conditioning, roofing and estate agents, where a missed call is a missed job.",
      },
      {
        title: "Implemented, not just installed",
        body: "We built the product and we implement it: the call handling, the booking flow and the handover to your team are set up together rather than left as a template.",
      },
    ],
    relatedServices: ["agentic-ai", "full-stack-development"],
  },

  {
    slug: "metamind-ai",
    logo: "/clients/mind-meta-ai.svg",
    invert: true,
    // White mark: needs its own dark ground to read on the cream field.
    logoBackdrop: "ink",
    logoWidth: 733,
    logoHeight: 816,
    name: "MetaMind AI",
    icon: "Sparkle",
    category: "AI workspace for research and thinking",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    metaTitle: "MetaMind AI: An AI Workspace for Research and Thinking",
    metaDescription:
      "MetaMind AI pulls your notes, documents and conversations into one connected workspace, then answers questions from that material with the source attached. Built by Paramount Consultants.",
    shortDescription:
      "An AI workspace that pulls notes, documents and conversations into one connected picture, then answers questions from that material with the source attached.",
    intro:
      "Most knowledge work is spread across a dozen tabs: notes in one app, documents in another, half the decisions buried in a chat thread. MetaMind AI puts all of it in one workspace and builds the connections between them, so a question about a project is answered from what you actually wrote rather than from a general model's guess. Paramount Consultants built and implemented the product.",
    highlights: [
      { value: "One", label: "Workspace for notes, documents and conversations" },
      { value: "Cited", label: "Every answer points back to the item it came from" },
      { value: "Yours", label: "Answers drawn from your material, not the open web" },
      { value: "Built by us", label: "Designed, implemented and maintained by Paramount" },
    ],
    features: [
      {
        title: "Everything in one place",
        body: "Notes, documents, links and conversation transcripts live in a single workspace instead of four apps that do not know about each other.",
      },
      {
        title: "Connected, not filed",
        body: "Related items are linked as they arrive, so knowledge surfaces itself rather than depending on someone remembering which folder it went into.",
      },
      {
        title: "Ask your own material",
        body: "Questions are answered from what is in your workspace. When the answer is not there, the product says so instead of filling the gap.",
      },
      {
        title: "Source attached",
        body: "Every answer cites the note or document behind it, so a claim can be checked in one click before anyone acts on it.",
      },
      {
        title: "Built on agentic foundations",
        body: "The same coordination layer we build for clients: explicit tool access, permission boundaries and a human checkpoint before anything consequential happens.",
      },
      {
        title: "Implemented, not just installed",
        body: "We build the product and we run the rollout: importing existing material, setting access, and training the people who will use it.",
      },
    ],
    relatedServices: ["agentic-ai", "full-stack-development"],
  },

  {
    slug: "pilgrimcompare",
    logo: "/products/pilgrimcompare.png",
    logoWidth: 263,
    logoHeight: 312,
    // Gold mark with a white cut-out: unreadable on paper, but strong on ink.
    logoBackdrop: "ink",
    name: "PilgrimCompare",
    icon: "Layers",
    url: "https://pilgrimcompare.com/",
    category: "Hajj & Umrah package comparison",
    applicationCategory: "TravelApplication",
    operatingSystem: "Web browser",
    metaTitle: "PilgrimCompare: Compare Hajj and Umrah Packages",
    metaDescription:
      "Compare Umrah and Hajj packages from verified UK operators side by side, then enquire directly. A comparison and enquiry service, not a travel agent, and no payments are taken.",
    shortDescription:
      "Compare Umrah and Hajj packages from verified UK operators side by side, then enquire directly. No payments, ever.",
    intro:
      "PilgrimCompare puts Umrah and Hajj packages from verified UK operators next to each other, so the comparison is on price and what is actually included rather than on which page you landed on. It is a comparison and enquiry service, not a travel agent, and it never takes payment.",
    highlights: [
      { value: "Verified", label: "ATOL numbers checked for every operator" },
      { value: "Side by side", label: "Packages compared on price and inclusions" },
      { value: "Direct", label: "Enquiries go straight to the operator" },
      { value: "0", label: "Payments taken by us, at any point" },
    ],
    features: [
      {
        title: "Verified operators only",
        body: "Every operator listed has its ATOL number checked before it appears, so the list is shorter than a search engine's and more useful for it.",
      },
      {
        title: "Umrah packages now, Hajj for the 2027 season",
        body: "Umrah packages cover Ramadan, school holidays and flexible dates. The Hajj side opens for the 2027 season, with registration of interest open now.",
      },
      {
        title: "Enquire, don't book through us",
        body: "Choosing a package takes you to the operator to enquire. We do not take payment and we are not a travel agent, which keeps the comparison honest.",
      },
      {
        title: "Tools for operators",
        body: "Operators get their own side of the site for listing packages, separate from the public comparison.",
      },
    ],
    relatedServices: ["full-stack-development", "digital-marketing"],
  },
];

export default products;
