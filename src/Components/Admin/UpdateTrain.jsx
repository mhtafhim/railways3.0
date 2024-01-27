import React, { useState } from 'react'
import './UpdateTrain.css'
export const UpdateTrain = () => {
  const [formData, setFormData] = useState({
    trainId: '',
    startStation: '',
    destinationStation: '',
    arrivalTime: '',
    duration: '',
    destinationArrivalTime: ''
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
    <h2>Train Details</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="trainId">Train ID:</label>
        <input type="text" id="trainId" name="trainId" value={formData.trainId} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="startStation">Start Station:</label>
        <input type="text" id="startStation" name="startStation" value={formData.startStation} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="destinationStation">Destination Station:</label>
        <input type="text" id="destinationStation" name="destinationStation" value={formData.destinationStation} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="arrivalDepartureTimeTime">Departure Time:</label>
        <input type="text" id="DepartureTime" name="DepartureTime" value={formData.arrivalTime} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="duration">Duration:</label>
        <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="destinationArrivalTime">Destination Arrival Time:</label>
        <input type="text" id="destinationArrivalTime" name="destinationArrivalTime" value={formData.destinationArrivalTime} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}
export default UpdateTrain;