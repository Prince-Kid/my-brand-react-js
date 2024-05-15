import React, { useState } from "react";
import axios from "axios";
import "./subscribe.css";
import toast from "react-hot-toast";
const Subscribe = () => {
  const [email, setEmail] = useState("");
  const subscribeUs = async (e) => {
    e.preventDefault();
    try {
      const data = { email };
      await axios
        .post(
          "https://my-brand-back-end-ts.onrender.com/subscribe/subscribe",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            toast.success("Thanks For Subscribin To Our Blog !");
            setEmail("");
          } else {
            toast.error("This didn't work.");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {}
  };
  return (
    <section class="Newsletter">
      <div class="container flexSB">
        <div class="left">
          <h1>Newsletter - Stay tune and get the latest update</h1>
        </div>
        <div class="right">
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="subscribe"
              placeholder="Enter Email Here ...."
              className="input-sub"
            />
            <button onClick={(e) => subscribeUs(e)} class="sub">
              <i class="fa fa-paper-plane"></i> Subscribe
            </button>
          </div>

          {/* <div class="popUp-card2 center">
            <div class="popUp-icon">
              <i class="fa fa-check"></i>
            </div>
            <div class="poptitle">
              <h2>Subscribed </h2>
            </div>
            <div class="description">
              <h4>Thank you For Subscribing to my blog</h4>
            </div>
            <div class="dismiss-btn" style={{ marginLeft: "75px;" }}>
              <button id="dismiss-btn2">Dismiss</button>
            </div>
          </div> */}

          {/* <!------------------Script For Subscribe Us-->
        <script>

            function subscribeUs() {
                const emailInput = document.getElementById("subscribe");
                const email = emailInput.value;
        
                if (!email) {
                    alert("Please enter your email address.");
                    return;
                }
        
                fetch("https://my-brand-back-end-ts.onrender.com/subscribe/subscribe", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email : email})
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data === "Message Sent!") {
                      
      
                    alert("Thank You For Subscribing To Our Blog !!!!")
                   window.location.reload()
        
                        emailInput.value = ""; // Clear the input field after successful subscription
                    } else {
                        alert("Subscription faisled. Please try again later.");
                    }
                })
                .catch(error => {
                    console.error("Error", error);
                    alert("An error occurred. Please try again later.");
                });
            }
        </script>
         */}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
