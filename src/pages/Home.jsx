import styled from "styled-components";
import { Link } from "react-router-dom";
import beachBackground from "../media/plage-corse-2.webp";

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
  height: 100dvh;
  background-image: url(${beachBackground});
  background-size: cover;
  background-position: 52% 50%;
`;

const RSVPLink = styled(Link)`
  cursor: pointer;
  color: var(--color-dark-blue);
`;
