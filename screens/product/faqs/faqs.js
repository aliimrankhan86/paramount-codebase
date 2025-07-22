"use client";

import React from "react";
import cn from "classnames";
import styles from "./faqs.module.css";
import Faq from "./faq/faq";
import Avatars from "@/components/avatars";
import Form from "./form";
import mock from "@/constants/mock";

export default function Faqs({ faqs = mock.faqs }) {
  const [activeFaq, setActiveFaq] = React.useState(null);

  const handleFaqClick = (id) => {
    if (activeFaq === id) {
      setActiveFaq(null);
    } else {
      setActiveFaq(id);
    }
  };

  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <div className={styles.col}>
            <div className={cn("heading-3", styles.title)}>Faqs</div>
            <div className={cn("paragraph-medium", styles.subtitle)}>
              Please read our <button>FAQs</button> page to find out more.
            </div>

            <div className={styles.faqs}>
              {faqs.map((faq) => (
                <Faq
                  key={faq.id}
                  {...faq}
                  activeFaq={activeFaq === faq.id}
                  handleFaqClick={() => handleFaqClick(faq.id)}
                  className={styles.faq}
                />
              ))}
            </div>
          </div>

          <div className={styles.col}>
            <div className={cn("heading-5", styles.text)}>
              Didn’t find your answer?
            </div>
            <div className={cn("paragraph-medium", styles.span)}>
              Don't hesitate to contact us
            </div>

            <Avatars className={styles.avatars} />

            <Form className={styles.form} />
          </div>
        </div>
      </div>
    </div>
  );
}
