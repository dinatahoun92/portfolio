import React from "react";
import styles from "./Footer.module.css";
import { SiUpwork } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a
            href="https://www.upwork.com/freelancers/~01ae8516c5acb49de1"
            target="_blank"
          >
            <SiUpwork className={styles.icons} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dinatahoun/" target="_blank">
            <FaLinkedinIn className={styles.icons} />
          </a>
        </li>

        <li>
          <a href="https://github.com/dinatahoun92" target="_blank">
            <FiGithub className={styles.icons} />
          </a>
        </li>
      </ul>
      <p>@2021 by Dina Tahoun</p>
    </footer>
  );
}
