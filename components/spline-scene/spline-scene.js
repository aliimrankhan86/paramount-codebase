"use client";

import { Component, Suspense, lazy, useEffect, useRef, useState } from "react";
import styles from "./spline-scene.module.css";

const Spline = lazy(() => import("@splinetool/react-spline"));

// A WebGL failure in the user's browser must never take down the panel (or the
// page). Catch it and render a quiet fallback instead of letting it propagate.
class SplineErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    console.error("Spline scene failed to load:", error);
  }

  render() {
    if (this.state.failed) {
      return (
        <div className={styles.fallback} role="img" aria-label={this.props.label}>
          Interactive model unavailable in this browser.
        </div>
      );
    }
    return this.props.children;
  }
}

export function SplineScene({ scene, className, label = "Interactive 3D model" }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  /*
    The Spline runtime is a few hundred KB of JavaScript that evaluates on the
    main thread. `lazy` alone is not enough: the component still mounts on
    hydration, so the runtime downloads and blocks immediately — roughly a
    second of Total Blocking Time on the home page for a panel the visitor has
    not scrolled to yet. Wait until the panel is actually near the viewport.
  */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} role="img" aria-label={label}>
      {active ? (
        <SplineErrorBoundary label={label}>
          <Suspense
            fallback={
              <div className={styles.loader} role="status" aria-label={`Loading ${label}`}>
                <span className={styles.spinner} />
              </div>
            }
          >
            <Spline scene={scene} className={styles.scene} />
          </Suspense>
        </SplineErrorBoundary>
      ) : (
        <div className={styles.loader} role="status" aria-label={`Loading ${label}`}>
          <span className={styles.spinner} />
        </div>
      )}
    </div>
  );
}
