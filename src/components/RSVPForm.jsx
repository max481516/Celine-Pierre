import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuHeartCrack, LuHeart } from "react-icons/lu";
import styled from "styled-components";

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
  const [state, handleSubmit] = useForm("movavqpz");
  const [attendance, setAttendance] = useState("");

  if (state.succeeded) {
    return (
      <Wrapper>
        <FaRegCheckCircle color="green" size={50} />
        <ConfirmationMessage>Thank you for your message!</ConfirmationMessage>
      </Wrapper>
    );
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>R.S.V.P.</Title>
      <fieldset id="fs-frm-inputs">
        <RadioGroup>
          <Legend>Will you attend?</Legend>
          <Label>
            <YesIcon selected={attendance === "Yes"} />
            Yes
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
            No
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

        <Label htmlFor="full-name">Full Name</Label>
        <Input
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <InputEmailWrapper>
          <Label htmlFor="email-address">Email Address</Label>
          <Input
            type="email"
            name="email"
            id="email-address"
            placeholder="email@domain.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </InputEmailWrapper>

        <InputNumberWrapper>
          <InputNumberLabel htmlFor="num-guests">
            Number of Guests
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
            Number of Children
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

        <Label htmlFor="dietary-restrictions">
          Dietary or Religious Restrictions
        </Label>
        <Textarea
          rows="4"
          name="dietary-restrictions"
          id="dietary-restrictions"
          placeholder="Specify any dietary restrictions here"
        />
        <ValidationError
          prefix="Dietary or Religious Restrictions"
          field="dietary-restrictions"
          errors={state.errors}
        />

        <Label htmlFor="address">Physical Address</Label>
        <Textarea
          rows="4"
          name="address"
          id="address"
          placeholder="Enter your physical address"
          required
        />
        <ValidationError
          prefix="Address"
          field="address"
          errors={state.errors}
        />

        <InputMessageWrapper>
          <Label htmlFor="message">Message</Label>
          <Textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Any Questions?"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </InputMessageWrapper>
      </fieldset>
      <SubmitButton type="submit" disabled={state.submitting}>
        Submit
      </SubmitButton>
    </FormContainer>
  );
}

const Title = styled.h2`
  font-family: "Playwrite CU", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: var(--color-lighter-blue);
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
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
  top: 50%;
  transform: translateY(-50%);
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 15dvh;
  gap: 1rem;
`;

const ConfirmationMessage = styled.p`
  font-size: 1.5rem;
`;
