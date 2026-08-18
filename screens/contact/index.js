import cn from "classnames";
import Layout from "@/components/Layout";
import PageHero from "@/components/page-hero/page-hero";
import ContactUs from "@/components/support/contactus";
import Reveal from "@/components/motion/reveal";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're working on"
        subtitle="Every enquiry gets a reply from someone who'll actually be involved in the work, usually within one business day."
      />
      <section className={cn("section", "section-tight")}>
        <div className={cn("container", "container-narrow")}>
          <Reveal className={styles.formWrap}>
            <ContactUs />
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
