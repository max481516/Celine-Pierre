import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import BackToTopIcon from "../media/BackToTop.svg?react";
import { useLocation } from "react-router-dom";
import { QUERIES } from "../constants";

export default function Footer() {
  const iconRef = useRef(null);
  const footerRef = useRef(null);
  const [$isAnimating, setIsAnimating] = useState(false);
  const $isHomePage = useLocation().pathname === "/";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add any other behavior here if needed
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const currentFooter = footerRef.current;

    if (currentFooter) {
      observer.observe(currentFooter);
    }

    return () => {
      if (currentFooter) {
        observer.unobserve(currentFooter);
      }
    };
  }, []);

  const handleScrollToTop = (e) => {
    e.preventDefault();
    setIsAnimating(true); // Start animation

    // Scroll to top smoothly
    document.getElementById("nav").scrollIntoView({ behavior: "smooth" });

    // Set timeout to finish animation after scrolling
    setTimeout(() => {
      setIsAnimating(false); // End animation after 3s
    }, 3000); // Match the duration of the CSS animation
  };

  return (
    <FooterContainer ref={footerRef} $isHomePage={$isHomePage}>
      <BackToTop
        href="#nav"
        title="back to top"
        ref={iconRef}
        onClick={handleScrollToTop}
        $isAnimating={$isAnimating}
        $isHomePage={$isHomePage}
      >
        <StyledBackToTopIcon $isAnimating={$isAnimating} />
      </BackToTop>
    </FooterContainer>
  );
}

// Keyframe animation to move the icon up and back to its original position
const moveUpDown = keyframes`
  0% {
    bottom: calc(2rem / 16);
  }
  50% {
    bottom: 100%; 
  }
  100% {
    bottom: calc(2rem / 16); 
  }
`;

const FooterContainer = styled.footer`
  background: var(--color-element-sand);
  text-align: center;
  border-top: 1px solid var(--color-darker-sand);
  width: 100%;
  height: 5rem;
  position: relative;
`;

const BackToTop = styled.a`
  position: fixed;
  bottom: calc(2rem / 16);
  right: 10px;
  bottom: 12px;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  z-index: 3000;

  @media ${QUERIES.laptopAndUp} {
    right: 16px;
  }

  animation: ${({ $isAnimating }) =>
    $isAnimating
      ? css`
          ${moveUpDown} 3s ease
        `
      : "none"};
`;

const StyledBackToTopIcon = styled(BackToTopIcon)`
  width: 56px;
  height: auto;
  color: var(--color-primary-blue);
  animation: ${({ $isAnimating }) =>
    $isAnimating
      ? css`
          ${moveUpDown} 3s ease
        `
      : "none"};
`;
