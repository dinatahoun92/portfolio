import React from "react";
import styles from "./Navbar.module.css";
import { BiHomeAlt, BiBriefcase } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          Home <BiHomeAlt className={styles.icons} />
        </li>
        <li>
          About <AiOutlineUser className={styles.icons} />
        </li>
        <li>
          Portfolio <BiBriefcase className={styles.icons} />
        </li>
        <li>
          Contact <FiMail className={styles.icons} />
        </li>
      </ul>
    </nav>
  );
}
