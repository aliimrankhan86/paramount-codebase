"use client";

import React from "react";
import cn from "classnames";
import styles from "./faqs.module.css";
import Faq from "./faq/faq";
import Avatars from "@/components/avatars";
import Form from "./form";
import mock from "@/constants/mock";

export default function Faqs({ extended_faqs = mock.extended_faqs }) {
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
          <div className={styles.extended_faqs}>
            {extended_faqs.map((faq) => (
              <div className={styles.extended_faq}>
                <div className={cn("heading-3", styles.title)}>{faq.title}</div>
                <div className={cn("paragraph-medium", styles.subtitle)}>
                  {faq.subtitle}
                </div>

                <div className={styles.faqs}>
                  {faq.faqs.map((faq) => (
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
            ))}
          </div>

          <div className={styles.col}>
            <div className={styles.side_content}>
              <div className={cn("heading-5", styles.text)}>
                Didn’t find your answer?
              </div>
              <div className={cn("paragraph-medium", styles.span)}>
                Don't hesitate to contact us
              </div>

              <Avatars className={styles.avatar} />

              <Form className={styles.form} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
