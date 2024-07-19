import RSVPForm from "../components/RSVPForm";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector";
import { QUERIES } from "../constants.js";

export default function RSVP() {
  const { t } = useTranslation();

  return (
    <>
      <Wrapper>
        <Header>
          <RSVPLanguageSelector />
          <Title to="/RSVP">R.S.V.P.</Title>
          <FinalDate>{t("RSVP.FinalDate")}</FinalDate>
        </Header>
        <RSVPForm />
        <HomeLink to="/">Back to Home Page</HomeLink>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div``;

const RSVPLanguageSelector = styled(LanguageSelector)`
  opacity: 0.3;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Playwrite CU", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const Title = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: var(--color-lighter-blue);
  font-size: 3rem;
  padding: 1rem 0 0;

  @media ${QUERIES.laptopAndUp} {
    font-size: 4rem;
  }
`;

const FinalDate = styled.p`
  text-align: center;
  color: var(--color-lighter-blue);
`;

const HomeLink = styled(Link)`
  display: flex;
  justify-content: center;
  font-family: "Playwrite CU", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: var(--color-lighter-blue);
  font-size: 1.5rem;
  padding: 1rem 0 2rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transition: all 0.4s ease-in-out;
    color: var(--color-dark-blue);
  }
`;
