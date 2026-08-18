const engagementProcess = [
  {
    title: "Discovery",
    description:
      "We start by understanding your systems, your team and what success actually looks like, before we talk about solutions.",
  },
  {
    title: "Plan",
    description:
      "A scoped, sequenced plan with clear milestones, so you know what's being built, in what order, and why.",
  },
  {
    title: "Build",
    description:
      "Work happens in short, visible cycles. You see progress every sprint, not just at the end.",
  },
  {
    title: "Support",
    description:
      "Launch isn't the finish line. We stay close through stabilisation and the first rounds of real usage.",
  },
];

const services = [
  {
    id: 1,
    slug: "agentic-ai",
    icon: "Sparkle",
    title: "Agentic AI Services",
    shortDescription:
      "Coordinated AI agents that plan, act and adapt across your tools, not a single-prompt chatbot.",
    intro:
      "Agentic AI systems don't just answer a question, they coordinate: breaking a goal into steps, calling the tools and data sources they need, checking their own output, and handing off to a person when a decision needs judgement rather than execution. As an AI solution provider, we help you find where that coordination layer is genuinely worth building, and where a simpler automation would do the job for a fraction of the cost.",
    involves: [
      "Workflow mapping to find where multi-step agent coordination actually earns its keep",
      "Agent design with explicit tool access, permissions and checkpoints, so a person stays in control of anything consequential",
      "Integration with the systems you already run: CRMs, ticketing tools, internal APIs and data platforms",
      "Evaluation and monitoring so you can see what an agent did, why, and catch mistakes before they compound",
      "Handover and training so your own team can review, extend and operate the system once we're gone",
    ],
    process: engagementProcess,
  },
  {
    id: 2,
    slug: "adobe-experience-manager",
    icon: "Layers",
    title: "Adobe Experience Manager (AEM) Solutions",
    shortDescription:
      "Implementation, migration and ongoing development for Adobe's enterprise content platform.",
    intro:
      "AEM is a serious piece of infrastructure, and it's usually at the centre of how a large organisation publishes and personalises content across web, mobile and other channels. We work on implementation, migration from legacy CMS platforms, custom component development and headless AEM setups where content needs to reach more than one front end.",
    involves: [
      "New AEM Sites and Assets implementations, scoped to your content and governance model",
      "Migrating existing sites onto AEM without breaking SEO rankings or content structure",
      "Custom component and template development for editors who need flexibility without breaking the design system",
      "Headless AEM architecture, serving content to web, mobile and other channels from one source",
      "Performance, accessibility and Core Web Vitals work on existing AEM instances",
    ],
    process: engagementProcess,
  },
  {
    id: 3,
    slug: "agile-delivery",
    icon: "Cycle",
    title: "Agile Project Delivery",
    shortDescription:
      "Sprint-based delivery with real visibility, so stakeholders see progress rather than promises.",
    intro:
      "Agile only works when it's more than a word in a slide deck. We run delivery in short, accountable cycles: a working backlog, sprint reviews stakeholders actually attend, and a burn-down that reflects what's really happening. Where a team already has its own process, we plug into it rather than replacing it for the sake of it.",
    involves: [
      "Backlog structuring and prioritisation tied to business outcomes, not just ticket volume",
      "Sprint planning, stand-ups and retrospectives run for genuine decision-making, not ceremony",
      "Stakeholder reporting that's honest about risk and scope, not just green ticks",
      "Coaching for teams moving from waterfall or ad hoc delivery into a sprint cadence",
      "Delivery governance for programmes with multiple workstreams running in parallel",
    ],
    process: engagementProcess,
  },
  {
    id: 4,
    slug: "full-stack-development",
    icon: "CodeBrackets",
    title: "Full-Stack Software Development",
    shortDescription:
      "End-to-end engineering across front end, back end and the APIs that connect them.",
    intro:
      "Most projects need someone who can see the whole system, not just one layer of it. We build front ends that feel fast and accessible, back ends and APIs that hold up under real load, and the integrations that connect a product to the rest of your business. We work with modern frameworks and keep the codebase something your own team can maintain after we're gone.",
    involves: [
      "Front-end builds in modern frameworks (React, Next.js and similar), with real attention to performance and accessibility",
      "API design and back-end development, including integration with existing internal systems",
      "Cloud infrastructure and deployment pipelines, sized for what the product actually needs",
      "Code review, documentation and handover practices so the codebase isn't a black box",
      "Ongoing maintenance and feature work once the initial build has shipped",
    ],
    process: engagementProcess,
  },
  {
    id: 5,
    slug: "digital-marketing",
    icon: "TrendingUp",
    title: "Digital Marketing & Strategy",
    shortDescription:
      "SEO, content and campaign work judged by the numbers it actually moves.",
    intro:
      "Marketing work should be answerable to a metric you actually care about, whether that's organic visibility, qualified leads or conversion rate. We do the unglamorous groundwork, technical SEO, information architecture, content strategy, alongside the campaigns, and we report on what changed and why, not just activity for its own sake.",
    involves: [
      "Technical SEO audits and fixes: site structure, page speed, structured data and crawlability",
      "Content strategy built around the questions your audience is actually asking",
      "Campaign planning and execution across search and social channels",
      "Analytics setup so performance is measured against agreed goals, not vanity metrics",
      "Conversion rate work on the pages that carry the most commercial weight",
    ],
    process: engagementProcess,
  },
  {
    id: 6,
    slug: "it-project-management",
    icon: "Gantt",
    title: "IT Project Management",
    shortDescription:
      "Delivery governance, risk ownership and stakeholder reporting for IT programmes that can't afford to drift.",
    intro:
      "Most IT projects don't fail on technology, they fail on governance: nobody owns the risk log, status reports stay green until the week they don't, and stakeholders hear about a slip after it's already happened. We run IT project management as its own discipline, PMO-standard reporting, named risk owners and a delivery cadence sponsors can actually see, whether we're also building the product or sitting inside a programme run alongside your own team and other vendors.",
    involves: [
      "Programme and project governance frameworks, scoped to the size of the work rather than a template built for a much bigger organisation",
      "Risk and issue logs with named owners, mitigation actions and clear escalation thresholds, reviewed on a set cadence rather than after something's gone wrong",
      "Stakeholder reporting and dashboards that show real status, not the version that's easiest to present in a steering meeting",
      "Vendor and supplier coordination when a programme spans more than one delivery partner, so accountability doesn't fall into the gaps between contracts",
      "Budget, resourcing and milestone tracking that gives sponsors an honest read on where the money and time are actually going",
    ],
    process: engagementProcess,
  },
];

export default services;
export { engagementProcess };
