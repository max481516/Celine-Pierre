import { useState } from "react";
import i18n from "../i18n/i18n";
import styled, { css } from "styled-components";
import { RiArrowDownSFill } from "react-icons/ri";
import { QUERIES, FONTS } from "../constants";
import { useLocation } from "react-router-dom";

export default function LanguageSelector({ className, type }) {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const $isHomePage = useLocation().pathname === "/";

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);
    setSelectedLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  return (
    <LanguageSelectorContainer
      className={className}
      type={type}
      $isHomePage={$isHomePage}
    >
      <Selector defaultValue={selectedLanguage} onChange={chooseLanguage}>
        <option value="fr">Français</option>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </Selector>
      <IconContainer type={type} $isHomePage={$isHomePage}>
        <RiArrowDownSFill />
      </IconContainer>
    </LanguageSelectorContainer>
  );
}

const LanguageSelectorContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  color: ${({ $isHomePage }) =>
    $isHomePage ? "#fff" : "var(--color-darker-sand)"};
  font-size: calc(20rem / 16);
  ${FONTS.titleFont};

  ${({ type }) =>
    type === "mobile" &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(20%, 80%);

      @media ${QUERIES.largeTabletAndUp} {
        display: none;
      }
    `}
  ${({ type }) =>
    type === "desktop" &&
    css`
      align-items: center;

      &:hover {
        transition: all 0.2s ease-in-out;
        color: var(--color-dark-blue);
      }

      &:focus {
        outline: none;
        color: var(--color-dark-blue);
      }

      @media ${QUERIES.largeTabletAndUp} {
        display: flex;
      }

      @media ${QUERIES.largeTabletAndUp} {
        display: flex;
      }

      @media ${QUERIES.laptopAndUp} {
        font-size: calc(24rem / 16);
      }
    `};
`;

const Selector = styled.select`
  border: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  color: inherit;
`;

const IconContainer = styled.div`
  flex-shrink: 0;
  color: ${({ $isHomePage }) =>
    $isHomePage ? "#fff" : "var(--color-dark-sand)"};

  padding: 0 0 3px 0;
`;
