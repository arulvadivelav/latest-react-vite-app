import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/components/Header.css";
import logo from "../assets/logo/new-logo.png";
import { FaTimes } from "react-icons/fa";


const Header = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
    setIsMenuOpen(false);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsSidebarOpen(false);
    navigate("/");
  };

  return (
    <>
      <header className="header">
        <div className="container header-container">

          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="Logo" className="logo-img" />
            <span className="logo-text">VN</span>
          </div>

          {/* Main Navigation */}
          <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>

            <ul className="nav-links">
              <li>
                <Link to="/" onClick={closeMobileMenu}>Home</Link>
              </li>

              <li>
                <Link to="/about-us" onClick={closeMobileMenu}>About Us</Link>
              </li>

              <li>
                <Link to="/contact-us" onClick={closeMobileMenu}>Contact</Link>
              </li>

              {isLoggedIn && (
                <li className="profile-link">
                  <Link to="/profiles" onClick={closeMobileMenu}>
                    Profiles
                  </Link>
                </li>
              )}
            </ul>

            <div className="nav-buttons">
              {!isLoggedIn ? (
                <>
                  <button
                    className="btn-outline"
                    onClick={() => {
                      navigate("/login");
                      closeMobileMenu();
                    }}
                  >
                    Login
                  </button>

                  <button
                    className="btn-primary"
                    onClick={() => {
                      navigate("/register");
                      closeMobileMenu();
                    }}
                  >
                    Register
                  </button>
                </>
              ) : (
                <button
                  className="menu-toggle-btn"
                  onClick={openSidebar}
                >
                  ☰
                </button>
              )}
            </div>

          </nav>

          {/* Mobile Hamburger */}
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Right Sidebar */}
      <div className={`settings-sidebar ${isSidebarOpen ? "open" : ""}`}>

        <div className="sidebar-top">
          <h3>Settings</h3>
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>

        <div className="sidebar-user">
          <div className="avatar">U</div>
          <h4>Welcome User</h4>
          <p>user@email.com</p>
        </div>

        <ul className="sidebar-menu">
          <li onClick={() => navigate("/dashboard")}>Dashboard</li>
          <li onClick={() => navigate("/update-profile/1")}>Edit Profile</li>
          {/* <li onClick={() => navigate("/notifications")}>Notifications</li> */}
          {/* <li onClick={() => navigate("/settings")}>Settings</li> */}
          <li onClick={() => navigate("/privacy-policy")}>Privacy</li>
          <li
            className="logout-item"
            onClick={handleLogout}
          >
            Logout
          </li>
        </ul>

      </div>
    </>
  );
};

export default Header;