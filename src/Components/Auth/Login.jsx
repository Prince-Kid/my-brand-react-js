import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  const navigate = useNavigate();

  const CheckLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = {
        email,
        password,
      };
      await axios
        .post("https://my-brand-back-end-ts.onrender.com/auth/login", data)
        .then((res) => {
          if (res.status === 200) {
            const { token } = res.data;
            console.log(token);
            localStorage.setItem("jwt", token);

            setLoading(false);
            setSuccess(true);
            setEmail("");
            setPassword("");
          } else {
            setLoading(false);
            setFailed(true);
            setEmail("");
            setPassword("");
          }
        })
        .catch((error) => {
          setLoading(false);
          setFailed(true);

          console.log("Errooooor", error);
        });
    } catch (error) {
      console.log("Oooooos There Is An Error", error);
    }
  };
  const dismissFailed = () => {
    setFailed(false);
    setEmail("");
    setPassword("");
  };
  const dismissSuccess = () => {
    setSuccess(false);
    setEmail("");
    setPassword("");
    navigate("/admin");
  };

  return (
    <>
      <header class="header" id="header">
        <NavLink class="logo" to={"/"}>
          <h3 style={{ color: "#fff" }}>Prince</h3>
        </NavLink>
        <nav class="navbar"></nav>
      </header>
      <section id="signup">
        <div class="signup-board">
          <form action="" id="form" onSubmit={(e) => CheckLogin(e)}>
            <h2>Log In</h2>

            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
            />

            <br />
            <br />

            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="password"
              name="password"
              type="password"
              placeholder="Enter Password"
            />

            <br />

            <h5>Forgot Your Password ?</h5>
            {loading ? (
              <div class="dot-spinner">
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
              </div>
            ) : null}

            <button class="signup-btn" type="submit" id="open-popup-btn">
              Log In
            </button>

            <h5 class="signup-now">
              Create an account
              <a style={{ color: "darkcyan" }} href="./signup.html">
                Sign Up Now
              </a>
            </h5>
          </form>
        </div>
      </section>
      {success ? (
        <div class="popUp-card center">
          <div class="popUp-icon">
            <i class="fa fa-check"></i>
          </div>
          <div class="poptitle">
            <h2>Success !!</h2>
          </div>
          <div class="description">
            <h4>Login Successfully !!!!</h4>
          </div>
          <div class="dismiss-btn" style={{ marginLeft: " 75px" }}>
            <button id="dismiss-btn" onClick={dismissSuccess}>
              Dismiss
            </button>
          </div>
        </div>
      ) : null}
      {failed ? (
        <div class="popUp-card1 center">
          <div class="popUp-icon1">
            <i
              class="fa-solid fa-circle-exclamation"
              style={{ color: "#dd1d1d" }}
            ></i>
          </div>
          <div class="poptitle">
            <h2>Failed To Log In !!</h2>
          </div>
          <div class="description">
            <h4>Invalid Email Or Password</h4>
          </div>
          <div class="dismiss-btn" style={{ marginLeft: "75px" }}>
            <button id="dismiss-btn1" onClick={dismissFailed}>
              Dismiss
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Login;
