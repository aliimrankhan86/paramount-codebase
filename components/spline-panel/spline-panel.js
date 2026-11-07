"use client";

import cn from "classnames";
import Link from "next/link";
import { SplineScene } from "@/components/spline-scene/spline-scene";
import { Spotlight } from "@/components/spotlight/spotlight";
import styles from "./spline-panel.module.css";

// Default scene is a placeholder from 21st.dev. Swap for the client's own
// .splinecode URL when a bespoke model is commissioned.
const DEFAULT_SCENE = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export default function SplinePanel({ scene = DEFAULT_SCENE }) {
  return (
    <section id="spline-panel" className={cn("section", "section-dark")} aria-labelledby="spline-title">
      <div className="container">
        <div className={styles.panel}>
          <Spotlight />
          <div className={styles.content}>
            <span className={styles.kicker}>Applied intelligence</span>
            <h2 id="spline-title" className={cn("heading-2", styles.title)}>
              Agentic AI, made <em>tangible.</em>
            </h2>
            <p className={cn("paragraph-large", styles.copy)}>
              A working model of how we scope agentic systems — the coordination layer,
              the tools it touches, and the checkpoints that keep a person in control of
              anything that matters.
            </p>
            <Link href="/contact" className={cn("link-arrow", styles.ctaLink)}>
              Start a conversation
              <Arrow />
            </Link>
          </div>
          <div className={styles.stage}>
            <SplineScene
              scene={scene}
              className={styles.scene}
              label="Interactive model of agentic AI orchestration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.75 12h14.5" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13.75 6.75 19.25 12l-5.5 5.25" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
