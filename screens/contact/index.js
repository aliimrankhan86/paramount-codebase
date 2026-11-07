import cn from "classnames";
import Layout from "@/components/Layout";
import Figure from "@/components/figure/figure";
import PageHero from "@/components/page-hero/page-hero";
import ContactUs from "@/components/support/contactus";
import Reveal from "@/components/motion/reveal";
import styles from "./contact.module.css";

const steps = [
  {
    title: "You send the brief",
    description: "A few lines about the problem is enough. No formal RFP needed.",
  },
  {
    title: "We reply personally",
    description:
      "Someone who would actually work on the project reads it and responds, usually within one working day, Monday to Friday.",
  },
  {
    title: "A straight first call",
    description:
      "We talk through the problem and tell you honestly whether we're the right fit, before any proposal.",
  },
];

export default function ContactPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're working on"
        titleLines={[<>Tell us what</>, <>you&rsquo;re working on</>]}
        subtitle="Every enquiry gets a reply from someone who'll actually be involved in the work, usually within one working day, Monday to Friday."
        meta="Replies within one working day"
      />

      <section className={cn("section", "section-tight", "section-paper-light")}>
        <div className={cn("container", styles.layout)}>
          <Reveal className={styles.aside} variant="left" priority>
            <div className="eyebrow">What happens next</div>

            <ol className={styles.steps}>
              {steps.map((step, index) => (
                <li key={step.title} className={styles.step}>
                  <span className={styles.stepIndex} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className={cn("heading-5", styles.stepTitle)}>{step.title}</h2>
                    <p className={cn("paragraph-small", styles.stepText)}>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className={styles.assurance}>
              <span className={styles.assuranceIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3 4.5 6v5.2c0 4.4 3.1 8.3 7.5 9.8 4.4-1.5 7.5-5.4 7.5-9.8V6L12 3Z"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m8.75 12 2.25 2.25L15.5 10"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className={cn("paragraph-small", styles.assuranceText)}>
                Your details stay with us. Confidentiality applies from the first conversation, not
                from the signed contract.
              </p>
            </div>

            <Figure
              className={styles.figure}
              src="/art/glass-detail.jpg"
              alt="Close-up of a circuit board die surrounded by rows of surface-mount contacts"
              ratio="1 / 1"
              index="03"
              caption="Fig. 03 — Material study"
              note="Logic board detail"
              sizes="(max-width: 900px) 100vw, 30vw"
            />
          </Reveal>

          <Reveal className={styles.formWrap} priority>
            <div className={styles.formHead}>
              <h2 className={cn("heading-3", styles.formTitle)}>Send us a message</h2>
              <p className={cn("paragraph-small", styles.formSub)}>
                All fields are required. We reply to every enquiry ourselves.
              </p>
            </div>
            <ContactUs />
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
