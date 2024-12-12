import styled from "styled-components";
import { FONTS, QUERIES } from "../constants";
import { useTranslation } from "react-i18next";
import Border from "../media/Border.svg?react";

export default function List() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <CardContainer>
        <StyledBorder />
        <Title>{t("Contacts.Title")}</Title>
        <ContactsContent>
          <ContactItem>
            <ContactLabel>Céline Mare :</ContactLabel> <br />
            <ContactLink href="tel:+33659218728">06 59 21 87 28</ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLabel>Pierre Allirot :</ContactLabel> <br />
            <ContactLink href="tel:+33781643402">07 81 64 34 02</ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLabel>{t("Contacts.Mail")} :</ContactLabel> <br />
            <ContactLink href="mailto:celine.pierre2025@gmail.com">
              celine.pierre2025@gmail.com
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLabel>{t("Contacts.Address")} :</ContactLabel> <br />
            <span>
              105 rue Caulaincourt,
              <br /> 75018 PARIS
            </span>
          </ContactItem>
        </ContactsContent>
        <StyledBottomBorder />
      </CardContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -7rem;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid var(--color-primary-blue);
  background-color: var(--color-light-sand);
  box-shadow: 0 26px 58px 0 rgba(0, 0, 0, 0.22),
    0 5px 14px 0 rgba(0, 0, 0, 0.18);
  \
`;

const Title = styled.h2`
  ${FONTS.titleFont};
  font-size: 2rem;
  color: var(--color-primary-blue);

  @media ${QUERIES.laptopAndUp} {
    font-size: 2.5rem;
  }
`;

const ContactsContent = styled.div`
  text-align: center;

  @media ${QUERIES.laptopAndUp} {
    font-size: 1.5rem;
  }
`;

const ContactItem = styled.p`
  margin: 0.5rem 0;
`;

const ContactLabel = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const ContactLink = styled.a`
  color: var(--color-primary-blue);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledBorder = styled(Border)`
  padding-bottom: 1rem;
  color: var(--color-primary-blue);
`;

const StyledBottomBorder = styled(StyledBorder)`
  padding-bottom: 0;

  transform: rotate(180deg);
`;
