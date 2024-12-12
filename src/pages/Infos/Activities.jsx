import InfoElement from "../../components/InfoElement";
import styled from "styled-components";
import { FONTS, QUERIES } from "../../constants";
import Border from "../../media/Border.svg?react";
import Separator from "../../media/Separator.svg?react";
import { useTranslation } from "react-i18next";

export default function RnB() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <FrameContainer>
        <StyledBorder />
        <Title>{t("Activities.Title")}</Title>
        <Section>
          <InfoElement
            name="ProKart"
            location="Route du stade, 20114 Figari"
            locationLink="https://maps.app.goo.gl/72UmQx5CDUnH8Cx89"
            picture={
              <picture>
                <source
                  srcSet="
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1729092014/Kart_lcpscr.jpg 1600w,
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1729092014/Kart_lcpscr.jpg 1100w,
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1729092014/Kart_lcpscr.jpg 770w,
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1729092014/Kart_lcpscr.jpg 550w"
                  sizes="
                (min-width: 1200px) 1500px,
                (min-width: 1024px) 1100px,
                (min-width: 768px) 770px,
                100vw"
                />
                <StyledImage
                  src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1729092014/Kart_lcpscr.jpg"
                  alt="Karting"
                />
              </picture>
            }
          />
          <StyledSeparator />
          <InfoElement
            name="Jet Ski"
            location="Quai de Syracuse, 20137 Porto-Vecchio"
            locationLink="https://maps.app.goo.gl/kXCjfaw8VZeoupVA7"
            picture={
              <picture>
                <source
                  srcSet="
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1729092018/JetSki_mcvfnq.jpg 1600w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1729092018/JetSki_mcvfnq.jpg 1100w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1729092018/JetSki_mcvfnq.jpg 770w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1729092018/JetSki_mcvfnq.jpg 550w"
                  sizes="
    (min-width: 1200px) 1500px,
    (min-width: 1024px) 1100px,
    (min-width: 768px) 770px,
    100vw"
                />
                <StyledImage
                  src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1729092018/JetSki_mcvfnq.jpg"
                  alt="Jet Ski"
                />
              </picture>
            }
          />
        </Section>
        <StyledBottomBorder />
      </FrameContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem;

  @media ${QUERIES.largeTabletAndUp} {
    padding: 3rem;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 8rem 14rem;
    background-color: var(--color-lighter-sand);
  }

  @media ${QUERIES.desktopAndUp} {
    padding: 8rem 24rem;
  }
`;

const FrameContainer = styled.div`
  @media ${QUERIES.laptopAndUp} {
    padding: 2rem;
    box-shadow: 0 26px 58px 0 rgba(0, 0, 0, 0.22),
      0 5px 14px 0 rgba(0, 0, 0, 0.18);
    background-color: var(--color-light-sand);
    max-width: 900px;
    margin: 0 auto;
  }

  @media ${QUERIES.desktopAndUp} {
    padding: 4rem;
  }
`;

const Title = styled.h2`
  ${FONTS.titleFont};
  font-size: 2rem;
  color: var(--color-primary-blue);
  padding: 0.5rem 0;
  text-align: center;
  text-transform: uppercase;

  @media ${QUERIES.largeTabletAndUp} {
    font-size: 2.5rem;
  }
`;

const Section = styled.section``;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
`;

const StyledBorder = styled(Border)`
  padding-bottom: 1rem;
  color: var(--color-primary-blue);
`;

const StyledBottomBorder = styled(StyledBorder)`
  padding-bottom: 0;
  padding-top: 1rem;
  transform: rotate(180deg);
`;

const StyledSeparator = styled(Separator)`
  color: var(--color-primary-blue);
`;
