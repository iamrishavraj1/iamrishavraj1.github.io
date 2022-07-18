import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
const Navbar = () => {
  const [theme, setTheme] = useState(getStorageTheme());
  const changeTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <div className="container-fluid shadow-sm">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid ">
                <NavLink className="navbar-brand" to="/">
                  <span>Rishav Raj</span>
                </NavLink>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon top-bar"></span>
                  <span className="toggler-icon middle-bar"></span>
                  <span className="toggler-icon bottom-bar"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menuActive"
                        className="nav-link"
                        aria-current="page"
                        exact
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menuActive"
                        className="nav-link"
                        aria-current="page"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menuActive"
                        className="nav-link"
                        aria-current="page"
                        to="/exprience"
                      >
                        Exprience
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menuActive"
                        className="nav-link"
                        aria-current="page"
                        to="/project"
                      >
                        Project
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menuActive"
                        className="nav-link"
                        aria-current="page"
                        to="/blog"
                      >
                        Blog
                      </NavLink>
                    </li>
                    <button
                      className="btn btn-block mx-1"
                      onClick={changeTheme}
                    >
                      {theme === "dark-theme" ? (
                        <BsSun color="#fff" />
                      ) : (
                        <BsMoon />
                      )}
                    </button>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
