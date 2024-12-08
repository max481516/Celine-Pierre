import { useState, useEffect } from "react";
import styled from "styled-components";
import { FONTS, QUERIES } from "../constants";
import backgroundPhoto from "../media/plage-corse-2.webp";

export default function Home() {
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById("background-video");
    ensureVideoPlays(videoElement);
  }, []);

  const ensureVideoPlays = (video) => {
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

  return (
    <>
      {!isLowPowerMode ? (
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
      ) : (
        <PhotoBackground src={backgroundPhoto} />
      )}

      <ContentWrapper>
        <Title>Chers amis, bonjour à tous !</Title>
        <Text>
          Soyez les bienvenus sur notre site de mariage ! Nous avons conçu cet
          espace pour partager avec vous tous les détails essentiels, de manière
          conviviale et interactive. <br />
          <br /> Préparez-vous à plonger dans l'univers de notre grand jour !
          Parcourez les pages pour découvrir tout ce qu'il faut savoir : le lieu
          de la fête, le planning, le dress code et bien plus encore. <br />
          <br /> Nous avons même ajouté nos meilleurs conseils pour découvrir
          Porto-Vecchio : les restaurants et bars incontournables, les plages
          paradisiaques et les activités à ne pas manquer. Explorez à votre
          guise et surtout, pensez à confirmer votre présence (avant le 30
          Septembre 2024) ! <br />
          <br />
          Nous serons ravis de vous voir et avons hâte de célébrer cette journée
          magique entourés des personnes qui nous sont les plus chères. Restez à
          l'affût des dernières nouvelles sur le site, des surprises vous
          attendent !
        </Text>
      </ContentWrapper>
    </>
  );
}

// Styled Components
const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

const PhotoBackground = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: 52% 50%;
  z-index: -1;
`;

const ContentWrapper = styled.div`
  position: relative;
  padding: 0 16px 1rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: white;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 7rem;
  }

  @media ${QUERIES.largeTabletAndUp} {
    padding: 46px 16px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 46px 128px;
  }

  @media ${QUERIES.desktopAndUp} {
    padding: 46px 256px;
  }
`;

const Title = styled.h1`
  ${FONTS.titleFont};
  font-size: 2rem;
  text-align: center;
  margin: 1rem 20px 1.5rem;
`;

const Text = styled.p`
  color: var(--color-dark-blue);
  font-weight: 500;
  text-align: center;

  @media ${QUERIES.tabletAndUp} {
    padding: 0 128px;
  }
`;
