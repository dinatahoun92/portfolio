import React from "react";
import styles from "./Navbar.module.css";
import { BiHomeAlt, BiBriefcase } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <ul>
        <NavLink to="/">
          <li className={styles.dt}>DT</li>
        </NavLink>
        <NavLink
          to="/"
          activeStyle={{
            color: "#1ff5dd",
          }}
          exact
        >
          <li>
            <span>Home</span>
            <BiHomeAlt className={styles.icons} />
          </li>
        </NavLink>
        <NavLink
          to="/about"
          activeStyle={{
            color: "#1ff5dd",
          }}
          exact
        >
          <li>
            <span>About</span>
            <AiOutlineUser className={styles.icons} />
          </li>
        </NavLink>
        <NavLink
          to="/portfolio"
          activeStyle={{
            color: "#1ff5dd",
          }}
          exact
        >
          <li>
            <span>Portfolio</span>
            <BiBriefcase className={styles.icons} />
          </li>
        </NavLink>
        <NavLink
          to="/contact"
          activeStyle={{
            color: "#1ff5dd",
          }}
          exact
        >
          <li>
            <span>Contact</span>
            <FiMail className={styles.icons} />
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}
