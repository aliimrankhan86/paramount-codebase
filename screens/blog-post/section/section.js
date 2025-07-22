import React from "react";
import cn from "classnames";
import styles from "./section.module.css";
import Review from "./review";

export default function Section() {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <div className={cn("paragraph-medium", styles.subtitle)}>
            In a world increasingly conscious of its ecological footprint, we
            are thrilled to introduce our latest range of speakers that
            epitomize the union of superior sound quality and environmental
            responsibility. Our "Harmony with Nature" series is not just a
            product line, but a commitment to sustainable living that resonates
            with your values.
          </div>

          <div>
            <div className={cn("heading-5", styles.title)}>
              Eco-friendly materials
            </div>

            <div className={cn("paragraph-medium", styles.subtitle)}>
              Every speaker in this series is crafted from responsibly sourced
              materials that reduce environmental impact without compromising on
              audio quality. From recycled plastics to renewable bamboo, every
              material is chosen to support ecological sustainability and
              durability.
            </div>
          </div>

          <div>
            <div className={cn("heading-5", styles.title)}>
              Energy efficient design
            </div>

            <div className={cn("paragraph-medium", styles.subtitle)}>
              Understanding the need for energy efficiency, our speakers are
              designed to consume less power. The innovative design includes
              solar charging capabilities, allowing your music to play on
              renewable energy. This not only cuts down on electricity usage but
              also encourages the use of clean, green energy.
            </div>
          </div>

          <div>
            <div
              style={{
                backgroundImage: "url(/images/headphones-background.webp)",
              }}
              alt="Speakers"
              className={styles.image}
            />
            <div className={cn("label-small", styles.text)}>
              Where nature meets technology
            </div>
          </div>

          <div>
            <div className={cn("heading-5", styles.title)}>
              Sound quality that speaks to nature
            </div>

            <div className={cn("paragraph-medium", styles.subtitle)}>
              Our commitment extends beyond materials and energy consumption to
              the very essence of sound itself. These speakers are engineered to
              produce clear, rich, and expansive sound that fills your space
              with the beauty of audio, all while ensuring minimal environmental
              impact. Experience audio that brings the serenity of nature right
              into your living room.
            </div>
          </div>

          <div className={styles.review}>
            <Review />
          </div>

          <div>
            <div className={cn("heading-5", styles.title)}>
              Join the symphony
            </div>

            <div className={cn("paragraph-medium", styles.subtitle)}>
              We invite you to join us in this symphony of sustainability. With
              every purchase, not only are you getting a product that delights
              your ears but also one that aligns with the health of our planet.
              It’s time to make choices that sound right and feel right.
            </div>

            <br />

            <div className={cn("paragraph-medium", styles.subtitle)}>
              Let's make our listening experience a reason for environmental
              pride. Your support helps us continue to innovate and lead the way
              in eco-friendly audio solutions. Tune into sustainability with
              "Harmony with Nature.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
