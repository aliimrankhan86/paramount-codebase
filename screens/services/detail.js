import Link from "next/link";
import cn from "classnames";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import CtaBand from "@/components/cta-band/cta-band";
import ServiceRow from "@/components/service-row/service-row";
import Figure from "@/components/figure/figure";
import Reveal from "@/components/motion/reveal";
import services from "@/constants/services";
import products from "@/constants/products";
import styles from "./detail.module.css";

export default function ServiceDetailPage({ service }) {
  const index = services.findIndex((item) => item.id === service.id);
  const related = services.filter((item) => item.id !== service.id).slice(0, 3);
  const product = service.relatedProduct
    ? products.find((item) => item.slug === service.relatedProduct.slug)
    : null;

  return (
    <Layout>
      <section className={cn("section", styles.hero)}>
        <div className={cn("container")}>
          <Reveal className={styles.heroInner}>
            <Breadcrumb
              trail={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: service.title },
              ]}
            />

            <div className={styles.metaRow}>
              <span>Service {String(index + 1).padStart(2, "0")} / 06</span>
              <span>{service.involves.length} focus areas</span>
            </div>

            <h1 className={cn("heading-1", styles.title)}>{service.title}</h1>

            <div className={styles.heroGrid}>
              <p className={cn("paragraph-x-large", styles.intro)}>{service.intro}</p>

              <aside className={styles.glance} aria-label="Service at a glance">
                <div className={styles.glanceTitle}>At a glance</div>
                <dl className={styles.glanceList}>
                  <div>
                    <dt>Discipline</dt>
                    <dd>{service.title}</dd>
                  </div>
                  <div>
                    <dt>Focus areas</dt>
                    <dd>{service.involves.length} defined workstreams</dd>
                  </div>
                  <div>
                    <dt>Engagement shape</dt>
                    <dd>Discovery, plan, build, support</dd>
                  </div>
                  <div>
                    <dt>First step</dt>
                    <dd>A short conversation, no pitch deck</dd>
                  </div>
                </dl>
              </aside>
            </div>

            <div className={styles.heroActions}>
              <Link href="/contact" className={cn("button", "button-accent")}>
                Talk to us about this
                <Arrow />
              </Link>
              <Link href="/services" className="link-arrow">
                All services
                <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={cn("section", "section-tight")}>
        <div className={cn("container", styles.bodyGrid)}>
          <div className={styles.main}>
            <Reveal>
              <div className="eyebrow">What this involves</div>
              <h2 className={cn("heading-2", styles.sectionTitle)}>
                The work, <em>scoped honestly.</em>
              </h2>
              <ol className={styles.list}>
                {service.involves.map((item, itemIndex) => (
                  <li key={item} className={styles.listItem}>
                    <span className={styles.listIndex} aria-hidden="true">
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>
                    <span className={cn("paragraph-medium", styles.listText)}>{item}</span>
                  </li>
                ))}
              </ol>

              {service.image && (
                <Figure
                  className={styles.serviceFigure}
                  src={service.image.src}
                  alt={service.image.alt}
                  ratio="2 / 1"
                  index={String(index + 1).padStart(2, "0")}
                  caption="Illustrative"
                  note={service.image.note}
                  sizes="(max-width: 900px) 100vw, 500px"
                />
              )}

              {product && (
                <aside className={styles.productCallout}>
                  <div className={cn("label-small", styles.productEyebrow)}>Built by us</div>
                  <p className={cn("paragraph-medium", styles.productNote)}>
                    {service.relatedProduct.note}
                  </p>
                  <div className={styles.productLinks}>
                    <Link href={`/products/${product.slug}`} className={styles.productLink}>
                      About {product.name}
                      <Arrow />
                    </Link>
                    <a href={product.url} className={styles.productLink}>
                      Open {product.name}
                      <Arrow />
                    </a>
                  </div>
                </aside>
              )}
            </Reveal>
          </div>

          <aside className={styles.side}>
            <div className={styles.sideCard}>
              <div className={styles.sideEyebrow}>Next step</div>
              <p className={cn("heading-5", styles.sideTitle)}>
                Tell us where things stand today.
              </p>
              <p className={cn("paragraph-small", styles.sideText)}>
                We&rsquo;ll tell you what we&rsquo;d do next, and whether this service is actually
                the right fit.
              </p>
              <Link href="/contact" className={cn("button", "button-inverse", "button-block")}>
                Start a conversation
                <Arrow />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className={cn("section", "section-tight", "section-paper-light")}>
        <div className={cn("container")}>
          <div className={styles.processHead}>
            <Reveal>
              <div className="eyebrow">Process</div>
              <h2 className={cn("heading-2", styles.processTitle)}>
                How an engagement <em>runs.</em>
              </h2>
            </Reveal>
          </div>

          <ol className={styles.processGrid}>
            {service.process.map((step, stepIndex) => (
              <Reveal as="li" key={step.title} delay={stepIndex * 0.06} className={styles.processStep}>
                <span className={styles.processIndex} aria-hidden="true">
                  {String(stepIndex + 1).padStart(2, "0")}
                </span>
                <h3 className={cn("heading-5", styles.processStepTitle)}>{step.title}</h3>
                <p className={cn("paragraph-small", styles.processDescription)}>
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className={cn("section", "section-tight")}>
        <div className={cn("container")}>
          <div className={styles.relatedHead}>
            <Reveal>
              <div className="eyebrow">Related</div>
              <h2 className={cn("heading-2", styles.relatedTitle)}>
                Often delivered <em>together.</em>
              </h2>
            </Reveal>
            <Link href="/services" className="link-arrow">
              All services
              <Arrow />
            </Link>
          </div>

          <div className={styles.relatedList}>
            {related.map((item, relatedIndex) => (
              <Reveal key={item.id} delay={relatedIndex * 0.05} y={16}>
                <ServiceRow
                  service={item}
                  index={services.findIndex((entry) => entry.id === item.id)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Talk to us about ${service.title.toLowerCase()}`}
        subtitle="Tell us where things stand today. We'll tell you what we'd do next."
      />
    </Layout>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.75 12h14.5" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13.75 6.75 19.25 12l-5.5 5.25" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
