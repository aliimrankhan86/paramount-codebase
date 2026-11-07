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
        title="Software we build"
        subtitle="Some of these we run ourselves. Others we designed and implemented for a client and still look after. Every one is live, and held to the same standard as anything else we deliver."
      />
      <section className={cn("section", "section-tight", "section-paper-light")}>
        <div className={cn("container")}>
          <div className={styles.grid}>
            {products.map((product, index) => (
              <Reveal key={product.slug} delay={index * 0.06}>
                <Link href={`/products/${product.slug}`} className={styles.card}>
                  {product.logo ? (
                    // Brand mark at its own intrinsic size. The invert filter is
                    // on the <img> alone and the tile is a separate element:
                    // a filter also inverts the element's own background, which
                    // turned the black tile white.
                    <span
                      className={cn({
                        [styles.logoTile]: product.logoBackdrop === "ink",
                      })}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.logo}
                        alt=""
                        width={product.logoWidth}
                        height={product.logoHeight}
                        className={cn(styles.logo, {
                          [styles.logoInTile]: product.logoBackdrop === "ink",
                        })}
                        style={product.invert ? { filter: "brightness(0) invert(1)" } : undefined}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  ) : (
                    <div className={styles.iconWrap}>{icons[product.icon]}</div>
                  )}
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
