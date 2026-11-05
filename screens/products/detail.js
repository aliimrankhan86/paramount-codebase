import Link from "next/link";
import cn from "classnames";
import Layout from "@/components/Layout";
import CtaBand from "@/components/cta-band/cta-band";
import Reveal from "@/components/motion/reveal";
import icons from "@/constants/icons";
import services from "@/constants/services";
import site from "@/constants/site";
import styles from "./detail.module.css";

function productSchema(product) {
  const pageUrl = `${site.url}/products/${product.slug}`;
  const application = {
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}#software`,
    name: product.name,
    description: product.shortDescription,
    applicationCategory: product.applicationCategory || "BusinessApplication",
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };

  if (product.url) application.url = product.url;
  if (product.operatingSystem) application.operatingSystem = product.operatingSystem;
  if (product.inLanguage) application.inLanguage = product.inLanguage;
  if (product.free) {
    application.offers = { "@type": "Offer", price: "0", priceCurrency: "GBP" };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      application,
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}/products` },
          { "@type": "ListItem", position: 3, name: product.name, item: pageUrl },
        ],
      },
    ],
  };
}

export default function ProductDetailPage({ product }) {
  const related = (product.relatedServices || [])
    .map((slug) => services.find((service) => service.slug === slug))
    .filter(Boolean);
  const hasHighlights = Boolean(product.highlights?.length);
  const hasFeatures = Boolean(product.features?.length);
  const hasSteps = Boolean(product.steps?.length);
  const hasBuild = Boolean(product.builtWith?.length);

  return (
    <Layout>
      <section className={cn("section", styles.hero)}>
        <div className={cn("container", "container-narrow")}>
          <Reveal className={styles.heroInner}>
            <div className={styles.iconWrap}>{icons[product.icon]}</div>
            <div className="eyebrow">{product.category}</div>
            <h1 className={cn("heading-1", styles.title)}>{product.name}</h1>
            <p className={cn("paragraph-x-large", styles.intro)}>{product.intro}</p>
            <div className={styles.actions}>
              {product.url && (
                <a href={product.url} className="button">
                  Open {product.name} {icons.ArrowRight}
                </a>
              )}
              {hasSteps && (
                <a href="#how-it-works" className="button-stroke">
                  How it works
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {hasHighlights && (
        <section className={cn("section-tight", styles.highlightsSection)}>
          <div className={cn("container")}>
            <dl className={styles.highlights}>
              {product.highlights.map((item) => (
                <div key={item.label} className={styles.highlight}>
                  <dt className={cn("heading-3", styles.highlightValue)}>{item.value}</dt>
                  <dd className={cn("paragraph-small", styles.highlightLabel)}>{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {hasFeatures && (
        <section className={cn("section", "section-tight")}>
          <div className={cn("container")}>
            <Reveal className={styles.sectionHeading}>
              <h2 className="heading-3">What it does</h2>
            </Reveal>
            <div className={styles.featureGrid}>
              {product.features.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 0.05} className={styles.feature}>
                  <h3 className={cn("heading-6", styles.featureTitle)}>{feature.title}</h3>
                  <p className={cn("paragraph-small", styles.featureBody)}>{feature.body}</p>
                  {feature.link && (
                    <a href={feature.link.href} className={styles.featureLink}>
                      {feature.link.label} {icons.ArrowRight}
                    </a>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {hasSteps && (
        <section id="how-it-works" className={cn("section", "section-tight", "section-tint")}>
          <div className={cn("container")}>
            <Reveal className={styles.sectionHeading}>
              <h2 className="heading-3">How a session runs</h2>
            </Reveal>
            <div className={styles.processGrid}>
              {product.steps.map((step, index) => (
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
      )}

      {(hasBuild || related.length > 0) && (
        <section className={cn("section", "section-tight")}>
          <div className={cn("container", "container-narrow")}>
            <Reveal>
              {hasBuild && <h2 className="heading-4">How we built it</h2>}
              {product.builtWithIntro && (
                <p className={cn("paragraph-medium", styles.builtIntro)}>{product.builtWithIntro}</p>
              )}
              {product.builtWith?.length ? (
                <ul className={styles.list}>
                  {product.builtWith.map((item) => (
                    <li key={item} className={styles.listItem}>
                      <span className={styles.checkIcon}>{icons.CheckCircle}</span>
                      <span className={cn("paragraph-medium", styles.listText)}>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {related.length > 0 && (
              <div className={styles.related}>
                <div className={cn("label-small", styles.relatedTitle)}>Related services</div>
                <ul className={styles.relatedLinks}>
                  {related.map((service) => (
                    <li key={service.slug}>
                      <Link href={`/services/${service.slug}`} className={styles.relatedLink}>
                        {service.title} {icons.ArrowRight}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
        </div>
        </section>
      )}

      <section className={cn("section-tight", styles.backSection)}>
        <div className={cn("container", "container-narrow")}>
          <Link href="/products" className={styles.backLink}>
            {icons.ArrowLeft} All products
          </Link>
        </div>
      </section>

      <CtaBand
        title="Need a product like this built?"
        subtitle="We design, build and run software end to end, from the first sprint to the search results."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema(product)) }}
      />
    </Layout>
  );
}
