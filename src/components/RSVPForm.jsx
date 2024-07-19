import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaRegCheckCircle } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuHeartCrack, LuHeart } from "react-icons/lu";
import styled from "styled-components";
import seaDoodle1 from "../media/Anchor.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { QUERIES } from "../constants.js";

const YesIcon = ({ selected }) => (
  <LuHeart
    fill={selected ? "var(--color-lighter-blue)" : "var(--color-light-sand)"}
    size={45}
  />
);

const NoIcon = ({ selected }) => (
  <LuHeartCrack
    fill={selected ? "var(--color-dark-blue)" : "var(--color-light-sand)"}
    size={47}
  />
);

export default function RSVPForm() {
  const [state, handleSubmit] = useForm("movavqp");
  const [attendance, setAttendance] = useState("");
  const { t } = useTranslation();

  if (state.succeeded) {
    return (
      <ConfirmationWrapper>
        <FaRegCheckCircle color="green" size={40} />
        <ConfirmationMessage>Thank you for your message!</ConfirmationMessage>
      </ConfirmationWrapper>
    );
  }
  if (!state.succeeded && state.errors) {
    return (
      <ErrorWrapper>
        <BiErrorCircle color="red" size={40} />
        <ErrorMessage>
          There was an error. Please try again, or write us a message at:{" "}
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
        <Img src={seaDoodle1} alt="sea doodle"></Img>
        <SubmitButton type="submit" disabled={state.submitting}>
          {t("RSVP.Submit")}
        </SubmitButton>
      </FormContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: var(--color-light-sand);
  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 8px;

  @media ${QUERIES.tabletAndUp} {
    width: 60%;
    height: 800px;
    min-width: 400px;
    overflow-y: scroll;
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
  color: var(--color-lighter-blue);
  font-size: 3rem;

  @media ${QUERIES.laptopAndUp} {
    font-size: 4rem;
  }
`;

const FinalDate = styled.p`
  text-align: center;
  color: var(--color-lighter-blue);
`;

const FormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 1rem 1rem;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: HSL(14, 30%, 88%);
`;

const InputRadio = styled.input`
  display: none;

  &:checked + svg {
    fill: var(--color-lighter-blue);
  }
`;

const RadioGroup = styled.fieldset`
  border: none;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  > label {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100px;
    max-width: 130px;
    gap: 0.5rem;
    cursor: pointer;
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
  background-color: HSL(14, 30%, 88%);
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
  background-color: HSL(14, 30%, 88%);

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
  background-color: var(--color-lighter-blue);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-light-blue);
  }
`;

const ConfirmationWrapper = styled.div`
  background-color: var(--color-lighter-sand);
  border: 1px solid var(--color-light-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 300px;
  height: 15dvh;
  margin: 30dvh auto;
  border-radius: 4px;
  /* height: 76.725vh; */
`;

const ErrorWrapper = styled(ConfirmationWrapper)`
  height: 20dvh;
  margin: 29dvh auto;
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

const Img = styled.img`
  color: var(--color-lighter-blue);
  width: 20%;
  position: absolute;
  bottom: 20px;
  right: 10px;
  z-index: -1;
`;
