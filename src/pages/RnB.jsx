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
          locationLink={"https://maps.app.goo.gl/mRJikZXeVFNQbYar7"}
        />
        <InfoElement
          name="Pizza du Bastion"
          location="12 Rue Dr Camille de Rocca Serra, 20137 Porto-Vecchio"
          locationLink={"https://maps.app.goo.gl/vpcYRKVas1V74fpo9"}
        />
        <InfoElement
          name="Sushis bar"
          location="18 Rue du Général de Gaulle, 20137 Porto-Vecchio "
          locationLink={"https://maps.app.goo.gl/jqnV7rJRWBKPrtgP6"}
        />
        <InfoElement
          name="Les jardins d’Eden"
          location="18 Rue de la Prte Génoise, 20137 Porto-Vecchio"
          locationLink={"https://maps.app.goo.gl/pKZ1YT1Ho75PPFgU8"}
        />
      </Section>
      <Section>
        <SectionTitle>AMBIANCÉS :</SectionTitle>
        <InfoElement
          name="B 52"
          location="Quai Jérôme Comparetti, 20169 Bonifacio"
          locationLink={"https://maps.app.goo.gl/tQTqQBicLgPv7D8J8"}
        />
        <InfoElement
          name="Othello Bar"
          location="65 Rue U Borgo, 20137 Porto-Vecchio"
          locationLink={"https://maps.app.goo.gl/5Piq9i9nxYcvErcS7"}
        />
        <InfoElement
          name="Le Patio"
          location="6 Imp. Ettori, 20137 Porto-Vecchio"
          locationLink={"https://maps.app.goo.gl/FwWDBjfvjLNrwePy5"}
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
