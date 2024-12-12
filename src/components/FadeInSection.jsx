// FadeInSection.jsx
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const FadeInWrapper = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  will-change: opacity, transform;
`;

function FadeInSection({ children, offset = "0px" }) {
  const domRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
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
  }, [offset]);

  return (
    <FadeInWrapper ref={domRef} isVisible={isVisible}>
      {children}
    </FadeInWrapper>
  );
}

export default FadeInSection;
