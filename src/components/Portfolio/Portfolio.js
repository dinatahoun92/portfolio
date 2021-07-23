import React from "react";
import styles from "./Portfolio.module.css";
import { Link } from "react-router-dom";
import img1 from "./1.PNG";
import img2 from "./2.PNG";
import img3 from "./3.PNG";
import img4 from "./4.PNG";
import img5 from "./5.PNG";
import img6 from "./6.PNG";
import img7 from "./7.PNG";
export default function Portfolio() {
  return (
    <div className={styles.main}>
      <h4 className={styles.subtitle}>Take A Look At</h4>

      <h1 className={styles.title}>
        My <span>Portfolio</span>
      </h1>
      <div className={styles.images}>
        <div className={styles.imgContainer}>
          <div className={styles.imgWrap}>
            <img src={img1} className={styles.img} />
          </div>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.imgWrap}>
            <img src={img2} className={styles.img} />
          </div>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.imgWrap}>
            <img src={img3} className={styles.img} />
          </div>
        </div>

        <div className={styles.imgContainer}>
          <div className={styles.imgWrap}>
            <img src={img4} className={styles.img} />
          </div>
        </div>

        <div className={styles.imgContainer}>
          <div>
            <div className={styles.imgWrap}>
              <img src={img5} className={styles.img} />
            </div>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <div className={styles.imgWrap}>
            <img src={img6} className={styles.img} />
          </div>
        </div>

        <div className={styles.imgContainer}>
          <div className={styles.imgWrap}>
            <img src={img7} className={styles.img} />
          </div>
        </div>
      </div>
    </div>
  );
}
