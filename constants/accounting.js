/*
  Accounting practice content.

  Sourcing rules for anything added here:
  - Descriptions describe what a service is. They must not claim outcomes,
    turnaround times, fees, client numbers or qualifications.
  - `lead` facts come from https://sterlingbackoffice.com/about.html#team and
    must stay traceable to that page until confirmed directly by Mohsin.
  - `promise` is deliberately bounded (channel, subject, response time). Do not
    widen it without a written commitment.
*/

const promise = {
  title: "Unlimited support, as standard.",
  body: "When something comes up — a letter from HMRC, a question about a figure, a decision you are not sure about — you call or email your accountant. No meter running, no extra charge.",
  commitment: "We reply within one working day, Monday to Friday.",
  exclusion:
    "Larger pieces of work — a restructure, a special project, tax planning beyond your engagement — are scoped and quoted separately, always before anything starts.",
};

const lead = {
  name: "Mohsin Mustafa",
  role: "Accounting practice lead",
  qualification: "ACCA",
  intro:
    "Mohsin leads the accounting practice. He has spent 22+ years on the gap between the books being done and the owner knowing what to do next.",
  bio: [
    "As Head of Client Services at Accountimize he ran full-charge bookkeeping, virtual-CFO and tax compliance for US and Canadian clients. He then led FP&A, due diligence and valuation work at Forte Healthcare.",
    "He has filed with HMRC, the IRS, the CRA and the UAE Federal Tax Authority, and designed the close and reporting process around the questions business owners actually ask.",
  ],
  focus: ["Cash flow and forecasting", "Virtual-CFO reporting", "Cross-border tax"],
  // The practice is delivered alongside Sterling Back Office, a US back-office
  // practice. This is disclosed rather than buried: see `disclosure`.
  disclosure:
    "Paramount Consultants is a UK firm, and most of our team is UK-based. Mohsin also co-founded Sterling Back Office, a US back-office practice in McLean, Virginia.",
};

const engagement = [
  {
    step: "01",
    title: "A call, not a pitch",
    description:
      "We look at what you have now — the software, the deadlines, what is behind and what is being missed. No charge for this conversation.",
  },
  {
    step: "02",
    title: "Scope in writing",
    description:
      "You get the work, the responsibilities and the fee agreed in writing before anything starts. If we are not the right fit, we say so.",
  },
  {
    step: "03",
    title: "Books brought current",
    description:
      "Catch-up and clean-up first where needed, so reporting starts from figures you can trust rather than a backlog.",
  },
  {
    step: "04",
    title: "A rhythm you can plan around",
    description:
      "A fixed monthly cycle: reconciled books, management accounts, and a short written note on what changed and why.",
  },
];

