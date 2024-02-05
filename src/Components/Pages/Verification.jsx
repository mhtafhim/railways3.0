import React, { useState } from 'react';
import './Verification.css';
import { Link } from 'react-router-dom';
export const Verification = () => {
    const [verificationCode, setVerificationCode] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      // Here you can add code to handle the submission of the verification code
      console.log('Verification code submitted:', verificationCode);
    };
    return (
    <div className="verification-code-form">
      <h2>Verification Code</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter verification code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <div ><Link to = '/Railway'> <button>Submit</button></Link>   </div>
      
      </form>
    </div>
  )
}
export default Verification;