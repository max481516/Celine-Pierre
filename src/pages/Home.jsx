/* import { useState, useEffect } from "react"; */
import styled from "styled-components";
import { FONTS, QUERIES } from "../constants";
import { useTranslation } from "react-i18next";
import FadeInSection from "../components/FadeInSection";

export default function Home() {
  /* const [isLowPowerMode, setIsLowPowerMode] = useState(false); */

  const { t } = useTranslation();

  /*   useEffect(() => {
    const videoElement = document.getElementById("background-video");
    ensureVideoPlays(videoElement);
  }, []); */

  /* const ensureVideoPlays = (video) => {
    if (!video) return;
    const promise = video.play();
    promise
      .then(() => {
        // Autoplay successful, no need for fallback
        setIsLowPowerMode(false);
      })
      .catch(() => {
        // Autoplay failed, likely due to Low Power Mode - switch to GIF
        setIsLowPowerMode(true);
      });
  };
 */
  return (
    <>
      {/*       {!isLowPowerMode ? (
        <VideoBackground
          id="background-video"
          autoPlay
          muted
          playsInline
          webkit-playsinline
          loop
        >
          <source
            src="https://res.cloudinary.com/dqs3mkxnr/video/upload/q_90,f_auto/v1727863728/output_l9q8gq.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </VideoBackground>
      ) : ( */}

      <ContentWrapper>
        <FadeInSection>
          <ImageContainer>
            <picture>
              <source
                srcSet="
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1733996077/CP2_qlzjgn.jpg 1600w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1733996077/CP2_qlzjgn.jpg 1100w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1733996077/CP2_qlzjgn.jpg 770w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1733996077/CP2_qlzjgn.jpg 550w"
                sizes="
      (min-width: 1200px) 1500px,
      (min-width: 1024px) 1100px,
      (min-width: 768px) 770px,
      100vw"
              />
              <PhotoBackground
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1733996077/CP2_qlzjgn.jpg"
                alt="Maora Beach"
              />
            </picture>
          </ImageContainer>
          <TextContainer>
            <Title>{t("Home.Title")}</Title>
            <Text>{t("Home.Text")}</Text>
          </TextContainer>
        </FadeInSection>
      </ContentWrapper>
    </>
  );
}

// Styled Components
/* const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`; */

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: white;
  min-height: 100vh;
  padding: 20px;

  @media ${QUERIES.tabletAndUp} {
    padding: 40px;
  }
`;

const ImageContainer = styled.div``;

const PhotoBackground = styled.img`
  object-fit: cover;
  object-position: 50% 52%;
  min-height: 60dvh;
  max-height: 50dvh;
  width: 100dvw;
`;

const TextContainer = styled.div`
  background-color: var(--color-dark-sand);
  width: 100%;
  padding: 2rem 2rem 2rem;
  flex-grow: 1;

  @media ${QUERIES.largeTabletAndUp} {
    padding-top: 3rem;
  }
`;

const Title = styled.h1`
  ${FONTS.titleFont};
  color: white;
  font-size: 2rem;
  text-align: start;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  ${FONTS.titleFont};
  font-size: 1.5rem;
  padding-right: 2rem;
  color: white;
  font-weight: 500;
  text-align: start;

  @media ${QUERIES.laptopAndUp} {
    padding-right: 32rem;
  }
`;
