import styled from "styled-components";
import { IoMdClock } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareParking } from "react-icons/fa6";
import { ImManWoman } from "react-icons/im";
import { FONTS } from "../../../src/constants";
import Border from "../../media/Border.svg?react";

export default function Sunday() {
  return (
    <Wrapper>
      <StyledBorder />
      <EventContainer>
        <Title>DIMANCHE : BRUNCH</Title>
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
            <b>Quand :</b> Le 7 Septembre 2025 à partir de 11:00 jusqu’à 16:00
          </Text>
        </IconTextContainer>
        <IconTextContainer>
          <StyledIcon as={FaLocationDot} />
          <Text>
            <b>Où :</b>{" "}
            <LocationLink
              href="https://maps.app.goo.gl/iYbveaBtzhmqoj7t6"
              target="_blank"
              rel="noopener noreferrer"
            >
              La plage Casadelmar, Presqu’île du Benedettu, 20137 Porto-Veccio
            </LocationLink>
          </Text>
        </IconTextContainer>

        <IconTextContainer>
          <StyledIcon as={FaSquareParking} />
          <Text>
            <b>Parking :</b> L'hôtel La Plage Casadelmar dispose d’un parking
          </Text>
        </IconTextContainer>
        <DressCodeWrapper>
          <DressCodeTitle>
            <b>Dress code :</b>
          </DressCodeTitle>
          <DressCodeIconTextContainer>
            <StyledIcon as={ImManWoman} />
            <Text>
              Thème Dolce Vita, laissez libre cours à votre imagination.
            </Text>
          </DressCodeIconTextContainer>
        </DressCodeWrapper>
      </EventContainer>
      <StyledBottomBorder />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 16px;
  margin-top: 1rem;
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  ${FONTS.titleFont};
  color: var(--color-primary-blue);
  text-align: center;
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
  border: 1px solid var(--color-primary-blue);
  background: var(--color-light-sand);
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
