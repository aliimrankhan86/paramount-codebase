"use client";

import React from "react";
import styles from "./share.module.css";
import cn from "classnames";
import Socials from "../socials/socials";
import icons from "@/constants/icons";

export default function Share() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Nova - Tech store",
          text: "A modern UI theme for ecommerce sites.",
          url: "https://nova-web-capricorn-engineerings-projects.vercel.app/",
        });

        console.log("Successfully shared");
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      console.log("Web Share API is not supported in your browser");
    }
  };

  return (
    <div className={styles.share}>
      <div className={cn("paragraph-medium", styles.title)}>Share:</div>

      <Socials className={styles.socials} />

      <button
        className={cn("label-medium", styles.button)}
        onClick={handleShare}
      >
        {icons.Share}
        Share
      </button>
    </div>
  );
}
