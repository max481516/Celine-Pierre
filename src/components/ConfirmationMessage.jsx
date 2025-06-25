import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { FaRegCheckCircle } from "react-icons/fa";
import backgroundImage from "../media/backgroundRSVP.jpeg";

export default function ConfMessage() {
  const { t } = useTranslation();

  return (
    <ConfirmationBackground>
      <ConfirmationWrapper>
        <FaRegCheckCircle color="green" size={40} />
        <ConfirmationMessage>{t("RSVP.Confirmation")}</ConfirmationMessage>
      </ConfirmationWrapper>
    </ConfirmationBackground>
  );
}

const ConfirmationBackground = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 100dvh; /* Ensure the background covers the entire viewport */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ConfirmationWrapper = styled.div`
  background-color: var(--color-lighter-sand);
  border: 1px solid var(--color-dark-sand);
  box-shadow: rgba(255, 255, 255, 0.25) 0px 54px 55px,
    rgba(255, 255, 255, 0.12) 0px -12px 30px,
    rgba(255, 255, 255, 0.12) 0px 4px 6px,
    rgba(255, 255, 255, 0.17) 0px 12px 13px,
    rgba(255, 255, 255, 0.09) 0px -3px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  width: 300px;
  padding: 8px 0;
  height: 20dvh;
  margin: 30dvh auto;
  border-radius: 4px;
`;

const ConfirmationMessage = styled.p`
  font-size: calc(20rem / 16);
`;
