import RSVPForm from "../components/RSVPForm";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function RSVP() {
  return (
    <>
      <Wrapper>
        <Title to="/RSVP">R.S.V.P.</Title>
        <RSVPForm />
        <HomeLink to="/">Back to Home Page</HomeLink>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div``;

const Title = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  font-family: "Playwrite CU", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: var(--color-lighter-blue);
  font-size: 3rem;
  padding: 2rem 0 0;
`;

const HomeLink = styled(Link)`
  display: flex;
  justify-content: center;
  font-family: "Playwrite CU", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: var(--color-lighter-blue);
  font-size: 1.5rem;
  padding: 1rem 0 2rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transition: all 0.4s ease-in-out;
    color: var(--color-dark-blue);
  }
`;
