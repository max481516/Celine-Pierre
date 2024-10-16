import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import BackToTopIcon from "../media/BackToTop.svg?react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const iconRef = useRef(null);
  const footerRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const $isHomePage = useLocation().pathname === "/";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isAnimating) {
              iconRef.current.style.color = "var(--color-primary-blue)";
            }
          } else {
            if (!isAnimating) {
              iconRef.current.style.color = "var(--color-darker-sand)";
            }
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
  }, [isAnimating]);

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
        isAnimating={isAnimating}
        $isHomePage={$isHomePage}
      >
        <StyledBackToTopIcon isAnimating={isAnimating} />
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
  background: ${({ $isHomePage }) =>
    $isHomePage ? "transparent" : "var(--color-element-sand)"};
  text-align: center;
  border-top: ${({ $isHomePage }) =>
    $isHomePage ? "none" : "1px solid var(--color-darker-sand)"};
  width: 100%;
  height: 4rem;
  position: relative;
`;

const BackToTop = styled.a`
  display: ${({ $isHomePage }) => ($isHomePage ? "none" : "block")};
  position: fixed;
  bottom: calc(2rem / 16);
  right: -4px;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  z-index: 3000;

  /* Disable color transition during animation */
  color: ${({ isAnimating }) =>
    isAnimating ? "var(--color-light-blue)" : "inherit"};

  transition: ${({ isAnimating }) =>
    isAnimating ? "none" : "color 0.3s ease"};

  animation: ${({ isAnimating }) =>
    isAnimating
      ? css`
          ${moveUpDown} 3s ease
        `
      : "none"};
`;

const StyledBackToTopIcon = styled(BackToTopIcon)`
  width: 60px;
  height: auto;
  fill: currentColor;
  animation: ${({ isAnimating }) =>
    isAnimating
      ? css`
          ${moveUpDown} 3s ease
        `
      : "none"};
`;
