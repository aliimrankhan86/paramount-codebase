import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./footer.module.css";
import Logo from "@/components/logo";
import nav from "@/constants/nav";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo />
            <p className={cn("paragraph-small", styles.tagline)}>
              Digital transformation, delivered with precision.
            </p>
          </div>

          <nav className={styles.sitemap} aria-label="Footer">
            <div className={cn("label-small", styles.sitemapTitle)}>Company</div>
            <ul className={styles.links}>
              {nav.footer.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={cn("paragraph-small", styles.link)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.legal}>
          <p className={cn("paragraph-x-small", styles.legalText)}>
            The information on this website is provided for general guidance only and does not
            constitute professional advice. For tailored recommendations, please get in touch
            directly.
          </p>
          <p className={cn("paragraph-x-small", styles.legalText)}>
            All engagements are delivered in line with applicable regulatory and professional
            standards. We treat client confidentiality and data protection as the baseline for
            every engagement, from the first call.
          </p>
        </div>

        <div className={styles.bottom}>
          <p className={cn("paragraph-x-small", styles.copyright)}>
            &copy; {year} Paramount Consultants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
