import React, { memo } from "react";
import "./contact.css";
import img from "../../assets/images/contact__img.png";

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact__top">
          <div className="contact__left">
            <h2 className="contact__title">
              Have a question ? Let’s get in touch with us.
            </h2>
            <p className="contact__text">
              Fill up the Form and ou team will get back to within 24 hrs
            </p>
          </div>
          <div className="contact__right">
            <div className="contact__card">
              <h3 className="contact__h3">Location</h3>
              <p className="contact__card__text">
                DLF Cybercity, Bhubaneswar, India, &52050
              </p>
            </div>
            <div className="contact__card">
              <h3 className="contact__h3">Contact Us</h3>
              <p className="contact__card__text">
                020 7993 2905 <br /> hi@finsweet.com
              </p>
            </div>
          </div>
        </div>
        <div className="contact__bottom">
          <div className="contact__left">
            <input
              type="text"
              className="contact__input"
              placeholder="First Name"
            />
            <input
              type="text"
              className="contact__input"
              placeholder="Last Name"
            />
            <input
              type="text"
              className="contact__input"
              placeholder="Email address"
            />
            <textarea
              className="contact__textarea"
              placeholder="Type message"
            ></textarea>
            <button className="contact__btn">Submit</button>
          </div>
          <img src={img} alt="contact__img" className="contact__img" />
        </div>
      </div>
    </section>
  );
}

export default memo(Contact);
