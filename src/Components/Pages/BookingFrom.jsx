import React, { useState } from 'react';
import "./BookingFrom.css"
export const BookingFrom = ({ quantity, trainClass }) => {
    const [formData, setFormData] = useState({
        trainName: '',
        quantityOfTicket: '',
        trainClass: 'First Class',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
      };
    return (
        <div className="form-container">
        <h2>Ticket Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="trainName">Train Name:</label>
            <input type="text" id="trainName" name="trainName" value={formData.trainName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="quantityOfTicket">Quantity of Ticket:</label>
            <input type="text" id="quantityOfTicket" name="quantityOfTicket" value={formData.quantityOfTicket} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="trainClass">Train Class:</label>
            <select id="trainClass" name="trainClass" value={formData.trainClass} onChange={handleChange}>
              <option value="First Class">First Class</option>
              <option value="Business Class">Business Class</option>
              <option value="Economy Class">Economy Class</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
  )
}
