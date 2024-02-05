import React, { useState } from 'react';
import axios from "axios";
import './AdminLogin.css'
import { Link } from 'react-router-dom';
export const AdminLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
      const [errorMessage, setErrorMessage] = useState('');
    
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
    
      const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
          const { email, password } = formData;
    
          if (!validateEmail(email)) {
            setErrorMessage('Invalid email format.');
            return;
          }
    
          if (!validatePassword(password)) {
            setErrorMessage('Password should be at least 6 characters long.');
            return;
          }
    
          if (!email || !password) {
            setErrorMessage('Email and password are required.');
            return;
          }
    
          // Call the login API
          const response = await axios.post('http://localhost:7075/api/Users/Login', formData);
          console.log('Login successful:', response.data);
    
          const token = response.data.token;
          localStorage.setItem('token', token);
    
          setFormData({
            email: '',
            password: '',
          });
    
          setErrorMessage('');
        } catch (error) {
          console.error('Error:', error.message);
        }
      };
    return (
        <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          {errorMessage && (
            <div className="error-message">
              <p>{errorMessage}</p>
            </div>
          )}
          
          <div ><Link to = '/DashBoard'> <button>Login</button></Link>   </div>
 
        </div>
      </div>
  )
}
