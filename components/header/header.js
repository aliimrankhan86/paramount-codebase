"use client";

import React from "react";
import cn from "classnames";
import styles from "./header.module.css";
import icons from "@/constants/icons";
import Link from "next/link";

// Smooth scroll handler for anchor links with custom offset for fixed header
function handleSmoothScroll(e, href) {
  if (href.startsWith("#")) {
    const el = document.getElementById(href.replace("#", ""));
    if (el) {
      e.preventDefault();
      // Get header height (fixed or not)
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16; // 16px extra gap
      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  }
}
import ShopMenu from "./shop-menu";
import CollectionsMenu from "./collections-menu";
import ExploreMenu from "./explore-menu";
import mock from "@/constants/mock";
import Socials from "../socials/socials";

export default function Header({ header_links = mock.header_links }) {
  const [activeMenu, setActiveMenu] = React.useState(null);
  const [visibleNav, setVisibleNav] = React.useState(false);
  const [fixedHeader, setFixedHeader] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", handleHeader);
    return () => {
      window.removeEventListener("scroll", handleHeader);
    };
  }, []);

  const disableScroll = (event) => {
    event.preventDefault();
  };

  React.useEffect(() => {
    if (visibleNav) {
      window.addEventListener("touchmove", disableScroll, { passive: false });
      window.addEventListener("wheel", disableScroll, { passive: false });
    } else {
      window.removeEventListener("touchmove", disableScroll);
      window.removeEventListener("wheel", disableScroll);
    }

    return () => {
      window.removeEventListener("touchmove", disableScroll);
      window.removeEventListener("wheel", disableScroll);
    };
  }, [visibleNav]);

  const handleHeader = () => {
    if (window.scrollY > 48) {
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  };

  const renderMenu = (type) => {
    switch (type) {
      case "shop-menu":
        return (
          <ShopMenu className={styles.menu} onMouseLeave={handleMouseLeave} />
        );
      case "collections-menu":
        return (
          <CollectionsMenu
            className={styles.menu}
            onMouseLeave={handleMouseLeave}
          />
        );
      case "explore-menu":
        return (
          <ExploreMenu
            className={styles.menu}
            onMouseLeave={handleMouseLeave}
          />
        );
      default:
        return null;
    }
  };

  const handleMouseEnter = (type) => {
    if (window.innerWidth <= 768) {
      setActiveMenu(null);
    } else {
      setActiveMenu(type);
    }
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <>
      <header
        className={cn(styles.header, {
          [styles.fixed_header]: fixedHeader,
        })}
      >
        <div className={cn("container", styles.container)}>
          <Link href="/" className={styles.logo}>
            <img
              src="/images/paramount-logo.svg"
              alt="Paramount Consultants"
              className={styles.logo_image}
            />
          </Link>

          <nav
            className={cn(styles.nav, {
              [styles.active]: visibleNav,
            })}
          >
            <ul className={styles.links}>
              {header_links.map((link) => (
                <li
                  key={link.href}
                  onMouseEnter={() => handleMouseEnter(link.type)}
                >
                  <Link
                    href={link.href}
                    className={cn("label-medium", styles.link, {
                      [styles.active]: activeMenu === link.type,
                    })}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                  >
                    {link.label}
                  </Link>

                  {activeMenu === link.type && renderMenu(link.type)}
                </li>
              ))}
            </ul>

            <div className={styles.footer}>
              <Link
                href="/login"
                className={cn("button-small", styles.footer_button)}
              >
                Login
              </Link>
              <Socials />
            </div>
          </nav>

          <div className={styles.btns}>
            <div className={styles.menu_button}>
              <button
                className={cn(styles.burger, {
                  [styles.active]: visibleNav,
                })}
                onClick={() => setVisibleNav(!visibleNav)}
              ></button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
