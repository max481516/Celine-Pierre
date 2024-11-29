import styled from "styled-components";
import { IoMdClock } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { GiDress } from "react-icons/gi";
import { FaSquareParking } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { FONTS } from "../../constants";
import Separator from "../../media/Separator.svg?react";
import Border from "../../media/Border.svg?react";
import { useTranslation } from "react-i18next";

export default function Saturday() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <StyledBorder />
      <EventContainer>
        <Title>{t("Saturday.Ceremony.Title")}</Title>
        <ImageContainer>
          <picture>
            <source
              srcSet="
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1728917317/Church_wumwhm.png 1600w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1728917317/Church_wumwhm.png 1100w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1728917317/Church_wumwhm.png 770w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1728917317/Church_wumwhm.png 550w
    "
              sizes="
      (min-width: ${BREAKPOINTS.desktopMin}px) 1500px,
      (min-width: ${BREAKPOINTS.laptopMin}px) 1100px,
      (min-width: ${BREAKPOINTS.bigTabletMin}px) 770px,
      (min-width: ${BREAKPOINTS.tabletMin}px) 550px,
      100vw
    "
            />
            <StyledImage src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1728917317/Church_wumwhm.png" />
          </picture>
        </ImageContainer>
        <IconTextContainer>
          <StyledIcon as={IoMdClock} />
          <Text>{t("Saturday.Ceremony.When")}</Text>
        </IconTextContainer>
        <IconTextContainer>
          <StyledIcon as={FaLocationDot} />
          <Text>
            {t("Saturday.Ceremony.Where")}{" "}
            <LocationLink
              href="https://maps.app.goo.gl/ZzEvtzunptPVkwgx8"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Saturday.Ceremony.WhereLocation")}
            </LocationLink>
          </Text>
        </IconTextContainer>
        <IconTextContainer>
          <StyledIcon as={FaBus} busIcon={true} />
          <Text>
            {t("Saturday.Ceremony.Transport.Text")}
            <ItalicText>
              {t("Saturday.Ceremony.Transport.ItalicText")}
            </ItalicText>
          </Text>
        </IconTextContainer>
        <IconTextContainer>
          <StyledIcon as={FaSquareParking} />
          <Text>
            {t("Saturday.Ceremony.Parking")}
            <LocationLink
              href="https://maps.app.goo.gl/bHPeHd16QGeCpcy28"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Saturday.Ceremony.ParkingLocation1")}
            </LocationLink>{" "}
            et{" "}
            <LocationLink
              href="https://maps.app.goo.gl/eSWsyqby538J79Xt9"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Saturday.Ceremony.ParkingLocation2")}
            </LocationLink>
          </Text>
        </IconTextContainer>
        <DressCodeWrapper>
          <DressCodeTitle>
            {t("Saturday.Ceremony.DressCode.Title")}
          </DressCodeTitle>
          <DressCodeIconTextContainer>
            <StyledIcon as={GiDress} />
            <Text>{t("Saturday.Ceremony.DressCode.Girls")}</Text>
          </DressCodeIconTextContainer>
          <DressCodeIconTextContainer>
            <StyledIcon as={ImUserTie} />
            <Text>{t("Saturday.Ceremony.DressCode.Boys")} </Text>
          </DressCodeIconTextContainer>
        </DressCodeWrapper>
      </EventContainer>

      <StyledSeparator />

      <EventContainer>
        <Title>{t("Saturday.Celebration.Title")}</Title>
        <ImageContainer>
          <picture>
            <source
              srcSet="
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1600,f_auto,q_auto/v1728920960/Picture_1_jk2lfz.png 1600w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_1100,f_auto,q_auto/v1728920960/Picture_1_jk2lfz.png 1100w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_770,f_auto,q_auto/v1728920960/Picture_1_jk2lfz.png 770w,
      https://res.cloudinary.com/dqs3mkxnr/image/upload/w_550,f_auto,q_auto/v1728920960/Picture_1_jk2lfz.png 550w
    "
              sizes="
      (min-width: ${BREAKPOINTS.desktopMin}px) 1500px,
      (min-width: ${BREAKPOINTS.laptopMin}px) 1100px,
      (min-width: ${BREAKPOINTS.bigTabletMin}px) 770px,
      (min-width: ${BREAKPOINTS.tabletMin}px) 550px,
      100vw
    "
              type="image/webp"
            />
            <StyledImage
              src="https://res.cloudinary.com/dqs3mkxnr/image/upload/w_800/v1728920960/Picture_1_jk2lfz.png"
              loading="lazy"
            />
          </picture>
        </ImageContainer>
        <IconTextContainer>
          <StyledIcon as={IoMdClock} />
          <Text>{t("Saturday.Celebration.When")}</Text>
        </IconTextContainer>
        <IconTextContainer>
          <StyledIcon as={FaLocationDot} />
          <Text>
            {t("Saturday.Celebration.Where")}
            <LocationLink
              href="https://maps.app.goo.gl/iYbveaBtzhmqoj7t6"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Saturday.Celebration.WhereLocation")}
            </LocationLink>
          </Text>
        </IconTextContainer>
        <IconTextContainer>
          <StyledIcon as={FaBus} busIcon={true} />
          <Text>
            {t("Saturday.Celebration.Transport.Text")}
            <ItalicText>
              {t("Saturday.Celebration.Transport.ItalicText")}
            </ItalicText>
          </Text>
        </IconTextContainer>
        <IconTextContainer>
          <StyledIcon as={FaSquareParking} />
          <Text>{t("Saturday.Celebration.Parking")}</Text>
        </IconTextContainer>
        <DressCodeWrapper>
          <DressCodeTitle>
            {t("Saturday.Celebration.DressCode.Title")}
          </DressCodeTitle>
          <DressCodeIconTextContainer>
            <StyledIcon as={GiDress} />
            <Text>{t("Saturday.Celebration.DressCode.Girls")}</Text>
          </DressCodeIconTextContainer>
          <DressCodeIconTextContainer>
            <StyledIcon as={ImUserTie} />
            <Text>{t("Saturday.Celebration.DressCode.Boys")}</Text>
          </DressCodeIconTextContainer>
        </DressCodeWrapper>
      </EventContainer>
      <StyledBottomBorder />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 0 16px;
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  ${FONTS.titleFont};
  color: var(--color-primary-blue);
  padding: 0.5rem 0;
  text-align: center;
  text-transform: uppercase;
