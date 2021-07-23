import React from "react";
import TextLoop from "react-text-loop";
import img from "./3.PNG";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.side}>
        <h4 className={styles.subtitle}>Hi There,</h4>

        <h1 className={styles.title}>
          I'm a{" "}
          <TextLoop interval={2000} fade={true}>
            <span>Front-end developer</span>
            <span>Freelancer</span>
          </TextLoop>
        </h1>

        <p className={styles.about}>
          My name is <span>Dina Tahoun</span> , and I’m a front end developer
          based in Egypt. I do enjoy building responsive, modern and clean
          looking web pages using technologies like React.js, Bootstrap 5, SCSS,
          JavaScript and many others.
        </p>

        <Link to="/portfolio" className="button">
          See Portfolio
        </Link>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.imgWrap}>
          <img src={img} className={styles.img} />
        </div>
      </div>
    </div>
  );
}
