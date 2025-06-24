import InfoElement from "../../components/InfoElement";
import styled from "styled-components";
import { FONTS, QUERIES } from "../../constants";
import Border from "../../media/Border.svg?react";
import { Trans, useTranslation } from "react-i18next";
import SectionTitle from "../../components/SectionTitle";
import StyledSeparator from "../../components/Separator";
import ShuttleTimetable from "../../components/ShuttleTimetable";

export default function Transports() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <FrameContainer>
        <StyledBorder />
        <Title>{t("Transports.Title")}</Title>
        <Section>
          <SectionTitle title={t("Transports.SectionTitle2")} />
          <ShuttleTimetable
            title={t("Transports.ShuttleTimetable1.Title")}
            timetableInfo={
              <Trans
                i18nKey="Transports.ShuttleTimetable1.TimetableInfo"
                components={{ bold: <Bold /> }}
              />
            }
          />
          <ShuttleTimetable
            title={t("Transports.ShuttleTimetable2.Title")}
            timetableInfo={
              <Trans
                i18nKey="Transports.ShuttleTimetable2.TimetableInfo"
                components={{ bold: <Bold /> }}
              />
            }
          />
          <ShuttleTimetable
            title={t("Transports.ShuttleTimetable3.Title")}
            timetableInfo={
              <Trans
                i18nKey="Transports.ShuttleTimetable3.TimetableInfo"
                components={{ bold: <Bold /> }}
              />
            }
          />
          <ShuttleTimetable
            title={t("Transports.ShuttleTimetable4.Title")}
            timetableInfo={
              <Trans
                i18nKey="Transports.ShuttleTimetable4.TimetableInfo"
                components={{ bold: <Bold /> }}
              />
            }
          />
        </Section>
        <StyledSeparator />
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
  color: var(--color-primary-blue);
  padding: 0.5rem 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;

  @media ${QUERIES.largeTabletAndUp} {
    font-size: 2.5rem;
  }
`;

const Section = styled.section`
  &:last-of-type {
    padding-top: 1rem;
  }
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

const SixtStyledImage = styled(StyledImage)`
  max-height: 450px;
`;

// JSON i18n text styling
const Bold = styled.span`
  font-weight: 500;
  text-decoration: underline;
`;
