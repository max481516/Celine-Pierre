import InfoElement from "../../components/InfoElement";
import styled from "styled-components";
import { FONTS } from "../../constants";
import Border from "../../media/Border.svg?react";
import Separator2 from "../../media/Separator2.svg?react";

export default function RnB() {
  return (
    <Wrapper>
      <StyledBorder />
      <Title>Plages</Title>
      <Section>
        <SectionTitle>Plages de Palombaggia</SectionTitle>
        <InfoElement
          name="Playa Baggia"
          location="Place de Palombaggia, Lieut dit Tamaricciu, 20137 Porto-Vecchio"
          locationLink="https://maps.app.goo.gl/LEgwQwP4Cu2bWN27A"
          picture={
            <picture>
              <source
                srcSet="
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1729091978/playa-baggia_gsksro.jpg 1600w,
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1729091978/playa-baggia_gsksro.jpg 1100w,
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1729091978/playa-baggia_gsksro.jpg 770w,
                https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1729091978/playa-baggia_gsksro.jpg 550w"
                sizes="
                (min-width: 1200px) 1500px,
                (min-width: 1024px) 1100px,
                (min-width: 768px) 770px,
                100vw"
              />
              <StyledImage
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1729091978/playa-baggia_gsksro.jpg"
                alt="Playa Baggia"
              />
            </picture>
          }
        />
        <StyledSeparator2 />
        <InfoElement
          name="Linda Beach"
          location="Palombaggia Capu d'Acciaghju, 20137 Porto-Vecchio"
          locationLink="https://maps.app.goo.gl/sMcb1D2taV3LBv1b7"
          picture={
            <picture>
              <source
                srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1729091985/LindaBeach_lcgsxt.jpg 1600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1729091985/LindaBeach_lcgsxt.jpg 1100w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1729091985/LindaBeach_lcgsxt.jpg 770w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1729091985/LindaBeach_lcgsxt.jpg 550w"
                sizes="
              (min-width: 1200px) 1500px,
              (min-width: 1024px) 1100px,
              (min-width: 768px) 770px,
              100vw"
              />
              <StyledImage
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1729091985/LindaBeach_lcgsxt.jpg"
                alt="Linda Beach"
              />
            </picture>
          }
        />
        <StyledSeparator2 />
        <InfoElement
          name="Da Mare Sea Lounge"
          location="Plage de Palombaggia, 20137 Porto-Vecchio "
          locationLink="https://maps.app.goo.gl/sYUf4z4GzUq5Kpos6"
          picture={
            <picture>
              <source
                srcSet="
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1729091971/DaMare_ohwlx8.jpg 1600w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1729091971/DaMare_ohwlx8.jpg 1100w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1729091971/DaMare_ohwlx8.jpg 770w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1729091971/DaMare_ohwlx8.jpg 550w"
                sizes="
    (min-width: 1200px) 1500px,
    (min-width: 1024px) 1100px,
    (min-width: 768px) 770px,
    100vw"
              />
              <StyledImage
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1729091971/DaMare_ohwlx8.jpg"
                alt="Da Mare"
              />
            </picture>
          }
        />
        <StyledSeparator2 />
        <InfoElement
          name="Le petit chose"
          location="folacca, Rte de Palombaggia, 20137 Porto-Vecchio"
          locationLink="https://maps.app.goo.gl/uJTBnpwrgSemKsmf7"
          picture={
            <picture>
              <source
                srcSet="
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1729091988/LaPetiteChose_vo7eir.jpg 1600w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1729091988/LaPetiteChose_vo7eir.jpg 1100w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1729091988/LaPetiteChose_vo7eir.jpg 770w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1729091988/LaPetiteChose_vo7eir.jpg 550w"
                sizes="
    (min-width: 1200px) 1500px,
    (min-width: 1024px) 1100px,
    (min-width: 768px) 770px,
    100vw"
              />
              <StyledImage
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1729091988/LaPetiteChose_vo7eir.jpg"
                alt="La Petite Chose"
              />
            </picture>
          }
        />
      </Section>
      <Section>
        <SectionTitle>Plage de Santa Giulia</SectionTitle>
        <InfoElement
          name="Bar Plage Santa Giulia"
          location="Plage de Santa Giulia
            CS 30102
            20137 Porto-Vecchio"
          locationLink="https://maps.app.goo.gl/8RzMteA5FmYrptSu8"
          picture={
            <picture>
              <source
                srcSet="
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1729091975/SantaGiulia_dm7zdo.jpg 1600w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1729091975/SantaGiulia_dm7zdo.jpg 1100w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1729091975/SantaGiulia_dm7zdo.jpg 770w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1729091975/SantaGiulia_dm7zdo.jpg 550w"
                sizes="
    (min-width: 1200px) 1500px,
    (min-width: 1024px) 1100px,
    (min-width: 768px) 770px,
    100vw"
              />
              <StyledImage
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1729091975/SantaGiulia_dm7zdo.jpg"
                alt="Santa Giulia Beach"
              />
            </picture>
          }
        />
        <StyledSeparator2 />
        <InfoElement
          name="Køstën Plage"
          location="Baie de Santa Giulia
            20137 Porto-Vecchio"
          locationLink="https://maps.app.goo.gl/1E3SKCQZGih6wXDw9"
          picture={
            <picture>
              <source
                srcSet="
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1729091967/KostenBeach_ni02pi.jpg 1600w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1729091967/KostenBeach_ni02pi.jpg 1100w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1729091967/KostenBeach_ni02pi.jpg 770w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1729091967/KostenBeach_ni02pi.jpg 550w"
                sizes="
    (min-width: 1200px) 1500px,
    (min-width: 1024px) 1100px,
    (min-width: 768px) 770px,
    100vw"
              />
              <StyledImage
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1729091967/KostenBeach_ni02pi.jpg"
                alt="Kosten Beach"
              />
            </picture>
          }
        />
      </Section>
      <Section>
        <SectionTitle>Bonifacio</SectionTitle>
        <InfoElement
          name="Maora Beach"
          location="Plage de Maora Golfe de Santa Manza , 20169 Bonifacio"
          locationLink="https://maps.app.goo.gl/1rhc9vqJM15WbkJQ6"
          picture={
            <picture>
              <source
                srcSet="
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1729091982/MaoraBeach_pxfp7g.jpg 1600w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1729091982/MaoraBeach_pxfp7g.jpg 1100w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1729091982/MaoraBeach_pxfp7g.jpg 770w,
    https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1729091982/MaoraBeach_pxfp7g.jpg 550w"
                sizes="
    (min-width: 1200px) 1500px,
    (min-width: 1024px) 1100px,
    (min-width: 768px) 770px,
    100vw"
              />
              <StyledImage
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1729091982/MaoraBeach_pxfp7g.jpg"
                alt="Maora Beach"
              />
            </picture>
          }
        />
      </Section>
      <StyledBottomBorder />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  ${FONTS.titleFont};
  font-size: 2rem;
  color: var(--color-primary-blue);
  text-align: center;
  text-transform: uppercase;
`;

const Section = styled.section``;

const SectionTitle = styled.h2`
  ${FONTS.titleFont};
  font-size: 1.9rem;
  color: var(--color-primary-blue);
  text-align: center;
  margin-top: 0.5;
`;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  border-radius: 8px;
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

const StyledSeparator2 = styled(Separator2)`
  color: var(--color-primary-blue);
`;
