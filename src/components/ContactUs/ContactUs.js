import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useAlert } from "react-alert";
import contact from "./contact.svg";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
  const alert = useAlert();
  const formEl = useRef(null);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        e.target,
        process.env.REACT_APP_USER_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert.show("Your message has been sent!");
          formEl.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h4 className={styles.subtitle}>Send Me A Message!</h4>
          <h1 className={styles.title}>
            Contact <span>Me!</span>
          </h1>
          <p className={styles.text}>
            You can send me an email to <span>dinatahoun992@gmail.com</span> or
            you can use this form to send me a message.
          </p>
          <form className={styles.form} onSubmit={sendEmail} ref={formEl}>
            <input type="hidden" name="contact_number" />
            <input type="text" name="user_name" required placeholder="Name" />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Email"
            />
            <textarea name="message" placeholder="Message" />
            <input type="submit" value="Send" className="button" />
          </form>
        </div>
        <img src={contact} className={styles.contactImg} />
      </div>
    </div>
  );
}
