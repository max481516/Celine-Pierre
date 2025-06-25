import styled from "styled-components";
import { IoMdClock } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareParking } from "react-icons/fa6";
import People from "../../media/People.svg?react";
import { FONTS, QUERIES, STYLES } from "../../../src/constants";
import Border from "../../media/Border.svg?react";
import { Trans, useTranslation } from "react-i18next";
import FadeInSection from "../../components/FadeInSection";

export default function Sunday() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <FrameContainer>
        <StyledBorder />
        <FadeInSection>
          <EventContainer>
            <Title>{t("Sunday.Title")}</Title>
            <ImageContainer>
              <picture>
                <source
                  srcSet="
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1728994921/BeachParty_gdkv73.jpg 1600w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1728994921/BeachParty_gdkv73.jpg 1100w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1728994921/BeachParty_gdkv73.jpg 770w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1728994921/BeachParty_gdkv73.jpg 550w
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
                <StyledImage
                  src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1728994921/BeachParty_gdkv73.jpg"
                  loading="lazy"
                />
              </picture>
            </ImageContainer>
            <IconTextContainer>
              <StyledIcon as={IoMdClock} />
              <Text>
                <Trans i18nKey="Sunday.When" components={{ bold: <Bold /> }} />
              </Text>
            </IconTextContainer>
            <IconTextContainer>
              <StyledIcon as={FaLocationDot} />
              <Text>
                <b>{t("Sunday.Where")} </b>
                <LocationLink
                  href="https://maps.app.goo.gl/iYbveaBtzhmqoj7t6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("Sunday.WhereLocation")}
                </LocationLink>
              </Text>
            </IconTextContainer>

            <IconTextContainer>
              <StyledIcon as={FaSquareParking} />
              <Text>
                <Trans
                  i18nKey="Sunday.Parking"
                  components={{ bold: <Bold /> }}
                />
              </Text>
            </IconTextContainer>
            <FadeInSection>
              <DressCodeWrapper>
                <DressCodeTitle>{t("Sunday.DressCode.Title")}</DressCodeTitle>
                <DressCodeIconTextContainer>
                  <StyledIcon as={People} />
                  <Text>{t("Sunday.DressCode.Text")}</Text>
                </DressCodeIconTextContainer>
              </DressCodeWrapper>
            </FadeInSection>
          </EventContainer>
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

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  ${FONTS.titleFont};
  color: var(--color-primary-blue);
  padding: 0.5rem 0;
  text-align: center;
  text-transform: uppercase;

  @media ${QUERIES.tabletAndUp} {
    font-size: 2.5rem;
  }

  @media ${QUERIES.largeTabletAndUp} {
    font-size: 2.5rem;
  }
`;

const IconTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 8px 0;
  gap: 8px;
`;

const LocationLink = styled.a`
  color: var(--color-primary-blue);
`;

const DressCodeWrapper = styled.div`
  ${STYLES.dresscodeWrapper}
`;

const DressCodeTitle = styled.h2`
  ${FONTS.titleFont};
  color: var(--color-primary-blue);
  text-transform: uppercase;
  text-align: center;
  padding-top: 1.5rem;
`;

const DressCodeIconTextContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 8px;
  padding: 16px;
`;

const Text = styled.p``;

const ImageContainer = styled.div``;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

const StyledIcon = styled.div`
  margin-top: 2px;
  flex-shrink: 0;
  flex-grow: 0;
  width: 20px;
  height: 20px;
  color: var(--color-primary-blue);
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

// JSON i18n text styling
const Bold = styled.span`
  font-weight: bold;
`;
