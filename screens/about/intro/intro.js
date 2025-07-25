import React from "react";
import cn from "classnames";
import styles from "./intro.module.css";
import icons from "@/constants/icons";

export default function Intro() {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.heading}>
          <div
            className={cn("heading-2", styles.title)}
            style={{ textAlign: "center", marginBottom: 32 }}
          >
            About us
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div
            className={cn("paragraph-medium", styles.description)}
            style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}
          >
            At Paramount Consultants, we deliver more than just digital
            solutions — we craft intelligent experiences that connect, empower,
            and evolve with your business. As a team of strategists,
            technologists, and creative thinkers, we help organisations navigate
            the digital landscape with precision and purpose. Our expertise
            spans Adobe Experience Manager (AEM), Agile project delivery,
            full-stack software development, and data-driven digital marketing —
            all tailored to meet the unique needs of forward-thinking
            businesses. We believe that great technology should be seamless,
            sustainable, and user-centric. That’s why every solution we develop
            is grounded in best practice, built for scalability, and designed to
            create lasting impact. Whether you’re accelerating growth, enhancing
            customer experience, or transforming legacy systems, Paramount
            Consultants is your trusted partner in digital excellence.
          </div>
          <h2 style={{ textAlign: "center", color: "red", marginTop: 40 }}>
            TEST HEADING
          </h2>
          <div
            style={{ textAlign: "center", color: "red", margin: "16px auto" }}
          >
            This is a test paragraph. If you see this, content after the About
            Us paragraph is rendering.
          </div>
          {/* Original content below */}
          <h3
            className="heading-2"
            style={{ textAlign: "center", marginTop: 40 }}
          >
            What We Offer
          </h3>
          <div
            className="paragraph-medium"
            style={{ textAlign: "center", maxWidth: 700, margin: "16px auto" }}
          >
            We provide a comprehensive suite of digital consultancy services to
            meet the evolving needs of modern businesses. Whether you’re
            starting a transformation journey or optimising existing systems,
            our team delivers expert solutions built for scale and success.
          </div>
          <h3
            className="heading-2"
            style={{ textAlign: "center", marginTop: 40 }}
          >
            Adobe Experience Manager (AEM) Solutions
          </h3>
          <div
            className="paragraph-medium"
            style={{ textAlign: "center", maxWidth: 700, margin: "16px auto" }}
          >
            Deliver consistent, personalised customer experiences across every
            channel. Our AEM-certified consultants design, implement, and
            optimise platforms that are scalable, secure, and user-friendly.
          </div>
          <h3
            className="heading-2"
            style={{ textAlign: "center", marginTop: 40 }}
          >
            Agile Project Delivery
          </h3>
          <div
            className="paragraph-medium"
            style={{ textAlign: "center", maxWidth: 700, margin: "16px auto" }}
          >
            Maximise delivery efficiency with Agile frameworks that promote
            adaptability, transparency, and collaboration. From sprint planning
            to stakeholder engagement, we ensure smooth execution and measurable
            outcomes.
          </div>
          <h3
            className="heading-2"
            style={{ textAlign: "center", marginTop: 40 }}
          >
            Full-Stack Software Development
          </h3>
          <div
            className="paragraph-medium"
            style={{ textAlign: "center", maxWidth: 700, margin: "16px auto" }}
          >
            Build intelligent digital products with scalable architecture and
            clean, maintainable code. We offer end-to-end software engineering
            across front-end, back-end, and APIs, using modern frameworks and
            best practices.
          </div>
          <h3
            className="heading-2"
            style={{ textAlign: "center", marginTop: 40 }}
          >
            Digital Marketing & Strategy
          </h3>
          <div
            className="paragraph-medium"
            style={{ textAlign: "center", maxWidth: 700, margin: "16px auto" }}
          >
            Drive visibility, engagement, and conversions with our data-led
            digital marketing services. From SEO and content strategy to
            campaign execution, we align marketing with measurable business
            goals.
          </div>
        </div>
      </div>
    </div>
  );
}
