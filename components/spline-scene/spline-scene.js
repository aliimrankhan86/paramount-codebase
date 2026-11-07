"use client";

import { Component, Suspense, lazy } from "react";
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
  return (
    <div className={className} role="img" aria-label={label}>
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
    </div>
  );
}
