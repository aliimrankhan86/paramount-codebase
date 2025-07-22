import React from "react";
import cn from "classnames";
import styles from "./avatars.module.css";
import mock from "@/constants/mock";

export default function Avatars({ avatars = mock.avatars, className }) {
  return (
    <div className={cn(styles.container)}>
      {avatars.map((avatar) => (
        <div
          key={avatar.id}
          className={cn(styles.avatar, className)}
          style={{
            backgroundImage: `url(${avatar.url})`,
          }}
        />
      ))}
    </div>
  );
}
