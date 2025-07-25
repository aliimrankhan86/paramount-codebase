import React from "react";
import cn from "classnames";
import styles from "./reviews.module.css";
import icons from "@/constants/icons";
import Review from "./review";

const reviews = [
  {
    id: 1,
    subject: "Worth every penny",
    name: "Marcus Reid",
    date: "April 12, 2024",
    rating: 5,
    content:
      "I love the bamboo accents which give them a unique look. It feels good to support a product that aligns with my environmental values.",
  },
  {
    id: 2,
    subject: "Impressive sound",
    name: "Jasmine Turner",
    date: "April 10, 2024",
    rating: 5,
    content:
      "These headphones are not just eco-friendly, they're also incredibly comfortable for long listening sessions.",
  },
];

export default function Reviews() {
  const stars = Array(5).fill(icons.Star);

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.heading}>
          <div className={cn("heading-3", styles.title)}>Customer reviews</div>

          <div className={styles.col}>
            <div className={styles.ratings}>
              {stars.map((Star, index) => (
                <span key={index}>{Star}</span>
              ))}
            </div>

            <div className={cn("paragraph-small", styles.text)}>
              Based on 2 reviews
            </div>
          </div>

          <button className={cn("button", styles.button)}>
            Write a review
          </button>
        </div>

        <div className={styles.reviews}>
          {reviews.map((review) => (
            <Review key={review.id} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}
