import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavSearch,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileLink,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { useTheme } from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState();
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "black",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>D-ADemy</Span>
          </a>
        </NavLogo>
        <NavItems>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#playlist">PlayList</NavLink>
          <NavLink href="#team">Team</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavSearch>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="text"
                placeholder="Search Courses"
                style={{
                  padding: "12px",
                  marginRight: "10px",
                  marginLeft: "30px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
              <button
                style={{
                  padding: "8px 12px",
                  borderRadius: "4px",
                  background: "#007bff",
                  color: "white",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <FiSearch size={20} />
              </button>
              <button
                style={{
                  padding: "4px 6px",
                  borderRadius: "4px",
                  marginRight: "10px",
                  marginLeft: "10px",
                  background: "white",
                  color: "black",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <FaShoppingCart size={32} />
              </button>
            </div>
          </NavSearch>
          <ButtonContainer>
          </ButtonContainer>
          <NavLink to='login'>Login</NavLink>
          <NavLink href="#signup">Signup</NavLink>
        </NavItems>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#home"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Home
            </MobileLink>
            <MobileLink
              href="#playlist"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              PlayList
            </MobileLink>
            <MobileLink
              href="#team"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Team
            </MobileLink>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#login"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Login
            </MobileLink>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
