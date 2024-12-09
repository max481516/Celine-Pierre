import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { QUERIES, FONTS } from "../constants";
import LanguageSelector from "./LanguageSelector";
import MobileNav from "./MobileNav";

import { FaBars } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useStore } from "../stores/store.js";

export default function Navbar() {
  const $isHomePage = useLocation().pathname === "/";
  const toggleMobileNav = useStore((state) => state.toggleMobileNav);

  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <HeaderSection>
        <Names>Celine & Pierre</Names>
        <Date>6-7 September 2025</Date>
        <DesktopLanguageSelector type="desktop" lang={i18n.language} />
      </HeaderSection>
      <Nav id="nav" $isHomePage={$isHomePage}>
        {/*         <MobileLanguageSelector type="mobile" lang={i18n.language} /> */}
        <Bars onClick={toggleMobileNav} $isHomePage={$isHomePage} />
        <NavMenu>
          {/* <LeftContainer></LeftContainer> */}
          <RightContainer>
            <NavItem to="/" $isHomePage={$isHomePage}>
              {t("Nav.Home")}
            </NavItem>
            <Dropdown name={t("Nav.Events")} $isHomePage={$isHomePage}>
              <DropdownItem to="/Friday">{t("Nav.Friday")}</DropdownItem>
              <DropdownItem to="/Saturday">{t("Nav.Saturday")}</DropdownItem>
              <DropdownItem to="/Sunday">{t("Nav.Sunday")}</DropdownItem>
            </Dropdown>
            <Dropdown name={t("Nav.Infos")} $isHomePage={$isHomePage}>
              <DropdownItem to="/Accomodations">
                {t("Nav.Accommodations")}
              </DropdownItem>
              <DropdownItem to="/Transports">
                {t("Nav.Transports")}
              </DropdownItem>
              <DropdownItem to="/RnB">{t("Nav.R&B")}</DropdownItem>
              <DropdownItem to="/Beaches">{t("Nav.Beaches")}</DropdownItem>
              <DropdownItem to="/Services">{t("Nav.Services")}</DropdownItem>
              <DropdownItem to="/Activities">
                {t("Nav.Activities")}
              </DropdownItem>
            </Dropdown>
            <NavItem to="/List" $isHomePage={$isHomePage}>
              {t("Nav.List")}
            </NavItem>
            <NavItem to="/Album" $isHomePage={$isHomePage}>
              {t("Nav.Album")}
            </NavItem>
            <NavItem to="/Contacts" $isHomePage={$isHomePage}>
              {t("Nav.Contacts")}
            </NavItem>
          </RightContainer>
        </NavMenu>

        <MobileNav />
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-grey-beige);
  width: 100%;
  z-index: 10;

  @media ${QUERIES.largeTabletAndUp} {
    flex-direction: column;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-grey-beige);
  padding: 8px;

  @media ${QUERIES.largeTabletAndUp} {
    padding-top: 8px;
  }
`;

const Names = styled.h2`
  ${FONTS.titleFont};
  color: var(--color-sandstone);
  margin: 0;
  text-transform: uppercase;

  @media ${QUERIES.largeTabletAndUp} {
    font-size: 2.5rem;
  }
`;

const Date = styled.p`
  ${FONTS.titleFont};
  color: var(--color-sandstone);
  margin-top: -8px;

  @media ${QUERIES.largeTabletAndUp} {
    font-size: 1.3rem;
  }
`;

const Nav = styled.nav`
  position: relative; // Keeps the navbar fixed to the top
  top: env(safe-area-inset-top, 0); // Takes the notch into account
  left: 0;
  right: 0;
  background: var(--color-grey-beige);
  height: 80px;
  display: flex;
  align-items: center;
  margin-left: auto;
  z-index: 10;
  padding: 0 20px;

  @media ${QUERIES.largeTabletAndUp} {
    margin-left: 0;
  }
`;

const Bars = styled(FaBars)`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.8rem;
  transform: translate(-100%, 75%);
  cursor: pointer;
  color: var(--color-sandstone);

  @media ${QUERIES.largeTabletAndUp} {
    display: none;
  }
`;

const NavMenu = styled.div`
  display: none;

  @media ${QUERIES.largeTabletAndUp} {
    display: flex;
    align-items: baseline;
    justify-content: center;
    width: 100%;
  }
`;

const DesktopLanguageSelector = styled(LanguageSelector)`
  > :first-child {
    ${({ lang }) =>
      lang === "en" &&
      `
      width: 62px;
    `}

    ${({ lang }) =>
      lang === "ru" &&
      `
      width: 72px;
    `}
  }

  @media ${QUERIES.laptopAndUp} {
    > :first-child {
      ${({ lang }) =>
        lang === "en" &&
        `
      width: 72px;
    `}

      ${({ lang }) =>
        lang === "ru" &&
        `
      width: 80px;
    `}
    }
  }
`;

/* const MobileLanguageSelector = styled(LanguageSelector)`
  > :first-child {
    ${({ lang }) =>
      lang === "en" &&
      `
      width: 60px;
    `}

    ${({ lang }) =>
      lang === "ru" &&
      `
      width: 68px;
    `}
  }
`; */

/* const LeftContainer = styled.div`
  display: flex;
  margin-right: auto;
`; */

const RightContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
`;

const NavItem = styled(NavLink)`
  color: var(--color-sandstone);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 50%;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;

  &:hover {
    color: var(--color-primary-blue);
    transition: all 0.2s ease-in-out;
  }

  &.active {
    color: var(--color-primary-blue);
  }
`;

/* Reusable Dropdown Component */
const Dropdown = ({ name, children }) => (
  <DropdownContainer>
    <NavItem as="div">{name}</NavItem>
    <DropdownContent>{children}</DropdownContent>
  </DropdownContainer>
);

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover > div {
    max-height: fit-content;
    opacity: 1;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  background-color: var(--color-lighter-sand);
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;

  /* Initially hidden */
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
`;

const DropdownItem = styled(NavLink)`
  color: var(--color-sandstone);
  padding: 12px 16px;
  text-decoration: none;
  text-align: center;
  display: block;

  &:hover {
    color: var(--color-primary-blue);
    background-color: var(--color-grey-beige);
    transition: all 0.2s ease-in-out;
  }

  &.active {
    color: var(--color-primary-blue);
  }
`;
