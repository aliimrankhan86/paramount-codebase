/*
 * Products Paramount Consultants builds and runs itself. Each entry renders
 * /products/<slug> and a card on /products. Facts here must match the live
 * product: they are published with SoftwareApplication structured data.
 */
const POINT_POKER = "https://www.pointpoker.app";

const products = [
  {
    slug: "point-poker",
    name: "Point Poker",
    icon: "Cards",
    url: `${POINT_POKER}/`,
    category: "Planning poker for agile teams",
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
];

export default products;
