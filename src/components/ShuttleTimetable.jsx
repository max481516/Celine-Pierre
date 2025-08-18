import styled from "styled-components";

export default function ShuttleTimetable({ title, timetableInfo }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <TimetableInfo>{timetableInfo}</TimetableInfo>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem 0;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
`;

const TimetableInfo = styled.p`
  white-space: pre-line;
`;
