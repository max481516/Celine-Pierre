import styled from "styled-components";
import { FcClock } from "react-icons/fc";
import { IoLocationOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { IoMan, IoWoman } from "react-icons/io5";
import { FaSquareParking } from "react-icons/fa6";

export default function Saturday() {
  return (
    <Wrapper>
      <EventContainer>
        <Title>SAMEDI : CEREMONIE RELIGIEUSE </Title>
        <ImageContainer>
          <picture>
            <source
              srcSet="
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1728917317/Church_wumwhm.png 1600w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1728917317/Church_wumwhm.png 1100w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1728917317/Church_wumwhm.png 770w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1728917317/Church_wumwhm.png 550w
    "
              sizes="
      (min-width: ${BREAKPOINTS.desktopMin}px) 1500px,
      (min-width: ${BREAKPOINTS.laptopMin}px) 1100px,
      (min-width: ${BREAKPOINTS.bigTabletMin}px) 770px,
      (min-width: ${BREAKPOINTS.tabletMin}px) 550px,
      100vw
    "
            />
            <StyledImage src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1728917317/Church_wumwhm.png" />
          </picture>
        </ImageContainer>
        <IconTextContainer>
          <FcClock />
          <Text>Quand : Le 6 Septembre 2025 de 14:00 à 16:00</Text>
        </IconTextContainer>
        <IconTextContainer>
          <IoLocationOutline />
          <Text>
            Où : Église Saint Jean Baptiste, 2-8 Rue Joseph Pietri Maire, 20137
            Porto-Vecchio (https://maps.app.goo.gl/ZzEvtzunptPVkwgx8){" "}
          </Text>
        </IconTextContainer>
        <IconTextContainer>
          <FaSquareParking />
          <Text>Parking:</Text>
        </IconTextContainer>
        <IconTextContainer>
          <GiClothes />
          <Text>Dress code:</Text>
        </IconTextContainer>
        <IconTextContainer>
          <IoMan />
          <Text>
            Les filles, sortez vos plus belles robes de cocktail. Laissez vos
            pastels au placard et optez pour des teintes éclatantes qui feront
            briller cette journée encore plus.
          </Text>
        </IconTextContainer>
        <IconTextContainer>
          <IoWoman />
          <Text>Les garçons, éblouissez- nous avec vos costumes élégants </Text>
        </IconTextContainer>
      </EventContainer>
      <EventContainer>
        <Title>SAMEDI : LA CÉLÉBRATION</Title>
        <ImageContainer>
          <picture>
            <source
              srcSet="
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1728920960/Picture_1_jk2lfz.png 1600w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1728920960/Picture_1_jk2lfz.png 1100w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1728920960/Picture_1_jk2lfz.png 770w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1728920960/Picture_1_jk2lfz.png 550w
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
              src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1728920960/Picture_1_jk2lfz.png"
              loading="lazy"
            />
          </picture>
        </ImageContainer>
        <IconTextContainer>
          <FcClock />
          <Text>
            Quand : Le 6 Septembre 2025 à partir de 18:00 au lever du soleil{" "}
          </Text>
        </IconTextContainer>
        <IconTextContainer>
          <IoLocationOutline />
          <Text>
            Où : La plage Casadelmar, Presqu’île du Benedettu, 20137
            Porto-Veccio (https://maps.app.goo.gl/iYbveaBtzhmqoj7t6)
          </Text>
        </IconTextContainer>
        <IconTextContainer>
          <FaSquareParking />
          <Text>Parking:</Text>
        </IconTextContainer>
        <IconTextContainer>
          <GiClothes />
          <Text>Dress code:</Text>
        </IconTextContainer>
        <IconTextContainer>
          <IoMan />
          <Text>
            Les filles, sortez vos plus belles robes de cocktail. Laissez vos
            pastels au placard et optez pour des teintes éclatantes qui feront
            briller cette journée encore plus. Pensez à prendre des chaussures
            plates pour enflammer le dance floor !
          </Text>
        </IconTextContainer>
        <IconTextContainer>
          <IoWoman />
          <Text>Les garçons, éblouissez- nous avec vos costumes élégants </Text>
        </IconTextContainer>
      </EventContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 16px;
`;

const EventContainer = styled.div``;

const Title = styled.h2``;

const IconTextContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const Text = styled.p``;

const ImageContainer = styled.div``;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
`;
