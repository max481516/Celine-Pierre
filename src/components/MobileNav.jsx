import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MobileNav({ isOpen, toggle }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown for Infos in mobile view
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <MobileNavContainer isOpen={isOpen}>
      <CloseButton onClick={toggle}>×</CloseButton>
      <MobileNavMenu>
        <MobileNavItem to="/Planing" onClick={toggle}>
          Planning
        </MobileNavItem>

        {/* Dropdown for Infos in Mobile Nav */}
        <MobileDropdown>
          <MobileNavItem onClick={toggleDropdown}>Infos</MobileNavItem>
          {isDropdownOpen && (
            <MobileDropdownContent>
              <MobileDropdownItem to="/page1" onClick={toggle}>
                Info Page 1
              </MobileDropdownItem>
              <MobileDropdownItem to="/page2" onClick={toggle}>
                Info Page 2
              </MobileDropdownItem>
              <MobileDropdownItem to="/page3" onClick={toggle}>
                Info Page 3
              </MobileDropdownItem>
              <MobileDropdownItem to="/page4" onClick={toggle}>
                Info Page 4
              </MobileDropdownItem>
              <MobileDropdownItem to="/page5" onClick={toggle}>
                Info Page 5
              </MobileDropdownItem>
              <MobileDropdownItem to="/page6" onClick={toggle}>
                Info Page 6
              </MobileDropdownItem>
              <MobileDropdownItem to="/page7" onClick={toggle}>
                Info Page 7
              </MobileDropdownItem>
            </MobileDropdownContent>
          )}
        </MobileDropdown>

        <MobileNavItem to="/List" onClick={toggle}>
          Liste de Marriage
        </MobileNavItem>
        <MobileNavItem to="/Book" onClick={toggle}>
          Livre d'or
        </MobileNavItem>
        <MobileNavItem to="/Album" onClick={toggle}>
          Album photos
        </MobileNavItem>
        <MobileNavItem to="/RSVP" onClick={toggle}>
          RSVP
        </MobileNavItem>
      </MobileNavMenu>
    </MobileNavContainer>
  );
}

const MobileNavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-brown);
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 999;
  transition: transform 0.3s ease-in-out;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 2rem;
  cursor: pointer;
  color: white;
`;

const MobileNavMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const MobileNavItem = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  padding: 1rem;
  text-decoration: none;

  &:hover {
    color: var(--color-green);
  }
`;

/* Mobile dropdown styles */
const MobileDropdown = styled.div`
  width: 100%;
  text-align: center;
`;

const MobileDropdownContent = styled.div`
  display: block;
  background-color: #333;
  width: 100%;
`;

const MobileDropdownItem = styled(Link)`
  color: white;
  padding: 12px 16px;
  display: block;
  text-decoration: none;

  &:hover {
    background-color: #444;
  }
`;
