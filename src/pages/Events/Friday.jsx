import styled from "styled-components";
import { IoMdClock } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaSquareParking } from "react-icons/fa6";
import People from "../../media/People.svg?react";
import { FONTS, QUERIES } from "../../../src/constants";
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
            <Title>{t("Friday.Title")}</Title>
            <ImageContainer>
              <picture>
                <source
                  srcSet="
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1732717673/BeachParty_fhdyqk.jpg 1600w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1732717673/BeachParty_fhdyqk.jpg 1100w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1732717673/BeachParty_fhdyqk.jpg 770w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1732717673/BeachParty_fhdyqk.jpg 550w
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
                  src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1732717673/BeachParty_fhdyqk.jpg"
                  loading="lazy"
                />
              </picture>
            </ImageContainer>
            <IconTextContainer>
              <StyledIcon as={IoMdClock} />
              <Text>
                <Trans i18nKey="Friday.When" components={{ bold: <Bold /> }} />
              </Text>
            </IconTextContainer>
            <IconTextContainer>
              <StyledIcon as={MdLocationPin} />
              <Text>
                <b>{t("Friday.Where")} </b>
                <LocationLink
                  href="https://maps.app.goo.gl/15iER64FdvZE6bek7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("Friday.WhereLocation")}
                </LocationLink>
              </Text>
            </IconTextContainer>
            <IconTextContainer>
              <StyledIcon as={FaSquareParking} />
              <Text>
                <Trans
                  i18nKey="Friday.Parking"
                  components={{ bold: <Bold /> }}
                />
              </Text>
            </IconTextContainer>
            <DressCodeWrapper>
              <DressCodeTitle>{t("Friday.DressCode.Title")}</DressCodeTitle>
              <DressCodeIconTextContainer>
                <StyledIcon as={People} />
                <Text>{t("Friday.DressCode.Text")}</Text>
              </DressCodeIconTextContainer>
            </DressCodeWrapper>
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

  &:hover {
    color: var(--color-light-blue);
  }
`;

const DressCodeWrapper = styled.div`
  border: 1px solid var(--color-primary-blue);
  background: var(--color-element-sand);
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 90%;
  margin: 0.5rem auto 0;
`;

const DressCodeTitle = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  padding-top: 1rem;
`;

const DressCodeIconTextContainer = styled.div`
  display: flex;

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
