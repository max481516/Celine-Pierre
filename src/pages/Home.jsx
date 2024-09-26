import styled from "styled-components";
import beachBackground from "../media/plage-corse-2.webp";

export default function Home() {
  return (
    <>
      <Wrapper></Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 100dvh;
  background-image: url(${beachBackground});
  background-size: cover;
  background-position: 52% 50%;
`;
