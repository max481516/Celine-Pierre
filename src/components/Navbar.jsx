import styled from "styled-components";
import { Link } from "react-router-dom";
import { QUERIES } from "../constants";
import LanguageSelector from "./LanguageSelector";
import MobileNav from "./MobileNav";
import useMobileNav from "../hooks/useMobileNav";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  const { isOpen, toggle } = useMobileNav();

  return (
    <>
      <Nav id="nav">
        <Bars onClick={toggle} />
        <NavMenu>
          <DesktopLanguageSelector />
          <NavItem to="/Planing">Planning</NavItem>
          <Dropdown>
            <NavItem to="/Infos">Infos</NavItem>
            <DropdownContent>
              <DropdownItem to="/page1">Hébergement</DropdownItem>
              <DropdownItem to="/page2">Transports</DropdownItem>
              <DropdownItem to="/page3">Restaurants/Bars</DropdownItem>
              <DropdownItem to="/page4">Beauté</DropdownItem>
              <DropdownItem to="/page5">Plages</DropdownItem>
              <DropdownItem to="/page6">Activités</DropdownItem>
              <DropdownItem to="/page7">Baby-sitters</DropdownItem>
            </DropdownContent>
          </Dropdown>
          <NavItem to="/List">Liste de Marriage</NavItem>
          <NavItem to="/Book">Livre d'or</NavItem>
          <NavItem to="/Album">Album photos</NavItem>
          <NavItem to="/RSVP">RSVP</NavItem>
        </NavMenu>

        <MobileNav isOpen={isOpen} toggle={toggle} />
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  background: var(--color-brown);
  height: 80px;
  display: flex;
  justify-content: space-between;
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
  color: #fff;

  @media ${QUERIES.largeTabletAndUp} {
    display: none;
  }
`;

const NavMenu = styled.div`
  display: none;

  @media ${QUERIES.largeTabletAndUp} {
    display: flex;
    align-items: center;
  }
`;

const NavItem = styled(Link)`
  color: #fff;
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

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover > div {
    max-height: 300px; /* Expand to the height of the content */
    opacity: 1; /* Optional fade-in effect */
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;

  /* Initially hidden */
  max-height: 0; /* Start with height 0 */
  opacity: 0; /* Optional fade-in effect */
  overflow: hidden; /* Hide content when collapsed */
  transition: max-height 0.3s ease, opacity 0.3s ease; /* Smooth transition */
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

const DesktopLanguageSelector = styled(LanguageSelector)`
  align-items: center;
  font-size: calc(12rem / 16);
  width: 60px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: var(--color-green);
  }

  &:focus {
    outline: none;
    color: var(--color-green);
  }
`;