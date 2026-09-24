import Link from "next/link";
import cn from "classnames";
import Layout from "@/components/Layout";
import PageHero from "@/components/page-hero/page-hero";
import CtaBand from "@/components/cta-band/cta-band";
import Reveal from "@/components/motion/reveal";
import icons from "@/constants/icons";
import products from "@/constants/products";
import styles from "./products.module.css";

export default function ProductsIndexPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Products"
        title="Software we build and run ourselves"
        subtitle="Alongside client work, we build, host and maintain our own products. They are live, free to use, and held to the same standard as anything we deliver for a client."
      />
      <section className={cn("section", "section-tight")}>
        <div className={cn("container")}>
          <div className={styles.grid}>
            {products.map((product, index) => (
              <Reveal key={product.slug} delay={index * 0.06}>
                <Link href={`/products/${product.slug}`} className={styles.card}>
                  <div className={styles.iconWrap}>{icons[product.icon]}</div>
                  <div className={cn("label-small", styles.category)}>{product.category}</div>
                  <h2 className={cn("heading-5", styles.title)}>{product.name}</h2>
                  <p className={cn("paragraph-medium", styles.description)}>
                    {product.shortDescription}
                  </p>
                  <span className={styles.link}>
                    About {product.name} {icons.ArrowRight}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Want something like this built for you?"
        subtitle="We design, build and run software end to end. Tell us what you need and we'll tell you honestly what it takes."
      />
    </Layout>
  );
}