const areas = [
  {
    slug: "bookkeeping",
    title: "Bookkeeping & accounts",
    shortDescription:
      "The monthly cycle that keeps your numbers current, reconciled and ready for a decision.",
    intro:
      "Most businesses do not have an accounting problem, they have a timing problem: the books are behind, so every decision is made on last quarter's numbers. This is the foundation the rest of the practice runs on — clean, reconciled books, closed on a rhythm, with reporting you can actually read.",
    services: [
      {
        slug: "bookkeeping",
        title: "Bookkeeping & Accounting",
        summary:
          "Day-to-day entries, reconciliations and a monthly close, so your books are current rather than historical.",
        includes: [
          "Sales and purchase ledger upkeep",
          "Bank, card and merchant reconciliations",
          "Monthly close with a short written summary",
          "Catch-up and clean-up work where the books have fallen behind",
        ],
      },
      {
        slug: "management-accounts",
        title: "Management accounts",
        summary:
          "Monthly figures with commentary: what changed, what drove it, and what it means before the month is out of date.",
        includes: [
          "Profit and loss, balance sheet and cash position",
          "Budget against actual variance",
          "Plain-English commentary on the movements that matter",
          "A standing review call if you want one",
        ],
      },
      {
        slug: "year-end-accounts",
        title: "Year-end accounts",
        summary:
          "Statutory accounts prepared from books that are already in order, with the schedules your accountant or lender will ask for.",
        includes: [
          "Statutory accounts prepared to the applicable reporting framework",
          "Supporting schedules and working papers",
          "Filings with Companies House where required",
          "Liaison with your auditor or lender if someone else reviews the numbers",
        ],
      },
      {
        slug: "expense-management",
        title: "Expense management",
        summary:
          "A clean process for receipts, cards and staff claims, so nothing reaches year-end uncategorised.",
        includes: [
          "Receipt capture and coding",
          "Company card and staff expense reconciliation",
          "Policy and approval workflow design",
          "Subscription and duplicate-cost review",
        ],
      },
    ],
  },
  {
    slug: "tax",
    title: "Tax",
    shortDescription:
      "Returns filed on time, and advice that arrives before the deadline rather than after it.",
    intro:
      "Tax work is judged on two things: whether it was filed correctly, and whether anyone told you the consequences before you acted. We do both — the returns, and the conversation that should come first.",
    services: [
      {
        slug: "vat-returns",
        title: "VAT returns",
        summary:
          "Preparation and submission of VAT returns, with the reconciliation that catches the difference before HMRC does.",
        includes: [
          "Return preparation from reconciled records",
          "Box-by-box reconciliation to the ledger",
          "Making Tax Digital compliant filing",
          "Support with queries, corrections and voluntary disclosures",
        ],
      },
      {
        slug: "corporation-tax",
        title: "Corporation Tax",
        summary:
          "Computation, return and filing for limited companies, plus the planning questions that belong before year end, not after.",
        includes: [
          "Corporation Tax computations and CT600 preparation",
          "Capital allowances and relief review",
          "Loss relief and group considerations",
          "Payment deadline planning",
        ],
      },
      {
        slug: "tax-compliance-and-advice",
        title: "Tax compliance and advice",
        summary:
          "A named person to ask about a transaction, a structure or an HMRC letter, before you commit to it.",
        includes: [
          "Advice on transactions and structure changes",
          "HMRC correspondence and enquiry support",
          "Deadline tracking across all your obligations",
          "Planning timed around your year, not ours",
        ],
      },
    ],
  },
  {
    slug: "compliance",
    title: "Compliance & company admin",
    shortDescription:
      "Registrations, payroll and statutory filings kept current, so the administrative side never becomes the risk.",
    intro:
      "Compliance failures are rarely dramatic. They are a registration that was never updated, a payroll deadline missed in a busy month, a confirmation statement filed late. This is the work that keeps those from happening.",
    services: [
      {
        slug: "payroll",
        title: "Payroll",
        summary:
          "Payroll run and reported under PAYE, with the deductions, pensions and year-end filings handled alongside it.",
        includes: [
          "Payroll processing and payslips",
          "PAYE reporting under Real Time Information",
          "Pension auto-enrolment administration",
          "P11D and year-end submissions",
        ],
      },
      {
        slug: "company-formation",
        title: "Company formation",
        summary:
          "Setting up a limited company correctly the first time, including the registrations that follow incorporation.",
        includes: [
          "Incorporation with the right share structure",
          "Initial statutory registers and minutes",
          "Registration for Corporation Tax, VAT and PAYE as needed",
          "A short guide to director obligations",
        ],
      },
      {
        slug: "registrations",
        title: "Registrations (CT, VAT, PAYE, PSC)",
        summary:
          "Registering for the obligations that apply to you — and getting them wrong is expensive to unwind later.",
        includes: [
          "Corporation Tax registration",
          "VAT registration, including voluntary registration advice",
          "PAYE scheme registration",
          "PSC register maintenance and confirmation statements",
        ],
      },
      {
        slug: "hmrc-companies-house-liaison",
        title: "HMRC and Companies House liaison",
        summary:
          "Correspondence, enquiries and filings handled by someone who knows what the letter is actually asking for.",
        includes: [
          "HMRC correspondence and enquiry handling",
          "Companies House filings and deadline monitoring",
          "Confirmation statements and statutory updates",
          "Representation on your behalf, with you copied in",
        ],
      },
    ],
  },
  {
    slug: "advisory",
    title: "Advisory & growth",
    shortDescription:
      "The forward-looking work: forecasting, cash, and the systems that stop the admin from growing with you.",
    intro:
      "Compliance keeps you out of trouble. This is the work that changes what the business is worth: knowing your cash position weeks ahead, understanding the numbers behind a decision, and removing the manual work that grows faster than your team does.",
    services: [
      {
        slug: "financial-forecasting",
        title: "Financial forecasting",
        summary:
          "A rolling forecast built on your actual drivers, refreshed as the assumptions change rather than once a year.",
        includes: [
          "12-month rolling profit and cash forecast",
          "Scenario modelling for hiring, pricing and investment",
          "Driver-based assumptions you can defend",
          "Monthly refresh against actuals",
        ],
      },
      {
        slug: "cash-flow-optimisation",
        title: "Cash-flow optimisation",
        summary:
          "A view of when cash actually lands and leaves, and the specific levers available when the gap is tighter than expected.",
        includes: [
          "13-week cash-flow visibility",
          "Debtor and creditor terms review",
          "Working capital and payment timing analysis",
          "Early warning thresholds set with you",
        ],
      },
      {
        slug: "business-and-growth-advice",
        title: "Business and growth advice",
        summary:
          "A regular conversation about the numbers behind a decision: pricing, hiring, investment, or whether to do it at all.",
        includes: [
          "Quarterly review of performance against plan",
          "Pricing and margin analysis",
          "Funding and lender readiness support",
          "Due diligence and valuation support when you need it",
        ],
      },
      {
        slug: "digital-accounting-and-automation",
        title: "Digital accounting and automation",
        summary:
          "Moving your books onto modern software and removing the manual steps between bank, invoice and report.",
        includes: [
          "Software selection and migration",
          "Bank, invoicing and payment integrations",
          "Automated categorisation with review controls",
          "Document capture and approval workflows",
        ],
      },
    ],
  },
];

const allServices = areas.flatMap((area) =>
  area.services.map((service) => ({ ...service, area: area.slug, areaTitle: area.title }))
);

export default { areas, allServices, engagement, promise, lead };
export { areas, allServices, engagement, promise, lead };
