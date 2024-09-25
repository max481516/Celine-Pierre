import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { QUERIES } from "../constants";
import LanguageSelector from "./LanguageSelector";
import MobileNav from "./MobileNav"; // Import the new MobileNav component

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open/close mobile nav
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Nav id="nav">
        <Bars onClick={toggle} />
        <NavMenu>
          <NavItem to="/Planing">Planning</NavItem>

          {/* Dropdown for Infos */}
          <Dropdown>
            <NavItem to="/Infos">Infos</NavItem>
            <DropdownContent>
              <DropdownItem to="/page1">Info Page 1</DropdownItem>
              <DropdownItem to="/page2">Info Page 2</DropdownItem>
              <DropdownItem to="/page3">Info Page 3</DropdownItem>
              <DropdownItem to="/page4">Info Page 4</DropdownItem>
              <DropdownItem to="/page5">Info Page 5</DropdownItem>
              <DropdownItem to="/page6">Info Page 6</DropdownItem>
              <DropdownItem to="/page7">Info Page 7</DropdownItem>
            </DropdownContent>
          </Dropdown>

          <NavItem to="/List">Liste de Marriage</NavItem>
          <NavItem to="/Book">Livre d'or</NavItem>
          <NavItem to="/Album">Album photos</NavItem>
          <NavItem to="/RSVP">RSVP</NavItem>
          <DesktopLanguageSelector />
        </NavMenu>

        {/* MobileNav component, controlled by isOpen state */}
        <MobileNav isOpen={isOpen} toggle={toggle} />
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  background: var(--color-brown);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 10;
`;

const Bars = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 50%;
  cursor: pointer;
  font-size: 1rem;

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

/* Dropdown styles */
const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover > div {
    display: block;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #ddd;
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
