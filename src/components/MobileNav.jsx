import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { FONTS } from "../constants";

export default function MobileNav({ isOpen, toggle }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (name) => {
    // Toggle dropdown: if it's open, close it; otherwise, open it
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const handleNavItemClick = () => {
    setOpenDropdown(null); // Close any open dropdown when clicking on any main item
    toggle(); // Also toggle the mobile nav
  };

  return (
    <MobileNavContainer $isOpen={isOpen}>
      <CloseButton onClick={toggle}>
        <AiOutlineClose />
      </CloseButton>
      <MobileNavMenu>
        <MobileNavItem to="/" onClick={handleNavItemClick}>
          Bienvenue
        </MobileNavItem>

        <MobileDropdown
          name="Événements"
          isOpen={openDropdown === "Événements"}
          toggleDropdown={() => handleDropdownToggle("Événements")}
        >
          <MobileDropdownItem to="/Friday" onClick={handleNavItemClick}>
            Vendredi
          </MobileDropdownItem>
          <MobileDropdownItem to="/Saturday" onClick={handleNavItemClick}>
            Samedi
          </MobileDropdownItem>
          <MobileDropdownItem to="/Sunday" onClick={handleNavItemClick}>
            Dimanche
          </MobileDropdownItem>
        </MobileDropdown>

        <MobileDropdown
          name="Infos"
          isOpen={openDropdown === "Infos"}
          toggleDropdown={() => handleDropdownToggle("Infos")}
        >
          <MobileDropdownItem to="/Accomodations" onClick={handleNavItemClick}>
            Hébergement
          </MobileDropdownItem>
          <MobileDropdownItem to="/Transports" onClick={handleNavItemClick}>
            Transports
          </MobileDropdownItem>
          <MobileDropdownItem to="/RnB" onClick={handleNavItemClick}>
            Restaurants & Bars
          </MobileDropdownItem>
          <MobileDropdownItem to="/Beauty" onClick={handleNavItemClick}>
            Beauté
          </MobileDropdownItem>
          <MobileDropdownItem to="/Beaches" onClick={handleNavItemClick}>
            Plages
          </MobileDropdownItem>
          <MobileDropdownItem to="/Activities" onClick={handleNavItemClick}>
            Activités
          </MobileDropdownItem>
          <MobileDropdownItem to="/Sitters" onClick={handleNavItemClick}>
            Baby-sitters
          </MobileDropdownItem>
        </MobileDropdown>

        <MobileNavItem to="/List" onClick={handleNavItemClick}>
          Liste de Mariage
        </MobileNavItem>
        <MobileNavItem to="/Album" onClick={handleNavItemClick}>
          Album photos
        </MobileNavItem>
        <MobileNavItem to="/RSVP" onClick={handleNavItemClick}>
          RSVP
        </MobileNavItem>
        <MobileNavItem to="/Contacts" onClick={handleNavItemClick}>
          Contacts
        </MobileNavItem>
      </MobileNavMenu>
    </MobileNavContainer>
  );
}

/* Mobile Dropdown Component */
const MobileDropdown = ({ name, children, isOpen, toggleDropdown }) => {
  return (
    <MobileDropdownContainer>
      <MobileNavItem as="div" onClick={toggleDropdown}>
        {name}
      </MobileNavItem>
      <MobileDropdownContent $isDropdownOpen={isOpen}>
        {children}
      </MobileDropdownContent>
    </MobileDropdownContainer>
  );
};

// Styled Components
const MobileNavContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-light-sand);
  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 999;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 2rem;
  cursor: pointer;
  color: var(--color-darker-sand);
`;

const MobileNavMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const MobileNavItem = styled(Link)`
  ${FONTS.titleFont};
  color: var(--color-primary-blue);
  font-size: 1.5rem;
  padding: 1rem;
  text-decoration: none;

  &:hover {
    color: var(--color-light-blue);
  }
`;

const MobileDropdownContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const MobileDropdownContent = styled.div`
  max-height: ${(props) => (props.$isDropdownOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out;
  opacity: ${(props) => (props.$isDropdownOpen ? "1" : "0")};
  background-color: var(--color-primary-blue);
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
