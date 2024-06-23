import React, { useState } from "react";
import { bgLogo, formImage } from "../../assets/images/images";
import "./style.scss";
import { toast } from "react-toastify";
import { parseError } from "../../utils";
import { contactUs } from "../../api/actions";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    accept: true,
  });

  const onChange = (label, value) => {
    setData({
      ...data,
      [label]: value,
    });
  };

  const resetFormDetails = () => {
    setData({
      ...data,
      name: "",
      email: "",
      message: "",
      accept: true,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    contactUs({ name: data.name, email: data.email, message: data.message })
      .then(() => {
        setLoading(false);
        toast.success("Sent Successfully");
        resetFormDetails();
      })
      .catch((error) => {
        setLoading(false);
        toast.error(parseError(error));
      });
  };

  return (
    <section className="contact-form">
      <div className="contact-content">
        <div className="text">
          <h3>
            Sign up <br />
            for regular updates on events and sessions
          </h3>
          <form onSubmit={onSubmit}>
            <div className="input">
              <input
                type="text"
                placeholder="Name"
                required
                value={data.name}
                onChange={(e) => onChange("name", e.currentTarget.value)}
              />
            </div>

            <div className="input">
              <input
                type="email"
                placeholder="Email"
                required
                value={data.email}
                onChange={(e) => onChange("email", e.currentTarget.value)}
              />
            </div>

            <div className="input">
              <textarea
                placeholder="Message"
                value={data.message}
                onChange={(e) => onChange("message", e.currentTarget.value)}
              />
            </div>

            <div className="checkbox">
              {/* <input
                type="checkbox"
                id="checkbox"
                checked={data.accept}
                onChange={(e) => onChange("accept", !data.accept)}
              />
              <label htmlFor="checkbox">
                I give my consent to the processing of personal data
              </label> */}
              <div className="send">
                <button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send"}
                </button>
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
