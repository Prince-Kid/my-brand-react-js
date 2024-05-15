import React, { useState } from "react";
import "./contact.css";
import toast from "react-hot-toast";
import axios from "axios";
const Contact = () => {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendFeedback = async (e) => {
    e.preventDefault();

    try {
      const data = {
        names,
        email,
        message,
      };

      await axios
        .post("https://my-brand-back-end-ts.onrender.com/msg/message", data)
        .then((respond) => {
          if (respond.status === 200) {
            toast.success("Message sent successfully");
            setEmail("");
            setMessage("");
            setNames("");
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {}
  };
  return (
    <section id="contactpage">
      <h1 class="contactPageTitle">
        Contact <span style={{ color: "darkcyan" }}>Me</span>
      </h1>
      <br />
      <span>Please Fill out the form below to discuss any work</span>

      <form onSubmit={(e) => sendFeedback(e)} class="contactForm">
        <div class="input-control">
          <input
            onChange={(e) => setNames(e.target.value)}
            value={names}
            type="text"
            id="names"
            class="name"
            placeholder="Your Name"
            name="names"
          />
          <div class="error"></div>
        </div>
        <div class="input-control">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            class="email"
            placeholder="Your Email"
            name="email"
          />
          <div class="error"></div>
        </div>
        <div class="input-control">
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            name="message"
            cols="30"
            rows="5"
            class="msg"
            placeholder="Your Message"
            id="teaxtArea"
          ></textarea>
          <div class="error"></div>
        </div>
        <button type="submit" class="submitBtn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
