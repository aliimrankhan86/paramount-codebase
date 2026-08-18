import React from "react";
import cn from "classnames";
import styles from "./client-marquee.module.css";
import clients from "@/constants/clients";

const STOP_WORDS = ["of", "the", "and", "for"];

function getInitials(name) {
  const words = name
    .replace(/[&(),]/g, " ")
    .split(" ")
    .filter((word) => word && !STOP_WORDS.includes(word.toLowerCase()));

  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export default function ClientMarquee({ className, size = "default" }) {
  return (
    <div
      className={cn(styles.wrap, { [styles.large]: size === "large" }, className)}
      role="group"
      aria-label="Organisations we've worked with"
    >
      <div className={styles.track}>
        {[0, 1].map((copy) => (
          <ul className={styles.strip} aria-hidden={copy === 1} key={copy}>
            {clients.map((client) => (
              <li key={`${copy}-${client.name}`} className={styles.item}>
                <span className={styles.tile}>
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className={styles.logo}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span aria-hidden="true">{getInitials(client.name)}</span>
                  )}
                </span>
                <span className={styles.name}>{client.name}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
