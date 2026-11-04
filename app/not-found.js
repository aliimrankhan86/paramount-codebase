import Link from "next/link";
import cn from "classnames";
import Layout from "@/components/Layout";
import styles from "./not-found.module.css";

export const metadata = {
  title: "Page not found | Paramount Consultants",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Layout>
      <section className={cn("section", styles.section)}>
        <div className={cn("container", styles.inner)}>
          <span className={styles.code}>404</span>
          <h1 className={cn("heading-1", styles.title)}>
            This page took a <em>wrong turn.</em>
          </h1>
          <p className={cn("paragraph-x-large", styles.text)}>
            The page you&rsquo;re looking for doesn&rsquo;t exist, or it has moved. Everything
            else is one click away.
          </p>
          <div className={styles.actions}>
            <Link href="/" className={cn("button", "button-accent")}>
              Back to home
            </Link>
            <Link href="/services" className="link-arrow">
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
