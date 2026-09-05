"use client";

import { useEffect, useRef } from "react";

export default function SplineScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Draw flowing, organic blobs
      for (let i = 0; i < 3; i++) {
        const x = w * (0.3 + i * 0.2) + Math.sin(time * 0.4 + i * 2) * w * 0.1;
        const y = h * 0.5 + Math.cos(time * 0.3 + i * 1.5) * h * 0.15;
        const radius = Math.min(w, h) * (0.2 + Math.sin(time * 0.2 + i) * 0.05);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        
        if (i === 0) {
          gradient.addColorStop(0, "rgba(196, 114, 47, 0.25)");
          gradient.addColorStop(1, "rgba(196, 114, 47, 0)");
        } else if (i === 1) {
          gradient.addColorStop(0, "rgba(120, 80, 200, 0.15)");
          gradient.addColorStop(1, "rgba(120, 80, 200, 0)");
        } else {
          gradient.addColorStop(0, "rgba(47, 140, 196, 0.15)");
          gradient.addColorStop(1, "rgba(47, 140, 196, 0)");
        }

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      time += 0.01;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}
