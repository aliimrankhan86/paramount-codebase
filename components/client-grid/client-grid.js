import React from "react";
import cn from "classnames";
import styles from "./client-grid.module.css";
import clients from "@/constants/clients";

export default function ClientGrid({ className, limit }) {
  const list = limit ? clients.slice(0, limit) : clients;

  return (
    <ul className={cn(styles.grid, className)} aria-label="Client organisations">
      {list.map((client) => (
        <li key={client.name} className={styles.cell}>
          <span className={styles.logoWrap}>
            {client.logo ? (
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className={styles.logo}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <span className={styles.initials}>{client.name.slice(0, 2)}</span>
            )}
          </span>
          <span className={styles.name}>{client.name}</span>
        </li>
      ))}
    </ul>
  );
}
