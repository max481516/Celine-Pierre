import RSVPForm from "../components/RSVPForm";
import styled from "styled-components";
import backgroundImage from "../media//backgroundRSVP.jpeg";

export default function RSVP() {
  return (
    <>
      <Wrapper>
        <RSVPForm />
        {/* <HomeLink to="/">Back to Home Page</HomeLink> */}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 100dvh; /* Ensure the background covers the entire viewport */
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* const HomeLink = styled(Link)`
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
`; */
