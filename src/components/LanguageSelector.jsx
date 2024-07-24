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
      <LanguageSelectorContainer>
        <Selector
          defaultValue={selectedLanguage}
          onChange={chooseLanguage}
          className={className}
        >
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </Selector>
      </LanguageSelectorContainer>
      <IconContainer>
        <MdOutlineKeyboardArrowDown opacity={0.3} />
      </IconContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

const LanguageSelectorContainer = styled.div``;

const Selector = styled.select`
  color: black;
  border: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
`;

const IconContainer = styled.div`
  margin-top: -4px;
`;
