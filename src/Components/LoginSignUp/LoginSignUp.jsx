import React, { useState } from "react";
import "./LoginSignUp.css";
import log from "../../images/log.svg";
import register from "../../images/register.svg";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import Input from "../Input/Input";

const SignUp = () => {
  const [classList, setClassList] = useState("container");

  const signUpButton = () => {
    setClassList("container sign-up-mode");
  };

  const signInButton = () => {
    setClassList("container");
  };

  return (
    <div className={classList}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i>
                <FaUser />
              </i>
              <Input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i>
                <FaLock />
              </i>
              <Input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i>
                <FaUser />
              </i>
              <Input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i>
                <FaEnvelope />
              </i>
              <Input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i>
                <FaLock />
              </i>
              <Input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Please create an account to continue</p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={signUpButton}
            >
              Sign up
            </button>
          </div>
          <img src={log} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>SignIn here and pick up where you left</p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={signInButton}
            >
              Sign in
            </button>
          </div>
          <img src={register} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
