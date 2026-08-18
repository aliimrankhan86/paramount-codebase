import cn from "classnames";
import Layout from "@/components/Layout";
import PageHero from "@/components/page-hero/page-hero";
import CtaBand from "@/components/cta-band/cta-band";
import ClientMarquee from "@/components/client-marquee/client-marquee";
import styles from "./clients.module.css";

export default function ClientsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Clients"
        title="Where the work has landed"
        subtitle="Delivery and AI product work across healthcare, higher education, IoT, financial services, retail and logistics."
      />

      <section className={cn("section", styles.marqueeSection)}>
        <ClientMarquee size="large" />
      </section>

      <CtaBand
        title="Want to be next?"
        subtitle="Tell us what you're building. We'll tell you honestly if we're the right fit."
      />
    </Layout>
  );
}
