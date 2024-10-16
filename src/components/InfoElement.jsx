import styled from "styled-components";

export default function InfoElement({
  name,
  picture,
  description,
  location,
  locationLink,
}) {
  return (
    <Element>
      <Title>{name}</Title>
      <Picture>{picture}</Picture>
      <Description>
        {description}
        <LocationLink
          href={locationLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {location}
        </LocationLink>
      </Description>
    </Element>
  );
}

const Element = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2``;

const Picture = styled.picture``;

const Description = styled.p``;

const LocationLink = styled.a``;
