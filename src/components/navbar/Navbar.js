import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import Button from "../utils/button/Button";

export const Navbar = () => {
  const navigate = useNavigate();

  const contactUsBtnHandler = () => {
    navigate("/contact-us");
  };

  return (
    <div className="navbar">
      <div>GoDivzz Tech</div>
      <div className="right-menu">
        <ul className="menu-items">
          <li>
            <NavLink
              to="home"
              className={({ isActive, isPending }) =>
                isActive ? "active-link" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              activeStyle={{ color: "red" }}
              className={({ isActive, isPending }) =>
                isActive ? "active-link" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="services"
              className={({ isActive, isPending }) =>
                isActive ? "active-link" : ""
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="industries"
              className={({ isActive, isPending }) =>
                isActive ? "active-link" : ""
              }
            >
              Industries
            </NavLink>
          </li>
          <li>
            <NavLink
              to="blog"
              className={({ isActive, isPending }) =>
                isActive ? "active-link" : ""
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <Button
              type="primary"
              text="Contact"
              onClick={contactUsBtnHandler}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
