import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";

import "./Header.css";

function Header() {
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="nav"
    >
      <Navbar.Brand className="nav-brand">My Favorite Books</Navbar.Brand>
      <NavItem className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        {isAuthenticated && (
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        )}
      </NavItem>

      {/* PLACEHOLDER: render a navigation link to the about page */}
      <Login />
      <Logout />
    </Navbar>
  );
}

export default Header;
