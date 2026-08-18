"use client";

import React from "react";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import Logo from "@/components/logo";
import nav from "@/constants/nav";

export default function Header() {
  const pathname = usePathname();
  const [visibleNav, setVisibleNav] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setVisibleNav(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = visibleNav ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visibleNav]);

  React.useEffect(() => {
    if (!visibleNav) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setVisibleNav(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visibleNav]);

  return (
    <header className={cn(styles.header, { [styles.scrolled]: scrolled })}>
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>
      <div className={cn("container", styles.container)}>
        <Logo />

        <nav
          id="primary-navigation"
          className={cn(styles.nav, { [styles.active]: visibleNav })}
          aria-label="Primary"
        >
          <ul className={styles.links}>
            {nav.primary.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn("label-small", styles.link, {
                    [styles.currentLink]: pathname === link.href,
                  })}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className={cn("button-small", styles.cta)}>
            Contact us
          </Link>
        </nav>

        <button
          type="button"
          className={cn(styles.burger, { [styles.active]: visibleNav })}
          onClick={() => setVisibleNav((v) => !v)}
          aria-expanded={visibleNav}
          aria-controls="primary-navigation"
          aria-label={visibleNav ? "Close menu" : "Open menu"}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
