"use client";

import { useRef, MouseEvent } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  service: string;
  image: string;
  href: string;
  aspectRatio: string;
  priority?: boolean;
}

export default function ProjectCard({
  title,
  category,
  service,
  image,
  href,
  aspectRatio,
  priority = false,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  
  // Parallax Image Effect
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["3deg", "-3deg"]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-3deg", "3deg"]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, clipPath: "inset(10% 0 0 0)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
    >
      <Link 
        href={href} 
        className="group block w-full"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-cursor="view"
      >
        <motion.div 
          className={`relative overflow-hidden bg-[var(--color-border)] w-full`}
          style={{ aspectRatio, rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
          {/* Inner motion div for parallax scrolling of the image itself */}
          <motion.div className="absolute inset-0 w-full h-[120%] -top-[10%]" style={{ y: yImage }}>
            <Image 
              src={image} 
              alt={`${title} Project`} 
              fill 
              priority={priority}
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]" 
              sizes="(max-width: 768px) 100vw, 50vw" 
            />
          </motion.div>
          {/* Dark gradient overlay on hover for better text contrast if needed */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
        </motion.div>

        <div className="mt-6 flex flex-col items-start">
          <h3 className="text-2xl md:text-3xl mb-2 font-display">{title}</h3>
          <div className="flex gap-2 text-xs md:text-sm text-[var(--color-text-secondary)] uppercase tracking-wider font-medium">
            <span>{category}</span>
            <span>·</span>
            <span>{service}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
