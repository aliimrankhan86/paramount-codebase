import Link from "next/link";
import cn from "classnames";
import Layout from "@/components/Layout";
import CtaBand from "@/components/cta-band/cta-band";
import Reveal from "@/components/motion/reveal";
import icons from "@/constants/icons";
import styles from "./detail.module.css";

export default function ServiceDetailPage({ service }) {
  return (
    <Layout>
      <section className={cn("section", styles.hero)}>
        <div className={cn("container", "container-narrow")}>
          <Reveal className={styles.heroInner}>
            <div className={styles.iconWrap}>{icons[service.icon]}</div>
            <h1 className={cn("heading-1", styles.title)}>{service.title}</h1>
            <p className={cn("paragraph-x-large", styles.intro)}>{service.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className={cn("section", "section-tight")}>
        <div className={cn("container", "container-narrow")}>
          <Reveal>
            <h2 className="heading-4">What this involves</h2>
            <ul className={styles.list}>
              {service.involves.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.checkIcon}>{icons.CheckCircle}</span>
                  <span className={cn("paragraph-medium", styles.listText)}>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className={cn("section", "section-tight", "section-tint")}>
        <div className={cn("container")}>
          <Reveal className={styles.processHeading}>
            <h2 className="heading-4">How an engagement runs</h2>
          </Reveal>
          <div className={styles.processGrid}>
            {service.process.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06} className={styles.processStep}>
                <span className={styles.processIndex}>{String(index + 1).padStart(2, "0")}</span>
                <h3 className={cn("heading-6", styles.processTitle)}>{step.title}</h3>
                <p className={cn("paragraph-small", styles.processDescription)}>
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={cn("section-tight")}>
        <div className={cn("container", "container-narrow")}>
          <Link href="/services" className={styles.backLink}>
            {icons.ArrowLeft} All services
          </Link>
        </div>
      </section>

      <CtaBand
        title={`Talk to us about ${service.title.toLowerCase()}`}
        subtitle="Tell us where things stand today. We'll tell you what we'd do next."
      />
    </Layout>
  );
}
