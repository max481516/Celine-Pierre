import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import BackToTopIcon from "../media/BackToTop.svg?react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { QUERIES } from "../constants";

// ---------------------------------------------
// Motion & behavior constants
// ---------------------------------------------
// MOVE_ANIM_S controls the total duration of the jellyfish's up-then-down motion.
// Keep at 3s; we will slow the PAGE scroll separately.
const MOVE_ANIM_S = 4; // seconds

// "Stagger" means starting each bubble slightly after the previous one
// to create a cascading effect rather than spawning all at once.
// Here we start each subsequent bubble 0.10s later than the previous one.
const STAGGER_STEP_S = 0.06;

// Number of bubbles to spawn while the jellyfish moves up.
const BUBBLE_COUNT = 12;

// Duration of the return-to-start motion for all bubbles (when the jellyfish
// starts moving back down). Kept unified to have a clean, synchronized return.
const RETURN_DURATION_S = 1.3;

// Duration for the PAGE scrolling when clicking "back to top".
// This slows down the content scroll independently from the jellyfish animation.
const SCROLL_DURATION_MS = 2000; // milliseconds

// Custom smooth scroll to a specific Y position using an ease-in-out curve.
// We use this instead of `scrollIntoView({ behavior: 'smooth' })` so we can
// control the scroll duration.
function smoothScrollToY(targetY, durationMs) {
  const startY = window.pageYOffset || window.scrollY || 0;
  const deltaY = targetY - startY;
  const startTime = performance.now();

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  function step(now) {
    const elapsed = now - startTime;
    const t = Math.min(1, elapsed / durationMs);
    const eased = easeInOutCubic(t);
    window.scrollTo(0, startY + deltaY * eased);
    if (t < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

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

    // Slow the PAGE scroll to the #nav element using our custom smoother.
    // This does not affect the jellyfish motion; it only changes how quickly
    // the content scrolls.
    const navEl = document.getElementById("nav");
    const targetY = navEl
      ? navEl.getBoundingClientRect().top + window.pageYOffset
      : 0;
    smoothScrollToY(targetY, SCROLL_DURATION_MS);

    // Compute a safe unmount time so bubbles finish both legs (down, then return up).
    // The jellyfish runs for MOVE_ANIM_S seconds total; bubbles return begins at the midpoint.
    const MOVE_ANIM_MS = MOVE_ANIM_S * 1000;
    const longestAnimMs = Math.max(
      MOVE_ANIM_MS,
      (MOVE_ANIM_S / 2 + RETURN_DURATION_S) * 1000
    );

    // Unmount only after the longest possible visual completes
    setTimeout(() => {
      setIsAnimating(false);
    }, longestAnimMs);
  };

  const { t } = useTranslation();

  return (
    <FooterContainer ref={footerRef} $isHomePage={$isHomePage}>
      {!$isHomePage && (
        <BackToTop
          href="#nav"
          title="back to top"
          ref={iconRef}
          onClick={handleScrollToTop}
          $isAnimating={$isAnimating}
        >
          <StyledBackToTopIcon $isAnimating={$isAnimating} />
          {/** bubbles **/}
          {/* Up-phase only: bubbles fall under the jellyfish, then return upward together at midpoint.
              "Stagger": we start each bubble slightly later to create a cascade instead of a burst. */}
          { $isAnimating && Array.from({ length: BUBBLE_COUNT }).map((_, i) => {
            // Horizontal drift and size are randomized for variety.
            const offset = (Math.random() - 0.5) * 40; // -20 to 20px horizontal drift
            const size = 4 + Math.random() * 6;        // 4–10px

            // "Stagger": each bubble starts slightly after the previous for a cascading effect.
            const delay = i * STAGGER_STEP_S;

            // Ensure the down motion completes before the jellyfish begins descending.
            // We cap each bubble's down duration so it finishes by MOVE_ANIM_S / 2.
            const halfS = MOVE_ANIM_S / 2;
            const duration = Math.max(0.6, Math.min(1.0, halfS - delay - 0.1 + (Math.random() - 0.5) * 0.2));

            // When the jellyfish starts going down, all bubbles return upward together.
            const returnDelay = halfS; // start exactly at the midpoint of the jellyfish motion
            const returnDuration = RETURN_DURATION_S;

            return (
              <Bubble
                key={`down-${i}`}
                style={{ width: size, height: size, left: `calc(50% + ${offset}px)` }}
                $delay={delay}
                $duration={duration}
                $returnDelay={returnDelay}
                $returnDuration={returnDuration}
                $dir="down"
              />
            );
          })}
        </BackToTop>
      )}
      <DeveloperLink 
        href="https://mbrunet.contact" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {t("Footer.Developer")}
      </DeveloperLink>
    </FooterContainer>
  );
}

// Keyframe animation for bubbles directions
const bubbleDown = keyframes`
  0%   { transform: translate(-50%, -10px)   scale(.5); opacity: 0;   }
  15%  { opacity: 1; }                 /* fade in while moving   */
  100% { transform: translate(-50%, 60px) scale(1); opacity: 0; }
`;


// Return motion: when the jellyfish starts moving down, bubbles go back up to their initial
// position (reverse of the first leg). We start from 60px below (where bubbleDown ended)
// and return to 0.
const bubbleReturnUp = keyframes`
  0%   { transform: translate(-50%, 0)  scale(1);  opacity: 0;   }
  15%  { opacity: 1; }
  100% { transform: translate(-50%, -100px)     scale(.5); opacity: 0; }
`;

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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DeveloperLink = styled.a`
  color: var(--color-sandstone);
  font-size: 0.9rem;
  text-decoration: underline;
  &:hover {
    color: var(--color-primary-blue);
  }
`;

const BackToTop = styled.a`
  position: fixed;
  bottom: calc(2rem / 16);
  right: 10px;
  bottom: 12px;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  z-index: 3000;
  overflow: visible; // allow bubbles to extend outside link box

  @media ${QUERIES.laptopAndUp} {
    right: 16px;
  }

  animation: ${({ $isAnimating }) =>
    $isAnimating
      ? css`
          ${moveUpDown} ${MOVE_ANIM_S}s ease
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
          ${moveUpDown} ${MOVE_ANIM_S}s ease
        `
      : "none"};
`;

// Bubbles element
const Bubble = styled.span`
  position: absolute;
  bottom: 8px;
  left: 50%;
  width: 6px;
  height: 6px;
  background: var(--color-primary-blue);
  border-radius: 50%;
  pointer-events: none;
  transform: translateX(-50%);
  will-change: transform, opacity; 
  /* We chain two animations:
     1) bubbleDown: from under the jellyfish to 60px lower (fall) with per-bubble stagger
     2) bubbleReturnUp: all together return upward to their starting point when the jellyfish descends */
  animation: ${({ $delay, $duration, $returnDelay, $returnDuration }) => css`
    ${bubbleDown} ${$duration || 0.8}s ease-out ${$delay || 0}s forwards,
    ${bubbleReturnUp} ${$returnDuration || 0.8}s ease-in ${$returnDelay || 0}s forwards;
  `};
`;
