// FadeInSection.jsx
import { useRef, useEffect } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import styled from "styled-components";

const FadeInWrapper = styled(motion.div)`
  will-change: opacity, transform;
`;

function FadeInSection({
  children,
  offset = "0px",
  duration = 0.8,
  distance = 20,
  delay = 0,
}) {
  const domRef = useRef(null);
  const controls = useAnimation();
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      controls.set({ opacity: 1, y: 0 });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: offset,
        threshold: 0.1,
      }
    );

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [controls, offset, prefersReduced]);

  const variants = {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: "easeOut" },
    },
  };

  return (
    <FadeInWrapper
      ref={domRef}
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </FadeInWrapper>
  );
}

export default FadeInSection;