`;

const IconTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 8px 0;
  gap: 8px;
`;

const LocationLink = styled.a`
  color: var(--color-primary-blue);
  text-decoration: none;

  &:hover {
    color: var(--color-light-blue);
  }
`;

const ItalicText = styled.span`
  font-style: italic;
  font-size: 0.8rem;
`;

const DressCodeWrapper = styled.div`
  border: 1px solid var(--color-primary-blue);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: var(--color-light-sand);
  width: 90%;
  margin: 0.5rem auto 0;
`;

const DressCodeTitle = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  padding-top: 1rem;
`;

const DressCodeIconTextContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  padding: 16px;

  &:nth-child(2) {
    padding-bottom: 0;
  }
`;

const Text = styled.p``;

const ImageContainer = styled.div``;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

const StyledIcon = styled.div`
  margin-top: 2px;
  flex-shrink: 0;
  flex-grow: 0;
  width: ${(props) => (props.busIcon ? "18px" : "20px")};
  height: ${(props) => (props.busIcon ? "18px" : "20px")};
  color: var(--color-primary-blue);
`;

const StyledSeparator = styled(Separator)`
  width: 100%;
  color: var(--color-primary-blue);
  margin-bottom: 1rem;
`;

const StyledBorder = styled(Border)`
  padding-bottom: 1rem;
  color: var(--color-primary-blue);
`;

const StyledBottomBorder = styled(StyledBorder)`
  padding-bottom: 0;
  padding-top: 1rem;
  transform: rotate(180deg);
`;
