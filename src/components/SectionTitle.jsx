import styled from "styled-components";
import { FONTS } from "../constants";
import FadeInSection from "./FadeInSection";
export default function SectionTitle({ title }) {
  return (
    <FadeInSection>
      <Title>{title}</Title>
    </FadeInSection>
  );
}

const Title = styled.h2`
  ${FONTS.titleFont};
  text-decoration: underline;
  text-decoration-thickness: 2px;
  font-size: 1.9rem;
  color: var(--color-primary-blue);
  text-align: center;
`;
