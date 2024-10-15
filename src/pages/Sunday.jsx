import styled from "styled-components";
import { IoMdClock } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaSquareParking } from "react-icons/fa6";
import { ImManWoman } from "react-icons/im";
import { FONTS } from "../constants";

export default function Sunday() {
  return (
    <Wrapper>
      <EventContainer>
        <Title>DIMANCHE : BEACH PARTY</Title>
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
          <StyledIcon as={MdLocationPin} />
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
        {/* <StyledMaps
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.0015413000156!2d9.2791981!3d41.59084939999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d983d6235cc3eb%3A0xec5d6be6bf99215e!2sChurch%20of%20Saint%20John%20the%20Baptist!5e0!3m2!1sen!2sfr!4v1728977910194!5m2!1sen!2sfr"
          style={{ border: 0 }}
          allowfullscreen
          loading="lazy"
        ></StyledMaps> */}
        <IconTextContainer>
          <StyledIcon as={FaSquareParking} />
          <Text>
            <b>Parking : Devant l’hôtel </b>
          </Text>
        </IconTextContainer>
        <DressCodeWrapper>
          <DressCodeTitle>
            <b>Dress code :</b>
          </DressCodeTitle>
          <DressCodeIconTextContainer>
            <StyledIcon as={ImManWoman} />
            <Text>
              Venez vêtus de blanc de la tête aux pieds ! Optez pour des tenues
              légères et élégantes pour compléter l’ambiance chic et
              décontractée de la plage. N’oubliez pas de prendre vos maillots de
              bain et vos chapeaux ! Il risque de faire très chaud.
            </Text>
          </DressCodeIconTextContainer>
        </DressCodeWrapper>
      </EventContainer>
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
  color: var(--color-lighter-blue);
`;

const IconTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 8px 0;
  gap: 8px;
`;

const LocationLink = styled.a`
  color: var(--color-light-blue);
`;

const DressCodeWrapper = styled.div`
  border: 1px solid var(--color-lighter-blue);
  background: var(--color-dark-sand);
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
  border-radius: 8px;
`;

const StyledIcon = styled.div`
  margin-top: 2px;
  flex-shrink: 0;
  flex-grow: 0;
  width: 20px;
  height: 20px;
  color: var(--color-lighter-blue);
`;

/* const StyledMaps = styled.iframe`
  width: 90%;
  height: 300px;
  margin-bottom: 16px;
  margin: 0 auto;
`; */
