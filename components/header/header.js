"use client";

import React from "react";
import cn from "classnames";
import styles from "./header.module.css";
import icons from "@/constants/icons";
import Link from "next/link";
import ShopMenu from "./shop-menu";
import CollectionsMenu from "./collections-menu";
import ExploreMenu from "./explore-menu";
import mock from "@/constants/mock";
import Socials from "../socials/socials";
import Modal from "../modal";
import Search from "../search";
import Cart from "../cart";
import useCart from "@/store/useCart";

export default function Header({ header_links = mock.header_links }) {
  const [activeMenu, setActiveMenu] = React.useState(null);
  const [visibleNav, setVisibleNav] = React.useState(false);
  const [fixedHeader, setFixedHeader] = React.useState(false);
  const [searchModalVisible, setSearchModalVisible] = React.useState(false);
  const [cartModalVisible, setCartModalVisible] = React.useState(false);
  const { cartItems, isAdded, resetIsAdded } = useCart();

  React.useEffect(() => {
    if (isAdded) {
      setCartModalVisible(true);
      resetIsAdded();
    }
  }, [isAdded]);

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

  const handleCloseSearch = () => {
    setSearchModalVisible(false);
  };

  const handleCloseCart = () => {
    setCartModalVisible(false);
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <header
        className={cn(styles.header, {
          [styles.fixed_header]: fixedHeader,
        })}
      >
        <div className={cn("container", styles.container)}>
          <Link href="/" className={styles.logo}>
            {icons.Leaves}
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
            <button
              className={styles.search}
              onClick={() => setSearchModalVisible(true)}
            >
              {icons.Search}
            </button>
            <Link href="/login" className={styles.user}>
              {icons.User}
            </Link>
            <button
              className={styles.cart}
              onClick={() => setCartModalVisible(true)}
            >
              {icons.Cart}
              {totalItems > 0 && (
                <span className={cn("label-x-small", styles.cart_indicator)}>
                  {totalItems}
                </span>
              )}
            </button>

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

      {searchModalVisible && (
        <Modal
          visible={searchModalVisible}
          onClose={handleCloseSearch}
          className={styles.modal}
        >
          <Search onClose={handleCloseSearch} />
        </Modal>
      )}

      {cartModalVisible && (
        <Modal
          visible={cartModalVisible}
          onClose={handleCloseCart}
          className={styles.modal}
        >
          <Cart onClose={handleCloseCart} />
        </Modal>
      )}
    </>
  );
}
