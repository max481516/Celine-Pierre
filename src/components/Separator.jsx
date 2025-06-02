import styled from "styled-components";
import FadeInSection from "./FadeInSection";
import Separator from "../media/Separator.svg?react";

export default function StyledSeparator() {
  return (
    <FadeInSection>
      <SSeparator />
    </FadeInSection>
  );
}

const SSeparator = styled(Separator)`
  color: var(--color-primary-blue);
`;
