import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./footer.module.css";
import nav from "@/constants/nav";
import services from "@/constants/services";

export default function Footer() {
  const year = new Date().getFullYear();

  const indexLinks = [
    nav.footer.company[0],
    nav.footer.company[1],
    { label: "Accounting", href: "/accounting" },
    ...nav.footer.company.slice(2),
  ];

  return (
    <footer className={styles.footer}>
      <div className={cn("container")}>
        <div className={styles.top}>
          <p className={styles.statement}>
            Applied AI and digital delivery, built to survive contact with the real world.
          </p>
          <Link href="/contact" className={styles.bigLink}>
            Start a project
            <Arrow />
          </Link>
        </div>

        <div className={styles.wordmarkRow}>
          <Link href="/" className={styles.wordmark} aria-label="Paramount Consultants, home">
            Paramount
          </Link>
          <p className={styles.wordmarkMeta}>
            Consultants
            <br />
            UK based · Working worldwide
          </p>
        </div>

        <div className={styles.indexRow}>
          <span className={styles.indexLabel}>Index</span>
          <nav className={styles.indexLinks} aria-label="Footer">
            {indexLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.indexLink}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.detailRow}>
          <div>
            <h2 className={styles.detailTitle}>Technology &amp; AI</h2>
            <ul className={styles.serviceLinks}>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className={styles.detailLink}>
                    {service.title.replace(/\s*\(AEM\)\s*/i, " ").trim()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={styles.detailTitle}>Accounting</h2>
            <ul className={styles.links}>
              {nav.footer.accounting.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.detailLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={styles.detailTitle}>Working with us</h2>
            <ul className={styles.links}>
              <li className={styles.meta}>Every enquiry answered by the team doing the work</li>
              <li className={styles.meta}>Weekdays, within one working day</li>
              <li className={styles.meta}>Confidentiality from the first conversation</li>
            </ul>
          </div>
        </div>

        <div className={styles.legal}>
          <p>
            The information on this website is provided for general guidance only and does not
            constitute professional advice. All engagements are delivered in line with applicable
            regulatory and professional standards.
          </p>
          <p>
            Accounting and tax services are provided by Paramount Consultants. Rates, deadlines and
            reliefs depend on your individual circumstances and can change, so take advice before
            acting on anything published here.
          </p>
        </div>
      </div>

      <div className={styles.strip}>
        <div className={cn("container", styles.stripInner)}>
          <p className={styles.stripText}>&copy; {year} Paramount Consultants</p>
          <p className={styles.stripText}>Replies within one working day, Monday to Friday</p>
          <a href="#top" className={styles.backToTop}>
            Back to top
            <UpArrow />
          </a>
        </div>
      </div>
    </footer>
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

function UpArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 19V5" strokeWidth="1.6" strokeLinecap="round" />
      <path d="m6 11 6-6 6 6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
