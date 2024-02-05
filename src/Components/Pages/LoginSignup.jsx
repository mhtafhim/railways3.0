import React, { useState } from "react";
import axios from "axios";
import "./LoginSignup.css";
import { Link } from 'react-router-dom';
import { USER_TYPES } from "./UserType";
export const LoginSignup = ({setUserType}) => {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    nid: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async () => {
    try {
      const { email, password } = formData;

      
      if (!validateEmail(email)) {
        setErrorMessage("Invalid email format.");
        return;
      }

      if (!validatePassword(password)) {
        setErrorMessage("Password should be at least 6 characters long.");
        return;
      }

     
      if (!email || !password) {
        setErrorMessage("Email and password are required.");
        return;
      }

      if (action === "SignUp") {
        
        const { name, phone, nid } = formData;
        if (!name || !phone || !nid) {
          setErrorMessage("Name, Phone, and NID are required for SignUp.");
          return;
        }

        // Call the registration API
        console.log("Form data:", formData);
        const response = await axios.post(
          "http://localhost:7075/api/Users",
          formData
        );
        console.log("Registration successful:", response.data);

        document.querySelectorAll(".inputs input").forEach((input) => {
            input.value = "";
          });

      } else {
        // Call the login API
        const response = await axios.post(
          "http://localhost:7075/api/Users/Login",
          formData
        );
        console.log("Login successful:", response.data);

       
        const token = response.data.token;

       
        localStorage.setItem("token", token);
        setUserType(USER_TYPES.NORMAL_USERS);
        document.querySelectorAll(".inputs input").forEach((input) => {
            input.value = "";
          });
        

      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const clearErrorMessage = () => {
    setErrorMessage("");
  };

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
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errorMessage && formData.name === "" && (
                <div className="error-message">
                  <p>Name is required.</p>
                </div>
              )}
            </div>
            <div className="input">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errorMessage && formData.phone === "" && (
                <div className="error-message">
                  <p>Phone Number is required.</p>
                </div>
              )}
            </div>
            <div className="input">
              <input
                type="text"
                name="nid"
                placeholder="NID Number"
                value={formData.nid}
                onChange={handleInputChange}
              />
              {errorMessage && formData.nid === "" && (
                <div className="error-message">
                  <p>NID Number is required.</p>
                </div>
              )}
            </div>
          </>
        )}

        <div className="input">
          <input
            type="email"
            name="email"
            placeholder="Email Id"
            value={formData.email}
            onChange={handleInputChange}
          />
         
          {errorMessage && !validateEmail(formData.email) && (
            <div className="error-message">
              <p>Invalid email format.</p>
            </div>
          )}
        </div>
        <div className="input">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        
          {errorMessage && !validatePassword(formData.password) && (
            <div className="error-message">
              <p>Password should be at least 6 characters long.</p>
            </div>
          )}
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
              clearErrorMessage();
              handleFormSubmit();
            }}
          >
            Sign Up
          </div>
          <div className={action === "SignUp" ? "submit gray" : "submit"}><Link to = '/Verification'> <button>LogIn</button></Link>   
            
          
           
            
          </div>
        </div>

     
      </div>
    </div>
  );
};
