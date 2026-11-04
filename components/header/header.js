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
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 8);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
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

  const isActive = (href) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header id="top" className={cn(styles.header, { [styles.scrolled]: scrolled })}>
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
                    [styles.currentLink]: isActive(link.href),
                  })}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className={cn("button-small", "button-accent", styles.cta)}>
            Start a project
            <ArrowIcon />
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

      <div className={styles.progressTrack} aria-hidden="true">
        <span className={styles.progressBar} style={{ transform: `scaleX(${progress})` }} />
      </div>
    </header>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.75 12h14.5" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M13.75 6.75 19.25 12l-5.5 5.25"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
