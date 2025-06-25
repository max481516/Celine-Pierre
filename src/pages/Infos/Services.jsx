import InfoElement from "../../components/InfoElement";
import styled from "styled-components";
import { FONTS, QUERIES, STYLES } from "../../constants";
import Border from "../../media/Border.svg?react";

import { useTranslation } from "react-i18next";
import SectionTitle from "../../components/SectionTitle";

export default function Services() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <FrameContainer>
        <StyledBorder />
        <Title>{t("Services.Title")}</Title>
        <SectionTitle title={t("Services.SubTitle")} />
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
        <SectionTitle title={t("Services.SubTitle2")} />
        <InfoElement
          name="DESSANGE Coiffeur Porto Vecchio"
          location="Pl. Sainte-Croix, 20137 Porto-Vecchio"
          locationLink="https://maps.app.goo.gl/WbahFGAym81vwETR9"
          picture={
            <picture>
              <source
                srcSet="
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1734030906/DESSANGE_logo_zp2kkj.jpg 1600w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1734030906/DESSANGE_logo_zp2kkj.jpg 1100w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1734030906/DESSANGE_logo_zp2kkj.jpg 770w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1734030906/DESSANGE_logo_zp2kkj.jpg 550w"
                sizes="
      (min-width: 1200px) 1500px,
      (min-width: 1024px) 1100px,
      (min-width: 768px) 770px,
      100vw"
              />
              <StyledImage
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800,f_auto,q_auto/v1734030906/DESSANGE_logo_zp2kkj.jpg"
                alt="Dessange Logo"
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
  ${STYLES.frameContainer}
`;

const Title = styled.h2`
  ${FONTS.titleFont};
  font-size: 2rem;
  color: var(--color-primary-blue);
  text-align: center;
  text-transform: uppercase;

  @media ${QUERIES.tabletAndUp} {
    font-size: 2.5rem;
  }

  @media ${QUERIES.largeTabletAndUp} {
    font-size: 2.5rem;
  }
`;

const SitterDescription = styled.p`
  ${FONTS.titleFont};
  font-size: 1.2rem;
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
