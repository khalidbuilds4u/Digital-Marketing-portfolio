"use client";

import Spline from '@splinetool/react-spline';
import { Suspense } from 'react';

export default function SplineScene() {
  return (
    <Suspense fallback={<div className="w-full h-full bg-[var(--color-bg-dark)]" />}>
      <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
    </Suspense>
  );
}
