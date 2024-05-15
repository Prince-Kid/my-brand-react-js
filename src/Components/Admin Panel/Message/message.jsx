import React, { useEffect, useState } from "react";
import "./message.css";
import AdminNav from "../nav-bar/adminNav";
const Message = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://my-brand-back-end-ts.onrender.com/msg/feedback")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setFeedback(data);
      })
      .catch((error) => {
        console.log("There was an Error", error);
      });
  }, []);

  return (
    <>
      <AdminNav />
      <section id="feedback">
        <h2>Feedback</h2>
        <div class="feedback-container">
          {loading ? (
            <div id="main-blog-container">
              <div className="no-blog">
                <div class="loader">
                  <div class="wrapper">
                    <div class="circle"></div>
                    <div class="line-1"></div>
                    <div class="line-2"></div>
                    <div class="line-3"></div>
                    <div class="line-4"></div>
                  </div>
                </div>
                <div class="loader">
                  <div class="wrapper">
                    <div class="circle"></div>
                    <div class="line-1"></div>
                    <div class="line-2"></div>
                    <div class="line-3"></div>
                    <div class="line-4"></div>
                  </div>
                </div>

                <div class="loader">
                  <div class="wrapper">
                    <div class="circle"></div>
                    <div class="line-1"></div>
                    <div class="line-2"></div>
                    <div class="line-3"></div>
                    <div class="line-4"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            feedback.map((msg) => (
              <div class="msg-container" key={msg._id}>
                <div class="sender-details">
                  <h5 class="sender-names">{msg.names}</h5>
                </div>
                <h5 class="sender-emai">{msg.email}</h5>
                <p class="msg-message">{msg.message}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Message;
