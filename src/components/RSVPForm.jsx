import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { QUERIES } from "../constants.js";
import styled from "styled-components";

//COMPONENT IMPORTS
import LanguageSelector from "./LanguageSelector";

//MEDIA IMPORTS
import { FaRegCheckCircle } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Anchor from "../media/Anchor.svg?react";
import Shell1 from "../media/Shell 1.svg?react";
import Shrimp from "../media/shrimp.svg?react";
import Crab from "../media/crab.svg?react";

const YesIcon = ({ selected }) => (
  <StyledShrimp
    fill={selected ? "var(--color-lighter-blue)" : "var(--color-dark-blue)"}
  ></StyledShrimp>
);

const NoIcon = ({ selected }) => (
  <StyledCrab
    fill={selected ? "var(--color-lighter-blue)" : "var(--color-dark-blue)"}
    size={47}
  ></StyledCrab>
);

export default function RSVPForm() {
  const [state, handleSubmit] = useForm("movavqp");
  const [attendance, setAttendance] = useState("");
  const { t } = useTranslation();

  if (state.succeeded) {
    return (
      <ConfirmationWrapper>
        <FaRegCheckCircle color="green" size={40} />
        <ConfirmationMessage>{t("RSVP.Confirmation")}</ConfirmationMessage>
      </ConfirmationWrapper>
    );
  }
  if (!state.succeeded && state.errors) {
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
    <Wrapper>
      <Header>
        <RSVPLanguageSelector />
        <Title to="/RSVP">R.S.V.P.</Title>
        <FinalDate>{t("RSVP.FinalDate")}</FinalDate>
      </Header>
      <FormContainer onSubmit={handleSubmit}>
        <fieldset id="fs-frm-inputs">
          <RadioGroup>
            <Legend>{t("RSVP.Attendence")}</Legend>
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
              />
            </Label>
            <ValidationError
              prefix="Attendance"
              field="attendance"
              errors={state.errors}
            />
          </RadioGroup>

          <Label htmlFor="full-name">{t("RSVP.Name")}</Label>
          <Input
            type="text"
            name="name"
            id="full-name"
            placeholder={t("RSVP.NamePlaceholder")}
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <InputEmailWrapper>
            <Label htmlFor="email-address">{t("RSVP.Email")}</Label>
            <Input
              type="email"
              name="email"
              id="email-address"
              placeholder="email@domain.com"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </InputEmailWrapper>

          <InputNumberWrapper>
            <InputNumberLabel htmlFor="num-guests">
              {t("RSVP.NumberGuests")}
            </InputNumberLabel>
            <SelectWrapper>
              <Select name="guests" id="num-guests" required>
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
            <ValidationError
              prefix="Guests"
              field="guests"
              errors={state.errors}
            />
          </InputNumberWrapper>

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
            <ValidationError
              prefix="Children"
              field="children"
              errors={state.errors}
            />
          </InputNumberWrapper>

          <Label htmlFor="dietary-restrictions">{t("RSVP.Restrictions")}</Label>
          <Textarea
            rows="4"
            name="dietary-restrictions"
            id="dietary-restrictions"
            placeholder={t("RSVP.RestrictionsPlaceholder")}
          />
          <ValidationError
            prefix="Dietary or Religious Restrictions"
            field="dietary-restrictions"
            errors={state.errors}
          />

          <Label htmlFor="address">{t("RSVP.Address")}</Label>
          <Textarea
            rows="4"
            name="address"
            id="address"
            placeholder={t("RSVP.AddressPlaceholder")}
            required
          />
          <ValidationError
            prefix="Address"
            field="address"
            errors={state.errors}
          />

          <InputMessageWrapper>
            <Label htmlFor="message">{t("RSVP.Message")}</Label>
            <Textarea
              rows="5"
              name="message"
              id="message"
              placeholder={t("RSVP.MessagePlaceholder")}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </InputMessageWrapper>
        </fieldset>
        <StyledAnchor></StyledAnchor>
        <StyledShell1></StyledShell1>
        <SubmitButton type="submit" disabled={state.submitting}>
          {t("RSVP.Submit")}
        </SubmitButton>
      </FormContainer>
    </Wrapper>
  );
}

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
    height: 800px;
    min-width: 400px;
    overflow-y: scroll;
    border: 1px solid var(--color-dark-sand);
    border-radius: 8px;
  }
`;

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
  color: var(--color-light-blue);
  font-size: 3rem;

  @media ${QUERIES.laptopAndUp} {
    font-size: 4rem;
  }
`;

const FinalDate = styled.p`
  text-align: center;
  color: var(--color-light-blue);
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 1rem 1rem;
  gap: 1rem;
`;

const Label = styled.label`
  position: relative;
  font-size: 1rem;
  font-weight: 500;
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

const InputRadio = styled.input`
  display: none;
`;

const RadioGroup = styled.fieldset`
  border: none;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  // different label styles to position the svg's without breaking the layout
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
  }
`;

const InputEmailWrapper = styled.div`
  margin-bottom: 2rem;
`;

const InputMessageWrapper = styled.div``;

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
  display: flex;
  justify-content: center;
  flex-basis: 150px;
  margin-bottom: 1rem;
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

const Legend = styled.legend`
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: var(--color-light-blue);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-lighter-blue);
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
  color: var(--color-lighter-blue);
  text-decoration: none;
  transition: color 0.4s ease-in-out;

  &:hover {
    color: var(--color-dark-blue);
  }
`;

const StyledAnchor = styled(Anchor)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 100px;
  height: 100px;
  color: var(--color-light-blue);

  @media ${QUERIES.bigTabletAndUp} {
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
  color: var(--color-light-blue);

  @media ${QUERIES.bigTabletAndUp} {
    width: 125px;
    height: 125px;
  }
`;

const StyledShrimp = styled(Shrimp)`
  margin-top: calc(-10rem / 16);
  margin-left: -12px;
  width: 80px;
  height: 80px;
  transform: rotate(-60deg);
  transition: fill 0.2s ease-in-out;

  @media ${QUERIES.bigTabletAndUp} {
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

  @media ${QUERIES.bigTabletAndUp} {
    width: 127px;
    height: 127px;
  }
`;
