import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { QUERIES, FONTS } from "../constants";
import LanguageSelector from "./LanguageSelector";
import MobileNav from "./MobileNav";
import useMobileNav from "../hooks/useMobileNav";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  const { isOpen, toggle } = useMobileNav();

  const $isHomePage = useLocation().pathname === "/";

  return (
    <>
      <Nav id="nav" $isHomePage={$isHomePage}>
        <LanguageSelector type="mobile" />
        <Bars onClick={toggle} $isHomePage={$isHomePage} />
        <NavMenu>
          <LeftContainer>
            <LanguageSelector type="desktop" />
          </LeftContainer>
          <RightContainer>
            <NavItem to="/" $isHomePage={$isHomePage}>
              Bienvenue
            </NavItem>
            <Dropdown name="Événements" $isHomePage={$isHomePage}>
              <DropdownItem to="/Friday">Vendredi</DropdownItem>
              <DropdownItem to="/Saturday">Samedi</DropdownItem>
              <DropdownItem to="/Sunday">Dimanche</DropdownItem>
            </Dropdown>
            <Dropdown name="Infos" $isHomePage={$isHomePage}>
              <DropdownItem to="/Accomodations">Hébergement</DropdownItem>
              <DropdownItem to="/Transports">Transports</DropdownItem>
              <DropdownItem to="/RnB">Restaurants & Bars</DropdownItem>
              <DropdownItem to="/Beauty">Beauté</DropdownItem>
              <DropdownItem to="/Beaches">Plages</DropdownItem>
              <DropdownItem to="/Activities">Activités</DropdownItem>
              <DropdownItem to="/Sitters">Baby-sitters</DropdownItem>
            </Dropdown>
            <NavItem to="/List" $isHomePage={$isHomePage}>
              Liste de Mariage
            </NavItem>
            <NavItem to="/Album" $isHomePage={$isHomePage}>
              Album photos
            </NavItem>
            <NavItem to="/RSVP" $isHomePage={$isHomePage}>
              RSVP
            </NavItem>
            <NavItem to="/Contacts" $isHomePage={$isHomePage}>
              Contacts
            </NavItem>
          </RightContainer>
        </NavMenu>

        <MobileNav isOpen={isOpen} toggle={toggle} />
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  position: relative; // Keeps the navbar fixed to the top
  top: env(safe-area-inset-top, 0); // Takes the notch into account
  left: 0;
  right: 0;
  background: ${({ $isHomePage }) =>
    $isHomePage ? "transparent" : "var(--color-element-sand)"};
  border-bottom: ${({ $isHomePage }) =>
    $isHomePage ? "none" : "1px solid var(--color-darker-sand);"};
  height: 80px;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 10;
  padding: 0 20px;
`;

const Bars = styled(FaBars)`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.8rem;
  transform: translate(-100%, 75%);
  cursor: pointer;
  color: ${({ $isHomePage }) =>
    $isHomePage ? "#fff" : "var(--color-darker-sand)"};

  @media ${QUERIES.largeTabletAndUp} {
    display: none;
  }
`;

const NavMenu = styled.div`
  display: none;

  @media ${QUERIES.largeTabletAndUp} {
    display: flex;
    align-items: baseline;
    width: 100%;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  margin-right: auto;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const NavItem = styled(Link)`
  ${FONTS.titleFont};
  color: ${({ $isHomePage }) =>
    $isHomePage ? "#fff" : "var(--color-darker-sand)"};
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 50%;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    color: var(--color-green);
    transition: all 0.2s ease-in-out;
  }

  &.active {
    color: var(--color-green);
  }

  @media ${QUERIES.laptopAndUp} {
    font-size: calc(20rem / 16);
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
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;

  /* Initially hidden */
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
`;

const DropdownItem = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #ddd;
    transition: all 0.2s ease-in-out;
  }
`;
