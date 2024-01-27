import React from 'react'
import './Booking.css';
export const Booking = () => {
  return (
    <div className="booking-container">
    <div className="search-box">
      <label htmlFor="from">From:</label>
      <input type="text" id="from" />

      <label htmlFor="to">To:</label>
      <input type="text" id="to" />

      <label htmlFor="date">Date of Journey:</label>
      <input type="date" id="date" />

      <label htmlFor="class">Choose Class:</label>
      <select id="class">
        <option value="economy">Economy</option>
        <option value="business">Business</option>
        <option value="first-class">First Class</option>
      </select>

      <button type="button" id="search-button">Search</button>
    </div>
  </div>
  )
}
