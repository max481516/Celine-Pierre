import styled from "styled-components";
import FadeInSection from "./FadeInSection";

export default function ShuttleTimetable({ title, timetableInfo }) {
  return (
    <FadeInSection> 
      <Wrapper>
        <Title>{title}</Title>
        <TimetableInfo>{timetableInfo}</TimetableInfo>
      </Wrapper>
    </FadeInSection>
  );
}

const Wrapper = styled.div`
  padding: 1rem 0;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
 
`;

const TimetableInfo = styled.p`
  white-space: pre-line;
`;
