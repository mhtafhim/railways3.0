import React, { useState } from "react";
import axios from "axios";
import "./LoginSignup.css";
import { USER_TYPES } from "./UserType";
import { useNavigate,Link } from "react-router-dom";
export const LoginSignup = ({ setUserType }) => {
  const [action, setAction] = useState("Login");
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <>
            <div className="input">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="input">
              <input type="text" name="phone" placeholder="Phone Number" />
            </div>
            <div className="input">
              <input type="text" name="nid" placeholder="NID Number" />
            </div>
          </>
        )}

        <div className="input">
          <input type="email" name="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <input type="password" name="password" placeholder="Password" />
        </div>

        {action === "SignUp" ? null : (
          <div className="forgot-password">
            Lost Password?<span>Click Here!</span>
          </div>
        )}

        <div className="Submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("SignUp");
             //
             if (action === "SignUp")
             {
              console.log("kaj krtese ");
              navigate("/Verification");
             } 
              // setOpenModal(true);
            }}
          >
            Sign Up
          </div>
          <div className="Submit-container">
            <div
              className={action === "SignUp" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Login");
                if (action === "Login") navigate("/Railway");
              }}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
