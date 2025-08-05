import React from "react";
import css from "./Contact.module.css";
import { Title } from "../Title/Title";
import massageIcon from "../../assets/msg-icon.png";
import mailIcon from "../../assets/mail-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import locationIcon from "../../assets/location-icon.png";

export const Contact = () => {
  return (
    <div className={css.contact}>
      <Title subtitle="Contact Us" title="Get in Touch" />
      <div className={css.contactContent}>
        <div className={css.column}>
          <h3 className={css.messageTitle}>
            Send us a message{" "}
            <img
              className={css.messageIcon}
              src={massageIcon}
              alt="massage icon"
            />
          </h3>
          <p className={css.messageText}>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul className={css.messageList}>
            <li className={css.messageListItem}>
              <img className={css.contactIcon} src={mailIcon} alt="mail" />
              <span className={css.contactSpan}>Contact@GreatStack.dev</span>
            </li>
            <li className={css.messageListItem}>
              <img className={css.contactIcon} src={phoneIcon} alt="phone" />
              <span className={css.contactSpan}>+1 123-456-7890</span>
            </li>
            <li className={css.messageListItem}>
              <img
                className={css.contactIcon}
                src={locationIcon}
                alt="location"
              />
              <span className={css.contactSpan}>
                77 Massachusetts Ave, Cambridge MA 02139, United States
              </span>
            </li>
          </ul>
        </div>
        <div className={css.column}>
          <form action="#">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />
            <label>Your Email</label>
            <input
              type="text"
              name="mail"
              placeholder="Enter your email"
              required
            />
            <label>Write your messages here</label>
            <textarea
              type="text"
              name="message"
              placeholder="Enter your message"
              required
            />
          </form>
        </div>
      </div>
    </div>
  );
};
