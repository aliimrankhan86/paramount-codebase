import React from "react";
import cn from "classnames";
import styles from "./need-help.module.css";
import icons from "@/constants/icons";
import Link from "next/link";

export default function NeedHelp() {
  return (
    <Link href="/contactus" className={styles.button}>
      {icons.QuestionMarkCircle}

      <div className={cn("label-medium", styles.title)}>Need help?</div>
    </Link>
  );
}
