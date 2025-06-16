import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { QUERIES } from "../constants";
import { useTranslation } from "react-i18next";
import { useStore } from "../stores/store.js";
import i18n from "../i18n/i18n.js";
import LanguageSelector from "./LanguageSelector.jsx";

export default function MobileNav() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const isOpen = useStore((state) => state.isMobileNavOpen);
  const closeMobileNav = useStore((state) => state.closeMobileNav);
  const location = useLocation();

  const { t } = useTranslation();

  const handleDropdownToggle = (name) => {
    // Toggle dropdown: if it's open, close it; otherwise, open it
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    // Close the nav when the route changes
    closeMobileNav();
  }, [location.pathname, closeMobileNav]);

  const handleNavItemClick = () => {
    closeMobileNav();
  };

  return (
    <MobileNavContainer $isOpen={isOpen}>
      <CloseButton onClick={closeMobileNav}>
        <AiOutlineClose />
      </CloseButton>
      <MobileLanguageSelector type="mobile" lang={i18n.language} />
      <MobileNavMenu>
        <MobileNavItem to="/" onClick={handleNavItemClick}>
          {t("Nav.Home")}
        </MobileNavItem>

        <MobileDropdown
          name={t("Nav.Events")}
          isOpen={openDropdown === t("Nav.Events")}
          toggleDropdown={() => handleDropdownToggle(t("Nav.Events"))}
        >
          <MobileDropdownItem to="/Friday" onClick={handleNavItemClick}>
            {t("Nav.Friday")}
          </MobileDropdownItem>
          <MobileDropdownItem to="/Saturday" onClick={handleNavItemClick}>
            {t("Nav.Saturday")}
          </MobileDropdownItem>
          <MobileDropdownItem to="/Sunday" onClick={handleNavItemClick}>
            {t("Nav.Sunday")}
          </MobileDropdownItem>
        </MobileDropdown>

        <MobileDropdown
          name={t("Nav.Infos")}
          isOpen={openDropdown === "Infos"}
          toggleDropdown={() => handleDropdownToggle("Infos")}
        >
          <MobileDropdownItem to="/Accomodations" onClick={handleNavItemClick}>
            {t("Nav.Accommodations")}
          </MobileDropdownItem>
          <MobileDropdownItem to="/Transports" onClick={handleNavItemClick}>
            {t("Nav.Transports")}
          </MobileDropdownItem>
          <MobileDropdownItem to="/RnB" onClick={handleNavItemClick}>
            {t("Nav.R&B")}
          </MobileDropdownItem>
          <MobileDropdownItem to="/Beaches" onClick={handleNavItemClick}>
            {t("Nav.Beaches")}
          </MobileDropdownItem>
          <MobileDropdownItem to="/Services" onClick={handleNavItemClick}>
            {t("Nav.Services")}
          </MobileDropdownItem>
          <MobileDropdownItem to="/Activities" onClick={handleNavItemClick}>
            {t("Nav.Activities")}
          </MobileDropdownItem>
        </MobileDropdown>

        <MobileNavItem to="/List" onClick={handleNavItemClick}>
          {t("Nav.List")}
        </MobileNavItem>
        <MobileNavItem to="/Album" onClick={handleNavItemClick}>
          {t("Nav.Album")}
        </MobileNavItem>

        <MobileNavItem to="/Contacts" onClick={handleNavItemClick}>
          {t("Nav.Contacts")}
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-light-sand);
  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 999;

  @media ${QUERIES.tabletAndUp} {
    width: 50%;
  }

  @media ${QUERIES.largeTabletAndUp} {
    display: none;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 2rem;
  cursor: pointer;
  color: var(--color-darker-sand);
`;

const MobileLanguageSelector = styled(LanguageSelector)`
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
`;

const MobileNavMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 80vh;
  padding-bottom: 20px;
  overflow-y: auto;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 200px;
  }
`;

const MobileNavItem = styled(NavLink)`
  color: var(--color-darker-sand);
  font-size: 1.5rem;
  padding: 1rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--color-light-blue);
    transition: all 0.2s ease-in-out;
  }

  &.active {
    color: var(--color-primary-blue);
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
  background-color: var(--color-grey-beige-secondary);
  width: 100%;
`;

const MobileDropdownItem = styled(NavLink)`
  color: var(--color-sandstone);
  padding: 12px 16px;
  display: block;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--color-primary-blue);
    transition: all 0.2s ease-in-out;
  }

  &.active {
    color: var(--color-primary-blue);
  }
`;
