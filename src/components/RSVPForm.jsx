// RSVPForm.jsx

import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { QUERIES } from "../constants.js";
import styled from "styled-components";

// COMPONENT IMPORTS
import LanguageSelector from "./LanguageSelector";

// MEDIA IMPORTS
import { FaRegCheckCircle } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Anchor from "../media/Anchor.svg?react";
import Shell1 from "../media/Shell 1.svg?react";
import Shrimp from "../media/shrimp.svg?react";
import Crab from "../media/crab.svg?react";
import Cocktail from "../media/CoconutCocktail.svg?react";
import Turtle from "../media/Turtle.svg?react";

import useIOSInputScroll from "../hooks/useIOSInputScroll"; // Import the custom hook

const YesIcon = ({ selected }) => (
  <StyledShrimp
    fill={selected ? "var(--color-lighter-blue)" : "var(--color-dark-blue)"}
  />
);

const NoIcon = ({ selected }) => (
  <StyledCrab
    fill={selected ? "var(--color-lighter-blue)" : "var(--color-dark-blue)"}
    size={47}
  />
);

export default function RSVPForm() {
  // iOS input bug fix
  const formRef = useRef(null);
  const containerRef = useRef(null);
  useIOSInputScroll(formRef, containerRef);

  const [attendance, setAttendance] = useState("");
  const [numRows, setNumRows] = useState(1);
  const [textareaValue, setTextareaValue] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const placeholder = t("RSVP.NamePlaceholder");
    const newValue = Array.from({ length: numRows }, () => placeholder).join(
      "\n"
    );
    setTextareaValue(newValue);
  }, [numRows, t]);

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

  if (formSubmitted) {
    return (
      <ConfirmationWrapper>
        <FaRegCheckCircle color="green" size={40} />
        <ConfirmationMessage>{t("RSVP.Confirmation")}</ConfirmationMessage>
      </ConfirmationWrapper>
    );
  }

  if (formError) {
    return (
      <ErrorWrapper>
        <BiErrorCircle color="red" size={40} />
        <ErrorMessage>
          {t("RSVP.Error")}{" "}
          <ErrorMailLink href="mailto:celine.pierre2025@gmail.com">
            celine.pierre2025@gmail.com
          </ErrorMailLink>
        </ErrorMessage>
      </ErrorWrapper>
    );
  }

  return (
    <Wrapper ref={containerRef}>
      <Header lang={i18n.language}>
        <RSVPLanguageSelector lang={i18n.language} />
        <Title lang={i18n.language}>R.S.V.P.</Title>
        <FinalDate lang={i18n.language}>{t("RSVP.FinalDate")}</FinalDate>
        <StyledAnchor />
        <StyledShell1 />
      </Header>
      <FormContainer
        ref={formRef}
        action="https://formspree.io/f/movavqpz"
        method="POST"
        onSubmit={handleFormSubmit}
      >
        <fieldset id="fs-frm-inputs">
          {/* Attendance Radio Buttons */}
          <RadioGroup lang={i18n.language}>
            <Legend>{t("RSVP.Attendance")}</Legend>
            <Label>
              <YesIcon selected={attendance === "Yes"} />
              {t("RSVP.Yes")}
              <InputRadio
                type="radio"
                name="attendance"
                value="Yes"
                checked={attendance === "Yes"}
                onChange={() => setAttendance("Yes")}
                required
              />
            </Label>
            <Label>
              <NoIcon selected={attendance === "No"} />
              {t("RSVP.No")}
              <InputRadio
                type="radio"
                name="attendance"
                value="No"
                checked={attendance === "No"}
                onChange={() => setAttendance("No")}
                required
              />
            </Label>
          </RadioGroup>

          {/* Number of Guests */}
          <InputNumberWrapper>
            <InputNumberLabel htmlFor="num-guests">
              {t("RSVP.NumberGuests")}
            </InputNumberLabel>
            <SelectWrapper>
              <Select
                name="guests"
                id="num-guests"
                required
                onChange={(e) => setNumRows(e.target.value)}
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </Select>
              <IconWrapper>
                <MdOutlineKeyboardArrowDown
                  size={15}
                  style={{ opacity: "0.5" }}
                />
              </IconWrapper>
            </SelectWrapper>
          </InputNumberWrapper>

          {/* Number of Children */}
          <InputNumberWrapper>
            <InputNumberLabel htmlFor="num-children">
              {t("RSVP.NumberChildren")}
            </InputNumberLabel>
            <SelectWrapper>
              <Select name="children" id="num-children" required>
                {Array.from({ length: 11 }, (_, i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </Select>
              <IconWrapper>
                <MdOutlineKeyboardArrowDown
                  size={15}
                  style={{ opacity: "0.5" }}
                />
              </IconWrapper>
            </SelectWrapper>
          </InputNumberWrapper>

          {/* Names Input */}
          <Label htmlFor="full-name">{t("RSVP.Name")}</Label>
          <Textarea
            rows={numRows}
            name="name"
            id="full-name"
            placeholder={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            required
          />

          {/* Email Input */}
          <InputEmailWrapper>
            <Label htmlFor="email-address">{t("RSVP.Email")}</Label>
            <Input
              type="email"
              name="email"
              id="email-address"
              placeholder="email@domain.com"
              required
            />
          </InputEmailWrapper>

          {/* Dietary Restrictions Input */}
          <Label htmlFor="dietary-restrictions">{t("RSVP.Restrictions")}</Label>
          <Textarea
            rows="4"
            name="dietary-restrictions"
            id="dietary-restrictions"
            placeholder={t("RSVP.RestrictionsPlaceholder")}
          />

          {/* Address Input */}
          <Label htmlFor="address">{t("RSVP.Address")}</Label>
          <Textarea
            rows="4"
            name="address"
            id="address"
            placeholder={t("RSVP.AddressPlaceholder")}
            autoComplete="street-address"
            required
          />

          {/* Message Input */}
          <InputMessageWrapper>
            <Label htmlFor="message">{t("RSVP.Message")}</Label>
            <Textarea
              rows="5"
              name="message"
              id="message"
              placeholder={t("RSVP.MessagePlaceholder")}
            />
          </InputMessageWrapper>
        </fieldset>
        <SubmitButtonContainer>
          <StyledTurtle />
          <SubmitButton type="submit" value="Submit">
            {t("RSVP.Submit")}
          </SubmitButton>
          <StyledCocktail />
        </SubmitButtonContainer>
      </FormContainer>
      <ContactText>
        {t("RSVP.ContactText")} <br />
        <MailLink href="mailto:celine.pierre2025@gmail.com">
          celine.pierre2025@gmail.com
        </MailLink>
      </ContactText>
      <ToSite>
        <ToSiteLink to="/">{t("RSVP.ToSiteLink")}</ToSiteLink>{" "}
        {t("RSVP.ToSite")}
      </ToSite>
    </Wrapper>
  );
}

// CONFIRMATION AND ERROR MESSAGES STYLES
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

const ErrorWrapper = styled(ConfirmationWrapper)`
  height: 20dvh;
  margin: 29dvh auto;
  padding: 0 8px;
`;

const ConfirmationMessage = styled.p`
  font-size: calc(20rem / 16);
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

// RSVP MAIN FORM STYLES
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 550px;
  padding: 1rem 2rem 2rem;
  background-color: var(--color-lighter-sand);
  transition: all 0.4s;
  box-shadow: rgba(255, 255, 255, 0.25) 0px 54px 55px,
    rgba(255, 255, 255, 0.12) 0px -12px 30px,
    rgba(255, 255, 255, 0.12) 0px 4px 6px,
    rgba(255, 255, 255, 0.17) 0px 12px 13px,
    rgba(255, 255, 255, 0.09) 0px -3px 5px;
  animation: fadeIn 1.7s ease-in-out;

  @media ${QUERIES.tabletAndUp} {
    width: 60%;
    height: 91dvh;
    min-width: 400px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    border: 1px solid var(--color-dark-sand);
    border-radius: 8px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 1rem 0;

  @media ${QUERIES.largeTabletAndUp} {
    padding-bottom: 1rem;
  }
`;

const Label = styled.label`
  position: relative;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: var(--color-light-sand);
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: var(--color-light-sand);

  &::placeholder {
    opacity: 0.8;
  }
`;

// HEADER STYLES
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "TitleFont", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: var(--color-primary-blue);
`;

const RSVPLanguageSelector = styled(LanguageSelector)`
  opacity: 0.7;
  font-size: calc(18rem / 16);

  > select {
    ${({ lang }) =>
      lang === "en" &&
      `
      width: 54px;
    `}

    ${({ lang }) =>
      lang === "ru" &&
      `
      width: 60px;
    `}
  }
`;

const Title = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  font-size: 3rem;

  @media ${QUERIES.laptopAndUp} {
    font-size: 4rem;
  }

  ${({ lang }) =>
    lang === "ru" &&
    `
      margin-top: -8px;
    `}
`;

const FinalDate = styled.p`
  text-align: center;
  word-spacing: -2px;

  ${({ lang }) =>
    lang === "ru" &&
    `
     width: 70%;
    `}
`;

// ATTENDANCE RADIO BUTTONS STYLES
const Legend = styled.legend`
  font-size: 1rem;
  text-align: center;
  justify-content: center;
  margin: 0 auto 2rem;
`;

const InputRadio = styled.input`
  opacity: 0;
  position: absolute;
  width: 30px;
  top: 50px;
  left: 55px;
`;

const RadioGroup = styled.fieldset`
  border: none;
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto 2rem;

  > label:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    gap: calc(18rem / 16);
  }

  > label:last-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    gap: 0;

    ${({ lang }) =>
      lang === "ru" &&
      `
      margin-top: -3px;
    `}
  }
`;

const StyledShrimp = styled(Shrimp)`
  margin-top: calc(-10rem / 16);
  margin-left: -12px;
  width: 80px;
  height: 80px;
  transform: rotate(-60deg);
  transition: fill 0.2s ease-in-out;

  @media ${QUERIES.largeTabletAndUp} {
    width: 127px;
    height: 127px;
  }
`;

const StyledCrab = styled(Crab)`
  margin-top: calc(10rem / 16);
  width: 80px;
  height: 80px;
  transform: rotate(-20deg);
  transition: fill 0.2s ease-in-out;

  @media ${QUERIES.largeTabletAndUp} {
    width: 127px;
    height: 127px;
  }
`;

// NUMBER OF GUESTS AND CHILDREN SELECT STYLES
const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 3rem;
`;

const Select = styled.select`
  width: 3rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: var(--color-light-sand);
  appearance: none;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 35%;
  transform: translateY(-35%);
  pointer-events: none;
`;

const InputNumberLabel = styled.label`
  font-size: 1rem;
  width: 100px;
`;

const InputNumberWrapper = styled.div`
  gap: 1rem;
  display: flex;
  justify-content: center;
  flex-basis: 150px;
  margin-bottom: 1rem;

  &:nth-of-type(2) {
    margin-bottom: 2rem;
  }
`;

// OTHER INPUTS STYLES
const InputEmailWrapper = styled.div`
  margin-bottom: 2rem;
`;

const InputMessageWrapper = styled.div``;

// SUBMIT BUTTON STYLES
const SubmitButtonContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  gap: 1rem;
`;

const SubmitButton = styled.button`
  align-self: start;
  padding: 0.75rem 1.5rem;
  height: 3rem;
  background-color: var(--color-primary-blue);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-light-blue);
  }
`;

// DECORATIONS STYLES
const StyledAnchor = styled(Anchor)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 100px;
  height: 100px;
  color: var(--color-primary-blue);

  @media ${QUERIES.largeTabletAndUp} {
    width: 125px;
    height: 125px;
  }
`;

const StyledShell1 = styled(Shell1)`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px;
  height: 100px;
  color: var(--color-primary-blue);

  @media ${QUERIES.largeTabletAndUp} {
    width: 125px;
    height: 125px;
  }
`;

const StyledCocktail = styled(Cocktail)`
  position: absolute;
  right: -30px;
  width: 95px;
  height: 95px;
  color: var(--color-primary-blue);

  @media ${QUERIES.tabletAndUp} {
    right: -20px;
  }

  @media ${QUERIES.largeTabletAndUp} {
    top: -15px;
    right: -10px;
    width: 115px;
    height: 115px;
  }

  @media ${QUERIES.laptopAndUp} {
    width: 125px;
    height: 125px;
  }
`;

const StyledTurtle = styled(Turtle)`
  position: absolute;
  left: -40px;
  top: -10px;
  width: 100px;
  height: 100px;
  color: var(--color-primary-blue);

  @media ${QUERIES.tabletAndUp} {
    left: -30px;
  }

  @media ${QUERIES.largeTabletAndUp} {
    left: -20px;
    width: 115px;
    height: 115px;
  }

  @media ${QUERIES.laptopAndUp} {
    width: 125px;
    height: 125px;
  }
`;

// CONTACT TEXT STYLES
const ContactText = styled.p`
  text-align: center;
  font-size: calc(10rem / 16);
  margin-top: calc(22rem / 16);
  margin-bottom: calc(-22rem / 16);

  @media ${QUERIES.largeTabletAndUp} {
    margin-top: calc(26rem / 16);
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: calc(36rem / 16);
  }
`;

const MailLink = styled.a`
  color: var(--color-primary-blue);
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--color-light-blue);
  }
`;

const ToSite = styled.p`
  color: var(--color-primary-blue);
  font-size: calc(14rem / 16);
  text-align: center;
  margin-top: 2rem;
`;

const ToSiteLink = styled(Link)`
  color: var(--color-primary-blue);

  &:hover {
    color: var(--color-light-blue);
  }
`;
