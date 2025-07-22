"use client";

import React from "react";
import cn from "classnames";
import styles from "./services.module.css";
import icons from "@/constants/icons";
import mock from "@/constants/mock";
import Category from "@/components/category";

export default function Services({ collections = mock.collections }) {
  return (
    <div id="services" className={cn("section", styles.section)}>
      <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: 24 }}>Services</h2>
      <div className={cn("container", styles.container)}>
        <div className={styles.categories}>
          {collections.slice(0, 3).map((category, index) => (
            <Category
              {...category}
              key={category.id}
              className={styles.category}
              index={index}
            />
          ))}
        </div>
      </div>
      <h3 className="heading-2" style={{ textAlign: 'center', marginTop: 40 }}>What We Offer</h3>
      <div className="paragraph-medium" style={{ textAlign: 'center', maxWidth: 700, margin: '16px auto' }}>
        We provide a comprehensive suite of digital consultancy services to meet the evolving needs of modern businesses. Whether you’re starting a transformation journey or optimising existing systems, our team delivers expert solutions built for scale and success.
      </div>
      <h3 className="heading-2" style={{ textAlign: 'center', marginTop: 40 }}>Adobe Experience Manager (AEM) Solutions</h3>
      <div className="paragraph-medium" style={{ textAlign: 'center', maxWidth: 700, margin: '16px auto' }}>
        Deliver consistent, personalised customer experiences across every channel. Our AEM-certified consultants design, implement, and optimise platforms that are scalable, secure, and user-friendly.
      </div>
      <h3 className="heading-2" style={{ textAlign: 'center', marginTop: 40 }}>Agile Project Delivery</h3>
      <div className="paragraph-medium" style={{ textAlign: 'center', maxWidth: 700, margin: '16px auto' }}>
        Maximise delivery efficiency with Agile frameworks that promote adaptability, transparency, and collaboration. From sprint planning to stakeholder engagement, we ensure smooth execution and measurable outcomes.
      </div>
      <h3 className="heading-2" style={{ textAlign: 'center', marginTop: 40 }}>Full-Stack Software Development</h3>
      <div className="paragraph-medium" style={{ textAlign: 'center', maxWidth: 700, margin: '16px auto' }}>
        Build intelligent digital products with scalable architecture and clean, maintainable code. We offer end-to-end software engineering across front-end, back-end, and APIs, using modern frameworks and best practices.
      </div>
      <h3 className="heading-2" style={{ textAlign: 'center', marginTop: 40 }}>Digital Marketing & Strategy</h3>
      <div className="paragraph-medium" style={{ textAlign: 'center', maxWidth: 700, margin: '16px auto' }}>
        Drive visibility, engagement, and conversions with our data-led digital marketing services. From SEO and content strategy to campaign execution, we align marketing with measurable business goals.
      </div>
    </div>
  );
}
