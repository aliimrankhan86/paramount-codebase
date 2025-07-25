import React from "react";
import cn from "classnames";
import styles from "./footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.section}>
      <div className={cn(styles.container, styles.stacked)}>
        <div className={styles.col}>
          <div className={cn("subheading-x-large", styles.title)}>
            Disclaimer
          </div>
          <div className={cn("paragraph-medium", styles.text)}>
            The information provided on this website is for general guidance
            only. It does not constitute professional advice. For tailored
            solutions, please contact us directly.
          </div>
        </div>
        <div className={styles.col}>
          <div className={cn("subheading-x-large", styles.title)}>
            Legal & Policies
          </div>
          <div className={cn("paragraph-medium", styles.text)}>
            All services are delivered in accordance with applicable regulatory
            and professional standards. We are committed to maintaining
            confidentiality, integrity, and data protection in every engagement.
          </div>
        </div>
        <div className={styles.col}>
          <div className={cn(styles.copyright, styles.copyrightLarge)}>
            © {year} The Paramount Consultants. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
// ...existing code...
