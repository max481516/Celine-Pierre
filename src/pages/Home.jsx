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

      <FadeInSection>
        <ContentWrapper>
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
        </ContentWrapper>
      </FadeInSection>
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
  border: 5px double var(--color-darker-sand);
   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  justify-content: center;
  color: white;
  
  margin: 20px 15px;

  @media ${QUERIES.tabletAndUp} {
    margin: 40px;
  }

  @media ${QUERIES.laptopAndUp} {
    width: 60%;
    margin: 20px auto;
  }

  @media ${QUERIES.desktopAndUp} {
    width: 50%;
  }
`;

const ImageContainer = styled.div``;

const PhotoBackground = styled.img`
  object-fit: cover;
  object-position: 50% 52%;
  min-height: 50vh;
  max-height: 50vh;
  width: 100dvw;
`;

const TextContainer = styled.div`
  background-color: var(--color-dark-sand);
  width: 100%;
  padding: 2rem 1rem 2rem;
  flex-grow: 1;

  @media ${QUERIES.largeTabletAndUp} {
    padding: 3rem 1rem 2rem;
  }
`;

const Title = styled.h1`
  ${FONTS.titleFont};
  color: white;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  ${FONTS.titleFont};
  font-size: 1.5rem;
  color: white;
  text-align: center;
  font-weight: 500;
  text-align: center;

  @media ${QUERIES.largeTabletAndUp} {
    padding: 0 4rem;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 0 6rem;
  }

  @media ${QUERIES.desktopAndUp} {
    padding: 0 8rem;
  }
`; //das
