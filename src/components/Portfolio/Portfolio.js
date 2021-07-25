import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import { Link } from "react-router-dom";
import { MdKeyboardReturn } from "react-icons/md";
export default function Portfolio() {
  const [show, setShow] = useState(true);
  const [portfolio, setPortfolio] = useState(0);
  const [projects, setProjects] = useState([
    {
      img: "./imgs/1.png",
      skills: ["HTML", "CSS", "JS"],
      name: "Scout Exports",
      url: "https://scoutexport.com/",
      desc: "Created a website for Scout Exports, Scout is an export-focused startup that connects global customers with local manufacturers from Egypt.",
      contribution: ["100% convertion of Adobe XD to static web page"],
      resources: ["IDE (integrated development environment)"],
      date: "2019",
    },
    {
      img: "./imgs/2.png",
      contribution: [
        "100% PSD to React.js",
        "80% of the functionlity",
        "80% of fetching APIs",
      ],
      name: "Crepe & Waffle",
      url: "https://crepe-waffle.com/",
      skills: ["HTML", "CSS", "React.js"],
      date: "2019",
      resources: ["IDE (integrated development environment)", "JavaScript"],
      desc: "While working in apps square company , I was given the task to convert this website from PSD to react.js website and implementing it's functionlity",
    },
    {
      img: "./imgs/3.png",
      skills: ["ٌReact Hooks", "Redux", "Firebase", "building dashboard"],
      desc: "AdobeXD to React hooks and created dashboard using firebase",
      name: "Mediator",
      resources: [
        "IDE (integrated development environment)",
        "JavaScript",
        "Firebase",
      ],
      url: "https://med-iator.com/",
      date: "on going",
      contribution: [
        "100% Adobe XD to React.js hooks",
        "100% creating dashboard",
      ],
    },
    {
      img: "./imgs/4.png",
      skills: ["Bootstrap", "HTML", "JS", "JQuery", "CSS"],
      name: "Academic Waha",
      url: "https://demo.al-wac.com/",
      resources: ["IDE (integrated development environment)", "JavaScript"],
      desc: "While working in apps square company , I was given the task to convert the client's sketches into a HTML/CSS and adding functionlity using jQuery, Backend developer took this static website and converts it a fully functional PHP website",
      date: "on going project, however I don't work there anymore",
      contribution: ["80% creating HTML/CSS/JS web pages", "0% PHP"],
    },
    {
      img: "./imgs/5.png",
      skills: ["React.js", "Redux"],
      resources: ["IDE (integrated development environment)", "JavaScript"],
      date: "2019",
      name: "Uptraden",
      url: "https://www.uptraden.com/",
      desc: "A client with a dashboard template wants to convert thier vision to a front-end react.js website",
      contribution: [
        "100% customizing template",
        "100% of the functionlity",
        "100% of fetching APIs",
        "0% creating Node.js APIs",
      ],
    },
    {
      img: "./imgs/6.png",
      skills: ["UI design", "HTML", "CSS", "SASS", "Gulp"],
      name: "Startup",
      url: "https://dinatahoun92.github.io/startup/",
      date: "2019",
      desc: "UI design and converting it to s atatic website",
      resources: ["IDE (integrated development environment)", "JavaScript"],
      contribution: ["100% UI design", "100% creating static pages"],
    },
    {
      img: "./imgs/7.png",
      skills: ["UI design", "HTML", "CSS", "SASS"],
      desc: "UI design and converting it to s atatic website",
      name: "Agency",
      url: "https://dinatahoun92.github.io/Agency/",
      date: "2019",
      resources: ["IDE (integrated development environment)", "JavaScript"],
      contribution: ["100% UI design", "100% creating static pages"],
    },
  ]);
  return (
    <div className={styles.main}>
      <div>
        <span className={styles.icon}>
          <MdKeyboardReturn
            onClick={() => setShow(true)}
            style={!show ? { display: "flex" } : { display: "none" }}
          />
        </span>
        <h4
          className={styles.subtitle}
          style={show ? { display: "flex" } : { display: "none" }}
        >
          Take A Look At
        </h4>

        <h1 className={styles.title}>
          {show ? (
            <>
              My <span>Portfolio</span>
            </>
          ) : (
            projects[portfolio].name
          )}
        </h1>
      </div>
      <div
        className={styles.content}
        style={!show ? { display: "flex" } : { display: "none" }}
      >
        <div className={styles.left}>
          <h4 className={styles.sub}>Description:</h4>
          <p className={styles.text}>{projects[portfolio].desc}</p>
          <h4 className={styles.sub}>URL:</h4>
          <a
            className={styles.text}
            href={projects[portfolio].url}
            target="_blank"
          >
            {projects[portfolio].url}
          </a>
          <h4 className={styles.sub}>Skills:</h4>
          {projects[portfolio].skills.map((item, i) => (
            <span className={styles.skill} key={i}>
              {item}
            </span>
          ))}
          <h4 className={styles.sub}>Contribution:</h4>
          {projects[portfolio].contribution.map((item, i) => (
            <span className={styles.skill} key={"skill" + i}>
              {item}
            </span>
          ))}
          <h4 className={styles.sub}>Resources:</h4>
          {projects[portfolio].resources.map((item, i) => (
            <span className={styles.skill} key={"resource" + i}>
              {item}
            </span>
          ))}
          <h4 className={styles.sub}>Finish Date:</h4>
          <p className={styles.text}>{projects[portfolio].date}</p>
        </div>

        <div className={styles.right}>
          <div className={styles.imgContainer}>
            <div className={styles.imgWrap}>
              <img src={projects[portfolio].img} className={styles.img} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.images}
        style={show ? { display: "flex" } : { display: "none" }}
      >
        <div
          className={styles.imgContainer}
          onClick={() => {
            setShow(false);
            setPortfolio(0);
          }}
        >
          <div className={styles.imgWrap}>
            <img src={"./imgs/1.png"} className={styles.img} />
          </div>
        </div>
        <div
          className={styles.imgContainer}
          onClick={() => {
            setShow(false);
            setPortfolio(1);
          }}
        >
          <div className={styles.imgWrap}>
            <img src={"./imgs/2.png"} className={styles.img} />
          </div>
        </div>
        <div
          className={styles.imgContainer}
          onClick={() => {
            setShow(false);
            setPortfolio(2);
          }}
        >
          <div className={styles.imgWrap}>
            <img src={"./imgs/3.png"} className={styles.img} />
          </div>
        </div>

        <div
          className={styles.imgContainer}
          onClick={() => {
            setShow(false);
            setPortfolio(3);
          }}
        >
          <div className={styles.imgWrap}>
            <img src={"./imgs/4.png"} className={styles.img} />
          </div>
        </div>

        <div
          className={styles.imgContainer}
          onClick={() => {
            setShow(false);
            setPortfolio(4);
          }}
        >
          <div>
            <div className={styles.imgWrap}>
              <img src={"./imgs/5.png"} className={styles.img} />
            </div>
          </div>
        </div>

        <div
          className={styles.imgContainer}
          onClick={() => {
            setShow(false);
            setPortfolio(5);
          }}
        >
          <div className={styles.imgWrap}>
            <img src={"./imgs/6.png"} className={styles.img} />
          </div>
        </div>

        <div
          className={styles.imgContainer}
          onClick={() => {
            setShow(false);
            setPortfolio(6);
          }}
        >
          <div className={styles.imgWrap}>
            <img src={"./imgs/7.png"} className={styles.img} />
          </div>
        </div>
      </div>
    </div>
  );
}
