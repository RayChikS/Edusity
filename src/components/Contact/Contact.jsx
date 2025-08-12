import React from "react";
import css from "./Contact.module.css";
import { Title } from "../Title/Title";
import massageIcon from "../../assets/msg-icon.png";
import mailIcon from "../../assets/mail-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import locationIcon from "../../assets/location-icon.png";
import arrow from "../../assets/white-arrow.png";

export const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7c8eb027-092a-47f7-858c-148906719fd6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className={css.contact} id="contact">
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
          <form className={css.form} onSubmit={onSubmit}>
            <label className={css.lable}>Your Name</label>
            <input
              className={css.formInput}
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label className={css.lable}>Phone Number</label>
            <input
              className={css.formInput}
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />
            <label className={css.lable}>Your Email</label>
            <input
              className={css.formInput}
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <label className={css.lable}>Write your messages here</label>
            <textarea
              className={css.formTextarea}
              type="text"
              name="message"
              placeholder="Enter your message"
              rows="6"
              required
            />
            <button className={`btn ${css.darkBtn}`} type="submit">
              Submit now
              <img src={arrow} alt="arrow icon" />
            </button>
          </form>
          <p className={css.formStatus}>{result}</p>
        </div>
      </div>
    </div>
  );
};
