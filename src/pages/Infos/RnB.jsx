import InfoElement from "../../components/InfoElement";
import styled from "styled-components";
import { FONTS, QUERIES } from "../../constants";
import Border from "../../media/Border.svg?react";
import { useTranslation } from "react-i18next";
import StyledSeparator from "../../components/Separator";
import SectionTitle from "../../components/SectionTitle";

export default function RnB() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <FrameContainer>
        <StyledBorder />
        <Title>{t("R&B.Title")}</Title>
        <Section>
          <SectionTitle title={t("R&B.Section1")} />
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
          <StyledSeparator />
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
          <StyledSeparator />
          <InfoElement
            name="Sushi bar"
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
          <StyledSeparator />
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
        <Section style={{ paddingTop: "1rem" }}>
          <SectionTitle title={t("R&B.Section2")} />
          <InfoElement
            name="B 52"
            location="Quai Jérôme Comparetti, 20169 Bonifacio"
            locationLink="https://maps.app.goo.gl/tQTqQBicLgPv7D8J8"
            picture={
              <picture>
                <source
                  srcSet="
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1729091861/B52-horizontal_iq2hje.jpg 1600w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1729091861/B52-horizontal_iq2hje.jpg 1100w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1729091861/B52-horizontal_iq2hje.jpg 770w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1729091861/B52-horizontal_iq2hje.jpg 550w"
                  sizes="
      (min-width: 1200px) 1500px,
      (min-width: 1024px) 1100px,
      (min-width: 768px) 770px,
      100vw"
                />
                <StyledImage
                  src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1729091861/B52-horizontal_iq2hje.jpg"
                  alt="B52 Bar"
                />
              </picture>
            }
          />
          <StyledSeparator />
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
          <StyledSeparator />
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
  font-size: 2rem;
  color: var(--color-primary-blue);
  padding: 0.5rem 0;
  text-align: center;
  text-transform: uppercase;

  @media ${QUERIES.largeTabletAndUp} {
    font-size: 2.5rem;
  }
`;

const Section = styled.section``;

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
