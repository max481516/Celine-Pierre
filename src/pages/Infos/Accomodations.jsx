// Accomodations.jsx

import { useState, useRef } from "react";
import InfoElement from "../../components/InfoElement";
import styled from "styled-components";
import { FONTS, QUERIES } from "../../constants";
import Border from "../../media/Border.svg?react";
import Separator from "../../media/Separator.svg?react";
import { useTranslation } from "react-i18next";
import { FaRegCheckCircle } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";

export default function Accomodations() {
  const { t } = useTranslation();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const formRef = useRef(null);

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Reset form states when reopening the form
    setFormSubmitted(false);
    setFormError(false);
  };

  async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error("Formspree error:", errorData);
        setFormError(true);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setFormError(true);
    }
  }

  return (
    <Wrapper>
      <FrameContainer>
        <StyledBorder />
        <Title>{t("Accomodations.Title")}</Title>
        <AboutTransfer>
          {t("Accomodations.AboutTransfer.Text")}{" "}
          <OpenForm onClick={toggleForm}>
            {t("Accomodations.AboutTransfer.OpenForm")}
          </OpenForm>
          .
          {isFormOpen && (
            <DropdownContainer ref={formRef}>
              {formSubmitted ? (
                <ConfirmationWrapper>
                  <FaRegCheckCircle color="green" size={40} />
                  <ConfirmationMessage>
                    {t("Accomodations.AboutTransfer.ConfirmationMessage")}
                  </ConfirmationMessage>
                  <CloseButton onClick={toggleForm}>
                    {t("Accomodations.AboutTransfer.CloseButton")}
                  </CloseButton>
                </ConfirmationWrapper>
              ) : formError ? (
                <ErrorWrapper>
                  <BiErrorCircle color="red" size={40} />
                  <ErrorMessage>
                    {t("Accomodations.AboutTransfer.ErrorMessage")}{" "}
                    <ErrorMailLink href="mailto:celine.pierre2025@gmail.com">
                      celine.pierre2025@gmail.com
                    </ErrorMailLink>
                  </ErrorMessage>
                  <CloseButton onClick={toggleForm}>
                    {t("Accomodations.AboutTransfer.CloseButton")}
                  </CloseButton>
                </ErrorWrapper>
              ) : (
                <Form
                  action="https://formspree.io/f/movavqpz"
                  method="POST"
                  onSubmit={handleFormSubmit}
                >
                  <Label htmlFor="name">
                    {t("Accomodations.AboutTransfer.Name")}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t(
                      "Accomodations.AboutTransfer.NamePlaceholder"
                    )}
                    required
                  />

                  <Label htmlFor="hotel">
                    {t("Accomodations.AboutTransfer.Hotel")}
                  </Label>
                  <Select id="hotel" name="hotel" required>
                    <option value="Grand Hôtel Cala Rossa & Spa NUCCA">
                      Grand Hôtel Cala Rossa & Spa NUCCA
                    </option>
                    <option value="Hôtel Cala Rossa Bay Resort">
                      Hôtel Cala Rossa Bay Resort
                    </option>
                    <option value="Hôtel Kilina">Hôtel Kilina</option>
                  </Select>

                  <ButtonWrapper>
                    <SubmitButton type="submit">
                      {t("Accomodations.AboutTransfer.SubmitButton")}
                    </SubmitButton>
                    <CloseButton onClick={toggleForm}>
                      {t("Accomodations.AboutTransfer.CloseButton")}
                    </CloseButton>
                  </ButtonWrapper>
                </Form>
              )}
            </DropdownContainer>
          )}
        </AboutTransfer>

        <InfoElement
          name="Grand Hôtel Cala Rossa & Spa NUCCA 5*"
          location="Domaine de Cala Rossa - 20137 Lecci de Porto-Vecchio"
          locationLink="https://maps.app.goo.gl/PwrX7RwCZs4hXesQ6"
          picture={
            <picture>
              <source
                srcSet="
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1732727979/CALA_ROSSA_hhlrtm.jpg 1600w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1732727979/CALA_ROSSA_hhlrtm.jpg 1100w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1732727979/CALA_ROSSA_hhlrtm.jpg 770w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1732727979/CALA_ROSSA_hhlrtm.jpg 550w"
                sizes="
      (min-width: 1200px) 1500px,
      (min-width: 1024px) 1100px,
      (min-width: 768px) 770px,
      100vw"
              />
              <StyledImage
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1732727979/CALA_ROSSA_hhlrtm.jpg"
                alt="CALA ROSSA - View 1"
              />
            </picture>
          }
        />
        <StyledSeparator />
        <InfoElement
          name="Hotel Cala Rossa Bay Resort 4*"
          location="Rte de Cala Rossa - 20137 Lecci de Porto-Vecchio"
          locationLink="https://maps.app.goo.gl/wSpeSSrnCAHm8izN9"
          picture={
            <picture>
              <source
                srcSet="
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1732727979/CALA_ROSSA_4_ubca4f.jpg 1600w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1732727979/CALA_ROSSA_4_ubca4f.jpg 1100w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1732727979/CALA_ROSSA_4_ubca4f.jpg 770w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1732727979/CALA_ROSSA_4_ubca4f.jpg 550w"
                sizes="
      (min-width: 1200px) 1500px,
      (min-width: 1024px) 1100px,
      (min-width: 768px) 770px,
      100vw"
              />
              <StyledImage
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1732727979/CALA_ROSSA_4_ubca4f.jpg"
                alt="CALA ROSSA - View 2"
              />
            </picture>
          }
        />
        <StyledSeparator />
        <InfoElement
          name="Hotel Kilina 3*"
          location="Rte de Cala Rossa - 20137 Lecci de Porto-Vecchio"
          locationLink="https://maps.app.goo.gl/gwJq1rRvFoPETgyp8"
          picture={
            <picture>
              <source
                srcSet="
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1732727979/KILINA_mmfe3h.jpg 1600w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1732727979/KILINA_mmfe3h.jpg 1100w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1732727979/KILINA_mmfe3h.jpg 770w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1732727979/KILINA_mmfe3h.jpg 550w"
                sizes="
      (min-width: 1200px) 1500px,
      (min-width: 1024px) 1100px,
      (min-width: 768px) 770px,
      100vw"
              />
              <StyledImage
                src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1732727979/KILINA_mmfe3h.jpg"
                alt="KILINA Resort"
              />
            </picture>
          }
        />
        <StyledBottomBorder />
      </FrameContainer>
    </Wrapper>
  );
}

