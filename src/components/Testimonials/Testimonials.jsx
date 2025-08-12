import React, { useRef } from "react";
import css from "./Testimonials.module.css";
import { Title } from "../Title/Title";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";

export const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className={css.testimonialsContainer} id="testimonials">
      <Title subtitle="Testimonials" title="What Student Says" />
      <div className={css.testimonials}>
        <img
          className={css.backBtn}
          src={back_icon}
          alt="back button"
          onClick={slideBackward}
        />

        <img
          className={css.nextBtn}
          src={next_icon}
          alt="next button"
          onClick={slideForward}
        />
        <div className={css.slider}>
          <ul className={css.slideList} ref={slider}>
            <li className={css.slide}>
              <div className={css.slideContent}>
                <div className={css.slideHeader}>
                  <img className={css.slideImg} src={user1} alt="user" />
                  <div className={css.slideText}>
                    <h3>Emily Williams</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li className={css.slide}>
              <div className={css.slideContent}>
                <div className={css.slideHeader}>
                  <img className={css.slideImg} src={user2} alt="user" />
                  <div className={css.slideText}>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li className={css.slide}>
              <div className={css.slideContent}>
                <div className={css.slideHeader}>
                  <img className={css.slideImg} src={user3} alt="user" />
                  <div className={css.slideText}>
                    <h3>Emily Williams</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li className={css.slide}>
              <div className={css.slideContent}>
                <div className={css.slideHeader}>
                  <img className={css.slideImg} src={user4} alt="user" />
                  <div className={css.slideText}>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
