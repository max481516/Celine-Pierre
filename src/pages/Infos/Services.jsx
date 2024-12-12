import InfoElement from "../../components/InfoElement";
import styled from "styled-components";
import { FONTS, QUERIES } from "../../constants";
import Border from "../../media/Border.svg?react";

import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <FrameContainer>
        <StyledBorder />
        <Title>{t("Services.Title")}</Title>
        <SubTitle>{t("Services.SubTitle")}</SubTitle>
        <SitterDescription>{t("Services.SitterDescription")}</SitterDescription>
        <InfoElement
          picture={
            <picture>
              <source
                srcSet="
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1733342851/BabySitter_nshxzx.jpg 1600w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1733342851/BabySitter_nshxzx.jpg 1100w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1733342851/BabySitter_nshxzx.jpg 770w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1733342851/BabySitter_nshxzx.jpg 550w"
                sizes="
    (min-width: 1200px) 1500px,
    (min-width: 1024px) 1100px,
    (min-width: 768px) 770px,
    100vw"
              />
              <SitterStyledImage
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1733342851/BabySitter_nshxzx.jpg"
                alt="Baby Sitter - View"
              />
            </picture>
          }
        />
        <SubTitle>{t("Services.SubTitle2")}</SubTitle>
        <InfoElement
          name="DESSANGE Coiffeur Porto Vecchio"
          location="Pl. Sainte-Croix, 20137 Porto-Vecchio"
          locationLink="https://maps.app.goo.gl/WbahFGAym81vwETR9"
          picture={
            <picture>
              <source
                srcSet="
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1734023213/787A6883_nbh1ad.jpg 1600w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1734023213/787A6883_nbh1ad.jpg 1100w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1734023213/787A6883_nbh1ad.jpg 770w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1734023213/787A6883_nbh1ad.jpg 550w"
                sizes="
      (min-width: 1200px) 1500px,
      (min-width: 1024px) 1100px,
      (min-width: 768px) 770px,
      100vw"
              />
              <StyledImage
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800,f_auto,q_auto/v1734023213/787A6883_nbh1ad.jpg"
                alt="Dessange - View"
              />
            </picture>
          }
        />
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
  text-align: center;
  text-transform: uppercase;

  @media ${QUERIES.largeTabletAndUp} {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.h3`
  ${FONTS.titleFont};
  text-align: center;
  font-size: 1.5rem;

  @media ${QUERIES.largeTabletAndUp} {
    font-size: 2rem;
    color: var(--color-primary-blue);
  }
`;

const SitterDescription = styled.p`
  ${FONTS.titleFont};
  text-align: center;
  padding: 0 1rem;
`;

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

const SitterStyledImage = styled(StyledImage)`
  height: 350px;
`;
