import styled from "styled-components";
import FadeInSection from "./FadeInSection";

export default function InfoElement({
  name,
  picture,
  description,
  location,
  locationLink,
}) {
  return (
    <FadeInSection>
      <Element>
        <Name>{name}</Name>
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
        <PictureContainer>{picture}</PictureContainer>
      </Element>
    </FadeInSection>
  );
}

const Element = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

const Name = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`;

const PictureContainer = styled.div`
  padding: 0.5rem 0;
`;

const Description = styled.p``;

const LocationLink = styled.a`
  color: var(--color-primary-blue);

  &:hover {
    color: var(--color-light-blue);
  }
`;