// Styled Components
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
  color: var(--color-primary-blue);
  padding: 0.5rem 0;
  text-align: center;
  text-transform: uppercase;

  @media ${QUERIES.largeTabletAndUp} {
    font-size: 2.5rem;
  }
`;

const AboutTransfer = styled.p`
  ${FONTS.titleFont};
  font-size: 1.2rem;
  text-align: center;
  position: relative;
`;

const OpenForm = styled.button`
  color: var(--color-primary-blue);
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: var(--color-light-blue);
  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  margin-top: 8px;
  background-color: var(--color-lighter-sand);
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  padding: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  border-radius: 4px;

  &::before {
    content: "";
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 16px;
    height: 16px;
    background-color: var(--color-lighter-sand);
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
    box-shadow: -2px 1px 1px -2px rgba(0, 0, 0, 0.1);
    z-index: -1;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 1rem;
`;

const Input = styled.input`
  margin-bottom: 12px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;

  &::placeholder {
    opacity: 0.5;
  }
`;

const Select = styled.select`
  margin-bottom: 12px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled.button`
  padding: 8px 12px;
  background-color: var(--color-primary-blue);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-light-blue);
  }
`;

const CloseButton = styled.button`
  padding: 8px 12px;
  background-color: var(--color-darker-sand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-dark-sand);
  }
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
  text-align: center;
  gap: 1rem;
  padding: 16px;
  border-radius: 4px;
`;

const ConfirmationMessage = styled.p`
  font-size: 1rem;
`;

const ErrorWrapper = styled(ConfirmationWrapper)``;

const ErrorMessage = styled.p`
  font-size: 1rem;
`;

const ErrorMailLink = styled.a`
  color: var(--color-primary-blue);
  text-decoration: none;
  transition: color 0.4s ease-in-out;

  &:hover {
    color: var(--color-light-blue);
  }
`;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
`;

const StyledBorder = styled(Border)`
  color: var(--color-primary-blue);
  padding-bottom: 1rem;
`;

const StyledBottomBorder = styled(StyledBorder)`
  color: var(--color-primary-blue);
  transform: rotate(180deg);
`;

const StyledSeparator = styled(Separator)`
  color: var(--color-primary-blue);
  margin: 16px 0;
`;
