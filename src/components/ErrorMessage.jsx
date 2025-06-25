import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { BiErrorCircle } from "react-icons/bi";
import backgroundImage from "../media/backgroundRSVP.jpeg";

export default function ErrMessage() {
  const { t } = useTranslation();

  return (
    <ErrorBackground>
      <ErrorWrapper>
        <BiErrorCircle color="red" size={40} />
        <ErrorMessage>
          {t("RSVP.Error")}{" "}
          <ErrorMailLink href="mailto:celine.pierre2025@gmail.com">
            celine.pierre2025@gmail.com
          </ErrorMailLink>
        </ErrorMessage>
      </ErrorWrapper>
    </ErrorBackground>
  );
}

const ErrorBackground = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 100dvh; /* Ensure the background covers the entire viewport */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorWrapper = styled.div`
  height: 20dvh;
  margin: 29dvh auto;
  padding: 0 8px;
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
  border-radius: 4px;
`;

const ErrorMessage = styled.p`
  text-align: center;
`;

const ErrorMailLink = styled.a`
  color: var(--color-primary-blue);
  text-decoration: none;
  transition: color 0.4s ease-in-out;

  &:hover {
    color: var(--color-light-blue);
  }
`;
