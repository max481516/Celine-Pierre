import InfoElement from "../../components/InfoElement";
import styled from "styled-components";
import { FONTS, QUERIES, STYLES } from "../../constants";
import Border from "../../media/Border.svg?react";
import { Trans, useTranslation } from "react-i18next";
import SectionTitle from "../../components/SectionTitle";
import StyledSeparator from "../../components/Separator";
import ShuttleTimetable from "../../components/ShuttleTimetable";
import FadeInSection from "../../components/FadeInSection";
import { Link } from "react-router-dom";

export default function Transports() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <FrameContainer>
        <StyledBorder />
        <Title>{t("Transports.Title")}</Title>
        <FadeInSection>
          <Section>
            <SectionTitle title={t("Transports.SectionTitle2")} />
            <ImageContainer>
              <picture>
                <source
                  srcSet="
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1750870995/vans_fo0zp2.webp 1600w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1750870995/vans_fo0zp2.webp 1100w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1750870995/vans_fo0zp2.webp 770w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1750870995/vans_fo0zp2.webp 550w
    "
                  sizes="
      (min-width: ${BREAKPOINTS.desktopMin}px) 1500px,
      (min-width: ${BREAKPOINTS.laptopMin}px) 1100px,
      (min-width: ${BREAKPOINTS.bigTabletMin}px) 770px,
      (min-width: ${BREAKPOINTS.tabletMin}px) 550px,
      100vw
    "
                  type="image/webp"
                />
                <Vans
                  src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800,f_auto,q_auto/v1750870995/vans_fo0zp2.webp"
                  loading="lazy"
                  alt="Luxury shuttle vans"
                />
              </picture>
            </ImageContainer>
            <ShuttleTimetable
              title={t("Transports.ShuttleTimetable1.Title")}
              timetableInfo={
                <Trans
                  i18nKey="Transports.ShuttleTimetable1.TimetableInfo"
                  components={{ bold: <Bold />, colored: <Colored /> }}
                />
              }
            />
            <ShuttleTimetable
              title={t("Transports.ShuttleTimetable2.Title")}
              timetableInfo={
                <Trans
                  i18nKey="Transports.ShuttleTimetable2.TimetableInfo"
                  components={{ bold: <Bold />, colored: <Colored /> }}
                />
              }
            />
            <ShuttleTimetable
              title={t("Transports.ShuttleTimetable3.Title")}
              timetableInfo={
                <Trans
                  i18nKey="Transports.ShuttleTimetable3.TimetableInfo"
                  components={{ bold: <Bold />, colored: <Colored /> }}
                />
              }
            />
            <ShuttleTimetable
              title={t("Transports.ShuttleTimetable4.Title")}
              timetableInfo={
                <Trans
                  i18nKey="Transports.ShuttleTimetable4.TimetableInfo"
                  components={{ bold: <Bold />, colored: <Colored /> }}
                />
              }
            />
            <Questions>
              <Trans
                i18nKey="Transports.Questions"
                components={{
                  QuestionsLink: <QuestionsLink to="/Contacts" />,
                }}
              />
            </Questions>
          </Section>
        </FadeInSection>
        <StyledSeparator />
        <FadeInSection>
          <Section>
            <SectionTitle title={t("Transports.SectionTitle")} />
            <InfoElement
              name="SIXT FIGARI"
              location=" Route de l'aeroport, 20114 Figari"
              locationLink="https://maps.app.goo.gl/9CuSXYuAhHtZ2D236"
              picture={
                <picture>
                  <source
                    srcSet="
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1733343408/SIXT_aryzms.jpg 1600w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1733343408/SIXT_aryzms.jpg 1100w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1733343408/SIXT_aryzms.jpg 770w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1733343408/SIXT_aryzms.jpg 550w"
                    sizes="
      (min-width: 1200px) 1500px,
      (min-width: 1024px) 1100px,
      (min-width: 768px) 770px,
      100vw"
                  />
                  <SixtStyledImage
                    src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1733343408/SIXT_aryzms.jpg"
                    alt="SIXT Car Rental - View"
                  />
                </picture>
              }
            />
          </Section>
        </FadeInSection>
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
  color: var(--color-primary-blue);
  padding: 0.5rem 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;

  @media ${QUERIES.tabletAndUp} {
    font-size: 2.5rem;
  }

  @media ${QUERIES.largeTabletAndUp} {
    font-size: 2.5rem;
  }
`;

const Section = styled.section`
  &:last-of-type {
    padding-top: 1rem;
  }
`;

const ImageContainer = styled.div``;

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

const SixtStyledImage = styled(StyledImage)`
  max-height: 450px;
`;

const Vans = styled(StyledImage)`
  max-height: 400px;
`;

const Questions = styled.p`
  text-align: center;
  font-style: italic;
  padding: 1rem 0;
`;

const QuestionsLink = styled(Link)`
  color: var(--color-primary-blue);
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-light-blue);
  }
`;

// JSON i18n text styling
const Bold = styled.span`
  font-weight: 600;
`;

const Colored = styled.span`
  color: var(--color-primary-blue);
  text-decoration: underline;
`;
