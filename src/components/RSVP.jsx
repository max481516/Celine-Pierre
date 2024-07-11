import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaRegCheckCircle } from "react-icons/fa";
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

export default function RSVP() {
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
      <fieldset id="fs-frm-inputs">
        <RadioGroup>
          <Legend>Will you attend?</Legend>
          <Label htmlFor="yes" onClick={() => setAttendance("Yes")}>
            <YesIcon selected={attendance === "Yes"} />
            Yes
          </Label>
          <Label htmlFor="no" onClick={() => setAttendance("No")}>
            <NoIcon selected={attendance === "No"} />
            No
          </Label>
          <input type="hidden" name="attendance" value={attendance} required />
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

        <Label htmlFor="email-address">Email Address</Label>
        <Input
          type="email"
          name="email"
          id="email-address"
          placeholder="email@domain.com"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <InputMessageWrapper>
          <Label htmlFor="message">Message</Label>
          <Textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Your message here"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </InputMessageWrapper>
        <InputNumberWrapper>
          <InputNumberLabel htmlFor="num-guests">
            Number of Guests
          </InputNumberLabel>
          <InputNumber
            list="guests-options"
            name="guests"
            id="num-guests"
            placeholder="1"
            required
          />
          <datalist id="guests-options">
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1} value={i + 1} />
            ))}
          </datalist>
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
          <InputNumber
            list="children-options"
            name="children"
            id="num-children"
            placeholder="0"
            required
          />
          <datalist id="children-options">
            {Array.from({ length: 11 }, (_, i) => (
              <option key={i} value={i} />
            ))}
          </datalist>
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
          rows="3"
          name="dietary-restrictions"
          id="dietary-restrictions"
          placeholder="Specify any dietary or religious restrictions here"
        />
        <ValidationError
          prefix="Dietary or Religious Restrictions"
          field="dietary-restrictions"
          errors={state.errors}
        />

        <Label htmlFor="allergies">Allergies</Label>
        <Textarea
          rows="3"
          name="allergies"
          id="allergies"
          placeholder="Specify any allergies here"
        />
        <ValidationError
          prefix="Allergies"
          field="allergies"
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
      </fieldset>
      <SubmitButton type="submit" disabled={state.submitting}>
        Submit
      </SubmitButton>
    </FormContainer>
  );
}

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

const InputMessageWrapper = styled.div`
  margin-bottom: 2rem;
`;

const InputNumber = styled.input`
  width: 4rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: HSL(14, 30%, 88%);

  &::-webkit-calendar-picker-indicator {
    opacity: 1;
  }
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
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: HSL(14, 30%, 88%);

  &::placeholder {
    color: var(--color-lighter-blue);
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
  background-color: lightblue;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: blue;
  }

  &:focus-visible {
    outline: 2px solid yellow;
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
