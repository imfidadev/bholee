import React from "react";
import { bgLogo, formImage } from "../../assets/images/images";
import "./style.scss";

const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="contact-content">
        <div className="text">
          <h3>
            Sign up <br />
            for regular updates on events and sessions
          </h3>
          <form action="">
            <div className="input">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="input">
              <input type="text" placeholder="Phone Number" required />
            </div>
            <div className="checkbox">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                I give my consent to the processing of personal data
              </label>
              <div className="send">
                <button type="submit">Send</button>
              </div>
            </div>
          </form>
        </div>
        <div className="image">
          <img src={formImage} alt="form-img" />
        </div>
      </div>
      <div className="gallery-text">
        <div className="bg-logo">
          <img src={bgLogo} alt="bg-logo" />
        </div>
        <p>
          Beyond the physical postures, Mahrukh emphasizes the power of
          breathwork and meditation, helping her students find peace and balance
          amidst life's challenges. Her classes are sanctuaries where
          individuals can explore their inner world, release stress, and
          cultivate a deeper sense of gratitude and love for themselves and
          others.
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
