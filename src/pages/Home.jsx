import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Wrapper>
        <RSVPLink to="/RSVP">Click Here for RSVP</RSVPLink>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background: var(--color-lighter-blue);
`;

const RSVPLink = styled(Link)`
  cursor: pointer;
  color: var(--color-dark-blue);
`;
