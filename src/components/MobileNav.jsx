import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function MobileNav({ isOpen, toggle }) {
  return (
    <MobileNavContainer $isOpen={isOpen}>
      <CloseButton onClick={toggle}>
        <AiOutlineClose />
      </CloseButton>
      <MobileNavMenu>
        <MobileNavItem to="/" onClick={toggle}>
          Bienvenue
        </MobileNavItem>

        <MobileDropdown name="Événements">
          <MobileDropdownItem to="/Friday" onClick={toggle}>
            Vendredi
          </MobileDropdownItem>
          <MobileDropdownItem to="/Saturday" onClick={toggle}>
            Samedi
          </MobileDropdownItem>
          <MobileDropdownItem to="/Sunday" onClick={toggle}>
            Dimanche
          </MobileDropdownItem>
        </MobileDropdown>

        <MobileDropdown name="Infos">
          <MobileDropdownItem to="/Accomodations" onClick={toggle}>
            Hébergement
          </MobileDropdownItem>
          <MobileDropdownItem to="/Transports" onClick={toggle}>
            Transports
          </MobileDropdownItem>
          <MobileDropdownItem to="/RnB" onClick={toggle}>
            Restaurants & Bars
          </MobileDropdownItem>
          <MobileDropdownItem to="/Beauty" onClick={toggle}>
            Beauté
          </MobileDropdownItem>
          <MobileDropdownItem to="/Beaches" onClick={toggle}>
            Plages
          </MobileDropdownItem>
          <MobileDropdownItem to="/Activities" onClick={toggle}>
            Activités
          </MobileDropdownItem>
          <MobileDropdownItem to="/Sitters" onClick={toggle}>
            Baby-sitters
          </MobileDropdownItem>
        </MobileDropdown>

        <MobileNavItem to="/List" onClick={toggle}>
          Liste de Mariage
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

/* Mobile Dropdown Component */
const MobileDropdown = ({ name, children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <MobileDropdownContainer>
      <MobileDropdownHeader onClick={toggleDropdown}>
        {name}
      </MobileDropdownHeader>
      <MobileDropdownContent $isDropdownOpen={isDropdownOpen}>
        {children}
      </MobileDropdownContent>
    </MobileDropdownContainer>
  );
};

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
    color: var(--color-blue);
  }
`;

const MobileDropdownContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const MobileDropdownHeader = styled.div`
  color: #fff;
  font-size: 1.5rem;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    color: var(--color-blue);
  }
`;

const MobileDropdownContent = styled.div`
  max-height: ${(props) => (props.$isDropdownOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  opacity: ${(props) => (props.$isDropdownOpen ? "1" : "0")};
  background-color: var(--color-blue);
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
