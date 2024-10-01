import { useState } from "react";
import i18n from "../i18n/i18n";
import styled from "styled-components";
import { RiArrowDownSFill } from "react-icons/ri";

export default function LanguageSelector({ className }) {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);
    setSelectedLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  return (
    <LanguageSelectorContainer className={className}>
      <Selector defaultValue={selectedLanguage} onChange={chooseLanguage}>
        <option value="fr">Français</option>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </Selector>
      <IconContainer>
        <RiArrowDownSFill />
      </IconContainer>
    </LanguageSelectorContainer>
  );
}

const LanguageSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;

const Selector = styled.select`
  border: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  color: inherit;
`;

const IconContainer = styled.div`
  padding: 0 0 3px 2px;
  color: white;
`;
