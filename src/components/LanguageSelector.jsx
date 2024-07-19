import { useState } from "react";
import i18n from "../i18n/i18n";
import styled from "styled-components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function LanguageSelector({ className }) {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);
    setSelectedLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  return (
    <Wrapper>
      <LanguageSelectorContainer
        defaultValue={selectedLanguage}
        onChange={chooseLanguage}
        className={className}
      >
        <option value="fr">Français</option>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </LanguageSelectorContainer>
      <MdOutlineKeyboardArrowDown opacity={0.3} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const LanguageSelectorContainer = styled.select`
  color: black;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-right: -1rem;
`;
