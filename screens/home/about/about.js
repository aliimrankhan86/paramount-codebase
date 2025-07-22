import React from "react";
import cn from "classnames";
import styles from "./about.module.css";
import icons from "@/constants/icons";

export default function About() {
  return (
    <div id="about" className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={cn("heading-2")} style={{ textAlign: 'center', marginBottom: 24 }}>About us</div>

        <div className={styles.wrapper}>
          <div>
            <div className={cn("paragraph-medium", styles.description)}>
              At Paramount Consultants, we deliver more than just digital solutions — we craft intelligent experiences that connect, empower, and evolve with your business.

              As a team of strategists, technologists, and creative thinkers, we help organisations navigate the digital landscape with precision and purpose. Our expertise spans Adobe Experience Manager (AEM), Agile project delivery, full-stack software development, and data-driven digital marketing — all tailored to meet the unique needs of forward-thinking businesses.

              We believe that great technology should be seamless, sustainable, and user-centric. That’s why every solution we develop is grounded in best practice, built for scalability, and designed to create lasting impact.

              Whether you’re accelerating growth, enhancing customer experience, or transforming legacy systems, Paramount Consultants is your trusted partner in digital excellence.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
