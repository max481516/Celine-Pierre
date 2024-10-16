import InfoElement from "../components/InfoElement";
import styled from "styled-components";
import { FONTS } from "../constants";

export default function RnB() {
  return (
    <Wrapper>
      <Title>Restaurants et Bars</Title>
      <Section>
        <SectionTitle>Centre Ville</SectionTitle>
        <InfoElement
          name="Restaurant Corse FURANA"
          location="Rue de la Porte Génoise, 20137 Porto-Vecchio"
          locationLink="https://maps.app.goo.gl/mRJikZXeVFNQbYar7"
          picture={
            <picture>
              <source
                srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1729088216/furana-a-prova-porto-vecchio-14232232140_rftxab.webp 1600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1729088216/furana-a-prova-porto-vecchio-14232232140_rftxab.webp 1100w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1729088216/furana-a-prova-porto-vecchio-14232232140_rftxab.webp 770w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1729088216/furana-a-prova-porto-vecchio-14232232140_rftxab.webp 550w"
                sizes="
              (min-width: 1200px) 1500px,
              (min-width: 1024px) 1100px,
              (min-width: 768px) 770px,
              100vw"
              />
              <StyledImage
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1729088216/furana-a-prova-porto-vecchio-14232232140_rftxab.webp"
                alt="Restaurant Corse FURANA"
              />
            </picture>
          }
        />
        <InfoElement
          name="Pizza du Bastion"
          location="12 Rue Dr Camille de Rocca Serra, 20137 Porto-Vecchio"
          locationLink="https://maps.app.goo.gl/vpcYRKVas1V74fpo9"
          picture={
            <picture>
              <source
                srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1729088702/462445450_18284077213234419_1106637863778446724_n_wbeegn.jpg 1600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1729088702/462445450_18284077213234419_1106637863778446724_n_wbeegn.jpg 1100w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1729088702/462445450_18284077213234419_1106637863778446724_n_wbeegn.jpg 770w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1729088702/462445450_18284077213234419_1106637863778446724_n_wbeegn.jpg 550w"
                sizes="
              (min-width: 1200px) 1500px,
              (min-width: 1024px) 1100px,
              (min-width: 768px) 770px,
              100vw"
              />
              <StyledImage
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1729088702/462445450_18284077213234419_1106637863778446724_n_wbeegn.jpg"
                alt="Restaurant Image"
              />
            </picture>
          }
        />
        <InfoElement
          name="Sushis bar"
          location="18 Rue du Général de Gaulle, 20137 Porto-Vecchio "
          locationLink="https://maps.app.goo.gl/jqnV7rJRWBKPrtgP6"
          picture={
            <picture>
              <source
                srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1729091867/SushiBar_gjdqeh.jpg 1600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1729091867/SushiBar_gjdqeh.jpg 1100w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1729091867/SushiBar_gjdqeh.jpg 770w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1729091867/SushiBar_gjdqeh.jpg 550w"
                sizes="
              (min-width: 1200px) 1500px,
              (min-width: 1024px) 1100px,
              (min-width: 768px) 770px,
              100vw"
              />
              <StyledImage
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1729091867/SushiBar_gjdqeh.jpg"
                alt="Sushi Bar"
              />
            </picture>
          }
        />
        <InfoElement
          name="Les jardins d’Eden"
          location="18 Rue de la Prte Génoise, 20137 Porto-Vecchio"
          locationLink="https://maps.app.goo.gl/pKZ1YT1Ho75PPFgU8"
          picture={
            <picture>
              <source
                srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1729091846/LesJardins_qfaqob.webp 1600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1729091846/LesJardins_qfaqob.webp 1100w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1729091846/LesJardins_qfaqob.webp 770w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1729091846/LesJardins_qfaqob.webp 550w"
                sizes="
              (min-width: 1200px) 1500px,
              (min-width: 1024px) 1100px,
              (min-width: 768px) 770px,
              100vw"
              />
              <StyledImage
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1729091846/LesJardins_qfaqob.webp"
                alt="Les Jardins d’Eden"
              />
            </picture>
          }
        />
      </Section>
      <Section>
        <SectionTitle>AMBIANCÉS :</SectionTitle>
        <InfoElement
          name="B 52"
          location="Quai Jérôme Comparetti, 20169 Bonifacio"
          locationLink="https://maps.app.goo.gl/tQTqQBicLgPv7D8J8"
          picture={
            <picture>
              <source
                srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1729091864/B52_jes2rg.jpg 1600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1729091864/B52_jes2rg.jpg 1100w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1729091864/B52_jes2rg.jpg 770w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1729091864/B52_jes2rg.jpg 550w"
                sizes="
              (min-width: 1200px) 1500px,
              (min-width: 1024px) 1100px,
              (min-width: 768px) 770px,
              100vw"
              />
              <StyledImageVertical
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1729091864/B52_jes2rg.jpg"
                alt="B52 Bar"
              />
            </picture>
          }
        />
        <InfoElement
          name="Othello Bar"
          location="65 Rue U Borgo, 20137 Porto-Vecchio"
          locationLink="https://maps.app.goo.gl/5Piq9i9nxYcvErcS7"
          picture={
            <picture>
              <source
                srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1729091853/Othello_ca8idg.jpg 1600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1729091853/Othello_ca8idg.jpg 1100w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1729091853/Othello_ca8idg.jpg 770w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1729091853/Othello_ca8idg.jpg 550w"
                sizes="
              (min-width: 1200px) 1500px,
              (min-width: 1024px) 1100px,
              (min-width: 768px) 770px,
              100vw"
              />
              <StyledImage
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1729091853/Othello_ca8idg.jpg"
                alt="Othello Bar"
              />
            </picture>
          }
        />
        <InfoElement
          name="Le Patio"
          location="6 Imp. Ettori, 20137 Porto-Vecchio"
          locationLink="https://maps.app.goo.gl/FwWDBjfvjLNrwePy5"
          picture={
            <picture>
              <source
                srcSet="
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1729091875/Patio_rovmfe.jpg 1600w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1729091875/Patio_rovmfe.jpg 1100w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1729091875/Patio_rovmfe.jpg 770w,
              https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1729091875/Patio_rovmfe.jpg 550w"
                sizes="
              (min-width: 1200px) 1500px,
              (min-width: 1024px) 1100px,
              (min-width: 768px) 770px,
              100vw"
              />
              <StyledImage
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1729091875/Patio_rovmfe.jpg"
                alt="Le Patio"
              />
            </picture>
          }
        />
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  ${FONTS.titleFont};
  color: var(--color-primary-blue);
`;

const Section = styled.section``;

const SectionTitle = styled.h2``;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const StyledImageVertical = styled(StyledImage)`
  height: 500px;
`;
