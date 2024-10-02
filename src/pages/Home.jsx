import styled from "styled-components";
import { FONTS, QUERIES } from "../constants";

export default function Home() {
  return (
    <>
      <VideoBackground autoPlay muted playsInline webkit-playsinline loop>
        <source
          src="https://res.cloudinary.com/dqs3mkxnr/video/upload/q_80,dpr_2.0,f_auto/v1727863728/output_l9q8gq.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </VideoBackground>
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
  width: 100dvw;
  height: 100dvh;
  object-fit: cover;
  z-index: -1;
`;

const ContentWrapper = styled.div`
  position: relative;
  padding: 0 16px 1rem;
  // Top padding includes safe area + navbar height to avoid overlap
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; // Prevents centering from pushing content over the top
  color: white;

  @media ${QUERIES.largeTabletAndUp} {
    padding: calc(env(safe-area-inset-top, 20px) + 80px) 46px 16px;
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
`;
