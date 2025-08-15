import styled from "styled-components";
import { FONTS, QUERIES, STYLES } from "../constants";
import { useTranslation } from "react-i18next";
import Border from "../media/Border.svg?react";
import { useState } from "react";
import ConfMessage from "../components/ConfirmationMessage";
import ErrMessage from "../components/ErrorMessage";

export default function List() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const { t } = useTranslation();

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
    return <ConfMessage />;
  }

  if (formError) {
    return <ErrMessage />;
  }

  return (
    <Wrapper>
      <CardContainer>
        <StyledBorder />

        <Title>{t("Contacts.Title")}</Title>

        {/* — existing contact list — */}
        
        <ContactsContent>
          <ContactItem>
            <ContactLabel>Céline Mare&nbsp;:</ContactLabel>
            <br />
            <ContactLink href="tel:+33659218728">+33 6 59 21 87 28</ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLabel>Pierre Allirot&nbsp;:</ContactLabel>
            <br />
            <ContactLink href="tel:+33781643402">+33 7 81 64 34 02</ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLabel>{t("Contacts.Mail")}&nbsp;:</ContactLabel>
            <br />
            <ContactLink href="mailto:celine.pierre2025@gmail.com">
              celine.pierre2025@gmail.com
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLabel>{t("Contacts.Address")}&nbsp;:</ContactLabel>
            <br />
            105 rue Caulaincourt,
            <br /> 75018 Paris
          </ContactItem>
        </ContactsContent>

        <FormWrapper>
        <FormTitle>{t("Contacts.Form.Title")}</FormTitle>
        <Form
          action="https://formspree.io/f/xzzgkggr"
          method="POST"
          onSubmit={handleFormSubmit}
        >
          <Label htmlFor="name">{t("Contacts.Form.Name")}</Label>
          <Input
            id="name"
            name="name"
            placeholder={t("Contacts.Form.NamePlaceholder")}
            required
          />

          <Label htmlFor="email">Email :</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email@domain.com"
            required
          />

          <Label htmlFor="message">{t("Contacts.Form.Message")}</Label>
          <Textarea
            id="message"
            name="message"
            rows={3}
            placeholder={t("Contacts.Form.MessagePlaceholder")}
            required
          />

          <SubmitButton type="submit">{t("Contacts.Form.Submit")}</SubmitButton>
        </Form>
        </FormWrapper>

        <StyledBottomBorder />
      </CardContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${STYLES.pageWrapper} 
`;

const CardContainer = styled.div`
  ${STYLES.frameContainer}
`;

const StyledBorder = styled(Border)`
  color: var(--color-primary-blue);
  margin-bottom: 1rem;
`;

const StyledBottomBorder = styled(StyledBorder)`
  transform: rotate(180deg);
  margin-top: 1rem;
`;

const Title = styled.h2`
  ${FONTS.titleFont};
  font-size: 2rem;
  color: var(--color-primary-blue);
  text-align: center;
  @media ${QUERIES.tabletAndUp} {
    font-size: 2.5rem;
  }

  @media ${QUERIES.laptopAndUp} {
    font-size: 3rem;
  }
`;

const ContactsContent = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;

  @media ${QUERIES.laptopAndUp} {
    font-size: 1.1rem;
  }
`;

const ContactItem = styled.p`
  margin: 0.5rem 0;
`;

const ContactLabel = styled.span`
  font-weight: bold;
`;

const ContactLink = styled.a`
  color: var(--color-primary-blue);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

/* — form — */

const FormWrapper = styled.div`
  ${STYLES.dresscodeWrapper}
  width: 100%;
  padding: 0 1rem;
  margin-bottom: 2rem;
  
`;

const FormTitle = styled.h3`
  color: var(--color-primary-blue);
  font-style: italic;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  white-space: pre-line;

  margin-top: 2rem;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 0.25rem;
  padding: 2rem 0;

  @media ${QUERIES.tabletAndUp} {
    padding: 2rem;
  }
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid var(--color-dark-sand);
  border-radius: 4px;
  background-color: var(--color-dark-sand);
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid var(--color-dark-sand);
  border-radius: 4px;
  background-color: var(--color-dark-sand);
  resize: vertical;
`;

const SubmitButton = styled.button`
  align-self: center;
  padding: 0.6rem 1.5rem;
  background-color: var(--color-primary-blue);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.25s;

  &:hover {
    background-color: var(--color-light-blue);
  }
`;
