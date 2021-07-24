import React from "react";
import TextLoop from "react-text-loop";
import img from "./3.PNG";
import styles from "./About.module.css";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className={styles.main}>
      <div className={styles.side}>
        <h4 className={styles.subtitle}>About Me</h4>

        <h1 className={styles.title}>
          I'm a{" "}
          <TextLoop interval={2000} fade={true}>
            <span>Front-end developer</span>
            <span>Freelancer</span>
          </TextLoop>
        </h1>

        <p className={styles.about}>
          My name is<span> Dina Tahoun</span>, and I’m a front-end developer
          based in Egypt. I currently work as a freelance front-end developer.
          Also, I work as a mentor and reviewer for UX design Udacity
          Nanodegree, and Intermediate JavaScript Udacity Nanodegree. As Well as
          being a tutor for front-end web development professional track for FWD
          scholarship partnered with Udacity and sponsored by The Egyptian
          Ministry of Communications and Information Technology (MCIT).I have
          100% success score on Upwork. My passion for web development starts
          when I was a graphic designer and I have some tasks of creating a
          webdesign. I liked it so much that I didn't want it to stop there, I
          wanted to know how to build a website from start to finish.
        </p>
        <div className={styles.skills}>
          <h3>My skills:</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>React js</li>
            <li>Redux</li>
            <li>SASS</li>
            <li>GIT</li>
            <li>Adobe photoshop</li>
            <li>Figma</li>
          </ul>
        </div>
        <a
          href="https://docs.google.com/document/d/1KpjakfyOvnDyGRAjFx8gJRSPxkRZhlZvIC9tlDV8I7Y/edit?usp=sharing"
          className="button"
          target="_blank"
        >
          Reseme
        </a>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.imgWrap}>
          <img src={img} className={styles.img} />
        </div>
      </div>
    </div>
  );
}
