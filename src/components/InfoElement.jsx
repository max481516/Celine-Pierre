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
      <Name>{name}</Name>
      <PictureContainer>{picture}</PictureContainer>
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

const Name = styled.h2``;

const PictureContainer = styled.div``;

const Description = styled.p``;

const LocationLink = styled.a``;
